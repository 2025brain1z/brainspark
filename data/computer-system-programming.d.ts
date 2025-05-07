export const questions = [
  {
    question: "What is the primary purpose of the 'exec()' family of system calls in Unix-based systems?",
    options: [
      "To create a new thread",
      "To replace the current process image with a new one",
      "To allocate virtual memory",
      "To terminate a process"
    ],
    correctOption: "To replace the current process image with a new one",
    difficulty: "advanced"
  },
  {
    question: "In memory management, what does 'demand paging' refer to?",
    options: [
      "Paging all memory during program start",
      "Loading pages into memory only when they are accessed",
      "Demanding user input to access memory",
      "Prioritizing memory pages by importance"
    ],
    correctOption: "Loading pages into memory only when they are accessed",
    difficulty: "beginner"
  },
  {
    question: "Which scheduling algorithm minimizes average waiting time but may lead to starvation?",
    options: [
      "Priority Scheduling",
      "Shortest Job First (SJF)",
      "First Come First Serve (FCFS)",
      "Round Robin (RR)"
    ],
    correctOption: "Shortest Job First (SJF)",
    difficulty: "beginner"
  },
  {
    question: "What is the key difference between kernel threads and user threads?",
    options: [
      "User threads run in kernel mode",
      "Kernel threads are managed by the OS, user threads by user-level libraries",
      "Kernel threads can’t perform I/O operations",
      "User threads require hardware support"
    ],
    correctOption: "Kernel threads are managed by the OS, user threads by user-level libraries",
    difficulty: "beginner"
  },
  {
    question: "What mechanism is commonly used to handle deadlock in operating systems?",
    options: [
      "Virtual memory",
      "Round-robin scheduling",
      "Resource allocation graph",
      "Stack overflow"
    ],
    correctOption: "Resource allocation graph",
    difficulty: "beginner"
  },
  {
    question: "What is a compiler used for?",
    options: [
      "To convert source code to machine code",
      "To edit images",
      "To store data",
      "To compile documents"
    ],
    correctOption: "To convert source code to machine code",
    difficulty: "beginner"
  },
  {
    question: "Which programming language is commonly used for system programming?",
    options: [
      "HTML",
      "C",
      "CSS",
      "JavaScript"
    ],
    correctOption: "C",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of an operating system?",
    options: [
      "To edit videos",
      "To manage hardware and software resources",
      "To draw graphics",
      "To design websites"
    ],
    correctOption: "To manage hardware and software resources",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is an example of a system call?",
    options: [
      "scanf()",
      "printf()",
      "read()",
      "main()"
    ],
    correctOption: "read()",
    difficulty: "beginner"
  },
  {
    question: "What does the 'main' function represent in a C program?",
    options: [
      "A data type",
      "The starting point of execution",
      "An error message",
      "A comment"
    ],
    correctOption: "The starting point of execution",
    difficulty: "beginner"
  },
  {
    question: "What is the role of a linker in system programming?",
    options: [
      "To manage memory",
      "To combine object files into a single executable",
      "To edit source code",
      "To format text documents"
    ],
    correctOption: "To combine object files into a single executable",
    difficulty: "beginner"
  },
  {
    question: "Which register typically holds the return address of a function call?",
    options: [
      "Base register",
      "Stack pointer",
      "Link register",
      "Accumulator"
    ],
    correctOption: "Link register",
    difficulty: "intermediate"
  },
  {
    question: "What is the main advantage of using assembly language in system programming?",
    options: [
      "Easier syntax",
      "Direct hardware control",
      "Better portability",
      "Cross-platform support"
    ],
    correctOption: "Direct hardware control",
    difficulty: "intermediate"
  },
  {
    question: "Which system programming concept is used to switch between user mode and kernel mode?",
    options: [
      "System calls",
      "Compiling",
      "Pointers",
      "Recursion"
    ],
    correctOption: "System calls",
    difficulty: "intermediate"
  },
  {
    question: "What does the 'fork()' system call do in Unix-based systems?",
    options: [
      "Terminates a program",
      "Creates a new process",
      "Allocates memory",
      "Opens a file"
    ],
    correctOption: "Creates a new process",
    difficulty: "intermediate"
  },
  {
    question: "What is the primary function of an operating system kernel?",
    options: [
      "Running user applications",
      "Providing a graphical user interface",
      "Managing hardware resources",
      "Compiling source code"
    ],
    correctOption: "Managing hardware resources",
    difficulty: "intermediate"
  },
  {
    question: "Which memory allocation technique can lead to external fragmentation?",
    options: [
      "Virtual memory",
      "Paging",
      "Swapping",
      "Segmentation"
    ],
    correctOption: "Segmentation",
    difficulty: "advanced"
  },
  {
    question: "What does the acronym 'API' stand for in the context of system programming?",
    options: [
      "Advanced Peripheral Interconnect",
      "Asynchronous Process Interrupt",
      "Automated Program Installation",
      "Application Programming Interface"
    ],
    correctOption: "Application Programming Interface",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a system call used for creating a new process in Unix-like systems?",
    options: [
      "createProcess()",
      "spawn()",
      "fork()",
      "exec()"
    ],
    correctOption: "fork()",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of a linker in the compilation process?",
    options: [
      "To optimize the executable code",
      "To load the executable into memory",
      "To combine object files into an executable file",
      "To translate source code to assembly code"
    ],
    correctOption: "To combine object files into an executable file",
    difficulty: "beginner"
  },
  {
    question: "Which scheduling algorithm is known for its simplicity and fairness but can lead to the convoy effect?",
    options: [
      "Round Robin",
      "Priority Scheduling",
      "Shortest Job First (SJF)",
      "First-Come, First-Served (FCFS)"
    ],
    correctOption: "First-Come, First-Served (FCFS)",
    difficulty: "beginner"
  },
  {
    question: "What is a semaphore used for in concurrent programming?",
    options: [
      "Process synchronization",
      "Network communication",
      "Memory allocation",
      "File management"
    ],
    correctOption: "Process synchronization",
    difficulty: "intermediate"
  },
  {
    question: "What is the main advantage of using threads over processes?",
    options: [
      "Improved fault tolerance",
      "Lower overhead",
      "Simplified debugging",
      "Increased security"
    ],
    correctOption: "Lower overhead",
    difficulty: "intermediate"
  },
  {
    question: "Which file system organization method uses an index table that contains pointers to the blocks occupied by each file?",
    options: [
      "Linked allocation",
      "Contiguous allocation",
      "Indexed allocation",
      "Chained allocation"
    ],
    correctOption: "Indexed allocation",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the MMU (Memory Management Unit)?",
    options: [
      "To control the cache memory",
      "To manage CPU registers",
      "To translate virtual addresses to physical addresses",
      "To handle input/output devices"
    ],
    correctOption: "To translate virtual addresses to physical addresses",
    difficulty: "intermediate"
  },
  {
    question: "In the context of networking, what is a socket?",
    options: [
      "A software endpoint for communication",
      "A physical network cable",
      "A hardware firewall",
      "A network protocol"
    ],
    correctOption: "A software endpoint for communication",
    difficulty: "beginner"
  },
  {
    question: "What is the primary goal of disk scheduling algorithms?",
    options: [
      "To manage network traffic",
      "To minimize CPU utilization",
      "To optimize memory access",
      "To maximize disk throughput and minimize seek time"
    ],
    correctOption: "To maximize disk throughput and minimize seek time",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a common inter-process communication (IPC) mechanism?",
    options: [
      "DNS",
      "TCP/IP",
      "HTTP",
      "Shared memory"
    ],
    correctOption: "Shared memory",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of a device driver?",
    options: [
      "To manage system memory",
      "To compile source code",
      "To provide an interface between the OS and hardware devices",
      "To handle network protocols"
    ],
    correctOption: "To provide an interface between the OS and hardware devices",
    difficulty: "beginner"
  },
  {
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    options: [
      "Preemptive scheduling is simpler to implement",
      "Preemptive scheduling uses shorter time quanta",
      "Non-preemptive scheduling reduces context switching",
      "Non-preemptive scheduling allows a process to run until completion"
    ],
    correctOption: "Non-preemptive scheduling allows a process to run until completion",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling deadlocks?",
    options: [
      "Aging",
      "Thrashing",
      "Prevention",
      "Starvation"
    ],
    correctOption: "Prevention",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'chmod' command in Unix-like systems?",
    options: [
      "To delete a file",
      "To create a new directory",
      "To change the current directory",
      "To change file permissions"
    ],
    correctOption: "To change file permissions",
    difficulty: "beginner"
  },
  {
    question: "What is the function of a system call interrupt?",
    options: [
      "To request services from the operating system",
      "To handle hardware interrupts",
      "To manage virtual memory",
      "To signal a process completion"
    ],
    correctOption: "To request services from the operating system",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'thrashing' in operating systems?",
    options: [
      "Excessive disk swapping due to insufficient memory",
      "A technique for optimizing CPU utilization",
      "A type of denial-of-service attack",
      "A method for handling file system errors"
    ],
    correctOption: "Excessive disk swapping due to insufficient memory",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of real-time operating systems?",
    options: [
      "Minimum response time",
      "High resource utilization",
      "Average turnaround time",
      "Maximum throughput"
    ],
    correctOption: "Minimum response time",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'make' utility in software development?",
    options: [
      "To compile source code",
      "To manage and automate the build process",
      "To debug programs",
      "To create documentation"
    ],
    correctOption: "To manage and automate the build process",
    difficulty: "intermediate"
  },
  {
    question: "Which memory management technique involves dividing memory into fixed-size blocks?",
    options: [
      "Dynamic partitioning",
      "Swapping",
      "Segmentation",
      "Paging"
    ],
    correctOption: "Paging",
    difficulty: "intermediate"
  },
  {
    question: "What is a critical section in concurrent programming?",
    options: [
      "A section of code that accesses shared resources",
      "A section of code that handles interrupts",
      "A section of code that manages memory allocation",
      "A section of code that performs I/O operations"
    ],
    correctOption: "A section of code that accesses shared resources",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a non-blocking synchronization mechanism?",
    options: [
      "Compare-and-Swap (CAS)",
      "Spinlock",
      "Semaphore",
      "Mutex"
    ],
    correctOption: "Compare-and-Swap (CAS)",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'ptrace' system call in Unix-like systems?",
    options: [
      "To create a new thread",
      "To trace system calls and signals of a process",
      "To allocate memory for a process",
      "To manage process priorities"
    ],
    correctOption: "To trace system calls and signals of a process",
    difficulty: "beginner"
  },
  {
    question: "What is the primary function of a bootloader?",
    options: [
      "To load the operating system kernel into memory",
      "To handle user input",
      "To initialize network connections",
      "To manage file system operations"
    ],
    correctOption: "To load the operating system kernel into memory",
    difficulty: "beginner"
  },
  {
    question: "Which disk scheduling algorithm moves the disk arm in one direction, servicing all requests along the way, then reverses direction?",
    options: [
      "C-SCAN (Circular SCAN)",
      "SSTF (Shortest Seek Time First)",
      "FCFS",
      "SCAN (Elevator)"
    ],
    correctOption: "SCAN (Elevator)",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'mmap()' system call?",
    options: [
      "To map a file or device into memory",
      "To manage network sockets",
      "To allocate dynamic memory",
      "To create a new process"
    ],
    correctOption: "To map a file or device into memory",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of distributed operating systems?",
    options: [
      "Global memory space",
      "Centralized control",
      "Single system image",
      "Tightly coupled hardware"
    ],
    correctOption: "Single system image",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'nice' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To display system information",
      "To terminate a process",
      "To adjust process priority"
    ],
    correctOption: "To adjust process priority",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the page table in virtual memory management?",
    options: [
      "To store process control blocks",
      "To manage file system metadata",
      "To map virtual addresses to physical addresses",
      "To handle interrupt requests"
    ],
    correctOption: "To map virtual addresses to physical addresses",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a benefit of using a microkernel architecture?",
    options: [
      "Increased performance",
      "Simplified kernel design",
      "Tighter security",
      "Reduced context switching"
    ],
    correctOption: "Simplified kernel design",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'ioctl()' system call?",
    options: [
      "To create new processes",
      "To handle network communication",
      "To perform input/output control operations on devices",
      "To manage memory allocation"
    ],
    correctOption: "To perform input/output control operations on devices",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling race conditions?",
    options: [
      "Synchronization",
      "Paging",
      "Segmentation",
      "Swapping"
    ],
    correctOption: "Synchronization",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'ldd' command in Unix-like systems?",
    options: [
      "To display system load",
      "To list directory contents",
      "To list the dynamic dependencies of an executable",
      "To delete a directory"
    ],
    correctOption: "To list the dynamic dependencies of an executable",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'memory-mapped I/O'?",
    options: [
      "Using DMA for I/O operations",
      "Using special I/O instructions",
      "Buffering I/O data in memory",
      "Mapping I/O device registers to memory addresses"
    ],
    correctOption: "Mapping I/O device registers to memory addresses",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of cluster systems?",
    options: [
      "Shared memory space",
      "High availability",
      "Single point of failure",
      "Centralized processing"
    ],
    correctOption: "High availability",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'at' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To schedule a command to run at a specific time",
      "To display system time",
      "To change file access time"
    ],
    correctOption: "To schedule a command to run at a specific time",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the TLB (Translation Lookaside Buffer)?",
    options: [
      "To store frequently used data",
      "To cache virtual-to-physical address translations",
      "To manage disk access",
      "To handle network packet routing"
    ],
    correctOption: "To cache virtual-to-physical address translations",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a method for handling external fragmentation?",
    options: [
      "Swapping",
      "Compaction",
      "Paging",
      "Segmentation"
    ],
    correctOption: "Compaction",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'fsck' command in Unix-like systems?",
    options: [
      "To check and repair file system inconsistencies",
      "To create a file system",
      "To format a disk",
      "To display file system statistics"
    ],
    correctOption: "To check and repair file system inconsistencies",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'zero-copy I/O'?",
    options: [
      "Copying data multiple times between kernel and user space",
      "Using DMA for all I/O transfers",
      "Eliminating unnecessary data copies during I/O operations",
      "Buffering all I/O data in kernel space"
    ],
    correctOption: "Eliminating unnecessary data copies during I/O operations",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of symmetric multiprocessing (SMP) systems?",
    options: [
      "Loosely coupled processors",
      "Master-slave architecture",
      "Shared memory and a common OS",
      "Message passing for communication"
    ],
    correctOption: "Shared memory and a common OS",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'cron' daemon in Unix-like systems?",
    options: [
      "To schedule recurring tasks",
      "To monitor system performance",
      "To handle network connections",
      "To manage user accounts"
    ],
    correctOption: "To schedule recurring tasks",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the inode in Unix-like file systems?",
    options: [
      "To store file metadata (permissions, size, etc.)",
      "To handle file system journaling",
      "To manage directory structures",
      "To store file data"
    ],
    correctOption: "To store file metadata (permissions, size, etc.)",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem?",
    options: [
      "Deadlock detection",
      "Circular wait prevention",
      "Resource preemption",
      "Process starvation"
    ],
    correctOption: "Circular wait prevention",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'strace' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display system time",
      "To change system settings",
      "To trace system calls made by a process"
    ],
    correctOption: "To trace system calls made by a process",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'virtualization' in operating systems?",
    options: [
      "Running multiple operating systems on a single physical machine",
      "Creating virtual memory space",
      "Simulating network connections",
      "Optimizing disk access"
    ],
    correctOption: "Running multiple operating systems on a single physical machine",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of real-time scheduling algorithms?",
    options: [
      "Average turnaround time",
      "Predictable execution time",
      "Maximum throughput",
      "High resource utilization"
    ],
    correctOption: "Predictable execution time",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'lsof' command in Unix-like systems?",
    options: [
      "To list system users",
      "To display system load",
      "To delete open files",
      "To list open files"
    ],
    correctOption: "To list open files",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the superblock in Unix-like file systems?",
    options: [
      "To manage directory structures",
      "To contain information about the entire file system",
      "To store file metadata",
      "To store file data"
    ],
    correctOption: "To contain information about the entire file system",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling priority inversion?",
    options: [
      "Resource preemption",
      "Deadlock avoidance",
      "Priority inheritance",
      "Process aging"
    ],
    correctOption: "Priority inheritance",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'nm' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To terminate a process",
      "To display network information",
      "To display the symbol table of an object file"
    ],
    correctOption: "To display the symbol table of an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'containerization' in operating systems?",
    options: [
      "Running applications in isolated user spaces",
      "Creating virtual memory space",
      "Simulating network connections",
      "Optimizing disk access"
    ],
    correctOption: "Running applications in isolated user spaces",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of message passing systems?",
    options: [
      "Direct communication between processes",
      "Tightly coupled hardware",
      "Centralized control",
      "Shared memory"
    ],
    correctOption: "Direct communication between processes",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'top' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display real-time system information",
      "To change system settings",
      "To display the top of a file"
    ],
    correctOption: "To display real-time system information",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the file allocation table (FAT) in some file systems?",
    options: [
      "To store file metadata",
      "To manage directory structures",
      "To track the allocation of disk space",
      "To store file data"
    ],
    correctOption: "To track the allocation of disk space",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'bounded buffer' problem?",
    options: [
      "Semaphores",
      "Process aging",
      "Deadlock detection",
      "Resource preemption"
    ],
    correctOption: "Semaphores",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'objdump' command in Unix-like systems?",
    options: [
      "To display system time",
      "To display object file information",
      "To terminate a process",
      "To change system settings"
    ],
    correctOption: "To display object file information",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'system hardening'?",
    options: [
      "Optimizing system performance",
      "Handling network traffic",
      "Securing a system to reduce vulnerabilities",
      "Managing system memory"
    ],
    correctOption: "Securing a system to reduce vulnerabilities",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of distributed file systems?",
    options: [
      "Single point of failure",
      "Centralized storage",
      "Location transparency",
      "Tightly coupled hardware"
    ],
    correctOption: "Location transparency",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'uname' command in Unix-like systems?",
    options: [
      "To display system uptime",
      "To display system information",
      "To change system settings",
      "To terminate a process"
    ],
    correctOption: "To display system information",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the page replacement algorithm in virtual memory management?",
    options: [
      "To handle interrupt requests",
      "To decide which page to swap out of memory",
      "To manage file system metadata",
      "To allocate memory to processes"
    ],
    correctOption: "To decide which page to swap out of memory",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a benefit of using a monolithic kernel architecture?",
    options: [
      "Higher performance",
      "Simplified debugging",
      "Improved modularity",
      "Increased security"
    ],
    correctOption: "Higher performance",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'dd' command in Unix-like systems?",
    options: [
      "To delete a directory",
      "To display directory contents",
      "To display system load",
      "To copy and convert files"
    ],
    correctOption: "To copy and convert files",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'direct memory access' (DMA)?",
    options: [
      "Using special I/O instructions",
      "Buffering I/O data in memory",
      "CPU directly accessing memory",
      "Peripheral devices accessing memory without CPU intervention"
    ],
    correctOption: "Peripheral devices accessing memory without CPU intervention",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of fault-tolerant systems?",
    options: [
      "High availability",
      "Tightly coupled hardware",
      "Single point of failure",
      "Centralized processing"
    ],
    correctOption: "High availability",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'batch' command in Unix-like systems?",
    options: [
      "To schedule a command to run when system load is low",
      "To change file access time",
      "To display system time",
      "To terminate a process"
    ],
    correctOption: "To schedule a command to run when system load is low",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the interrupt handler?",
    options: [
      "To manage file system operations",
      "To handle user input",
      "To handle interrupt requests",
      "To manage system memory"
    ],
    correctOption: "To handle interrupt requests",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'reader-writer' problem?",
    options: [
      "Process aging",
      "Semaphores",
      "Deadlock detection",
      "Resource preemption"
    ],
    correctOption: "Semaphores",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'size' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To change file permissions",
      "To display file size",
      "To display the size of sections in an object file"
    ],
    correctOption: "To display the size of sections in an object file",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'memory protection'?",
    options: [
      "Optimizing memory access",
      "Managing system memory",
      "Handling network traffic",
      "Preventing processes from accessing each other's memory"
    ],
    correctOption: "Preventing processes from accessing each other's memory",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of network operating systems?",
    options: [
      "Centralized processing",
      "Single point of failure",
      "Shared resources",
      "Tightly coupled hardware"
    ],
    correctOption: "Shared resources",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'w' command in Unix-like systems?",
    options: [
      "To display who is currently logged in and what they are doing",
      "To display system uptime",
      "To terminate a process",
      "To change system settings"
    ],
    correctOption: "To display who is currently logged in and what they are doing",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the virtual file system (VFS)?",
    options: [
      "To provide a uniform interface for different file systems",
      "To store file metadata",
      "To store file data",
      "To manage directory structures"
    ],
    correctOption: "To provide a uniform interface for different file systems",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'sleeping barber' problem?",
    options: [
      "Process aging",
      "Resource preemption",
      "Deadlock detection",
      "Semaphores"
    ],
    correctOption: "Semaphores",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'nm -C' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To terminate a process",
      "To display network information",
      "To display demangled C++ symbols in an object file"
    ],
    correctOption: "To display demangled C++ symbols in an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'address space layout randomization' (ASLR)?",
    options: [
      "Managing system memory",
      "Randomizing memory addresses to prevent exploits",
      "Handling network traffic",
      "Optimizing memory access"
    ],
    correctOption: "Randomizing memory addresses to prevent exploits",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of grid computing systems?",
    options: [
      "Distributed resources across multiple organizations",
      "Tightly coupled hardware",
      "Centralized processing",
      "Single point of failure"
    ],
    correctOption: "Distributed resources across multiple organizations",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'uptime' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display system information",
      "To change system settings",
      "To display system uptime"
    ],
    correctOption: "To display system uptime",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the buffer cache?",
    options: [
      "To store frequently used data",
      "To cache disk blocks in memory",
      "To handle network packet routing",
      "To manage disk access"
    ],
    correctOption: "To cache disk blocks in memory",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a benefit of using a hybrid kernel architecture?",
    options: [
      "Improved modularity",
      "Balance of performance and flexibility",
      "Simplified debugging",
      "Increased security"
    ],
    correctOption: "Balance of performance and flexibility",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'truncate' command in Unix-like systems?",
    options: [
      "To display system load",
      "To delete a directory",
      "To shrink or extend the size of a file",
      "To display directory contents"
    ],
    correctOption: "To shrink or extend the size of a file",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'I/O multiplexing'?",
    options: [
      "Handling multiple I/O operations concurrently using a single thread",
      "Using DMA for all I/O transfers",
      "Using multiple threads for I/O",
      "Buffering all I/O data in kernel space"
    ],
    correctOption: "Handling multiple I/O operations concurrently using a single thread",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of massively parallel processing (MPP) systems?",
    options: [
      "Large number of processors with distributed memory",
      "Tightly coupled hardware",
      "Shared memory",
      "Centralized processing"
    ],
    correctOption: "Large number of processors with distributed memory",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'last' command in Unix-like systems?",
    options: [
      "To display a list of recently logged-in users",
      "To change system settings",
      "To terminate a process",
      "To display the last lines of a file"
    ],
    correctOption: "To display a list of recently logged-in users",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the page fault handler?",
    options: [
      "To handle interrupt requests",
      "To manage file system metadata",
      "To allocate memory to processes",
      "To handle page faults by retrieving pages from disk"
    ],
    correctOption: "To handle page faults by retrieving pages from disk",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'cigarette smokers' problem?",
    options: [
      "Resource preemption",
      "Deadlock detection",
      "Process aging",
      "Semaphores"
    ],
    correctOption: "Semaphores",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'readelf' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display information about ELF (Executable and Linkable Format) files",
      "To display file contents",
      "To change file permissions"
    ],
    correctOption: "To display information about ELF (Executable and Linkable Format) files",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'trusted computing'?",
    options: [
      "Optimizing system performance",
      "Ensuring a system's integrity and trustworthiness",
      "Handling network traffic",
      "Managing system memory"
    ],
    correctOption: "Ensuring a system's integrity and trustworthiness",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of service-oriented architecture (SOA)?",
    options: [
      "Single point of failure",
      "Loosely coupled services",
      "Centralized processing",
      "Tightly coupled hardware"
    ],
    correctOption: "Loosely coupled services",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'free' command in Unix-like systems?",
    options: [
      "To display the amount of free and used memory",
      "To display file system space",
      "To change system settings",
      "To terminate a process"
    ],
    correctOption: "To display the amount of free and used memory",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the write-ahead logging (WAL) in file systems?",
    options: [
      "To store file data",
      "To ensure data consistency by logging changes before applying them",
      "To store file metadata",
      "To manage directory structures"
    ],
    correctOption: "To ensure data consistency by logging changes before applying them",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem with an asymmetric solution?",
    options: [
      "Process aging",
      "Deadlock detection",
      "Allowing only a certain number of philosophers to pick up utensils",
      "Resource preemption"
    ],
    correctOption: "Allowing only a certain number of philosophers to pick up utensils",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'strings' command in Unix-like systems?",
    options: [
      "To display printable character sequences in a file",
      "To change file permissions",
      "To display file size",
      "To terminate a process"
    ],
    correctOption: "To display printable character sequences in a file",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'microservices architecture'?",
    options: [
      "Centralized control",
      "Running a single large application",
      "Using a monolithic kernel",
      "Structuring an application as a collection of small, independent services"
    ],
    correctOption: "Structuring an application as a collection of small, independent services",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of cloud computing?",
    options: [
      "On-demand access to shared resources",
      "Tightly coupled hardware",
      "Centralized processing",
      "Single point of failure"
    ],
    correctOption: "On-demand access to shared resources",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'df' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display file system disk space usage",
      "To change system settings",
      "To display file contents"
    ],
    correctOption: "To display file system disk space usage",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the journal in journaling file systems?",
    options: [
      "To store file metadata",
      "To manage directory structures",
      "To store file data",
      "To log file system changes before they are written to disk"
    ],
    correctOption: "To log file system changes before they are written to disk",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'unbounded buffer' problem?",
    options: [
      "Using a buffer with infinite capacity",
      "Deadlock detection",
      "Process aging",
      "Resource preemption"
    ],
    correctOption: "Using a buffer with infinite capacity",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'xxd' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To change file permissions",
      "To display a hex dump of a file",
      "To display file size"
    ],
    correctOption: "To display a hex dump of a file",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'software-defined networking' (SDN)?",
    options: [
      "Optimizing network performance",
      "Managing system memory",
      "Handling network traffic",
      "Decoupling network control from forwarding hardware"
    ],
    correctOption: "Decoupling network control from forwarding hardware",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of edge computing?",
    options: [
      "High latency",
      "Limited bandwidth",
      "Centralized data processing",
      "Processing data closer to the source"
    ],
    correctOption: "Processing data closer to the source",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'du' command in Unix-like systems?",
    options: [
      "To display file contents",
      "To terminate a process",
      "To change system settings",
      "To display directory space usage"
    ],
    correctOption: "To display directory space usage",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the shadow page table in virtualized systems?",
    options: [
      "To manage directory structures",
      "To store file metadata",
      "To manage memory mapping for virtual machines",
      "To store file data"
    ],
    correctOption: "To manage memory mapping for virtual machines",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with multiple producers and consumers?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Resource preemption",
      "Using semaphores and a shared buffer"
    ],
    correctOption: "Using semaphores and a shared buffer",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'nm -a' command in Unix-like systems?",
    options: [
      "To display all symbols, including debugger-only symbols",
      "To terminate a process",
      "To display network information",
      "To change file permissions"
    ],
    correctOption: "To display all symbols, including debugger-only symbols",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'memory-mapped files'?",
    options: [
      "Mapping a file's contents directly into a process's virtual address space",
      "Buffering file data in memory",
      "Using special I/O instructions",
      "Using DMA for file I/O operations"
    ],
    correctOption: "Mapping a file's contents directly into a process's virtual address space",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a message queue?",
    options: [
      "Tightly coupled hardware",
      "Centralized control",
      "Shared memory",
      "Asynchronous communication between processes"
    ],
    correctOption: "Asynchronous communication between processes",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'vmstat' command in Unix-like systems?",
    options: [
      "To change system settings",
      "To display virtual memory statistics",
      "To terminate a process",
      "To display file system space"
    ],
    correctOption: "To display virtual memory statistics",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the file descriptor?",
    options: [
      "To store file metadata",
      "To manage directory structures",
      "To represent an open file within a process",
      "To store file data"
    ],
    correctOption: "To represent an open file within a process",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'bounded buffer' problem with multiple producers and consumers?",
    options: [
      "Process aging",
      "Resource preemption",
      "Deadlock detection",
      "Using semaphores and a shared buffer"
    ],
    correctOption: "Using semaphores and a shared buffer",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'ldconfig' command in Unix-like systems?",
    options: [
      "To configure network interfaces",
      "To change file permissions",
      "To terminate a process",
      "To configure the dynamic linker runtime bindings"
    ],
    correctOption: "To configure the dynamic linker runtime bindings",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'non-uniform memory access' (NUMA)?",
    options: [
      "Optimizing memory access",
      "Memory access times vary depending on the memory location relative to the processor",
      "Managing system memory",
      "Handling network traffic"
    ],
    correctOption: "Memory access times vary depending on the memory location relative to the processor",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a publish-subscribe messaging pattern?",
    options: [
      "Decoupled communication between publishers and subscribers",
      "Centralized control",
      "Tightly coupled hardware",
      "Point-to-point communication"
    ],
    correctOption: "Decoupled communication between publishers and subscribers",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'iostat' command in Unix-like systems?",
    options: [
      "To display file system space",
      "To change system settings",
      "To display I/O statistics",
      "To terminate a process"
    ],
    correctOption: "To display I/O statistics",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the inode table?",
    options: [
      "To manage directory structures",
      "To store file metadata for all files in a file system",
      "To store file data",
      "To handle file system journaling"
    ],
    correctOption: "To store file metadata for all files in a file system",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'sleeping barber' problem with multiple barbers?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Resource preemption",
      "Using semaphores to manage multiple barbers and waiting customers"
    ],
    correctOption: "Using semaphores to manage multiple barbers and waiting customers",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'ltrace' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To terminate a process",
      "To trace library calls made by a process",
      "To display file size"
    ],
    correctOption: "To trace library calls made by a process",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'persistent memory'?",
    options: [
      "Non-volatile memory that retains data after power loss",
      "Handling network traffic",
      "Optimizing memory access",
      "Managing system memory"
    ],
    correctOption: "Non-volatile memory that retains data after power loss",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a message broker?",
    options: [
      "Facilitates asynchronous communication between applications",
      "Tightly coupled hardware",
      "Direct communication between processes",
      "Centralized control"
    ],
    correctOption: "Facilitates asynchronous communication between applications",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'sar' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display file system space",
      "To collect, report, or save system activity information",
      "To change system settings"
    ],
    correctOption: "To collect, report, or save system activity information",
    difficulty: "advanced"
  },
  {
    question: "What is the role of the directory entry?",
    options: [
      "To store file metadata",
      "To manage directory structures",
      "To store file data",
      "To associate a filename with an inode"
    ],
    correctOption: "To associate a filename with an inode",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'reader-writer' problem with priority for writers?",
    options: [
      "Using semaphores with writer preference",
      "Process aging",
      "Resource preemption",
      "Deadlock detection"
    ],
    correctOption: "Using semaphores with writer preference",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'gdb' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To display file size",
      "To terminate a process",
      "To debug programs"
    ],
    correctOption: "To debug programs",
    difficulty: "intermediate"
  },
  {
    question: "What is the concept of 'remote procedure call' (RPC)?",
    options: [
      "Managing system memory",
      "Allowing a program to execute a procedure on another machine",
      "Optimizing process scheduling",
      "Handling network traffic"
    ],
    correctOption: "Allowing a program to execute a procedure on another machine",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of a distributed database?",
    options: [
      "Single point of failure",
      "Centralized data storage",
      "Tightly coupled hardware",
      "Data is spread across multiple systems"
    ],
    correctOption: "Data is spread across multiple systems",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'tcpdump' command in Unix-like systems?",
    options: [
      "To display file system space",
      "To change system settings",
      "To capture and analyze network traffic",
      "To terminate a process"
    ],
    correctOption: "To capture and analyze network traffic",
    difficulty: "advanced"
  },
  {
    question: "What is the role of the mount point?",
    options: [
      "To store file metadata",
      "To manage directory structures",
      "To store file data",
      "To attach a file system to a directory"
    ],
    correctOption: "To attach a file system to a directory",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with a ring buffer?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Using semaphores and a circular buffer",
      "Resource preemption"
    ],
    correctOption: "Using semaphores and a circular buffer",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'nm -u' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display network information",
      "To change file permissions",
      "To display undefined symbols in an object file"
    ],
    correctOption: "To display undefined symbols in an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'memory leak'?",
    options: [
      "Handling network traffic",
      "Managing system memory",
      "Failure to release allocated memory, leading to memory exhaustion",
      "Optimizing memory access"
    ],
    correctOption: "Failure to release allocated memory, leading to memory exhaustion",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of a publish-subscribe message queue?",
    options: [
      "Messages are delivered to multiple subscribers",
      "Point-to-point communication",
      "Tightly coupled hardware",
      "Centralized control"
    ],
    correctOption: "Messages are delivered to multiple subscribers",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'netstat' command in Unix-like systems?",
    options: [
      "To display file system space",
      "To terminate a process",
      "To change system settings",
      "To display network connections and statistics"
    ],
    correctOption: "To display network connections and statistics",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the dentry cache?",
    options: [
      "To store file metadata",
      "To manage directory structures",
      "To cache directory entries for faster lookup",
      "To store file data"
    ],
    correctOption: "To cache directory entries for faster lookup",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem with a hierarchical solution?",
    options: [
      "Assigning a partial ordering to the resources",
      "Resource preemption",
      "Deadlock detection",
      "Process aging"
    ],
    correctOption: "Assigning a partial ordering to the resources",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'ar' command in Unix-like systems?",
    options: [
      "To display file size",
      "To terminate a process",
      "To create, modify, and extract from archives",
      "To change file permissions"
    ],
    correctOption: "To create, modify, and extract from archives",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'buffer overflow'?",
    options: [
      "Writing data beyond the bounds of a buffer, potentially corrupting memory",
      "Handling network buffering",
      "Optimizing buffer usage",
      "Managing system buffers"
    ],
    correctOption: "Writing data beyond the bounds of a buffer, potentially corrupting memory",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of a message-oriented middleware (MOM)?",
    options: [
      "Supports asynchronous communication via message queues",
      "Direct communication between processes",
      "Tightly coupled hardware",
      "Centralized control"
    ],
    correctOption: "Supports asynchronous communication via message queues",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the 'route' command in Unix-like systems?",
    options: [
      "To change system settings",
      "To display file system space",
      "To display and configure the routing table",
      "To terminate a process"
    ],
    correctOption: "To display and configure the routing table",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the page cache?",
    options: [
      "To cache file data in memory",
      "To store file data",
      "To manage disk access",
      "To handle network packet routing"
    ],
    correctOption: "To cache file data in memory",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'sleeping barber' problem with a fair solution?",
    options: [
      "Using semaphores with a FIFO queue for waiting customers",
      "Deadlock detection",
      "Resource preemption",
      "Process aging"
    ],
    correctOption: "Using semaphores with a FIFO queue for waiting customers",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'size -d' command in Unix-like systems?",
    options: [
      "To display file size",
      "To display the size of the data section in an object file",
      "To change file permissions",
      "To terminate a process"
    ],
    correctOption: "To display the size of the data section in an object file",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'thread-local storage' (TLS)?",
    options: [
      "Managing system threads",
      "Handling thread communication",
      "Optimizing thread scheduling",
      "Providing each thread with its own private copy of variables"
    ],
    correctOption: "Providing each thread with its own private copy of variables",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of a publish-subscribe system with content-based filtering?",
    options: [
      "Centralized control",
      "Tightly coupled hardware",
      "Point-to-point communication",
      "Subscribers receive messages based on message content"
    ],
    correctOption: "Subscribers receive messages based on message content",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'ss' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display file system space",
      "To change system settings",
      "To display socket statistics"
    ],
    correctOption: "To display socket statistics",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the buffer header?",
    options: [
      "To manage disk access",
      "To handle network packet routing",
      "To store file data",
      "To store metadata about a disk block in memory"
    ],
    correctOption: "To store metadata about a disk block in memory",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'reader-writer' problem with a fair solution?",
    options: [
      "Process aging",
      "Resource preemption",
      "Deadlock detection",
      "Using semaphores with a queue for waiting readers and writers"
    ],
    correctOption: "Using semaphores with a queue for waiting readers and writers",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'objcopy' command in Unix-like systems?",
    options: [
      "To display file size",
      "To terminate a process",
      "To change file permissions",
      "To copy and translate object files"
    ],
    correctOption: "To copy and translate object files",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'return-oriented programming' (ROP)?",
    options: [
      "Exploiting vulnerabilities by chaining together code snippets",
      "Handling program execution",
      "Managing function returns",
      "Optimizing function calls"
    ],
    correctOption: "Exploiting vulnerabilities by chaining together code snippets",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a distributed transaction?",
    options: [
      "Single point of failure",
      "Centralized transaction management",
      "Tightly coupled hardware",
      "Transaction that spans multiple systems"
    ],
    correctOption: "Transaction that spans multiple systems",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'ip' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To change system settings",
      "To display file system space",
      "To display and configure network interfaces"
    ],
    correctOption: "To display and configure network interfaces",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the directory cache?",
    options: [
      "To manage directory structures",
      "To cache recently accessed directories",
      "To store file data",
      "To store file metadata"
    ],
    correctOption: "To cache recently accessed directories",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with a lock-free solution?",
    options: [
      "Process aging",
      "Deadlock detection",
      "Using atomic operations and a ring buffer",
      "Resource preemption"
    ],
    correctOption: "Using atomic operations and a ring buffer",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'nm -C -g' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display network information",
      "To change file permissions",
      "To display demangled C++ global symbols in an object file"
    ],
    correctOption: "To display demangled C++ global symbols in an object file",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'side-channel attack'?",
    options: [
      "Managing system memory",
      "Handling network traffic",
      "Attacking a system by analyzing side effects like power consumption or timing",
      "Optimizing system performance"
    ],
    correctOption: "Attacking a system by analyzing side effects like power consumption or timing",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a distributed consensus algorithm (like Paxos or Raft)?",
    options: [
      "Agreement on a value among a distributed system",
      "Tightly coupled hardware",
      "Single point of failure",
      "Centralized decision-making"
    ],
    correctOption: "Agreement on a value among a distributed system",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'ifconfig' command in Unix-like systems?",
    options: [
      "To display and configure network interfaces (deprecated)",
      "To change system settings",
      "To display file system space",
      "To terminate a process"
    ],
    correctOption: "To display and configure network interfaces (deprecated)",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the journal inode?",
    options: [
      "To manage directory structures",
      "To store metadata about the journal in a journaling file system",
      "To handle file system journaling",
      "To store file data"
    ],
    correctOption: "To store metadata about the journal in a journaling file system",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem with a resource hierarchy solution?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Defining a hierarchy of resources and requiring them to be acquired in order",
      "Resource preemption"
    ],
    correctOption: "Defining a hierarchy of resources and requiring them to be acquired in order",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'size -A' command in Unix-like systems?",
    options: [
      "To display the size of all sections in an object file",
      "To change file permissions",
      "To terminate a process",
      "To display file size"
    ],
    correctOption: "To display the size of all sections in an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'time-of-check to time-of-use' (TOCTOU) vulnerability?",
    options: [
      "Handling network timing",
      "A race condition where a value changes between when it's checked and used",
      "Optimizing system timing",
      "Managing system time"
    ],
    correctOption: "A race condition where a value changes between when it's checked and used",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a distributed hash table (DHT)?",
    options: [
      "Tightly coupled hardware",
      "Decentralized data storage and lookup",
      "Centralized data storage",
      "Single point of failure"
    ],
    correctOption: "Decentralized data storage and lookup",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'brctl' command in Unix-like systems?",
    options: [
      "To manage Ethernet bridges",
      "To terminate a process",
      "To change system settings",
      "To display file system space"
    ],
    correctOption: "To manage Ethernet bridges",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the log-structured file system (LFS)?",
    options: [
      "To write all file system changes to a log in sequential order",
      "To store file data",
      "To handle file system journaling",
      "To manage directory structures"
    ],
    correctOption: "To write all file system changes to a log in sequential order",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with a wait-free solution?",
    options: [
      "Resource preemption",
      "Process aging",
      "Using atomic operations without locks or blocking",
      "Deadlock detection"
    ],
    correctOption: "Using atomic operations without locks or blocking",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'nm -C -a' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To terminate a process",
      "To display all demangled C++ symbols, including debugger-only symbols",
      "To display network information"
    ],
    correctOption: "To display all demangled C++ symbols, including debugger-only symbols",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'code injection'?",
    options: [
      "Managing system code",
      "Handling network code",
      "Optimizing code execution",
      "Exploiting vulnerabilities by introducing malicious code into a program"
    ],
    correctOption: "Exploiting vulnerabilities by introducing malicious code into a program",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a blockchain?",
    options: [
      "Single point of failure",
      "Tightly coupled hardware",
      "Decentralized and immutable data storage",
      "Centralized data storage"
    ],
    correctOption: "Decentralized and immutable data storage",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'iwconfig' command in Unix-like systems?",
    options: [
      "To change system settings",
      "To display file system space",
      "To terminate a process",
      "To display and configure wireless network interfaces (deprecated)"
    ],
    correctOption: "To display and configure wireless network interfaces (deprecated)",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the transaction log in a database system?",
    options: [
      "To record database changes to ensure atomicity and durability",
      "To store file metadata",
      "To manage directory structures",
      "To store file data"
    ],
    correctOption: "To record database changes to ensure atomicity and durability",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'reader-writer' problem with a condition variable?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Using condition variables for synchronization",
      "Resource preemption"
    ],
    correctOption: "Using condition variables for synchronization",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'size -x' command in Unix-like systems?",
    options: [
      "To display file size",
      "To change file permissions",
      "To display the size of sections in an object file in hexadecimal format",
      "To terminate a process"
    ],
    correctOption: "To display the size of sections in an object file in hexadecimal format",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'cross-site scripting' (XSS)?",
    options: [
      "Managing web servers",
      "Optimizing web performance",
      "Handling network traffic",
      "Injecting malicious scripts into websites viewed by other users"
    ],
    correctOption: "Injecting malicious scripts into websites viewed by other users",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a directed acyclic graph (DAG) in distributed computing?",
    options: [
      "Cyclic dependencies",
      "Represents dependencies between tasks",
      "Single point of failure",
      "Tightly coupled hardware"
    ],
    correctOption: "Represents dependencies between tasks",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'iptables' command in Unix-like systems?",
    options: [
      "To configure the Linux kernel firewall",
      "To change system settings",
      "To terminate a process",
      "To display file system space"
    ],
    correctOption: "To configure the Linux kernel firewall",
    difficulty: "advanced"
  },
  {
    question: "What is the role of the write buffer in disk I/O?",
    options: [
      "To store file data",
      "To handle network packet routing",
      "To temporarily hold data being written to disk",
      "To manage disk access"
    ],
    correctOption: "To temporarily hold data being written to disk",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem with a monitor?",
    options: [
      "Using a monitor to control access to the shared resources",
      "Resource preemption",
      "Deadlock detection",
      "Process aging"
    ],
    correctOption: "Using a monitor to control access to the shared resources",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'nm -s' command in Unix-like systems?",
    options: [
      "To display only symbols from dynamic libraries",
      "To terminate a process",
      "To change file permissions",
      "To display network information"
    ],
    correctOption: "To display only symbols from dynamic libraries",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'format string vulnerability'?",
    options: [
      "Handling network strings",
      "Optimizing string handling",
      "Exploiting vulnerabilities by providing crafted format strings",
      "Managing system strings"
    ],
    correctOption: "Exploiting vulnerabilities by providing crafted format strings",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a content delivery network (CDN)?",
    options: [
      "Tightly coupled hardware",
      "Centralized data storage",
      "Single point of failure",
      "Distributed servers that deliver content to users"
    ],
    correctOption: "Distributed servers that deliver content to users",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'ebtables' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To change system settings",
      "To configure the Ethernet frame filtering",
      "To display file system space"
    ],
    correctOption: "To configure the Ethernet frame filtering",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the group commit in database systems?",
    options: [
      "To store file data",
      "To manage directory structures",
      "To handle file system journaling",
      "To improve transaction throughput by batching multiple commits"
    ],
    correctOption: "To improve transaction throughput by batching multiple commits",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with a message queue and acknowledgments?",
    options: [
      "Process aging",
      "Deadlock detection",
      "Resource preemption",
      "Using a message queue with explicit acknowledgments for message delivery"
    ],
    correctOption: "Using a message queue with explicit acknowledgments for message delivery",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'size -t' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To display file size",
      "To display the total size of all sections in an object file",
      "To terminate a process"
    ],
    correctOption: "To display the total size of all sections in an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'race condition'?",
    options: [
      "Managing system resources",
      "Handling network traffic",
      "Optimizing process scheduling",
      "A situation where the outcome of an operation depends on the unpredictable sequence of events"
    ],
    correctOption: "A situation where the outcome of an operation depends on the unpredictable sequence of events",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of a distributed lock?",
    options: [
      "Tightly coupled hardware",
      "Centralized lock management",
      "A lock that can be held by processes across multiple systems",
      "Single point of failure"
    ],
    correctOption: "A lock that can be held by processes across multiple systems",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'nftables' command in Unix-like systems?",
    options: [
      "To replace iptables, ebtables, and arptables",
      "To display file system space",
      "To change system settings",
      "To terminate a process"
    ],
    correctOption: "To replace iptables, ebtables, and arptables",
    difficulty: "advanced"
  },
  {
    question: "What is the role of the redo log in database recovery?",
    options: [
      "To store file data",
      "To handle file system journaling",
      "To manage directory structures",
      "To record changes made by committed transactions for recovery"
    ],
    correctOption: "To record changes made by committed transactions for recovery",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'sleeping barber' problem with a timeout?",
    options: [
      "Using semaphores with timeouts for waiting customers",
      "Deadlock detection",
      "Resource preemption",
      "Process aging"
    ],
    correctOption: "Using semaphores with timeouts for waiting customers",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'nm --debug-syms' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To change file permissions",
      "To display network information",
      "To display all symbols, including debugging symbols"
    ],
    correctOption: "To display all symbols, including debugging symbols",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'return-to-libc attack'?",
    options: [
      "Exploiting vulnerabilities by hijacking control flow to execute existing library functions",
      "Handling network libraries",
      "Managing system libraries",
      "Optimizing function calls"
    ],
    correctOption: "Exploiting vulnerabilities by hijacking control flow to execute existing library functions",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a distributed tracing system (like Zipkin or Jaeger)?",
    options: [
      "Tightly coupled hardware",
      "Single point of failure",
      "Centralized data storage",
      "Tracks requests as they propagate through a distributed system"
    ],
    correctOption: "Tracks requests as they propagate through a distributed system",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'tc' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display file system space",
      "To change system settings",
      "To configure traffic control"
    ],
    correctOption: "To configure traffic control",
    difficulty: "beginner"
  },
  {
    question: "What is the role of the undo log in database recovery?",
    options: [
      "To handle file system journaling",
      "To record changes made by uncommitted transactions for rollback",
      "To manage directory structures",
      "To store file data"
    ],
    correctOption: "To record changes made by uncommitted transactions for rollback",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'reader-writer' problem with a preference for readers and writers?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Using semaphores with separate queues for readers and writers",
      "Resource preemption"
    ],
    correctOption: "Using semaphores with separate queues for readers and writers",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'size -B' command in Unix-like systems?",
    options: [
      "To display the size of the BSS section in an object file",
      "To change file permissions",
      "To display file size",
      "To terminate a process"
    ],
    correctOption: "To display the size of the BSS section in an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'symbolic link'?",
    options: [
      "Optimizing file access",
      "Managing system links",
      "A file that points to another file or directory",
      "Handling network links"
    ],
    correctOption: "A file that points to another file or directory",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a service mesh (like Istio or Linkerd)?",
    options: [
      "Single point of failure",
      "Centralized control plane",
      "Provides infrastructure for service-to-service communication",
      "Tightly coupled hardware"
    ],
    correctOption: "Provides infrastructure for service-to-service communication",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'route -n' command in Unix-like systems?",
    options: [
      "To change system settings",
      "To terminate a process",
      "To display file system space",
      "To display the routing table numerically"
    ],
    correctOption: "To display the routing table numerically",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the checkpoint in database recovery?",
    options: [
      "To store file data",
      "To manage directory structures",
      "To handle file system journaling",
      "To mark a point in time when the database is consistent for recovery"
    ],
    correctOption: "To mark a point in time when the database is consistent for recovery",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with a lock-free queue?",
    options: [
      "Deadlock detection",
      "Process aging",
      "Using atomic operations and a concurrent queue",
      "Resource preemption"
    ],
    correctOption: "Using atomic operations and a concurrent queue",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'nm -C -a -g' command in Unix-like systems?",
    options: [
      "To display all demangled C++ global symbols, including debugger-only symbols",
      "To display network information",
      "To change file permissions",
      "To terminate a process"
    ],
    correctOption: "To display all demangled C++ global symbols, including debugger-only symbols",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'heap overflow'?",
    options: [
      "Optimizing heap usage",
      "Writing data beyond the bounds of a heap-allocated buffer",
      "Handling network heap",
      "Managing system heap"
    ],
    correctOption: "Writing data beyond the bounds of a heap-allocated buffer",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of a serverless computing platform (like AWS Lambda or Azure Functions)?",
    options: [
      "Centralized server management",
      "Tightly coupled hardware",
      "Runs code without managing servers",
      "Single point of failure"
    ],
    correctOption: "Runs code without managing servers",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'traceroute' command in Unix-like systems?",
    options: [
      "To trace the route packets take to a network host",
      "To display file system space",
      "To terminate a process",
      "To change system settings"
    ],
    correctOption: "To trace the route packets take to a network host",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the archive log in database systems?",
    options: [
      "To store file data",
      "To handle file system journaling",
      "To store a history of database changes for point-in-time recovery",
      "To manage directory structures"
    ],
    correctOption: "To store a history of database changes for point-in-time recovery",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem with a token passing solution?",
    options: [
      "Passing a token around the table to grant permission to eat",
      "Process aging",
      "Deadlock detection",
      "Resource preemption"
    ],
    correctOption: "Passing a token around the table to grant permission to eat",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'size -F' command in Unix-like systems?",
    options: [
      "To display file size",
      "To change file permissions",
      "To terminate a process",
      "To display the size of the .fini section in an object file"
    ],
    correctOption: "To display the size of the .fini section in an object file",
    difficulty: "advanced"
  },
  {
    question: "What is the concept of 'integer overflow'?",
    options: [
      "Managing system integers",
      "Optimizing integer operations",
      "Handling network integers",
      "A condition that occurs when the result of an integer operation exceeds the maximum value"
    ],
    correctOption: "A condition that occurs when the result of an integer operation exceeds the maximum value",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a distributed message queue (like Kafka or RabbitMQ)?",
    options: [
      "Provides a durable, high-throughput message queue",
      "Centralized control",
      "Direct communication between processes",
      "Tightly coupled hardware"
    ],
    correctOption: "Provides a durable, high-throughput message queue",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'dig' command in Unix-like systems?",
    options: [
      "To change system settings",
      "To terminate a process",
      "To query DNS name servers",
      "To display file system space"
    ],
    correctOption: "To query DNS name servers",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the log buffer in database systems?",
    options: [
      "To handle file system journaling",
      "To manage directory structures",
      "To temporarily hold log records before writing them to disk",
      "To store file data"
    ],
    correctOption: "To temporarily hold log records before writing them to disk",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'producer-consumer' problem with a multi-producer, multi-consumer queue?",
    options: [
      "Deadlock detection",
      "Resource preemption",
      "Process aging",
      "Using a concurrent queue with atomic operations and semaphores"
    ],
    correctOption: "Using a concurrent queue with atomic operations and semaphores",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'size -i' command in Unix-like systems?",
    options: [
      "To change file permissions",
      "To terminate a process",
      "To display file size",
      "To display the size of the .init section in an object file"
    ],
    correctOption: "To display the size of the .init section in an object file",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'double-free vulnerability'?",
    options: [
      "Optimizing memory freeing",
      "Handling network memory freeing",
      "Managing system memory freeing",
      "Attempting to free the same memory location twice"
    ],
    correctOption: "Attempting to free the same memory location twice",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a distributed key-value store (like Redis or Memcached)?",
    options: [
      "Stores data as key-value pairs across multiple nodes",
      "Tightly coupled hardware",
      "Centralized data storage",
      "Single point of failure"
    ],
    correctOption: "Stores data as key-value pairs across multiple nodes",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the 'host' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To perform DNS lookups",
      "To display file system space",
      "To change system settings"
    ],
    correctOption: "To perform DNS lookups",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the transaction coordinator in a distributed transaction?",
    options: [
      "To manage directory structures",
      "To store file data",
      "To handle file system journaling",
      "To manage the execution and commit/rollback of a distributed transaction"
    ],
    correctOption: "To manage the execution and commit/rollback of a distributed transaction",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'reader-writer' problem with a priority queue?",
    options: [
      "Resource preemption",
      "Process aging",
      "Deadlock detection",
      "Using a priority queue to manage waiting readers and writers"
    ],
    correctOption: "Using a priority queue to manage waiting readers and writers",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'size -r' command in Unix-like systems?",
    options: [
      "To terminate a process",
      "To display file size",
      "To change file permissions",
      "To display the size of the .rodata section in an object file"
    ],
    correctOption: "To display the size of the .rodata section in an object file",
    difficulty: "beginner"
  },
  {
    question: "What is the concept of 'use-after-free vulnerability'?",
    options: [
      "Handling network memory usage",
      "Managing system memory usage",
      "Optimizing memory usage",
      "Attempting to access memory after it has been freed"
    ],
    correctOption: "Attempting to access memory after it has been freed",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a characteristic of a distributed system with eventual consistency?",
    options: [
      "Tightly coupled hardware",
      "Single point of failure",
      "Strong consistency",
      "Data will eventually be consistent across all nodes"
    ],
    correctOption: "Data will eventually be consistent across all nodes",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'nslookup' command in Unix-like systems?",
    options: [
      "To change system settings",
      "To terminate a process",
      "To query DNS name servers (interactive)",
      "To display file system space"
    ],
    correctOption: "To query DNS name servers (interactive)",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of the two-phase commit (2PC) protocol?",
    options: [
      "To manage directory structures",
      "To ensure all nodes in a distributed system commit or rollback a transaction",
      "To store file data",
      "To handle file system journaling"
    ],
    correctOption: "To ensure all nodes in a distributed system commit or rollback a transaction",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a technique for handling the 'dining philosophers' problem with a resource allocation graph?",
    options: [
      "Deadlock detection",
      "Resource preemption",
      "Process aging",
      "Using a resource allocation graph to detect and prevent deadlocks"
    ],
    correctOption: "Using a resource allocation graph to detect and prevent deadlocks",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of the 'size -S' command in Unix-like systems?",
    options: [
      "To display the size of the .shstrtab section in an object file",
      "To change file permissions",
      "To display file size",
      "To terminate a process"
    ],
    correctOption: "To display the size of the .shstrtab section in an object file",
    difficulty: "advanced"
  }
];