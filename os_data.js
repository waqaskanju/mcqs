 const OS_MCQS = {
    mcq1: [
      {
        id: "1",
        subject_name: "OS",
        chapter_name: "Introduction",
        question: "What is an operating system?",
        option_one: "collection of programs that manages hardware resources",
        option_two: "system service provider to the application programs",
        option_three: "interface between the hardware and application programs",
        option_four: " all of the mentioned",
        answer: "D",
        explanation: ""
          },
    ],
    mcq2: [
        {
          id: "2",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "To access the services of operating system, the interface is provided by the ___________",
          option_one: "System Calls",
          option_two: "API",
          option_three: "Library",
          option_four: "Assembly Instructions",
          answer: "A",
          explanation: ""
            },
      ],
      mcq3: [
        {
          id: "3",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "Which one of the following is not true?",
          option_one: "kernel is the program that constitutes the central core of the operating system",
          option_two: "kernel is the first part of operating system to load into memory during booting",
          option_three: " kernel is made of various modules which can not be loaded in running operating system",
          option_four: "kernel remains in the memory during the entire computer session",
          answer: "C",
          explanation: "Kernel modules can be loaded and unloaded in run-time i.e. in running OS."
            },
      ],
      mcq4: [
        {
          id: "4",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "Which one of the following error will be handle by the operating system?",
          option_one: "power failure",
          option_two: "lack of paper in printer",
          option_three: "connection failure in the network",
          option_four: "all of the mentioned",
          answer: "D",
          explanation: ""
            },
      ],
      mcq5: [
        {
          id: "5",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "What is the main function of the command interpreter?",
          option_one: "to get and execute the next user-specified command",
          option_two: "to provide the interface between the API and application program",
          option_three: "to handle the files in operating system",
          option_four: "none of the mentioned",
          answer: "A",
          explanation: "Command Interpreter checks for valid command and then runs that command else it will throw an error."
            },
      ],
      mcq6: [
        {
          id: "6",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
          option_one: "Round Robin",
          option_two: "Shortest Job First",
          option_three: "Priority",
          option_four: "All of the mentioned",
          answer: "D",
          explanation: ""
            },
      ],
      mcq7: [
        {
          id: "7",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "If a process fails, most operating system write the error information to a ______",
          option_one: "new file",
          option_two: "log file",
          option_three: "anotherrunning process",
          option_four: "none of the mentioned",
          answer: "B",
          explanation: ""
            },
      ],
      mcq8: [
        {
          id: "8",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "Which facility dynamically adds probes to a running system, both in user processes and in the kernel?",
          option_one: "DTrace",
          option_two: "DLocate",
          option_three: "DMap",
          option_four: "DAdd",
          answer: "A",
          explanation: "DTrace is a comprehensive dynamic tracing framework developed by Sun Microsystems for troubleshooting kernel and application problems on production systems in real time. program to view debian package information"
            },
      ],
      mcq9: [
        {
          id: "9",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "Which one of the following is not a real time operating system?",
          option_one: "VxWorks",
          option_two: "QNX",
          option_three: "RTLinux",
          option_four: "Palm OS",
          answer: "D",
          explanation: "Palm OS is a mobile operating system. Palm OS is developed for Personal Digital Assistants (PDAs).(Dimethylamino)pyridine (DMAP) is a toxic, corrosive solid. DAdd is imaginary word"
            },
      ],
      mcq10: [
        {
          id: "10",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "The OS X has ____________",
          option_one: "Monolithic kernal",
          option_two: "hybrid kernal",
          option_three: "microkernel",
          option_four: "monolithic kernel with module",
          answer: "B",
          explanation: ""
            },
      ],

      mcq12: [
        {
          id: "12",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "In operating system, each process has its own __________",
          option_one: "Open files",
          option_two: "pending alarms, signals, and signal handlers",
          option_three: "address space and global variables",
          option_four: " all of the mentioned",
          answer: "D",
          explanation: " each process has its own address space which contains code, data, stack, and heap segments or sections. Each process also has a list of files that is opened by the process as well as all pending alarms, signals, and various signal handlers."
            },
      ],

      mcq13: [
        {
          id: "13",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: " In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to?",
          option_one: "Suspended State",
          option_two: "Terminated state",
          option_three: "Ready state",
          option_four: "Blocked state",
          answer: "C",
          explanation: "In a time-sharing operating system, when the time slot given to a process is completed, the process goes from the running state to the Ready State. In a time-sharing operating system, unit time is defined for sharing CPU, it is called a time quantum or time slice. If a process takes less than 1 time quantum, then the process itself releases the CPU"
            },
      ],

      mcq14: [
        {
          id: "14",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "Cascading termination refers to the termination of all child processes if the parent process terminates ______",
          option_one: "Normally",
          option_two: "Abnormally",
          option_three: "Normally or Abnormally",
          option_four: "None of the mentioned",
          answer: "C",
          explanation: "Cascading termination refers to the termination of all child processes if the parent process terminates Normally or Abnormally. Some systems don’t allow child processes to exist if the parent process has terminated. Cascading termination is normally initiated by the operating system."
            },
      ],
      mcq15: [
        {
          id: "15",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "When a process is in a “Blocked” state waiting for some I/O service. When the service is completed, it goes to the __________",
          option_one: "Terminated state",
          option_two: "Suspended state",
          option_three: "Running state",
          option_four: "Ready State",
          answer: "D",
          explanation: " Suppose that a process is in “Blocked” state waiting for some I/O service. When the service is completed, it goes to the ready state. Process never goes directly to the running state from the waiting state. Only processes which are in ready state go to the running state whenever CPU allocated by operating system."
            },
      ],
      mcq16: [
        {
          id: "16",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "Transient operating system code is a code that ____________",
          option_one: " stays in the memory always",
          option_two: "never enters the memory space",
          option_three: "comes and goes as needed",
          option_four: "is not easily accessible",
          answer: "C",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
          option_one: " assigning ready processes to waiting queue",
          option_two: "assigning running processes to blocked queue",
          option_three: "assigning ready processes to CPU",
          option_four: "all of the mentioned",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],
      mcqx: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "Introduction",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation: ""
            },
      ],



      mcq100: [
        {
          id: "100",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "Which module gives control of the CPU to the process selected by the short-term scheduler?",
          option_one: "dispatcher",
          option_two: "interrupt",
          option_three: "scheduler",
          option_four: "none of the mentioned",
          answer: "A",
          explanation: ""
            },
      ],
      mcq101: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "The processes that are residing in main memory and are ready and waiting to execute are kept on a list called _____________",
          option_one: "job queue",
          option_two: "ready queue",
          option_three: "execution queue",
          option_four: "process queue",
          answer: "B",
          explanation: ""
            },
      ],
      mcq102: [
        {
          id: "102",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "The processes that are residing in main memory and are ready and waiting to execute are kept on a list called _____________",
          option_one: "job queue",
          option_two: "ready queue",
          option_three: "execution queue",
          option_four: "process queue",
          answer: "B",
          explanation: ""
            },
      ],
      mcq103: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "The interval from the time of submission of a process to the time of completion is termed as ____________",
          option_one: "waiting time",
          option_two: "turnaround time",
          option_three: "response time",
          option_four: "throughput",
          answer: "B",
          explanation: ""
            },
      ],

      mcq104: [
        {
          id: "",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "Which scheduling algorithm allocates the CPU first to the process that requests the CPU first?",
          option_one: "first-come, first-served scheduling",
          option_two: "shortest job scheduling",
          option_three: "priority scheduling",
          option_four: "none of the mentioned",
          answer: "A",
          explanation: ""
            },
      ],
      mcq105: [
        {
          id: "105",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: " In priority scheduling algorithm ____________",
          option_one: "CPU is allocated to the process with highest priority",
          option_two: "CPU is allocated to the process with lowest priority",
          option_three: "Equal priority processes can not be scheduled",
          option_four: "None of the mentioned",
          answer: "A",
          explanation: ""
            },
      ],
      mcq106: [
        {
          id: "106",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "In priority scheduling algorithm, when a process arrives at the ready queue, its priority is compared with the priority of ____________",
          option_one: "currently running process",
          option_two: "parent process",
          option_three: "init process",
          option_four: "all process",
          answer: "A",
          explanation: ""
            },
      ],
      mcq107: [
        {
          id: "107",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "Which algorithm is defined in Time quantum?",
          option_one: "shortest job scheduling algorithm",
          option_two: "round robin scheduling algorithm",
          option_three: "priority scheduling algorithm",
          option_four: "multilevel queue scheduling algorithm",
          answer: "B",
          explanation: ""
            },
      ],
      mcq108: [
        {
          id: "108",
          subject_name: "OS",
          chapter_name: "CPU Scheduling",
          question: "Process are classified into different groups in ____________",
          option_one: "shortest job scheduling algorithm",
          option_two: "round robin scheduling algorithm",
          option_three: "priority scheduling algorithm",
          option_four: "multilevel queue scheduling algorithm",
          answer: "B",
          explanation: ""
            },
      ],
    }

