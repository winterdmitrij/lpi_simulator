import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frage, FragenTyp, UserAntwort } from './frage';

@Injectable({
  providedIn: 'root'
})
export class FrageStoreService {
  fragen: Frage[];
  tempFragen: Frage[];
  frage: Frage;
  fragenTypen: FragenTyp[];
  userAntworten: UserAntwort[];

  // Default-Werte um Fragenpull zu erstellen
  fragenTyp: string = "ALL";
  fragenAnzahl: number = 15;

  constructor() {
    
    this.fragenTypen = [
      {name: "Multiple-Choice-Fragen", id: "MC"},
      {name: "Single-Choice-Fragen", id: "SC"},
      {name: "Fill-In-Fragen", id: "FI"},
      {name: " Alle Fragentypen", id: "ALL"},
    ];

    this.fragen = [
      {
        frageId: '1',
        frageTyp: 'MC',
        frageText: "Which of the following are names of shell programs? (Choose all that apply.)",
        antworten: [
          {
            antwortText: "A. Bash",
            istRichtig: true
          },
          {
            antwortText: "B. Korn Shell",
            istRichtig: true
          },
          {
            antwortText: "C. Born Shell",
            istRichtig: false
          },
          {
            antwortText: "D. Dash",
            istRichtig: true
          },
          {
            antwortText: "E. Z Shell",
            istRichtig: true
          }
        ],
        hilfe: "A, B, D, E. The shell names in options A, B, D, and E are all legitimate shell program names, and thus are correct answer. There is no Born shell (you may have confused that name with the original Bourne shell), so option C is an incorrect choice."
      },
      {
        frageId: '2',
        frageTyp: 'SC',
        frageText: "You are a system administrator on a CentOS Linux server. You need to view records in the /var/log/messages file that start with the date May 30 and end with the IPv4 address 192.168.10.42. Which of the following is the best grep command to use?",
        antworten: [
          {
            antwortText: "A. grep \"May 30?192.168.10.42\" /var/log/messages",
            istRichtig: false
          },
          {
            antwortText: "B. grep \"May 30.* 192.168.10.42\" /var/log/messages",
            istRichtig: true
          },
          {
            antwortText: "C. grep -i \"May 30.* 192.168.10.42\" /var/log/messages",
            istRichtig: false
          },
          {
            antwortText: "D. grep -i \"May 30?192.168.10.42\" /var/log/messages",
            istRichtig: false
          },
          {
            antwortText: "E. grep -v \"May 30.* 192.168.10.42\" /var/log/messages",
            istRichtig: false
          }
        ],
        hilfe: "B. Option B is the best command because this grep command employs the correct syntax. It uses the quotation marks around the PATTERN to avoid unexpected results, and uses the .* regular expression characters to indicate that anything can be between May 30 and the IPv4 address. No additional switches are necessary. Option A is not the best grep command, because it uses the wrong regular expression of ?, which only allows one character to exist between May 30 and the IPv4 address. Options C and D are not the best grep commands, because they employ the use of the -i switch to ignore case, which is not needed in this case. The grep command in option E is an incorrect choice, because it uses the -v switch will display text records that do not match the PATTERN."
      },
      {
        frageId: '3',
        frageTyp: 'SC',
        frageText: "Which of the following commands will determine how many records in the file Problems.txt contain the word error?",
        antworten: [
          {
            antwortText: "A. grep error Problems.txt | wc -b",
            istRichtig: false
          },
          {
            antwortText: "B. grep error Problems.txt | wc -w",
            istRichtig: false
          },
          {
            antwortText: "C. grep error Problems.txt | wc -l",
            istRichtig: true
          },
          {
            antwortText: "D. grep Problems.txt error | wc -w",
            istRichtig: false
          },
          {
            antwortText: "E. grep Problems.txt error | wc -l",
            istRichtig: false
          }
        ],
        hilfe: "C. To find records within the Problems.txt file that contain the word error at least one time, the grep command is employed. The correct syntax is grep error Problems.txt. To count the records, the grep command’s STDOUT is piped as STDIN into the wc utility. The correct syntax to count the records, is wc -l. Therefore, option C is the correct answer. The command in option A is incorrect, because its wc command is counting the number of bytes within each input record. Option B is a wrong answer, because its wc command is counting the number of words within each input record. The command in option D has two problems. First its grep command syntax has the item for which to search and the file to search backwards. Also, its wc command is counting the number of words within each input record. Therefore, option D is a wrong choice. Option E is an incorrect answer, because its grep command syntax has the item for which to search and the file to search backwards."
      },
      {
        frageId: '4',
        frageTyp: 'MC',
        frageText: "Which of the following conforms to the standard naming format of a Debian package file? (Choose all that apply.)",
        antworten: [
          {
            antwortText: "A. openssh-client_1%3a7.6pl-4ubuntu0.3_amd64.deb",
            istRichtig: true
          },
          {
            antwortText: "B. openssh-client-3a7-24_86_x64.rpm",
            istRichtig: false
          },
          {
            antwortText: "C. zsh_5.4.2-3ubuntu3.1_amd64.deb",
            istRichtig: true
          },
          {
            antwortText: "D. zsh_5.4.2-3ubuntu3.1_amd64.dpkg",
            istRichtig: false
          },
          {
            antwortText: "E. emacs_47.0_all.dpkg",
            istRichtig: false
          }
        ],
        hilfe: "A, C. Debian package files following a standard naming format of PACKAGE-NAME-VERSION- RELEASE_ARCHITECTURE.deb. Therefore, options A and C are correct answers. The package file name in option B has the .rpm file extension, which immediately disqualifies it from following the Debian package file standard naming format. Thus, option B is a wrong answer. Options D and E use .dpkg as their file extension, so they are incorrect choices as well."
      },
      {
        frageId: '5',
        frageTyp: 'SC',
        frageText: "What does placing an ampersand sign (&) after a command on the command line do?",
        antworten: [
          {
            antwortText: "A. Disconnects the command from the terminal session.",
            istRichtig: false
          },
          {
            antwortText: "B. Runs the command in foreground mode.",
            istRichtig: false
          },
          {
            antwortText: "C. Runs the command in background mode.",
            istRichtig: true
          },
          {
            antwortText: "D. Redirects the output to another command.",
            istRichtig: false
          },
          {
            antwortText: "E. Redirects the output to a file.",
            istRichtig: false
          }
        ],
        hilfe: "C. The ampersand sign (&) tells the shell to run the specified command in background mode in the terminal session, so Option C is correct. The nohup command is used to disconnect the command from the terminal session, so Option A is incorrect. The fg command moves a command running in background mode to the foreground, so Option B is incorrect. The pipe symbol (|) redirects the output from the command to another command, so Option D is incorrect. The greater-than symbol (>) redirects the output from the command to a file, so Option E is an incorrect choice as well."
      },
      {
        frageId: '6',
        frageTyp: 'SC',
        frageText: "If you are using the tmux utility how do you create a new window?",
        antworten: [
          {
            antwortText: "A. screen",
            istRichtig: false
          },
          {
            antwortText: "B. tmux create",
            istRichtig: false
          },
          {
            antwortText: "C. tmux ls",
            istRichtig: false
          },
          {
            antwortText: "D. screen -ls",
            istRichtig: false
          },
          {
            antwortText: "E. tmux new",
            istRichtig: true
          }
        ],
        hilfe: "E. The tmux new will create a new window. Therefore, option E is the correct answer. The GNU Screen utility employs the screen commands to create a new window. Thus, option A is a wrong answer. The tmux create is a made-up tmux command, and therefore option B is also a wrong choice. The tmux -ls will display detached windows, but not create them, so option C is a wrong choice. The screen -ls command will display any detached GNU screen widows, so option D is an incorrect choice as well."
      },
      {
        frageId: '7',
        frageTyp: 'SC',
        frageText: "What type of hardware interface uses interrupts, I/O ports, and DMA channels to communicate with the PC motherboard?",
        antworten: [
          {
            antwortText: "A. USB",
            istRichtig: false
          },
          {
            antwortText: "B. GPIO",
            istRichtig: false
          },
          {
            antwortText: "C. PCI",
            istRichtig: true
          },
          {
            antwortText: "D. Monitors",
            istRichtig: false
          },
          {
            antwortText: "E. Printers",
            istRichtig: false
          }
        ],
        hilfe: "C. PCI boards use interrupts, I/O ports, and DMA channels to send and receive data with the PC motherboard, so Option C is correct. USB devices transmit data using a serial bus connected to the motherboard and don’t use DMA channels, so Option A is incorrect. The GPIO interface uses memory-mapped specialty IC chips and not interrupts and I/O ports, so option B is incorrect. Monitors and printers are hardware devices and not hardware interfaces, so Options D and E are incorrect."
      },
      {
        frageId: '8',
        frageTyp: 'SC',
        frageText: "What directory does the Linux FHS set aside specifically for installing third party programs?",
        antworten: [
          {
            antwortText: "A. /usr/bin",
            istRichtig: false
          },
          {
            antwortText: "B. /usr",
            istRichtig: false
          },
          {
            antwortText: "C. /opt",
            istRichtig: true
          },
          {
            antwortText: "D. /usr/sbin",
            istRichtig: false
          },
          {
            antwortText: "E. /tmp",
            istRichtig: false
          }
        ],
        hilfe: "C. The /opt directory is designated for installing optional third party applications, so Option C is correct. The /usr/bin directory is designated for local user programs, not third party programs, so Option A is incorrect. The /usr directory is designated for standard Linux programs, not third party programs, so Option B is incorrect. The /usr/sbin directory is designated for system programs and data, not third party programs, so Option D is incorrect. The /tmp directory is designated for temporary files that are commonly erased when the system reboots, not third party programs, so Option E is incorrect."
      },
      {
        frageId: '9',
        frageTyp: 'SC',
        frageText: "Which command allows you to append a partition to the virtual directory on a running Linux system?",
        antworten: [
          {
            antwortText: "A. mount",
            istRichtig: true
          },
          {
            antwortText: "B. umount",
            istRichtig: false
          },
          {
            antwortText: "C. fsck",
            istRichtig: false
          },
          {
            antwortText: "D. dmesg",
            istRichtig: false
          },
          {
            antwortText: "E. mkinitramfs",
            istRichtig: false
          }
        ],
        hilfe: "A. The mount command allows you to specify both the partition and the location in the virtual directory where to append the partition files and directories. The files and directories contained in the partition then appear at that location in the virtual directory. The umount command (option B) is used to remove a mounted partition. Option C, the fsck command, is used to fix a hard drive that is corrupted and can’t be mounted, it doesn’t actually mount the drive itself. The dmesg command in option D is used to view boot messages for the system , which may tell you where a hard drive is appended to the virtual directory, but it doesn’t’ actually to the appending. Option E, the mkinitramfs command, creates an initrd RAM disk, and doesn’t directly handle mounting hard drives to the virtual directory."
      },
      {
        frageId: '10',
        frageTyp: 'SC',
        frageText: "The system admin took an archive file and applied a compression utility to it. The resulting file extension is .gz. Which compression utility was used?",
        antworten: [
          {
            antwortText: "A. The xz utility",
            istRichtig: false
          },
          {
            antwortText: "B. The gzip utility",
            istRichtig: true
          },
          {
            antwortText: "C. The bzip2 utility",
            istRichtig: false
          },
          {
            antwortText: "D. The zip utility",
            istRichtig: false
          },
          {
            antwortText: "E. The dd utility",
            istRichtig: false
          }
        ],
        hilfe: "B. The gzip utility compresses data files and gives them the .gz file extension. Therefore, option B is the correct answer. The xz, bzip2, and zip compression utilities compress a data file and give it a different file extension, so options A, C, and D are wrong answers. The dd utility is not a compression program. Therefore, option E is also a wrong choice."
      },
      {
        frageId: '11',
        frageTyp: 'SC',
        frageText: "Before the umask setting is applied, a directory has a default permission octal code of which of the following?",
        antworten: [
          {
            antwortText: "A. 111",
            istRichtig: false
          },
          {
            antwortText: "B. 755",
            istRichtig: false
          },
          {
            antwortText: "C. 666",
            istRichtig: false
          },
          {
            antwortText: "D. 777",
            istRichtig: true
          },
          {
            antwortText: "E. 888",
            istRichtig: false
          }
        ],
        hilfe: "D. Before the umask setting is applied, a directory has a default permission octal code of 777. Thus, option D is the correct answer. The 111 octal code in option A does not apply to any created files or directories, prior to the umask setting being applied. Therefore, option A is a wrong answer. The 755 octal code is the typical resulting directory permission setting after a umask setting of 0022 is applied. Thus, option B is a wrong choice. The 666 octal coded is the default permission octal code for files prior to applying the umask setting. Thus, option C is an incorrect answer. The 888 octal code does not exist, so option E is an incorrect choice."
      },
      {
        frageId: '12',
        frageTyp: 'SC',
        frageText: "You need to locate files within the /tmp directory or one of its subdirectories. These files should be empty. Assuming you have super user privileges, what command should you use?",
        antworten: [
          {
            antwortText: "A. find / -name tmp",
            istRichtig: false
          },
          {
            antwortText: "B. find /tmp -empty",
            istRichtig: true
          },
          {
            antwortText: "C. find /tmp -empty 0",
            istRichtig: false
          },
          {
            antwortText: "D. find /tmp/* -name empty",
            istRichtig: false
          },
          {
            antwortText: "E. find / -empty",
            istRichtig: false
          }
        ],
        hilfe: "B. The find /tmp -empty command will locate files within the /tmp directory or one of its subdirectories, which are empty. Therefore, option B is the right answer. The find / -name tmp command, starts at the root directory, instead of the /tmp directory, and searches for files/directories whose names are tmp. Thus, option A is a wrong answer. The find /tmp -empty 0 command adds an incorrect additional argument, 0, at the end of the command, so option C is also an incorrect answer. The find /tmp/* -name empty command searches for files/directories whose names are tmp, and adds an unnecessary wildcard, *, to the directory name to search. Thus, option D is also a wrong choice. The find / -empty command starts at the root directory instead of the /tmp directory. Therefore, option E is an incorrect choice."
      },
      {
        frageId: '13',
        frageTyp: 'MC',
        frageText: "Where does the system BIOS attempt to find a bootloader program? (Choose all that apply.)",
        antworten: [
          {
            antwortText: "A. An internal hard drive",
            istRichtig: true
          },
          {
            antwortText: "B. An external hard drive",
            istRichtig: true
          },
          {
            antwortText: "C. A DVD drive",
            istRichtig: true
          },
          {
            antwortText: "D. A USB flash drive",
            istRichtig: true
          },
          {
            antwortText: "E. A network server",
            istRichtig: true
          }
        ],
        hilfe: "A, B, C, D, and E. The BIOS firmware can look in multiple locations for a bootloader program. Most commonly it looks at the internal hard drive installed on the system, however, if none is found, it can search other places. Most systems allow you to boot from an external hard drive, or from a DVD drive. Modern systems now also provide the option to boot from a USB memory stick inserted into a USB port on the workstation. Finally, many systems provide the PXE boot option, which allows the system to boot remotely from a network server."
      },
      {
        frageId: '14',
        frageTyp: 'SC',
        frageText: "Which firmware method has replaced BIOS on most modern IBM-compatible computers?",
        antworten: [
          {
            antwortText: "A. FTP",
            istRichtig: false
          },
          {
            antwortText: "B. UEFI",
            istRichtig: true
          },
          {
            antwortText: "C. PXE",
            istRichtig: false
          },
          {
            antwortText: "D. NFS",
            istRichtig: false
          },
          {
            antwortText: "E. HTTPS",
            istRichtig: false
          }
        ],
        hilfe: "B. The UEFI firmware method has replaced the BIOS in most IBM-compatible computers, so option B is correct. FTP, PXE, NFS, and HTTPS are not firmware methods, but methods for loading the Linux bootloader, so options A, C, D, and E are all incorrect."
      },
      {
        frageId: '15',
        frageTyp: 'MC',
        frageText: "Which of the following are system initialization methods? (Choose all that apply.)",
        antworten: [
          {
            antwortText: "A. /sbin/init",
            istRichtig: false
          },
          {
            antwortText: "B. /etc/init",
            istRichtig: false
          },
          {
            antwortText: "C. SysVinit",
            istRichtig: true
          },
          {
            antwortText: "D. systemd",
            istRichtig: true
          },
          {
            antwortText: "E. cloud-init",
            istRichtig: false
          }
        ],
        hilfe: "C, D. SysVinit and systemd are both system initialization methods. Thus, options C and D are the correct answers. The init program can live in the /sbin/, /etc/, or /bin/ directory, and while it is used by the initialization methods, it is not a method itself. Thus, options A and B are wrong answers. The cloud-init program is a tool that allows you to create VMs out of system images locally or cloud images on an IaaS platform. However, it is not a system initialization method. Therefore, option E is an incorrect answer as well."
      },
      {
        frageId: '16',
        frageTyp: 'SC',
        frageText: "The Cinnamon desktop environment uses which windows manager?",
        antworten: [
          {
            antwortText: "A. Mutter",
            istRichtig: false
          },
          {
            antwortText: "B. Muffin",
            istRichtig: true
          },
          {
            antwortText: "C. Nemo",
            istRichtig: false
          },
          {
            antwortText: "D. Dolphin",
            istRichtig: false
          },
          {
            antwortText: "E. LightDM",
            istRichtig: false
          }
        ],
        hilfe: "B. The Cinnamon desktop environment uses the Muffin windows manager. Therefore, option B is the correct answer. Mutter is the windows manager for the GNOME Shell desktop environment, though Muffin did fork from that project. Thus, option A is a wrong answer. Nemo is the file manager for Cinnamon, and therefore, option C is a wrong choice. Dolphin is the file manager for the KDE Plasma desktop environment. Thus, option D is a wrong choice. LightDM is display manager for Cinnamon, and therefore, option E is also an incorrect choice."
      },
      {
        frageId: '17',
        frageTyp: 'SC',
        frageText: "Your X.org session has become hung. What keystrokes do you use to restart the session?",
        antworten: [
          {
            antwortText: "A. Ctrl+C",
            istRichtig: false
          },
          {
            antwortText: "B. Ctrl+Z",
            istRichtig: false
          },
          {
            antwortText: "C. Ctrl+Q",
            istRichtig: false
          },
          {
            antwortText: "D. Ctrl+Alt+Delete",
            istRichtig: false
          },
          {
            antwortText: "E. Ctrl+Alt+Backspace",
            istRichtig: true
          }
        ],
        hilfe: "E. The Ctrl+Alt+Backspace will kill your X.org session and then restart it, putting you at the login screen (display manager.) Therefore, option E is the correct answer. The Ctrl+C combination sends an interrupt signal, but does not restart an X.org session. Thus, option A is a wrong answer. The Ctrl+Z keystroke combination sends a stop signal, but it will not restart the X.org session. Therefore, option B is also an incorrect answer. The Ctrl+Q combination will release a terminal that has been paused by Ctrl+S. However, it does not restart a X.org session, so it too is a wrong choice. The Ctrl+Alt+Delete keystroke combination, can be set to do a number of tasks, depending upon your desktop environment. In some cases, it brings up a shutdown, logout, or reboot menu. However, it does not restart the X.org session, so option D is an incorrect choice."
      },
      {
        frageId: '18',
        frageTyp: 'SC',
        frageText: "What folder contains the time zone template files in Linux?",
        antworten: [
          {
            antwortText: "A. /etc/timezone",
            istRichtig: false
          },
          {
            antwortText: "B. /etc/localtime",
            istRichtig: false
          },
          {
            antwortText: "C. /usr/share/zoneinfo",
            istRichtig: true
          },
          {
            antwortText: "D. /usr/share/timezone",
            istRichtig: false
          },
          {
            antwortText: "E. /usr/share/localtime",
            istRichtig: false
          }
        ],
        hilfe: "C. Both Debian-based and Red Hat-based Linux distributions store the time zone template files in the /usr/share/zoneinfo folder, so option C is correct. The /etc/timezone and /etc/localtime files contain the current time zone file for Debian and Red Hat-based systems, not the time zone template files, so options A and B are incorrect. The /usr/ share/timezone and /usr/share/localtime folders don’t exist in either Debian-based or Red Hat-based Linux distributions, so options D and E are also incorrect."
      },
      {
        frageId: '19',
        frageTyp: 'SC',
        frageText: "Which field contains the same data for both a /etc/passwd and /etc/shadow file record?",
        antworten: [
          {
            antwortText: "A. Password",
            istRichtig: false
          },
          {
            antwortText: "B. Account expiration date",
            istRichtig: false
          },
          {
            antwortText: "C. UID",
            istRichtig: false
          },
          {
            antwortText: "D. GID",
            istRichtig: false
          },
          {
            antwortText: "E. User account’s username",
            istRichtig: true
          }
        ],
        hilfe: "E. The user account’s username is the only field within a /etc/passwd and /etc/shadow record that contains the same data. Therefore, option E is the correct answer. While both files have a password field, they do not contain the same data. The password can only exist in one of the two files, preferably the /etc/shadow file. Thus, option A is a wrong answer. The account expiration date only exists in the /etc/shadow file, so option B is also a wrong choice. The UID and GID fields only exist in the /etc/passwd file, so options C and D are also incorrect answers."
      },
      {
        frageId: '20',
        frageTyp: 'SC',
        frageText: "What facility and priority setting would log kernel messages that are warnings and higher severity?",
        antworten: [
          {
            antwortText: "A. kern.=warn",
            istRichtig: false
          },
          {
            antwortText: "B. kern.*",
            istRichtig: false
          },
          {
            antwortText: "C. *.info",
            istRichtig: false
          },
          {
            antwortText: "D. kern.warn",
            istRichtig: true
          },
          {
            antwortText: "E. kern.alert",
            istRichtig: false
          }
        ],
        hilfe: "D. The rsyslogd application priorities log event messages with the defined severity or higher, so Option D would log all kernel event messages at the warn, alert, or emerg severities, so it is correct. The Option A facility and priority setting would only log kernel messages with a severity of warning, so it is incorrect. Option B would log all kernel event messages, not just warnings or higher, so it is incorrect. Option C would log all facility type event messages, but include the information or higher level severity, so it is incorrect. Option E would log kernel event messages, but only at the alert or emerg severity levels, not the warning level, so it is also incorrect."
      },
      {
        frageId: '21',
        frageTyp: 'MC',
        frageText: "Which of the following can implement NTP on Linux? (Choose all that apply.)",
        antworten: [
          {
            antwortText: "A. Exim",
            istRichtig: false
          },
          {
            antwortText: "B. ntpd",
            istRichtig: true
          },
          {
            antwortText: "C. Sendmail",
            istRichtig: false
          },
          {
            antwortText: "D. Postfix",
            istRichtig: false
          },
          {
            antwortText: "E. chronyd",
            istRichtig: true
          }
        ],
        hilfe: "B, E. Both ntpd and chronyd can implement network time protocol client services on Linux, so options B and E are correct. Exim, Sendmail, and Postfix are all mail transfer agents (MTAs) for use on Linux, so options A, C, and D are incorrect choices."
      },
      {
        frageId: '22',
        frageTyp: 'SC',
        frageText: "Which network layer uses the Wi-Fi Protected Access (WPA) encryption?",
        antworten: [
          {
            antwortText: "A. network",
            istRichtig: false
          },
          {
            antwortText: "B. physical",
            istRichtig: true
          },
          {
            antwortText: "C. transport",
            istRichtig: false
          },
          {
            antwortText: "D. application",
            istRichtig: false
          }
        ],
        hilfe: "B. The Wi-Fi Protected Access (WPA) encryption protocol protects access to wireless access points. The wireless network operates at the physical network, so option B is correct. The network level uses addressing protocols such as IP to send data between systems on the network, buy doesn’t interact with the wireless signal, so answer A is incorrect. The transport layer uses ports to direct network traffic to specific applications, running at the application layer, so options C and D are both incorrect."
      },
      {
        frageId: '23',
        frageTyp: 'MC',
        frageText: "Which two commands set the IP address, subnet mask, and default router information on an interface using the command line?",
        antworten: [
          {
            antwortText: "A. netstat",
            istRichtig: false
          },
          {
            antwortText: "B. ping",
            istRichtig: false
          },
          {
            antwortText: "C. nmtui",
            istRichtig: true
          },
          {
            antwortText: "D. ip",
            istRichtig: true
          },
          {
            antwortText: "E. route",
            istRichtig: false
          }
        ],
        hilfe: "C and D. The nmtui command provides an interactive text menu for selecting a network interface and setting the network parameters, and the ip command provides a command line tool tool for setting network parameters, so both Options C and D are correct. The netstat command displays information about network connections, but doesn’t set the network parameters, so option A is incorrect. The ping command can send ICMP packets to a remote host, but doesn’t set the local network parameters, so option B is incorrect. The route command sets the routing network parameters, but not the IP address or subnet mask, so option E is incorrect."
      },
      {
        frageId: '24',
        frageTyp: 'SC',
        frageText: "What tool allows you to send ICMP messages to a remote host to test network connectivity?",
        antworten: [
          {
            antwortText: "A. netstat",
            istRichtig: false
          },
          {
            antwortText: "B. ifconfig",
            istRichtig: false
          },
          {
            antwortText: "C. ping",
            istRichtig: true
          },
          {
            antwortText: "D. iwconfig",
            istRichtig: false
          },
          {
            antwortText: "E. ss",
            istRichtig: false
          }
        ],
        hilfe: "C. The ping command sends ICMP packets to a specified remote host and waits for a response, making option C the correct answer. The netstat command displays statistics about the network interface, so it’s incorrect. The ifconfig command displays or sets network information, but doesn’t send ICMP packets, making option B incorrect. The iwconfig command displays or sets wireless network information, but doesn’t handle ICMP packets, making option D incorrect. The ss command display information about open connections and ports on the system, so option E is also incorrect."
      },
      {
        frageId: '25',
        frageTyp: 'SC',
        frageText: "Which Bash shell script command allows you to iterate through a series of data until the data is complete?",
        antworten: [
          {
            antwortText: "A. if",
            istRichtig: false
          },
          {
            antwortText: "B. case",
            istRichtig: false
          },
          {
            antwortText: "C. for",
            istRichtig: true
          },
          {
            antwortText: "D. exit",
            istRichtig: false
          },
          {
            antwortText: "E. $()",
            istRichtig: false
          }
        ],
        hilfe: "C. The for command allows you to iterate through a series of data one by one until the data set is exhausted, so Option C is correct. The if-then and case statements perform a single test on an object to determine if a block of commands should be run, they don’t iterate through data, so Options A and B are incorrect. The exit command stops the shell script and exits to the parent shell, so Option D is incorrect. The $() command redirects the output of a command to a variable in the shell script, it doesn’t iterate through a series of data, so Option E is incorrect."
      },
      {
        frageId: '26',
        frageTyp: 'SC',
        frageText: "Which environment variable allows you to retrieve the numeric user ID value for the user account running a shell script?",
        antworten: [
          {
            antwortText: "A. $USER",
            istRichtig: false
          },
          {
            antwortText: "B. $UID",
            istRichtig: true
          },
          {
            antwortText: "C. $BASH",
            istRichtig: false
          },
          {
            antwortText: "D. $HOME",
            istRichtig: false
          },
          {
            antwortText: "E. $1",
            istRichtig: false
          }
        ],
        hilfe: "B. The $UID environment variable contains the numeric user ID value of the user account running the shell script, so Option B is correct. The $USER environment variable contains the text user name of the user account running the shell script, not the numerical user ID value, so Option A is incorrect. The $BASH environment variable contains the path to the executable Bash shell, so Option C is incorrect. The $HOME environment variable contains the location of the home directory of the user account running the shell, so Option D is incorrect. The $1 positional variable contains the first parameter listed on the command line command when the shell script was run, so Option E is incorrect."
      },
      {
        frageId: '27',
        frageTyp: 'SC',
        frageText: "When will the cron table entry 0 0 1 * * myscript run the specified command?",
        antworten: [
          {
            antwortText: "A. At 1AM every day.",
            istRichtig: false
          },
          {
            antwortText: "B. At midnight on the first day of every month.",
            istRichtig: true
          },
          {
            antwortText: "C. At midnight on the first day of every week.",
            istRichtig: false
          },
          {
            antwortText: "D. At 1PM every day.",
            istRichtig: false
          },
          {
            antwortText: "E. At midnight every day.",
            istRichtig: false
          }
        ],
        hilfe: "B. The cron table format specifies the times to run the script by minute, hour, day of month, month, and day of week. Thus the format 0 0 1 * * will run the command at 00:00 (midnight) on the first day of the month for every month. That makes Option B correct, and Options A, C, D, and E incorrect."
      },
      {
        frageId: '28',
        frageTyp: 'MC',
        frageText: "Which of the following utilities allows you to scan a system and see what network services are being offered or used via the files that are open?",
        antworten: [
          {
            antwortText: "A. fuser",
            istRichtig: true
          },
          {
            antwortText: "B. lsof",
            istRichtig: true
          },
          {
            antwortText: "C. nmap",
            istRichtig: false
          },
          {
            antwortText: "D. netstat",
            istRichtig: false
          },
          {
            antwortText: "E. ss",
            istRichtig: false
          }
        ],
        hilfe: "A, B. The fuser and lsof utilities allow you to see what network services are being offered or used via files that are open. Therefore, options A and B are correct answers. While the nmap, netstart, and ss utilities will allow you to see the various network services being offered (or used) on your system, they do not do so via files that are open. Thus, options C, D, and E are incorrect choices."
      },
      {
        frageId: '29',
        frageTyp: 'MC',
        frageText: "Which of the following OpenSSH directives should you review in order to ensure the public-facing system’s users are employing SSH securely?",
        antworten: [
          {
            antwortText: "A. Port directive",
            istRichtig: true
          },
          {
            antwortText: "B. Protocol directive",
            istRichtig: true
          },
          {
            antwortText: "C. PermitRootLogin directive",
            istRichtig: true
          },
          {
            antwortText: "D. AllowTCPForwarding directive",
            istRichtig: false
          },
          {
            antwortText: "E. ForwardX11 directive",
            istRichtig: false
          }
        ],
        hilfe: "A, B, C. The Port directive determines what port the OpenSSH daemon (sshd) listens on for incoming connection requests, so any public-facing systems should have it changed from its default of 22. Therefore, option A is a correct answer. The Protocol directive determines what SSH protocol is used, and to ensure OpenSSH 2 is employed, it should be set to 2. Therefore, option B is another correct answer. The PermitRootLogin directive does just what it says — permits or denies the root account to login via OpenSSH, and you do not want to permit the root account to use ssh to log into the system, so option C is also a correct choice. The AllowTCPForwarding directive toggles whether or not OpenSSH port forwarding is allowed, and the ForwardX11 toggles whether or not X11 commands can be forwarded over an OpenSSH encrypted tunnel, which can enhance security in those cases, but don’t need to be reviewed, unless those features are desired. Thus, options D and E are incorrect choices."
      },
      {
        frageId: '30',
        frageTyp: 'MC',
        frageText: "Which of the following is true about gpg-agent? (Choose all that apply.)",
        antworten: [
          {
            antwortText: "A. It starts a special agent shell, so you don’t have to re-enter passwords to authenticate to remote systems.",
            istRichtig: false
          },
          {
            antwortText: "B. It manages GPG secret keys separately from any protocol.",
            istRichtig: true
          },
          {
            antwortText: "C. It is managed by either SysVinit or systemd, depending on your system’s initialization method.",
            istRichtig: false
          },
          {
            antwortText: "D. It keeps previously used private keys in RAM.",
            istRichtig: true
          },
          {
            antwortText: "E. If it needs a private key that is not in RAM, it asks the users for the passphrase protecting the key.",
            istRichtig: true
          }
        ],
        hilfe: "B, D, E. The gpg-agent manages GPG secret keys separately from any protocol, keeps previously used private keys in RAM, and if it needs a private key that is not in RAM, it asks the users for the passphrase protecting the key. Therefore, options B, D, and E are all correct answers. The gpg-agent does not start a special agent shell (that’s something the ssh-agent does), so option A is a wrong answer. The gpg-agent is not managed by SysVinit or systemd, but instead is started automatically by the gpg utility. Thus, option C is a wrong choice as well."
      },
      {
        frageId: '31',
        frageTyp: 'SC',
        frageText: "Which filesystem is used to store information about current running processes?",
        antworten: [
          {
            antwortText: "A. /proc",
            istRichtig: true
          },
          {
            antwortText: "B. /environment",
            istRichtig: false
          },
          {
            antwortText: "C. /etc",
            istRichtig: false
          },
          {
            antwortText: "D. /dev",
            istRichtig: false
          }
        ],
        hilfe: "A. The /proc filesystem stores information about running processes on the system. The /etc filesystem is used for configuration information, and /dev is used for device information. The /environment filesystem does not exist on a default Linux system."
      },
      {
        frageId: '32',
        frageTyp: 'MC',
        frageText: "What is true regarding UEFI firmware? (Choose two.)",
        antworten: [
          {
            antwortText: "A. It can read and interpret partition tables",
            istRichtig: false
          },
          {
            antwortText: "B. It can use and read certain file systems",
            istRichtig: true
          },
          {
            antwortText: "C. It stores its entire configuration on the /boot/ partition",
            istRichtig: false
          },
          {
            antwortText: "D. It is stored in a special area within the GPT metadata",
            istRichtig: true
          },
          {
            antwortText: "E. It is loaded from a fixed boot disk position",
            istRichtig: false
          }
        ],
        hilfe: "Richtige Antworten sind: B und D"
      },
      {
        frageId: '33',
        frageTyp: 'SC',
        frageText: "Which of the following wall commands send the message \"Please Log Off\" to users in the operator group?",
        antworten: [
          {
            antwortText: "A. wall -g operator \"Please Log Off\"",
            istRichtig: true
          },
          {
            antwortText: "B. wall \"Please Log Off\"",
            istRichtig: false
          },
          {
            antwortText: "C. wall -operator \"Please Log Off\"",
            istRichtig: false
          },
          {
            antwortText: "D. echo \"Please Log Off\" | group operator",
            istRichtig: false
          }
        ],
        hilfe: "A. The -g option to wall sends the input to the specified group. Answer B will send the output to all users, whereas answers C and D will not work."
      },
      {
        frageId: '34',
        frageTyp: 'SC',
        frageText: "A Serial Advanced Technology Attachment (SATA) disk will use which of the following identifiers?",
        antworten: [
          {
            antwortText: "A.  /dev/hdX",
            istRichtig: true
          },
          {
            antwortText: "B. /dev/sataX",
            istRichtig: false
          },
          {
            antwortText: "C. /dev/sdX",
            istRichtig: false
          },
          {
            antwortText: "D. /disk/sataX",
            istRichtig: false
          }
        ],
        hilfe: "A. The -g option to wall sends the input to the specified group. Answer B will send the output to all users, whereas answers C and D will not work."
      },
      {
        frageId: '35',
        frageTyp: 'MC',
        frageText: "Which of the following examples for Bash file globbing matches a file named root-can-do-this.txt when used in the directory holding that file? (Choose three correct answers.)",
        antworten: [
          {
            antwortText: "A. root*can?do-this.{txt,odt}",
            istRichtig: true
          },
          {
            antwortText: "B. r[oOoO]t-can-do*.txt",
            istRichtig: false
          },
          {
            antwortText: "C. {root,user,admin}-can-??-this.txt",
            istRichtig: true
          },
          {
            antwortText: "D. root*can*do??this.txt",
            istRichtig: false
          },
          {
            antwortText: "E. root***{can,may}-do-this.[tT][xX][tT]",
            istRichtig: true
          }
        ],
        hilfe: "Richtige Antworten sind: A, C und E"
      },
      {
        frageId: '36',
        frageTyp: 'MC',
        frageText: "Which of the following are init systems used within Linux systems? (Choose THREE correct answers.)",
        antworten: [
          {
            antwortText: "A. startd",
            istRichtig: false
          },
          {
            antwortText: "B. systemd",
            istRichtig: true
          },
          {
            antwortText: "C. Upstart",
            istRichtig: true
          },
          {
            antwortText: "D. SysInit",
            istRichtig: false
          },
          {
            antwortText: "E. SysV init",
            istRichtig: true
          }
        ],
        hilfe: "Richtige Antworten sind: B, C und E"
      },
      {
        frageId: '37',
        frageTyp: 'MC',
        frageText: "Which of the following information is stored within the BIOS? (Choose TWO correct answers.)",
        antworten: [
          {
            antwortText: "A. Boot device order",
            istRichtig: true
          },
          {
            antwortText: "B. Linux kernel version",
            istRichtig: false
          },
          {
            antwortText: "C. Timezone",
            istRichtig: false
          },
          {
            antwortText: "D. Hardware configuration",
            istRichtig: true
          },
          {
            antwortText: "E. The system's hostname",
            istRichtig: false
          }
        ],
        hilfe: "Richtige Antworten sind: A und D"
      },
      {
        frageId: '38',
        frageTyp: 'MC',
        frageText: "Which of the following commands brings a system running SysV init into a state in which it is safe to perform maintenance tasks? (Choose TWO correct answers.)",
        antworten: [
          {
            antwortText: "A. shutdown -R 1 now",
            istRichtig: false
          },
          {
            antwortText: "B. shutdown -single now",
            istRichtig: false
          },
          {
            antwortText: "C. init 1",
            istRichtig: true
          },
          {
            antwortText: "D. telinit 1",
            istRichtig: true
          },
          {
            antwortText: "E. runlevel 1",
            istRichtig: false
          }
        ],
        hilfe: "Richtige Antworten sind: C und D"
      },
      {
        frageId: '39',
        frageTyp: 'MC',
        frageText: "What of the following statements are true regarding /dev/ when using udev? (Choose TWO correct answers.)",
        antworten: [
          {
            antwortText: "A. Entries for all possible devices get created on boot even if those devices are not connected.",
            istRichtig: false
          },
          {
            antwortText: "B. Additional rules for udev can be created by adding them to /etc/udev/rules.d/.",
            istRichtig: true
          },
          {
            antwortText: "C. When using udev, it is not possible to create block orcharacter devices in /dev/ using mknod.",
            istRichtig: false
          },
          {
            antwortText: "D. The /dev/ directory is a filesystem of type tmpfs and is mounted by udev during system startup.",
            istRichtig: true
          },
          {
            antwortText: "E. The content of /dev/ is stored in /etc/udev/dev and is restored during system startup.",
            istRichtig: false
          }
        ],
        hilfe: "Richtige Antworten sind: B und D"
      },
      {
        frageId: '40',
        frageTyp: 'MC',
        frageText: "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
        antworten: [
          {
            antwortText: "A. find /tmp -user root -print",
            istRichtig: true
          },
          {
            antwortText: "B. find -path /tmp -uid root",
            istRichtig: false
          },
          {
            antwortText: "C. find /tmp -uid root -print",
            istRichtig: false
          },
          {
            antwortText: "D. find /tmp -user root",
            istRichtig: true
          },
          {
            antwortText: "E. find -path /tmp -user root -print",
            istRichtig: false
          }
        ],
        hilfe: "Richtige Antworten sind: A und D"
      },
      {
        frageId: '41',
        frageTyp: 'FI',
        frageText: "Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)",
        antwort: {
          antwortText: ["df"]
        },
        hilfe: "Richtige Antwort ist: df"
      },
      {
        frageId: '42',
        frageTyp: 'FI',
        frageText: "Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).",
        antwort: {
          antwortText: ["updatedb"]
        },
        hilfe: "Richtige Antwort ist: updatedb"
      },
      {
        frageId: '43',
        frageTyp: 'FI',
        frageText: "Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)",
        antwort: {
          antwortText: ["du"]
        },
        hilfe: "Richtige Antwort ist: du"
      },
      {
        frageId: '44',
        frageTyp: 'FI',
        frageText: "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)",
        antwort: {
          antwortText: ["cmdline"]
        },
        hilfe: "Richtige Antwort ist: cmdline"
      },
      {
        frageId: '45',
        frageTyp: 'FI',
        frageText: "Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)",
        antwort: {
          antwortText: ["watch"]
        },
        hilfe: "Richtige Antwort ist: watch"
      },
      {
        frageId: '46',
        frageTyp: 'FI',
        frageText: "Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)",
        antwort: {
          antwortText: ["nice"]
        },
        hilfe: "Richtige Antwort ist: nice"
      },
      {
        frageId: '47',
        frageTyp: 'FI',
        frageText: "What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)",
        antwort: {
          antwortText: ["/etc/yum.conf"]
        },
        hilfe: "Richtige Antwort ist: /etc/yum.conf"
      },
      {
        frageId: '48',
        frageTyp: 'FI',
        frageText: "Which file from the /proc/file system contains a list of all currently mounted devices? (Specify the full name of the file, including path.)",
        antwort: {
          antwortText: ["/proc/mounts"]
        },
        hilfe: "Richtige Antwort ist: /proc/mounts"
      },
      {
        frageId: '49',
        frageTyp: 'FI',
        frageText: "Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)",
        antwort: {
          antwortText: ["jobs"]
        },
        hilfe: "Richtige Antwort ist: jobs"
      },
      {
        frageId: '50',
        frageTyp: 'FI',
        frageText: "Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)",
        antwort: {
          antwortText: ["renice"]
        },
        hilfe: "Richtige Antwort ist: renice"
      },
      {
        frageId: '51',
        frageTyp: 'FI',
        frageText: "Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)",
        antwort: {
          antwortText: ["/etc/inittab"]
        },
        hilfe: "Richtige Antwort ist: /etc/inittab"
      },
      {
        frageId: '52',
        frageTyp: 'SC',
        frageText: "When redirecting the output of find to the xargscommand, what option to find is useful if the filenames contain spaces?",
        antworten: [
          {
            antwortText: "A. –rep-space",
            istRichtig: false
          },
          {
            antwortText: "B. -printnul",
            istRichtig: false
          },
          {
            antwortText: "C. -nospace",
            istRichtig: false
          },
          {
            antwortText: "D. –ignore-space",
            istRichtig: false
          },
          {
            antwortText: "E. –print0",
            istRichtig: true
          }
          
        ],
        hilfe: "Richtige Antwort ist: E."
      },
      {
        frageId: '53',
        frageTyp: 'MC',
        frageText: "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
        antworten: [
          {
            antwortText: "A. uptime",
            istRichtig: true
          },
          {
            antwortText: "B. up",
            istRichtig: false
          },
          {
            antwortText: "C. time --up",
            istRichtig: false
          },
          {
            antwortText: "D. uname –u",
            istRichtig: false
          },
          {
            antwortText: "E. top",
            istRichtig: true
          }
          
        ],
        hilfe: "Richtige Antworten sind: A und E."
      },
      {
        frageId: '54',
        frageTyp: 'MC',
        frageText: "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.shwithout starting a subshell? (Choose two.)",
        antworten: [
          {
            antwortText: "A. source /usr/local/bin/runme.sh",
            istRichtig: true
          },
          {
            antwortText: "B. /usr/local/bin/runme.sh",
            istRichtig: false
          },
          {
            antwortText: "C. /bin/bash /usr/local/bin/runme.sh",
            istRichtig: false
          },
          {
            antwortText: "D. /usr/local/bin/runme.sh",
            istRichtig: true
          },
          {
            antwortText: "E. run /usr/local/bin/runme.sh",
            istRichtig: false
          }
          
        ],
        hilfe: "Richtige Antworten sind: A und D."
      },
      {
        frageId: '55',
        frageTyp: 'SC',
        frageText: "Which of the following commands redirects the output of ls to standard error?",
        antworten: [
          {
            antwortText: "A. ls >-1",
            istRichtig: false
          },
          {
            antwortText: "B. ls <<ERR",
            istRichtig: false
          },
          {
            antwortText: "C. ls >&2",
            istRichtig: true
          },
          {
            antwortText: "D. ls >>2",
            istRichtig: false
          },
          {
            antwortText: "E. ls |error",
            istRichtig: false
          }
          
        ],
        hilfe: "Richtige Antwort ist: C."
      },
      {
        frageId: '56',
        frageTyp: 'SC',
        frageText: "Which of the following commands displays the contents of a gzip compressed tar archive?",
        antworten: [
          {
            antwortText: "A. gzip archive.tgz | tar xvf",
            istRichtig: false
          },
          {
            antwortText: "B. tar –fzt archive.tgz",
            istRichtig: false
          },
          {
            antwortText: "C. gzip –d archive.tgz | tar tvf",
            istRichtig: false
          },
          {
            antwortText: "D. tar cf archive.tgz",
            istRichtig: false
          },
          {
            antwortText: "E. tar ztf archive.tgz",
            istRichtig: true
          }
          
        ],
        hilfe: "Richtige Antwort ist: E."
      },
      {
        frageId: '57',
        frageTyp: 'SC',
        frageText: "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
        antworten: [
          {
            antwortText: "A. fmt –f 1,4 /etc/passwd",
            istRichtig: false
          },
          {
            antwortText: "B. cut –d : -f 1,4 /etc/passwd",
            istRichtig: true
          },
          {
            antwortText: "C. sort –t : -k 1,4 /etc/passwd",
            istRichtig: false
          },
          {
            antwortText: "D. paste –f 1,4 /etc/passwd",
            istRichtig: false
          },
          {
            antwortText: "E. split –c 1,4 /etc/passwd",
            istRichtig: false
          }
          
        ],
        hilfe: "Richtige Antwort ist: B."
      },
      {
        frageId: '58',
        frageTyp: 'SC',
        frageText: "Which of the following regular expressions represents a single upper-case letter?",
        antworten: [
          {
            antwortText: "A. :UPPER:",
            istRichtig: false
          },
          {
            antwortText: "B. [A-Z]",
            istRichtig: true
          },
          {
            antwortText: "C. !a-z",
            istRichtig: false
          },
          {
            antwortText: "D. %C",
            istRichtig: false
          },
          {
            antwortText: "E. {AZ}",
            istRichtig: false
          }
          
        ],
        hilfe: "Richtige Antwort ist: B."
      },
      {
        frageId: '59',
        frageTyp: 'MC',
        frageText: "Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose two.)",
        antworten: [
          {
            antwortText: "A. LABEL",
            istRichtig: true
          },
          {
            antwortText: "B. ID",
            istRichtig: false
          },
          {
            antwortText: "C. FIND",
            istRichtig: false
          },
          {
            antwortText: "D. NAME",
            istRichtig: false
          },
          {
            antwortText: "E. UUID",
            istRichtig: true
          }
          
        ],
        hilfe: "Richtige Antworten sind: A und E."
      },
      {
        frageId: '60',
        frageTyp: 'MC',
        frageText: "Which of the following files are found in the /boot/ file system? (Choose two.)",
        antworten: [
          {
            antwortText: "A. Linux kernel images",
            istRichtig: true
          },
          {
            antwortText: "B. Bash shell binaries",
            istRichtig: false
          },
          {
            antwortText: "C. systemd target and service units",
            istRichtig: true
          },
          {
            antwortText: "D. Initial ramdisk images",
            istRichtig: false
          },
          {
            antwortText: "E. fsck binaries",
            istRichtig: false
          }
          
        ],
        hilfe: "Richtige Antworten sind: A und C."
      }
    ]
  }

  // bekommt alle Fragentypen, wir brauchen es im LMEinst.
  getFragenTypen() {
    return this.fragenTypen;
  }

  // bekommen FrTyp und -Anzahl aus LMEinst.
  getFragenTyp(frTyp: string):string {
    return this.fragenTyp = frTyp;
  }
  getFragenAnzahl(frAnzahl: number):number {
    return this.fragenAnzahl = frAnzahl;
  }

  // bekommen UserAntworten aus Prüfmodus und leiten für Auswertung weiter
  getUserAntworten(userAntworten: UserAntwort[]):UserAntwort[] {
    console.log('Service hat bekommt: ', this.userAntworten)
    return this.userAntworten = userAntworten;
  }

  // bekommen Fragenpull
  getAll() {
    return this.fragen;
  }

}
