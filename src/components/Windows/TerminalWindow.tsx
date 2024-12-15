import React, { useState, useRef, useEffect } from "react";
import Window from "../Window/Window";

interface TerminalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow?: (window: string) => void;
}

interface CommandHistory {
  command: string;
  output: string;
  path: string;
}

const FILESYSTEM: { [key: string]: any } = {
  Experience: {
    type: "directory",
    contents: ["Nokia_Networks_Internship", "Think41_SDE_1"]
  },
  Skills: {
    type: "directory",
    contents: [
      "Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind",
      "Backend: Node.js, Express, Python, Java",
      "Database: MongoDB, PostgreSQL, MySQL",
      "Tools: Git, Docker, AWS"
    ]
  },
  Education: {
    type: "directory",
    contents: ["KIIT_2024", "DPSRPK_2020"]
  },
};

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  isOpen,
  onClose,
  onOpenWindow,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [currentPath, setCurrentPath] = useState("~/portfolio");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleAutocomplete = () => {
    const args = inputValue.split(" ");
    const command = args[0];
    const partial = args[1] || "";

    if (command === "cd" || command === "ls") {
      const matches = Object.keys(FILESYSTEM).filter((name) =>
        name.toLowerCase().startsWith(partial.toLowerCase())
      );

      if (matches.length === 1) {
        setInputValue(`${command} ${matches[0]}`);
      }
    }
  };

  const handleClose = () => {
    setCommandHistory([]);
    onClose();
  };

  const handleCommand = (command: string) => {
    let output = "";
    const args = command.split(" ");
    const mainCommand = args[0].toLowerCase();
    const argument = args[1];
    let newPath = currentPath;

    switch (mainCommand) {
      case "help":
        output = `
Available commands:
  - help: Show this help message
  - clear: Clear the terminal
  - whoami: Display user information
  - ls: List directory contents
  - pwd: Print working directory
  - date: Show current date and time
  - cd [directory]: Change directory/open window
  - exit: Close the terminal window
        `;
        break;
      case "exit":
        handleClose();
        return;
      case "clear":
        setCommandHistory([]);
        return;
      case "whoami":
        output = "visitor@portfolio";
        break;
      case "ls":
        if (currentPath === "~/portfolio") {
          output = Object.entries(FILESYSTEM)
            .map(([name, info]) => `${name}${info.type === 'directory' ? '/' : ''}`)
            .join('\n');
        } else {
          const currentDir = currentPath.split('/').pop();
          if (currentDir && FILESYSTEM[currentDir]) {
            output = FILESYSTEM[currentDir].contents.join('\n');
          }
        }
        break;
      case "pwd":
        output = currentPath;
        break;
      case "date":
        output = new Date().toString();
        break;
      case "cd":
        if (!argument) {
          output = "Please specify a directory";
        } else if (argument === "..") {
          newPath = "~/portfolio";
          setCurrentPath(newPath);
        } else {
          const targetPath = argument.charAt(0).toUpperCase() + argument.slice(1);
          if (FILESYSTEM[targetPath]) {
            if (FILESYSTEM[targetPath].type === "directory") {
              newPath = `~/portfolio/${targetPath}`;
              setCurrentPath(newPath);
              output = `\n${FILESYSTEM[targetPath].contents.join('\n')}`;
            } else {
              output = `'${targetPath}' is not a directory`;
            }
          } else {
            output = `Directory not found: ${argument}`;
          }
        }
        break;
      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setCommandHistory((prev) => [...prev, { 
      command, 
      output: output.trim(),
      path: newPath 
    }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      handleAutocomplete();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleCommand(inputValue.trim());
      setInputValue("");
    }
  };

  // Auto-scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Focus input when window is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Window title="Terminal" isOpen={isOpen} onClose={handleClose}>
      <div
        className="flex flex-col h-full bg-[#1e1e1e] text-green-400 font-mono text-sm p-2 overflow-hidden"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="mb-2">
          Welcome to Portfolio Terminal v1.0.0 Type 'help' for available
          commands.
        </div>

        <div ref={terminalRef} className="flex-1 overflow-y-auto">
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex">
                <span className="text-blue-400">visitor@portfolio</span>
                <span className="text-gray-400">:</span>
                <span className="text-purple-400">{item.path}</span>
                <span className="text-gray-400">$ </span>
                <span className="ml-1">{item.command}</span>
              </div>
              <div className="whitespace-pre-wrap">{item.output}</div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex">
            <span className="text-blue-400">visitor@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-purple-400">{currentPath}</span>
            <span className="text-gray-400">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 ml-1 bg-transparent outline-none text-green-400"
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </Window>
  );
};

export default TerminalWindow;
