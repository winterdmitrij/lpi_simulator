import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Question, QuestionType } from "./question";


@Injectable({
    providedIn: 'root'
})
export class QuestionStoreService {
    questions: Question[];
    questionTypes: QuestionType[];
    questionNumber: number = 15;
    questionTypeId: string = 'ALL';
    questionNumbers: number[];


    constructor () {
        this.questionTypes = [
            {name: "Multiple-Choice-Fragen", id: "MC"},
            {name: "Single-Choice-Fragen", id: "SC"},
            {name: "Fill-In-Fragen", id: "FI"},
            {name: "Alle Fragentypen", id: "ALL"},
        ];
        
        this.questionNumbers = [10, 20, 30, 40, 50, 60];

        this.questions = [
            {
                questionId: '1',
                questionTypeId: 'MC',
                questionText: "Which of the following are names of shell programs? (Choose all that apply.)",
                answers: [
                  {
                    answerText: "A. Bash",
                    isCorrect: true
                  },
                  {
                    answerText: "B. Korn Shell",
                    isCorrect: true
                  },
                  {
                    answerText: "C. Born Shell",
                    isCorrect: false
                  },
                  {
                    answerText: "D. Dash",
                    isCorrect: true
                  },
                  {
                    answerText: "E. Z Shell",
                    isCorrect: true
                  }
                ],
                help: "A, B, D, E. The shell names in options A, B, D, and E are all legitimate shell program names, and thus are correct answer. There is no Born shell (you may have confused that name with the original Bourne shell), so option C is an incorrect choice."
              },
              {
                questionId: '2',
                questionTypeId: 'SC',
                questionText: "You are a system administrator on a CentOS Linux server. You need to view records in the /var/log/messages file that start with the date May 30 and end with the IPv4 address 192.168.10.42. Which of the following is the best grep command to use?",
                answers: [
                  {
                    answerText: "A. grep \"May 30?192.168.10.42\" /var/log/messages",
                    isCorrect: false
                  },
                  {
                    answerText: "B. grep \"May 30.* 192.168.10.42\" /var/log/messages",
                    isCorrect: true
                  },
                  {
                    answerText: "C. grep -i \"May 30.* 192.168.10.42\" /var/log/messages",
                    isCorrect: false
                  },
                  {
                    answerText: "D. grep -i \"May 30?192.168.10.42\" /var/log/messages",
                    isCorrect: false
                  },
                  {
                    answerText: "E. grep -v \"May 30.* 192.168.10.42\" /var/log/messages",
                    isCorrect: false
                  }
                ],
                help: "B. Option B is the best command because this grep command employs the correct syntax. It uses the quotation marks around the PATTERN to avoid unexpected results, and uses the .* regular expression characters to indicate that anything can be between May 30 and the IPv4 address. No additional switches are necessary. Option A is not the best grep command, because it uses the wrong regular expression of ?, which only allows one character to exist between May 30 and the IPv4 address. Options C and D are not the best grep commands, because they employ the use of the -i switch to ignore case, which is not needed in this case. The grep command in option E is an incorrect choice, because it uses the -v switch will display text records that do not match the PATTERN."
              },
              {
                questionId: '3',
                questionTypeId: 'SC',
                questionText: "Which of the following commands will determine how many records in the file Problems.txt contain the word error?",
                answers: [
                  {
                    answerText: "A. grep error Problems.txt | wc -b",
                    isCorrect: false
                  },
                  {
                    answerText: "B. grep error Problems.txt | wc -w",
                    isCorrect: false
                  },
                  {
                    answerText: "C. grep error Problems.txt | wc -l",
                    isCorrect: true
                  },
                  {
                    answerText: "D. grep Problems.txt error | wc -w",
                    isCorrect: false
                  },
                  {
                    answerText: "E. grep Problems.txt error | wc -l",
                    isCorrect: false
                  }
                ],
                help: "C. To find records within the Problems.txt file that contain the word error at least one time, the grep command is employed. The correct syntax is grep error Problems.txt. To count the records, the grep command’s STDOUT is piped as STDIN into the wc utility. The correct syntax to count the records, is wc -l. Therefore, option C is the correct answer. The command in option A is incorrect, because its wc command is counting the number of bytes within each input record. Option B is a wrong answer, because its wc command is counting the number of words within each input record. The command in option D has two problems. First its grep command syntax has the item for which to search and the file to search backwards. Also, its wc command is counting the number of words within each input record. Therefore, option D is a wrong choice. Option E is an incorrect answer, because its grep command syntax has the item for which to search and the file to search backwards."
              },
              {
                questionId: '4',
                questionTypeId: 'MC',
                questionText: "Which of the following conforms to the standard naming format of a Debian package file? (Choose all that apply.)",
                answers: [
                  {
                    answerText: "A. openssh-client_1%3a7.6pl-4ubuntu0.3_amd64.deb",
                    isCorrect: true
                  },
                  {
                    answerText: "B. openssh-client-3a7-24_86_x64.rpm",
                    isCorrect: false
                  },
                  {
                    answerText: "C. zsh_5.4.2-3ubuntu3.1_amd64.deb",
                    isCorrect: true
                  },
                  {
                    answerText: "D. zsh_5.4.2-3ubuntu3.1_amd64.dpkg",
                    isCorrect: false
                  },
                  {
                    answerText: "E. emacs_47.0_all.dpkg",
                    isCorrect: false
                  }
                ],
                help: "A, C. Debian package files following a standard naming format of PACKAGE-NAME-VERSION- RELEASE_ARCHITECTURE.deb. Therefore, options A and C are correct answers. The package file name in option B has the .rpm file extension, which immediately disqualifies it from following the Debian package file standard naming format. Thus, option B is a wrong answer. Options D and E use .dpkg as their file extension, so they are incorrect choices as well."
              },
              {
                questionId: '5',
                questionTypeId: 'SC',
                questionText: "What does placing an ampersand sign (&) after a command on the command line do?",
                answers: [
                  {
                    answerText: "A. Disconnects the command from the terminal session.",
                    isCorrect: false
                  },
                  {
                    answerText: "B. Runs the command in foreground mode.",
                    isCorrect: false
                  },
                  {
                    answerText: "C. Runs the command in background mode.",
                    isCorrect: true
                  },
                  {
                    answerText: "D. Redirects the output to another command.",
                    isCorrect: false
                  },
                  {
                    answerText: "E. Redirects the output to a file.",
                    isCorrect: false
                  }
                ],
                help: "C. The ampersand sign (&) tells the shell to run the specified command in background mode in the terminal session, so Option C is correct. The nohup command is used to disconnect the command from the terminal session, so Option A is incorrect. The fg command moves a command running in background mode to the foreground, so Option B is incorrect. The pipe symbol (|) redirects the output from the command to another command, so Option D is incorrect. The greater-than symbol (>) redirects the output from the command to a file, so Option E is an incorrect choice as well."
              },
              {
                questionId: '6',
                questionTypeId: 'SC',
                questionText: "If you are using the tmux utility how do you create a new window?",
                answers: [
                  {
                    answerText: "A. screen",
                    isCorrect: false
                  },
                  {
                    answerText: "B. tmux create",
                    isCorrect: false
                  },
                  {
                    answerText: "C. tmux ls",
                    isCorrect: false
                  },
                  {
                    answerText: "D. screen -ls",
                    isCorrect: false
                  },
                  {
                    answerText: "E. tmux new",
                    isCorrect: true
                  }
                ],
                help: "E. The tmux new will create a new window. Therefore, option E is the correct answer. The GNU Screen utility employs the screen commands to create a new window. Thus, option A is a wrong answer. The tmux create is a made-up tmux command, and therefore option B is also a wrong choice. The tmux -ls will display detached windows, but not create them, so option C is a wrong choice. The screen -ls command will display any detached GNU screen widows, so option D is an incorrect choice as well."
              },
              {
                questionId: '7',
                questionTypeId: 'SC',
                questionText: "What type of hardware interface uses interrupts, I/O ports, and DMA channels to communicate with the PC motherboard?",
                answers: [
                  {
                    answerText: "A. USB",
                    isCorrect: false
                  },
                  {
                    answerText: "B. GPIO",
                    isCorrect: false
                  },
                  {
                    answerText: "C. PCI",
                    isCorrect: true
                  },
                  {
                    answerText: "D. Monitors",
                    isCorrect: false
                  },
                  {
                    answerText: "E. Printers",
                    isCorrect: false
                  }
                ],
                help: "C. PCI boards use interrupts, I/O ports, and DMA channels to send and receive data with the PC motherboard, so Option C is correct. USB devices transmit data using a serial bus connected to the motherboard and don’t use DMA channels, so Option A is incorrect. The GPIO interface uses memory-mapped specialty IC chips and not interrupts and I/O ports, so option B is incorrect. Monitors and printers are hardware devices and not hardware interfaces, so Options D and E are incorrect."
              },
              {
                questionId: '8',
                questionTypeId: 'SC',
                questionText: "What directory does the Linux FHS set aside specifically for installing third party programs?",
                answers: [
                  {
                    answerText: "A. /usr/bin",
                    isCorrect: false
                  },
                  {
                    answerText: "B. /usr",
                    isCorrect: false
                  },
                  {
                    answerText: "C. /opt",
                    isCorrect: true
                  },
                  {
                    answerText: "D. /usr/sbin",
                    isCorrect: false
                  },
                  {
                    answerText: "E. /tmp",
                    isCorrect: false
                  }
                ],
                help: "C. The /opt directory is designated for installing optional third party applications, so Option C is correct. The /usr/bin directory is designated for local user programs, not third party programs, so Option A is incorrect. The /usr directory is designated for standard Linux programs, not third party programs, so Option B is incorrect. The /usr/sbin directory is designated for system programs and data, not third party programs, so Option D is incorrect. The /tmp directory is designated for temporary files that are commonly erased when the system reboots, not third party programs, so Option E is incorrect."
              },
              {
                questionId: '9',
                questionTypeId: 'SC',
                questionText: "Which command allows you to append a partition to the virtual directory on a running Linux system?",
                answers: [
                  {
                    answerText: "A. mount",
                    isCorrect: true
                  },
                  {
                    answerText: "B. umount",
                    isCorrect: false
                  },
                  {
                    answerText: "C. fsck",
                    isCorrect: false
                  },
                  {
                    answerText: "D. dmesg",
                    isCorrect: false
                  },
                  {
                    answerText: "E. mkinitramfs",
                    isCorrect: false
                  }
                ],
                help: "A. The mount command allows you to specify both the partition and the location in the virtual directory where to append the partition files and directories. The files and directories contained in the partition then appear at that location in the virtual directory. The umount command (option B) is used to remove a mounted partition. Option C, the fsck command, is used to fix a hard drive that is corrupted and can’t be mounted, it doesn’t actually mount the drive itself. The dmesg command in option D is used to view boot messages for the system , which may tell you where a hard drive is appended to the virtual directory, but it doesn’t’ actually to the appending. Option E, the mkinitramfs command, creates an initrd RAM disk, and doesn’t directly handle mounting hard drives to the virtual directory."
              },
              {
                questionId: '10',
                questionTypeId: 'SC',
                questionText: "The system admin took an archive file and applied a compression utility to it. The resulting file extension is .gz. Which compression utility was used?",
                answers: [
                  {
                    answerText: "A. The xz utility",
                    isCorrect: false
                  },
                  {
                    answerText: "B. The gzip utility",
                    isCorrect: true
                  },
                  {
                    answerText: "C. The bzip2 utility",
                    isCorrect: false
                  },
                  {
                    answerText: "D. The zip utility",
                    isCorrect: false
                  },
                  {
                    answerText: "E. The dd utility",
                    isCorrect: false
                  }
                ],
                help: "B. The gzip utility compresses data files and gives them the .gz file extension. Therefore, option B is the correct answer. The xz, bzip2, and zip compression utilities compress a data file and give it a different file extension, so options A, C, and D are wrong answers. The dd utility is not a compression program. Therefore, option E is also a wrong choice."
              },
        ];
    }

// Prozeduren
    // Gibt alle Fragentypen zurück
    getAllQuestionTypes() {
        return this.questionTypes;
    }

    // Gibt alle Fragenmengen zurück
    getAllQuestionNumbers() {
        return this.questionNumbers;
    }

    // Gibt notwendige Fragentyp zurück
    getQuestionTypeId(inQuestionTypeId: string): string {
        return this.questionTypeId = inQuestionTypeId;
    }

    getQuestionNumber(inQuestionNumber: number): number {
        return this.questionNumber = inQuestionNumber;
    }

// Gibt alle Fragen zurück
    getAllQuestions() {
        return this.questions;
    }

}