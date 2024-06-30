import { Question } from '../models/definitions';

export const questions: Question[] = [
  {
    questionId: '1',
    questionTypeId: 'SC',
    questionText:
      'Suppose that you work for a company that designs and builds experimental rockets.\n' +
      'You have several projects in the works. You also have several design engineers who have skills in multiple areas.\n' +
      'As a manager, you want to know which employees, having which skills, have worked on which projects.\n' +
      'Currently, this data is scattered among the EMPLOYEE table, the PROJECTS table, and the SKILLS table.\n' +
      'The EMPLOYEE table carries data about employees, and EMPLOYEE.EmpID is its primary key.\n' +
      'The PROJECTS table has a row for each project that an employee has worked on.\n' +
      'Suppose that, as a manager, you want to see all the information about all the employees.\n\n' +
      'SELECT *\nFROM EMPLOYEE E, PROJECTS P, SKILLS S\nWHERE E.EmpID = P.EmpID AND E.EmpID = S.EmpID;\n\n' +
      'Which query would give the same output?\n\n' +
      'EmpID  Name\n' +
      '1      Ferguson\n' +
      '2      Adams\n' +
      '3      Smith',
    answers: [
      {
        answerText:
          'A. SELECT * FROM EMPLOYEE E INNER JOIN PROJECTS P ON (E.EmpID = P.EmpID) INNER JOIN SKILLS S ON (E.EmpID = S.EmpID);',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT * FROM EMPLOYEE E RIGHT JOIN PROJECTS P ON (E.EmpID = P.EmpID) INNER JOIN SKILLS S ON (E.EmpID = S.EmpID);',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT * FROM EMPLOYEE E INNER JOIN PROJECTS P ON (E.EmpID = P.EmpID) LEFT OUTER JOIN SKILLS S ON (E.EmpID = S.EmpID);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT * FROM EMPLOYEE E INNER JOIN PROJECTS P ON (E.EmpID = P.EmpID) INNER JOIN SKILLS S ON (E.EmpID = S.EmpID);',
        isCorrect: false,
      },
      {
        answerText:
          'E. SELECT * FROM EMPLOYEE E, PROJECTS P, SKILLS S WHERE EXISTS EmpID = (SELECT EmpID FROM EMPLOYEE E WHERE E.EmpID = S.EmpID);',
        isCorrect: false,
      },
    ],
    help: '"All the information" and "all employees" you must use INNER JOIN. SIND A UND D NICHT GLEICH?',
  },
  {
    questionId: '2',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true? (Choose two.)',
    answers: [
      {
        answerText:
          'A. LONG is an Oracle data type for storing characters data of variable length up to 2 Gigabytes in length.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The length of LONG values might be limited by the memory available on your computer.',
        isCorrect: true,
      },
      {
        answerText:
          'C. You can use columns defined as LONG in SELECT lists, SET clauses of UPDATE statements, and VALUES clauses of multitable Inserts statements.',
        isCorrect: false,
      },
      {
        answerText:
          'D. You cannot use columns defined as LONG in SELECT lists with SET operators but you can use them in the ORDER BY.',
        isCorrect: false,
      },
      {
        answerText:
          'E. You can use columns defined as LONG in virtual columns.',
        isCorrect: false,
      },
    ],
    help: 'You cannot use columns defined as LONG with SET operators and virtual columns.',
  },
  {
    questionId: '3',
    questionTypeId: 'MC',
    questionText:
      'Which two statements will return the names of the 5 employees with the lowest salaries? (Choose two.)',
    answers: [
      {
        answerText:
          'A. SELECT LAST_NAME, SALARY FROM EMPLOYEES FETCH FIRST 5 ROWS ONLY ORDER BY SALARY;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT LAST_NAME, SALARY FROM EMPLOYEES FETCH FIRST 5 ROWS WITH TIES;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT LAST_NAME, SALARY FROM EMPLOYEES WHERE ROWNUM <= 5 ORDER BY (SELECT SALARY FROM EMPLOYEES);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT LAST_NAME, SALARY FROM EMPLOYEES ORDER BY SALARY FETCH FIRST 5 ROWS ONLY;',
        isCorrect: true,
      },
    ],
    help: 'WITH TIES AND ONLY give the same result when there is no ORDER BY clause.',
  },
  {
    questionId: '4',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true regarding LOBs? (Choose two.)',
    answers: [
      {
        answerText: 'A. You cannot define more than one LOB column in a table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. LOBs can be attributes of an object type (user-defined data type).',
        isCorrect: true,
      },
      {
        answerText:
          'C. NCLOB and BFILE can store large and unstructured data such as text, image, video, and spatial data.',
        isCorrect: true,
      },
      {
        answerText:
          'D. NCLOB and BFILE can only store large text data in an operating system file.',
        isCorrect: false,
      },
    ],
    help: 'You can define more than one LOB column in a table. NCLOB store data internally and BFILE store externally.',
  },
  {
    questionId: '5',
    questionTypeId: 'MC',
    questionText: 'What can DDL be used for? (Choose three.)',
    answers: [
      {
        answerText: 'A. Add comments to a database table',
        isCorrect: true,
      },
      {
        answerText: 'B. Add columns to a database table',
        isCorrect: true,
      },
      {
        answerText: 'C. Add data to a database table',
        isCorrect: true,
      },
      {
        answerText: 'D. Add privileges for a user to a database table',
        isCorrect: false,
      },
      {
        answerText: 'E. Query data from a given table',
        isCorrect: false,
      },
    ],
    help: 'There is no DDL statement to remove data from a database table. For this, use either UPDATE or DELETE. UPDATE can be used to remove data from one or more columns in a given row, and DELETE can be used to remove an entire row. E is a DML statement.',
  },
  {
    questionId: '6',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following CREATE SEQUENCE statement:\n\n' +
      'CREATE SEQUENCE seq1 START WITH 100 INCREMENT BY 20 MAXVALUE 460 CYCLE NOCACHE;\n\n' +
      'The sequence SEQ1 has generated numbers up to the maximum limit of 460.\n' +
      'You issue the following SQL statement:\n\nSELECT seql.nextval FROM dual;\n\n' +
      'What is displayed by the SELECT statement?',
    answers: [
      {
        answerText: 'A. 100',
        isCorrect: false,
      },
      {
        answerText: 'B. an error',
        isCorrect: false,
      },
      {
        answerText: 'C. 20',
        isCorrect: false,
      },
      {
        answerText: 'D. 1',
        isCorrect: true,
      },
      {
        answerText: 'E. 461',
        isCorrect: false,
      },
    ],
    help: 'The sequence will go to the minimum value at cycle, and with no minimum value specified, the default is 1.',
  },
  {
    questionId: '7',
    questionTypeId: 'SC',
    questionText:
      'Examine this statement:\n\n' +
      'SELECT student_id, height FROM student_heights WHERE height > &&value;\n\n' +
      'You run the statement once, and when prompted you enter a value of 5.8.\n' +
      'A report is produced. What happens when you run the statement a second time?',
    answers: [
      {
        answerText: 'A. An error is returned.',
        isCorrect: false,
      },
      {
        answerText: 'B. You are prompted to enter a new value.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A report is produced that matches the first report produced.',
        isCorrect: true,
      },
      {
        answerText:
          'D. You are asked whether you want a new value or if you want to run the report based on the previous value.',
        isCorrect: false,
      },
    ],
    help: 'Use the double-ampersand if you want to reuse the variable value without prompting the user each time.',
  },
  {
    questionId: '8',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure of the PLAYERS table:\n\n' +
      'PLAYERS_ID  NUMBER  Primary Key\n' +
      'FIRST_NAME  VARCHAR2(25)\n' +
      'LAST_NAME   VARCHAR2(25)\n\n' +
      'Which three statements insert a row into the table? (Choose three.)',
    answers: [
      {
        answerText: "A. INSERT INTO PLAYERS VALUES (NULL,'Donald','Trump');",
        isCorrect: false,
      },
      {
        answerText:
          "B. INSERT INTO PLAYERS(first_name, LAST_NAME ) VALUES('Donald','Trump');",
        isCorrect: false,
      },
      {
        answerText: "C. INSERT INTO PLAYERS VALUES ( 1000, 'Donald', NULL);",
        isCorrect: true,
      },
      {
        answerText:
          "D. INSERT INTO PLAYERS (first_name, LAST_NAME, PLAYERS_ID) VALUES (1000, 'Donald', 'Trump');",
        isCorrect: false,
      },
      {
        answerText: 'E. INSERT INTO PLAYERS (PLAYERS_ID) VALUES (1000);',
        isCorrect: true,
      },
      {
        answerText:
          "F. INSERT INTO PLAYERS (PLAYERS_ID, first_name, LAST_NAME) VALUES (1000, 'Donald', '');",
        isCorrect: true,
      },
    ],
    help:
      'A: and B: are wrong because PLAYERS_ID cannot be NULL (PK).\n' +
      'D: is incorrect because the third value should be LAST_NAME, not a number.',
  },
  {
    questionId: '9',
    questionTypeId: 'SC',
    questionText:
      'Which of the following is NOT a capability of the SELECT statement?',
    answers: [
      {
        answerText: 'A. It can transform queried data and display the results.',
        isCorrect: false,
      },
      {
        answerText: 'B. It can remove data from a table.',
        isCorrect: true,
      },
      {
        answerText: 'C. It can join data from multiple tables.',
        isCorrect: false,
      },
      {
        answerText: 'D. It can aggregate database data.',
        isCorrect: false,
      },
    ],
    help:
      'The SELECT statement is not used to remove data from a table.\n' +
      'The act of querying merely copies data out of a table for reporting and other comparable purposes,\n' +
      'but the SELECT statement — as a stand-alone statement — always leaves the data it encounters\n' +
      'untouched and unmodified.',
  },
  {
    questionId: '10',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding constraints? (Choose two.)',
    answers: [
      {
        answerText: 'A. A foreign key cannot contain NULL values.',
        isCorrect: false,
      },
      {
        answerText: 'B. The column with a UNIQUE constraint can store NULLS.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A foreign key must contain only values from the parent table primary key or unique key.',
        isCorrect: true,
      },
      {
        answerText: 'D. A foreign key value cannot be modified.',
        isCorrect: false,
      },
    ],
    help: 'The UNIQUE constraint allows NULLs. Foreign keys can contain NULL values.',
  },
  {
    questionId: '11',
    questionTypeId: 'MC',
    questionText: 'What is true about JOIN? (choose two.)',
    answers: [
      {
        answerText:
          'A. SQL combines the result of two or more SELECT statements.',
        isCorrect: false,
      },
      {
        answerText:
          'B. JOIN combines data from many tables based on a matched condition between them.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Datatypes of corresponding columns selected from each table should be same.',
        isCorrect: false,
      },
      {
        answerText: 'D. It returns distinct rows.',
        isCorrect: false,
      },
      {
        answerText: 'E. It combines data into new columns.',
        isCorrect: true,
      },
    ],
    help:
      'A: Set operators.\n' +
      'C: Datatypes of corresponding columns selected from each table can be different.\n' +
      'E: It may not return distinct columns.',
  },
  {
    questionId: '12',
    questionTypeId: 'SC',
    questionText: 'What is true about virtual columns?',
    answers: [
      {
        answerText:
          'A. Virtual columns perfom better because they are calculated at run-time.',
        isCorrect: false,
      },
      {
        answerText: 'B. Virtual columns can be manipualted by DML.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The expression may refer to a deterministic user-defined function, however, if it does, the virtual column cannot be used as a partitioning key column.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The expression in the virtual colum can refer to normal columns of other tables.',
        isCorrect: false,
      },
    ],
    help:
      'A: Virtual columns may reduce query performance because their values are calculated at run-time.\n' +
      'B: Virtual columns cannot be manipulated by DML statements.\n' +
      'D: The expression in the virtual column has many restrictions. One of them is that it cannot refer to other virtual columns.',
  },
  {
    questionId: '13',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure and data in the PRICE_LIST table:\n\n' +
      'PROD_ID     NOT NULL  NUMBER(3)\n' +
      'PROD_PRICE            VARCHAR2(10)\n\n' +
      'PROD_ID  PROD_PRICE\n' +
      '-------  ----------\n' +
      '10       $87,654.55\n' +
      '11       $509.75\n' +
      '12       $16669,234\n\n' +
      'Which SQL statement would give the required result?',
    answers: [
      {
        answerText:
          "A. SELECT TO_CHAR(PROD_PRICE * .14, '$99.999.99') FROM PRICE_LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT TO_NUMBER(TO_NUMBER(PROD_PRICE, '$99.999.99')* .14/$99.999.00') FROM PRICE_LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT TO_CHAR(TO_NUMBER(PROD_PRICE )* .14, '$99.999.00') FROM PRICE_LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT TO_CHAR(TO_NUMBER(PROD_PRICE, 'S99.999.99')* .14, '$99.999.00') FROM PRICE_LIST;",
        isCorrect: true,
      },
    ],
    help: 'TO_CHAR(TO_NUMBER()) is needed and you need to add NLS_PARAMETERS for both functions therefore C is wrong.',
  },
  {
    questionId: '14',
    questionTypeId: 'MC',
    questionText:
      "Which three factors influences the optimizer's choice of an execution plan? (Choose three.)",
    answers: [
      {
        answerText: 'A. Cardinality estimates.',
        isCorrect: true,
      },
      {
        answerText: 'B. The OPTIMIZER_MODE initialization parameter.',
        isCorrect: true,
      },
      {
        answerText: 'C. Fixed baselines.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Type of connection used to connect to database instance.',
        isCorrect: false,
      },
      {
        answerText: 'E. Object statistics in the data dictionary.',
        isCorrect: true,
      },
    ],
    help:
      'Less repetitive data and higher degree of selectivity arc more likely to be included in an index.\n' +
      "Fixed baselines and the type of connection do not influence the optimizer's choice.",
  },
  {
    questionId: '15',
    questionTypeId: 'SC',
    questionText:
      'Examine the command:\n\n' +
      'SQL> ALTER TABLE YSL_SALES\n' +
      'ADD CONSTRAINT fk_SALES_id FOREIGN KEY (SALES_id)\n' +
      'REFERENCES YSL (YSL_id) ON DELETE CASCADE;\n\n' +
      'What does ON DELETE CASCADE imply?',
    answers: [
      {
        answerText:
          'A. When the YSL table is dropped, the YSL_SALES table is dropped.',
        isCorrect: false,
      },
      {
        answerText:
          'B. When the YSL table is dropped, all the rows in the YSL_SALES table are deleted but the table structure is retained.',
        isCorrect: false,
      },
      {
        answerText:
          'C. When a value in the YSL.SALES_ID column is deleted, the corresponding value is updated in the YSL_SALES.SALES_ID column.',
        isCorrect: false,
      },
      {
        answerText:
          'D. When a row in the YSL table is deleted, the rows in the YSL_SALES table whose SALES_ID matches that of the deleted row in the YSL table are also deleted.',
        isCorrect: true,
      },
    ],
    help: 'D: is the definition of ON DELETE CASCADE.',
  },
  {
    questionId: '16',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the USING clause in table joins? (Choose two.)',
    answers: [
      {
        answerText: 'A. It can be used to join a maximum of three tables.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It can be used to access data from tables through equijoins as well as nonequijoins.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It can be used to join tables that have columns with the same name and compatible data types.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It can be used to restrict the number of columns used in a join.',
        isCorrect: true,
      },
    ],
    help:
      'Nonequijoins do not work with the USING clause.\n' +
      'A: you can join as many tables as you want.',
  },
  {
    questionId: '17',
    questionTypeId: 'MC',
    questionText:
      'In which three situations does a transaction complete? (Choose three.)',
    answers: [
      {
        answerText: 'A. When a ROLLBACK command is executed.',
        isCorrect: true,
      },
      {
        answerText: 'B. When a DELETE statement is executed.',
        isCorrect: false,
      },
      {
        answerText: 'C. When a PL/SQL anonymous block is executed.',
        isCorrect: false,
      },
      {
        answerText:
          'D. When a data definition language (DDL) statement is executed.',
        isCorrect: true,
      },
      {
        answerText:
          'E. When a TRUNCATE statement is executed after the pending transaction.',
        isCorrect: true,
      },
    ],
    help: 'B: DELETE is a DML statement -> No commit.\n' + 'C: is irrelevant.',
  },
  {
    questionId: '18',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about the data dictionary? (choose two.)',
    answers: [
      {
        answerText:
          'A. The SYS user owns all base tables and user-accessible views in the data dictionary.',
        isCorrect: true,
      },
      {
        answerText: 'B. All user actions are recorded in the data dictionary.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The data dictionary is constantly updated to reflect changes to database objects, permissions, and data.',
        isCorrect: true,
      },
      {
        answerText:
          'D. All users have permission to access all information in the data dictionary by default.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Base tables in the data dictionary have the prefix DBA_.',
        isCorrect: false,
      },
    ],
    help:
      'A: and C: are correct.\n' +
      'You need permission to access ALL information in the data dictionary.\n' +
      'DBA_ means all objects in the database.',
  },
  {
    questionId: '19',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about the MERGE statement? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The WHEN NOT MATCHED clause can be used to specify the inserts to be performed.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The WHEN MATCHED clause can be used to specify the inserts to be performed.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The WHEN NOT MATCHED clause can be used to specify the updates to be performed.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The WHEN NOT MATCHED clause can be used to specify the deletions to be performed.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The WHEN MATCHED clause can be used to specify the updates to be performed.',
        isCorrect: true,
      },
    ],
    help:
      'WHEN NOT MATCHED -> INSERT.\n' + 'WHEN MATCHED -> UPDATE and DELETE.',
  },
  {
    questionId: '20',
    questionTypeId: 'MC',
    questionText: 'What is the default value for CURRENT_TIMESTAMP?',
    answers: [
      {
        answerText: 'A. 1',
        isCorrect: false,
      },
      {
        answerText: 'B. 2',
        isCorrect: false,
      },
      {
        answerText: 'C. 6',
        isCorrect: true,
      },
      {
        answerText: 'D. 9',
        isCorrect: false,
      },
      {
        answerText: 'E. 0',
        isCorrect: false,
      },
    ],
    help:
      'Current_timestamp gives the date and time in the SESSION timezone, in a value of datatype\n' +
      '"timestamp with time zone". If you omit precision, then the default is 6.',
  },
  {
    questionId: '21',
    questionTypeId: 'SC',
    questionText:
      'On your Oracle 12c database, you issue the following commands to create indexes:\n\n' +
      'SQL> CREATE INDEX oe.ord_Countries_IDX ON oe.orders (COUNTRIES_Id, sales_AV_id);\n\n' +
      'SQL> CREATE BITMAP INDEX oe.ord_COUNTRIES_IDXX ON oe.orders (COUNTRIES_Id, sales_AV_id);\n\n' +
      'Which statement is correct?',
    answers: [
      {
        answerText:
          'A. Only the ORD_COUNTRIES_IDX index is created and it is visible.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Both the indexes are created and both of them are visible.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Both the indexes are created; however, only the ORD_COUNTRIES_IDX index is visible.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Both the indexes are created; however, only the ORD_COUNTRIES_IDXX index is visible.',
        isCorrect: false,
      },
    ],
    help: 'BITMAP datatype cannot be indexed here. Index is visible because we did not include INVISIBLE when we wrote CREATE INDEX.',
  },
  {
    questionId: '22',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about aggregate functions?',
    answers: [
      {
        answerText:
          'A. SUM() and AVG() only accept Numeric and Date datatypes.',
        isCorrect: false,
      },
      {
        answerText: 'B. MEDIAN() only accepts Numeric datatype.',
        isCorrect: false,
      },
      {
        answerText: 'C. MEDIAN() accepts both Numeric and Date datatypes.',
        isCorrect: true,
      },
      {
        answerText:
          'D. MIN() and MAX() only accept Numeric and Date datatypes.',
        isCorrect: false,
      },
      {
        answerText:
          'E. MIN() and MAX() only accept Numeric and Character datatypes.',
        isCorrect: false,
      },
    ],
    help:
      'Character, date, numeric: COUNT, MIN, MAX.\n' +
      'Numeric only: SUM, AVG.\n' +
      'Numeric, date: MEDIAN.',
  },
  {
    questionId: '23',
    questionTypeId: 'SC',
    questionText:
      'What are the output of select trunc(mod(23,3), -1) and select round(mod(23,3), -1)?',
    answers: [
      {
        answerText: 'A. 0,1',
        isCorrect: false,
      },
      {
        answerText: 'B. 0,2',
        isCorrect: false,
      },
      {
        answerText: 'C. 2,0',
        isCorrect: false,
      },
      {
        answerText: 'D. 2,2',
        isCorrect: false,
      },
      {
        answerText: 'E. 0,0',
        isCorrect: true,
      },
      {
        answerText: 'F. 1,0',
        isCorrect: false,
      },
    ],
    help: '-',
  },
  {
    questionId: '24',
    questionTypeId: 'SC',
    questionText:
      'Which normal form is a table in if it has no multi-valued attributes and no partial dependencies?',
    answers: [
      {
        answerText: 'A. second normal form',
        isCorrect: false,
      },
      {
        answerText: 'B. first normal form',
        isCorrect: true,
      },
      {
        answerText: 'C. third normal form',
        isCorrect: false,
      },
      {
        answerText: 'D. fourth normal form',
        isCorrect: false,
      },
    ],
    help:
      '1NF. Eliminate all repeating values and identify a primary key or primary composite key.\n' +
      '2NF. Make certain the table is in 1NF and eliminate any partial dependencies.\n' +
      '3NF. Make certain the table is in 2NF and remove any transitive dependencies.',
  },
  {
    questionId: '25',
    questionTypeId: 'SC',
    questionText: 'Which statement is true regarding external tables?',
    answers: [
      {
        answerText:
          'A. The CREATE TABLE AS SELECT statement can be used to upload data into regular table in the database from an external table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The data and metadata for an external table are stored outside the database.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The default REJECT LIMIT for external tables is UNLIMITED.',
        isCorrect: false,
      },
      {
        answerText:
          'D. ORACLE_LOADER and ORACLE_DATAPUMP have exactly the same functionality when used with an external table.',
        isCorrect: false,
      },
    ],
    help: 'Create table as select allows us to upload data into normal table from external table.',
  },
  {
    questionId: '26',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure of the CUSTOMERS table: (Choose two.)\n\n' +
      'NAME              NULL?     TYPE\n' +
      '----------------  --------  ------------\n' +
      'CUSTNO            NOT NULL  NUMBER(3)\n' +
      'CUSTNAME          NOT NULL  VARCHAR2(25)\n' +
      'CUSTADDRESS                 VARCHAR2(35)\n' +
      'CUST_CREDIT_LMIT            NUMBER(5)\n\n' +
      "You must determine if any customers' details have been entered more than once using a different CUSTNO,\n" +
      'by listing all duplicate names. Which two methods can you use to get the required result?',
    answers: [
      {
        answerText: 'A. Subquery',
        isCorrect: true,
      },
      {
        answerText: 'B. Self-join',
        isCorrect: true,
      },
      {
        answerText: 'C. Full outer-join with EXISTS',
        isCorrect: false,
      },
      {
        answerText: 'D. Left outer-join with self-join',
        isCorrect: false,
      },
      {
        answerText: 'E. Natural join with using',
        isCorrect: false,
      },
    ],
    help:
      'Self join and a subquery work perfectly fine in this example.\n' +
      'You already have a condition and you must not forget aliases for tables.',
  },
  {
    questionId: '27',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following two SQL statements:\n\n' +
      "SELECT prod_id, NVL2(prod_expiry_date, prod_expiry_date + 15,'') FROM products;\n\n" +
      'SELECT prod_id, NVL(prod_expiry_date, prod_expiry_date + 15) FROM products;\n\n' +
      'Which statement is true regarding the outcome?',
    answers: [
      {
        answerText:
          'A. Both the statements execute and give different results.',
        isCorrect: true,
      },
      {
        answerText: 'B. Only the second SQL statement executes successfully.',
        isCorrect: false,
      },
      {
        answerText: 'C. Both the statements execute and give the same result.',
        isCorrect: false,
      },
      {
        answerText: 'D. Only the first SQL statement executes successfully.',
        isCorrect: false,
      },
    ],
    help: 'It cannot give the same result as in NVL2(e1, e2, e3); e1 never returns.',
  },
  {
    questionId: '28',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the PRODUCTS table:\n\n' +
      'Name              Null?     Type\n' +
      '----------------  --------  --------------\n' +
      'PROD_ID           NOT NULL  NUMBER(6)\n' +
      'PROD_NAME         NOT NULL  VARCHAR2(50)\n' +
      'PROD_DESC         NOT NULL  VARCHAR2(4000)\n' +
      'PROD_SUBCATEGORY  NOT NULL  VARCHAR2(50)\n' +
      'PROD_MIN_PRICE    NOT NULL  NUMBER(8,2)\n' +
      'PROD_TOTAL        NOT NULL  VARCHAR2(13)\n' +
      'PROD_TOTAL_ID     NOT NULL  NUMBER\n' +
      'PROD_DETAILS      NOT NULL  VARCHAR2(2000)\n\n' +
      'You want to change the definition of the PRODUCTS table.\n' +
      'The PROD_DETAILS column must be changed to allow 3580 characters.\n\n' +
      'Which statement is valid?',
    answers: [
      {
        answerText:
          'A. ALTER TABLE products MODIFY (prod_details CHAR2(3580));',
        isCorrect: false,
      },
      {
        answerText:
          'B. ALTER TABLE products MODIFY COLUMN (prod_detalls CHAR (3580));',
        isCorrect: false,
      },
      {
        answerText:
          'C. ALTER TABLE products CHANGE (prod_details VARCHAR2 (3580));',
        isCorrect: false,
      },
      {
        answerText:
          'D. ALTER TABLE products MODIFY (prod_details VARCHAR2 (3580));',
        isCorrect: true,
      },
    ],
    help: 'D: is the correct syntax. ALTER TABLE TABLEI MODIFY (COLUMN_NAME DATATYPE);',
  },
  {
    questionId: '29',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about the Oracle data type conversion?',
    answers: [
      {
        answerText:
          'A. SQL statements are easier to understand when you use explicit data type conversion functions.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Implicit data type conversion has no impact on performance.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Implicit conversion from a datetime value to a CHAR and NCHAR value will always return an unexpected year depending on the value of the NLS_DATE_FORMAT parameter.',
        isCorrect: false,
      },
      {
        answerText:
          'D. If implicit data type conversion occurs in an index expression, then Oracle Database might not use the index.',
        isCorrect: true,
      },
    ],
    help:
      'A: Explicit data conversion is always preferred.\n' +
      'D: it is defined for the pre-conversion data type. This can have a negative impact on performance.\n' +
      'Implicit data type conversion can have a negative impact on performance, especially if the data\n' +
      'type of a column value is converted to that of a constant rather than the other way around.\n' +
      'C: is a bit tricky. Implicit conversion depends on the context in which it occurs and may not\n' +
      'work the same way in every case. For example, implicit conversion from a datetime value to a VARCHAR2\n' +
      'value may return an unexpected year depending on the value of the NLS_DATE_FORMAT parameter.',
  },
  {
    questionId: '30',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true?',
    answers: [
      {
        answerText:
          'A. INTERVAL YEAR TO MONTH stores a period of time in years, months, and days.',
        isCorrect: false,
      },
      {
        answerText:
          'B. INTERVAL DAY TO SECOND stores a period of time in days, hours, minutes, and seconds.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The default of INTERVAL YEAR TO MONTH is 2 and the default of INTERVAL DAY TO SECOND is 6.',
        isCorrect: false,
      },
      {
        answerText:
          'D. If you specify a trailing field, then it must be less significant than the leading field.',
        isCorrect: true,
      },
    ],
    help:
      'The INTERVAL DAY TO SECOND stores a period of time in terms of days, hours, minutes, and seconds.\n' +
      'The default of INTERVAL YEAR TO MONTH is 2 and the default of INTERVAL DAY TO SECOND is 2.\n' +
      'The trailing field must be less than the leading field.\n' +
      "For example, INTERVAL '1-2' MONTH TO YEAR is invalid because trailing is YEAR which is greater\n" +
      'than the leading field which is MONTH.',
  },
  {
    questionId: '31',
    questionTypeId: 'SC',
    questionText:
      'Examine the output using the format value that was specified for NLS_TIMESTAMP_TZ_FORMAT.\n' +
      '2023-02-02 05:00:00.230000 -07:00\n\n' +
      'Which TO_TIMESTAMP_TZ function would give the same result?',
    answers: [
      {
        answerText:
          'A. SELECT TO_TIMESTAMP_TZ("2023-02-02, 05:00:00.23 AMERICA/LOS ANGLELES", yyyy-mm-dd hh:mi:ss.ff TZR) FROM DUAL;',
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT TO_TIMESTAMP_TZ('2023-02-02, 05:00:00.23 AMERICA/LOS ANGLELES', 'yyyy-mm-dd hh:mi:ss.ff TZR') FROM DUAL;",
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT TO_TIMESTAMP_TZ("2023:02:02, 05:00:00:23 AMERICA/LOS ANGLELES", "yyyy-mm-dd hh:mi:ss.ff TZR") FROM DUAL;',
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT TO_TIMESTAMP_TZ('2023-02-02, 05:00:00.23 AMERICA/LOS ANGLELES', yyyy-mm-dd hh:mi:ss.ff TZR) FROM DUAL;",
        isCorrect: false,
      },
    ],
    help:
      'B: is the correct syntax.\n' +
      'Single quotation marks must be used in this example.\n' +
      'As a reminder, only use double quotation marks when you use aliases.',
  },
  {
    questionId: '32',
    questionTypeId: 'MC',
    questionText:
      'Examine this statement:\n\n' +
      'CREATE TABLE COUNTRIES1 (COUNTRIES_ID, NAME, SIZE, GDP) AS\n' +
      '  SELECT COUNTRIES_NB, COUNTRIES_NAME, SIZE, GDP\n' +
      '  FROM COUNTRIES WHERE 1=2;\n\n' +
      'Which two statements are true about the COUNTRIES1 table?',
    answers: [
      {
        answerText:
          'A. It will not be created because the column-specified names in the SELECT and CREATE TABLE clauses do not match.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It will have NOT NULL constraints on the selected columns which had those constraints in the COUNTRIES table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It will not be created because of the invalid WHERE clause.',
        isCorrect: false,
      },
      {
        answerText: 'D. It is created with no rows.',
        isCorrect: true,
      },
      {
        answerText:
          'E. It has PRIMARY KEY and UNIQUE constraints on the selected columns which had those constraints in the COUNTRIES table.',
        isCorrect: false,
      },
    ],
    help:
      'B: ONLY NOT NULL constraints.\n' +
      'D: 1=2 no rows.\n' +
      'A: the column-specified names in the SELECT and CREATE TABLE clauses do not have to match.',
  },
  {
    questionId: '33',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding views? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The WITH CHECK OPTION constraint can be used in a view definition to restrict the columns displayed through the view.',
        isCorrect: false,
      },
      {
        answerText:
          'B. We cannot refer to a global temporary table with a view.',
        isCorrect: false,
      },
      {
        answerText: 'C. CREATE VIEW can be used with subqueries.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Rows added through a view are deleted from the table automatically when the view is dropped.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Aliases are mandatory when we use aggregate functions within a view.',
        isCorrect: true,
      },
      {
        answerText:
          'F. A subquery used in a complex view definition cannot contain group functions or joins.',
        isCorrect: false,
      },
    ],
    help: 'C: Subqueries -> DML, CREATE TABLE, CREATE VIEW.',
  },
  {
    questionId: '34',
    questionTypeId: 'SC',
    questionText:
      'Assume that you are connected in the sample schema in Capetown, South Africa.\n' +
      'Suppose the NLS_ISO_CURRENCY is set to FRANCE.\n\n' +
      'Which of the following statement would give the required output?\n\n' +
      'OUTPUT: ZAR04,070.56',
    answers: [
      {
        answerText:
          "A. SELECT TO_CHAR(sales_total_france, '€09G999D99') FROM SALES;",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT TO_CHAR(sales_total_france, 'C09G999D99') FROM SALES;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT TO_CHAR(sales_total_france, 'L09G999D99') FROM SALES;",
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT TO_CHAR(sales_total_france, '€9G999D99') FROM SALES;",
        isCorrect: false,
      },
    ],
    help:
      'C: means ISO CURRENCY as defined in the NLS_ISO_CURRENCY parameter.\n' +
      'G: GROUP SEPARATOR, and D - DECIMAL. L - means local currency symbol.\n' +
      'France uses the Euro and not the Rand South African therefore C: is the only correct answer.',
  },
  {
    questionId: '35',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about COALESCE?',
    answers: [
      {
        answerText:
          "A. The COALESCE expression doesn't allow for user-specified NULL-handling.",
        isCorrect: false,
      },
      {
        answerText: 'B. You cannot specify two or more arguments to COALESCE.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Arguments that you specify to COALESCE must all be of the same type, with the exception of integers with doubles.',
        isCorrect: true,
      },
      {
        answerText: 'D. COALESCE does support multi-assign attributes.',
        isCorrect: false,
      },
      {
        answerText:
          'E. You can use the COALESCE expression to evaluate records for multiple values and return the first non-NULL value.',
        isCorrect: true,
      },
    ],
    help: '-',
  },
  {
    questionId: '36',
    questionTypeId: 'MC',
    questionText: 'Which three statements are true regarding the data types?',
    answers: [
      {
        answerText:
          'A. The minimum column width that can be specified for a VARCHAR2 data type column is one.',
        isCorrect: true,
      },
      {
        answerText: 'B. Only one LONG column can be used per table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A TIMESTAMP data type column stores only time values with fractional seconds.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The BLOB data type column is used to store binary data in an operating system file.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The value for a CHAR data type column is blank-padded to the maximum defined column width.',
        isCorrect: true,
      },
    ],
    help:
      'C: TIMESTAMP can store time values without fractional seconds.\n' +
      'D: BLOBs are not stored in the normal database files on disk in the same way as is other data managed by DB.\n' +
      'Instead, they are stored as binary files in a special directory set aside for the purpose.\n' +
      "If you are using an environment, then by default the BLOB directory' is created within the environment's home directory.",
  },
  {
    questionId: '37',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about Data Manipulation Language (DML)?',
    answers: [
      {
        answerText:
          'A. DML automatically disables foreign key constraints when modifying primary key values in the parent table.',
        isCorrect: false,
      },
      {
        answerText: 'B. Each DML statement forms a transaction by default.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A transaction can consist of one or more DML statements.',
        isCorrect: true,
      },
      {
        answerText:
          'D. DML disables foreign key constraints when deleting primary key values in the parent table, only when the ON DELETE CASCADE option is set for the foreigner constraint.',
        isCorrect: false,
      },
    ],
    help: '-',
  },
  {
    questionId: '38',
    questionTypeId: 'SC',
    questionText:
      'You want to display all employees and their managers having 100 as the MANAGER_ID.\n' +
      'You want the output in two columns: the first column would have the LAST_NAME of the managers and\n' +
      'the second column would have LAST_NAME of the employees.\n\n' +
      'Which SQL statement would you execute?',
    answers: [
      {
        answerText:
          'A. SELECT M.LASTNAME "MANAGER", E.LASTNAME "EMPLOYEE" FROM EMPLOYEES M LEFT OUTER JOIN EMPLOYEES E ON E.EMPLOYEE_ID = M.MANAGER_ID WHERE M.MANAGER_ID = 100;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT M.LASTNAME "MANAGER", E.LASTNAME "EMPLOYEE" FROM EMPLOYEES M JOIN EMPLOYEES E ON M.EMPLOYEE_ID = E.MANAGER_ID WHERE M.MANAGER_ID = 100;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT M.LASTNAME "MANAGER", E.LASTNAME "EMPLOYEE" FROM EMPLOYEES M JOIN EMPLOYEES E ON M.EMPLOYEE_ID = E.MANAGER_ID WHERE E.MANAGER_ID = 100;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT M.LASTNAME "MANAGER", E.LASTNAME "EMPLOYEE" FROM EMPLOYEES M RIGHT JOIN EMPLOYEES E ON M.EMPLOYEE_ID = E.MANAGER_ID AND E.MANAGER_ID = 100;',
        isCorrect: false,
      },
    ],
    help: 'C: is the correct syntax. You need an INNER JOIN in this context.',
  },
  {
    questionId: '39',
    questionTypeId: 'SC',
    questionText:
      'You want to create a script to be used to calculate a subgroup statistic on a numeric column.\n\n' +
      'SELECT &GROUP_COL, MAX(&NUMBER_COL) MAXIMUM\n' +
      'FROM &TABLE\n' +
      'GROUP BY &GROUP_COL;\n\n' +
      'What would have to be added to this query on order to produce the required result?',
    answers: [
      {
        answerText: 'A. &TABLE should be &&table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Nothing, the query will work successfully but will not give the required result.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Nothing, the query will work successfully and will give the required result.',
        isCorrect: true,
      },
      {
        answerText: 'D. GROUP BY does not work with substituion variable.',
        isCorrect: false,
      },
    ],
    help: 'C. There is nothing with this query. I will give the required result.',
  },
  {
    questionId: '40',
    questionTypeId: 'SC',
    questionText:
      'Examine the commands used to create COUNTRIES_DETAILS and LENDING_DETAILS tables:\n\n' +
      'CREATE TABLE COUNTRIES_DETAILS (COUNTRIES_ID NUMBER PRIMARY KEY,\n' +
      'COUNTRIES_NAME VARCHAR2(70), SIZE NUMBER(30));\n\n' +
      'CREATE TABLE LENDING_DETAILS (LENDING_ID NUMBER NOT NULL,\n' +
      'COUNTRIES_NAME VARCHAR2(70), COUNTRIES_ID NUMBER)),\n' +
      'COUNTRIES_ID NUMBER REFERENCES LENDING_DETAILS(COUNTRIES_ID));\n\n' +
      'You want to generate a list of all countries IDs along with any lending IDs\n' +
      'that may have been assigned to them.\n' +
      'Which SQL statement must you use?',
    answers: [
      {
        answerText:
          'A. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c RIGHT OUTER JOIN LENDING_DETAILS l ON (c.COUNTRIES_ID = l.COUNTRIES_ID);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c LEFT OUTER JOIN LENDING_DETAILS l ON (c.COUNTRIES_ID = l.COUNTRIES_ID);',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM LENDING_DETAILS LEFT OUTER JOIN COUNTRIES_DETAILS c ON (l.COUNTRIES_ID = c.COUNTRIES_ID );',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c RIGHT OUTER JOIN LENDING_DETAILS l ON (l.COUNTRIES_ID = c.COUNTRIES_ID);',
        isCorrect: false,
      },
      {
        answerText:
          'E. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c FULL OUTER JOIN LENDING_DETAILS l ON (c.COUNTRIES_ID = l.COUNTRIES_ID);',
        isCorrect: false,
      },
    ],
    help: "LEFT OUTER JOIN must be used in this context as you want 'all countries' and only the lending IDs that have been assigned to them.",
  },
  {
    questionId: '41',
    questionTypeId: 'SC',
    questionText:
      'Which statement correctly grants a system privilege? (choose one.)',
    answers: [
      {
        answerText: 'A. GRANT CREATE VIEW ON table1 TO JOHN_KEYNES;',
        isCorrect: false,
      },
      {
        answerText: 'B. GRANT ALTER TABLE TO PUBLIC;',
        isCorrect: false,
      },
      {
        answerText: 'C. GRANT CREATE TABLE TO JOHN_KEYNES, ADAM_SMITH;',
        isCorrect: true,
      },
      {
        answerText: 'D. GRANT CREATE SESSION TO ALL;',
        isCorrect: false,
      },
      {
        answerText: 'E. GRANT CREATE TABLE, SELECT TO KARL_MARX;',
        isCorrect: false,
      },
      {
        answerText:
          'F. GRANT CREATE PUBLIC SYNONYM, ALTER USER TO ECONOMISTS_ROLE;',
        isCorrect: false,
      },
    ],
    help:
      'GRANT SYS PRIV TO USERI, USER2........USER N is the only valid syntax.\n' +
      'You cannot grant a SYS and OBJ privs at the same time.\n' +
      'You cannot grant 2 SYS privs to a role at the same time.',
  },
  {
    questionId: '42',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding data type conversion in query expressions? (Choose two.)',
    answers: [
      {
        answerText:
          "A. SELECT INV_NO FROM INVOICE WHERE inv_date = '15-february-2008' :uses implicit conversion",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT INV_NO + '350' FROM INVOICE : uses implicit conversion",
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT TO_DATE(INV_DATE) FROM INVOICE : requires explicit conversion',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT CONCAT(inv_amt, inv_date) : requires explicit conversion',
        isCorrect: false,
      },
      {
        answerText:
          "E. SELECT INV_NO FROM INVOICE WHERE inv_AMT BETWEEN '101' AND '102' : uses explicit conversion",
        isCorrect: false,
      },
    ],
    help:
      'E: it uses implicit conversion (character to number).\n' +
      "D: doesn't require explicit conversion at all.",
  },
  {
    questionId: '43',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about sequences created in a single instance Oracle database? (Choose two.)',
    answers: [
      {
        answerText:
          'A. When the MAXVALUE limit for a sequence is reached, it can be increased by using the ALTER SEQUENCE statement.',
        isCorrect: true,
      },
      {
        answerText:
          'B. DELETE SEQUENCE1 would remove a sequence from the database.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The numbers generated by an explicitly defined sequence can only be used to insert data in one table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. CURRVAL is used to refer to the most recent sequence number that has been generated for a particular sequence.',
        isCorrect: true,
      },
      {
        answerText:
          'E. When a database instance shuts down abnormally, sequence numbers that have been cached but not used are available again when the instance is restarted.',
        isCorrect: false,
      },
    ],
    help:
      'B: The correct statement for removing a sequence is DROP SEQUENCE.\n' +
      'E: This behavior is not related to sequence numbers.',
  },
  {
    questionId: '44',
    questionTypeId: 'MC',
    questionText:
      'You execute this command:\n\nTRUNCATE TABLE EMPLOYEES;\n\nWhich two statements are true?',
    answers: [
      {
        answerText: 'A. It drops any triggers defined on the table.',
        isCorrect: false,
      },
      {
        answerText: 'B. It always retains the space used by the removed rows.',
        isCorrect: false,
      },
      {
        answerText: "C. The table 'EMPLOYEES' can be ROLLBACK.",
        isCorrect: false,
      },
      {
        answerText: 'D. You need DROP_ANY_TABLE privilege to execute Truncate.',
        isCorrect: true,
      },
      {
        answerText: 'E. It retains the indexes defined on the table.',
        isCorrect: true,
      },
      {
        answerText:
          'F. A FLASHBACK TABLE statement can be used to retrieve the deleted data.',
        isCorrect: false,
      },
    ],
    help:
      "A: Truncate doesn't drop any triggers.\n" +
      'B: Truncate releases space used by the table.\n' +
      "C: Truncate is not transactional, so it can't be rolled back.\n" +
      'F: Truncate cannot be undone with Flashback.',
  },
  {
    questionId: '45',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the execution of the correlated subqueries? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The nested query executes after the outer query returns the row.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The nested query executes first and then the outer query executes.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The outer query executes only once for the result returned by the inner query.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Each row returned by the outer query is evaluated for the results returned by the inner query.',
        isCorrect: true,
      },
    ],
    help:
      'Correlated subqueries: The outer query fetches a row first, \n' +
      'then the inner query executes and returns results based on the fetched row.\n' +
      'This process is repeated for each row of the outer query.',
  },
  {
    questionId: '46',
    questionTypeId: 'SC',
    questionText:
      'The DBA issues this SQL command:\n\n' +
      'CREATE USER Anthony IDENTIFIED by Anthony_Finance_DPT;\n\n' +
      'What privileges does the user Anthony have at this point?',
    answers: [
      {
        answerText: 'A. no privileges',
        isCorrect: true,
      },
      {
        answerText: 'B. only the SELECT privilege',
        isCorrect: false,
      },
      {
        answerText: 'C. only the CONNECT privilege',
        isCorrect: false,
      },
      {
        answerText: 'D. all the privileges of a default user',
        isCorrect: false,
      },
      {
        answerText: 'E. Anthony can only create tables in his own schema.',
        isCorrect: false,
      },
    ],
    help: 'When a user is created in Oracle, by default, no privileges are granted to the user.',
  },
  {
    questionId: '47',
    questionTypeId: 'MC',
    questionText: 'What two statements are true? (choose two.)',
    answers: [
      {
        answerText:
          "A. CASE and DECODE accept optional default values to return if the evaluated expression doesn't match any of the specified possible matches.",
        isCorrect: true,
      },
      {
        answerText:
          "B. CASE and NULLIF accept optional default values to return if the evaluated expression doesn't match any of the specified possible matches.",
        isCorrect: false,
      },
      {
        answerText:
          "C. NULLIF and DECODE accept optional default values to return if the evaluated expression doesn't match any of the specified possible matches.",
        isCorrect: false,
      },
      {
        answerText:
          'D. NVL considers an expression and evaluates its value to determine whether the value is NULL.',
        isCorrect: true,
      },
      {
        answerText:
          'E. NULLIF considers an expression and evaluates its value to determine whether the value is NULL.',
        isCorrect: false,
      },
      {
        answerText:
          'F. COALESCE considers an expression and evaluates its value to determine whether the value is NULL.',
        isCorrect: false,
      },
    ],
    help: 'CASE and DECODE accept optional default values. D is the definition of NVL.',
  },
  {
    questionId: '48',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true regarding the default behavior of the ORDER BY clause?',
    answers: [
      {
        answerText: 'A. In a character sort, the values are case-sensitive.',
        isCorrect: true,
      },
      {
        answerText:
          'B. NULL values are not considered at all by the sort operation.',
        isCorrect: false,
      },
      {
        answerText:
          'C Only those columns that are specified in the select list can be used in the order by clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Numeric values are displayed from the maximum to the minimum value if they have decimal positions.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '49',
    questionTypeId: 'MC',
    questionText:
      'Evaluate the following SQL statement:\n\n' +
      'SELECT PROD_ID\n' +
      '  FROM COSTS\n' +
      ' WHERE DISCOUNT_id IN (SELECT DISCOUNT_id\n' +
      '                        FROM PROMO_TB\n' +
      '                       WHERE DISCOUNT_COST < ALL (SELECT MAX(DISCOUNT_COST\n' +
      '                                                    FROM PROMO_TB\n' +
      '                                                   GROUP BY (DISCOUNT_END_DAY-DISCOUNT_BEG_DAY)));\n\n' +
      'What would be the outcome of the above SQL statement?',
    answers: [
      {
        answerText:
          'A. It displays prod IDs in the discount with the lowest cost.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It displays prod IDs in the discounts with the lowest cost in the same time interval.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It displays prod IDs in the discounts with the highest cost in the same time interval.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It displays prod IDs in the discounts which cost less than the highest cost in the same time interval.',
        isCorrect: false,
      },
      {
        answerText: 'E. None of the above.',
        isCorrect: true,
      },
    ],
    help:
      'Even if D is arguable, E is the most correct because you need a correlated subquery in order to achieve.\n' +
      'D: Wrong syntax. Basically, just gibberish. It would return an error.',
  },
  {
    questionId: '50',
    questionTypeId: 'MC',
    questionText:
      'NUMTOYMINTERVAL(n, interval_unit). Interval_unit accepts ____?\n\n' +
      'Which statements are true? (choose all that apply.)',
    answers: [
      {
        answerText: 'A. CHAR',
        isCorrect: true,
      },
      {
        answerText: 'B. VARCHAR',
        isCorrect: true,
      },
      {
        answerText: 'C. NCHAR',
        isCorrect: true,
      },
      {
        answerText: 'D. BLOB',
        isCorrect: false,
      },
      {
        answerText: 'E. NUMBER',
        isCorrect: false,
      },
      {
        answerText: 'F. DATE',
        isCorrect: false,
      },
      {
        answerText: 'G. TIMESTAMP',
        isCorrect: false,
      },
      {
        answerText: 'H. VARCHAR2',
        isCorrect: true,
      },
    ],
    help: 'Interval unit must be characters datatype, and not LOBs.',
  },
  {
    questionId: '51',
    questionTypeId: 'MC',
    questionText:
      'Which three statements indicate the end of a transaction? (Choose three.)',
    answers: [
      {
        answerText: 'A. after a COMMENT ON COLUMN_NAME statement is issued.',
        isCorrect: true,
      },
      {
        answerText: 'B. after two SAVEPOINTs in a row are issued.',
        isCorrect: false,
      },
      {
        answerText: 'C. after a SELECT statement is issued.',
        isCorrect: false,
      },
      {
        answerText: 'D. after a ROLLBACK is issued.',
        isCorrect: true,
      },
      {
        answerText: 'E. after a RENAME statement is issued.',
        isCorrect: true,
      },
    ],
    help:
      'You can have as many savepoints as you want, it will not indicate the end of a transaction.\n' +
      'SELECT is a DML statement as a result it does not end the transaction.',
  },
  {
    questionId: '52',
    questionTypeId: 'MC',
    questionText: 'Which statement is true about the UNION operator?',
    answers: [
      {
        answerText: 'A. NULLs are considered.',
        isCorrect: false,
      },
      {
        answerText: 'B. You cannot use aliases in the SELECT statement.',
        isCorrect: false,
      },
      {
        answerText: 'C. You can use the UNION operator within a subquery.',
        isCorrect: true,
      },
      {
        answerText:
          'D. You can use the UNION operator with an UPDATE statement.',
        isCorrect: false,
      },
    ],
    help:
      'NULLs are not considered; you can use aliases in the SELECT statement (and then the ORDER BY clause).\n' +
      'SET operators are SELECT-only statements.',
  },
  {
    questionId: '53',
    questionTypeId: 'MC',
    questionText: 'A subquery is called a single-row subquery when ____.',
    answers: [
      {
        answerText:
          'A. There is only one subquery in the outer query and the inner query returns one or more values',
        isCorrect: false,
      },
      {
        answerText:
          'B. The inner query uses an aggregating function and returns one or more values.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The inner query returns one or more values and the outer query returns a single value.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The inner query returns a single row to the outer query and returns multiple columns to the outer query.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The inner query returns a single value to the outer query.',
        isCorrect: true,
      },
    ],
    help: '-',
  },
  {
    questionId: '54',
    questionTypeId: 'MC',
    questionText:
      'Examine the EMPLOYEES table\n\n' +
      'CREATE TABLE EMPLOYEES (LAST_NAME VARCHAR(30), SALARY NUMBER, HIRE_DATE DATE NOT NULL);\n\n' +
      'You must display the maximum and minimum salaries of employees hired 1 year ago.\n' +
      'Which two statements would provide the correct output? (Choose two.)',
    answers: [
      {
        answerText:
          'A. SELECT MIN(Salary) MIN_SALARY, MAX(salary) AS "MAX_SALARY" FROM employees WHERE hire_date < SYSDATE-365 GROUP BY MIN(salary), MAX(salary);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT MIN_SALARY, MAX_SALARY FROM (SELECT MIN(salary) MIN_SALARY, MAX(salary) MAX_SALARY FROM employees WHERE hire_date < SYSDATE-365) GROUP BY maxsal, MIN_SALARY;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT MIN_SALARY, MAX_SALARY FROM (SELECT MIN(salary) MIN_SALARY, MAX(salary) MAX_SALARY FROM employees WHERE hire_date < SYSDATE-365 GROUP BY MIN(salary), MAX(salary));',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT MIN(Salary), MAX(salary) FROM (SELECT salary FROM employees WHERE hire_date < SYSDATE-365);',
        isCorrect: true,
      },
    ],
    help:
      'Aggregate functions imply the use of GROUP BY later in the statement.\n' +
      'Aggregate functions can appear in select lists, in ORDER BY clauses, and HAVING clauses.\n' +
      "A and C are wrong because you can't use aggregate functions in the GROUP BY clause.",
  },
  {
    questionId: '55',
    questionTypeId: 'MC',
    questionText:
      'Evaluate the following statement.\n\n' +
      'INSERT ALL\n' +
      '  WHEN order_total < 10000 THEN\n' +
      '  INTO small_orders\n' +
      '  WHEN order_total > 10000 AND order_total < 20000 THEN\n' +
      '  INTO medium_orders\n' +
      '  WHEN order_total > 2000000 THEN\n' +
      '  INTO large_orders\n' +
      'SELECT order_id, order_total, customer_id\n' +
      '  FROM orders;\n\n' +
      'Which statement is true regarding the evaluation of rows returned by the subquery in the INSERT statement?',
    answers: [
      {
        answerText:
          'A. Each row is evaluated by the first WHEN clause and if the condition is false then the row would be evaluated by the subsequent when clauses.',
        isCorrect: false,
      },
      {
        answerText: 'B. All rows are evaluated by all the three WHEN clauses.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Each row is evaluated by the first WHEN clause and if the condition is true, then the row would be evaluated by the subsequent when clauses.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The INSERT statement will return an error because the ELSE clause is missing.',
        isCorrect: false,
      },
    ],
    help: 'INSERT ALL is different than INSERT FIRST. All rows are evaluated in an INSERT ALL statement.',
  },

  {
    questionId: '56',
    questionTypeId: 'MC',
    questionText:
      'The first DROP operation is performed on PRODUCTS table using this command:\n\n' +
      'DROP TABLE products PURGE;\n\n' +
      'Then a FLASHBACK operation is performed using this command:\n\n' +
      'FLASHBACK TABLE products TO BEFORE DROP;\n\n' +
      'Which is true about the result of the FLASHBACK command?',
    answers: [
      {
        answerText: 'A. It recovers only the table structure.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It recovers the table structure, data, and the indexes.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It recovers the table structure and data but not the related indexes.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It is not possible to recover the table structure, data, or the related indexes.',
        isCorrect: true,
      },
      {
        answerText:
          'E. DATA that has been changed in the PRODUCTS table can be restored to some previous point in time,\n' +
          "provided that the table's structure hasn't been changed in such a way that the table is no longer able to receive the restored data.",
        isCorrect: false,
      },
    ],
    help: 'D is the only correct answer. E would be true if the query was DROP TABLE PRODUCTS.',
  },
  {
    questionId: '57',
    questionTypeId: 'MC',
    questionText:
      'Examine the SALES table:\n\n' +
      'CREATE TABLE SALES (SALES_ID     NUMBER NOT NULL,\n' +
      '                    PRODUCT_NAME VARCHAR2(50),\n' +
      '                    QUARTER1     NUMBER,\n' +
      '                    QUARTER2     NUMBER,\n' +
      '                    QUARTERS     NUMBER,\n' +
      '                    QUARTER4     NUMBER));\n\n' +
      'SELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTER4 > QUARTERS ORDER BY 2 DESC\n' +
      'UNION\n' +
      'SELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTER2 > QUARTER1\n' +
      'MINUS\n' +
      'SELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTERS > QUARTER2\n' +
      'UNION\n' +
      'SELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTER1 > QUARTER4;\n\n' +
      'Which statement is true regarding the outcome of the query?',
    answers: [
      {
        answerText:
          'A. It produces an error because SET operators cannot be combined.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It produces an error because positional notation cannot be used in the ORDER BY clause with SET operators.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It produces an error because we cannot use > with SET operators.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It produces an error because the ORDER BY clause should appear only at the end of a compound query-that is, with the last SELECT statement.',
        isCorrect: true,
      },
    ],
    help:
      'This query looks hard but this question can be answered quickly when you read answers first.\n' +
      'ORDER BY must be used in the last SELECT statement (always!).\n' +
      'SET operators can obviously be combined. You can ORDER BY by position or by reference.',
  },
  {
    questionId: '58',
    questionTypeId: 'MC',
    questionText:
      'CREATE ROLE MKT_TEAM IDENTIFIED BY MKT123;\n\n' +
      'GRANT SELECT, UPDATE, DELETE ON PROJECT1 TO MKT_TEAM;\n\n' +
      'GRANT ALL ON PROJECT1 TO MKT_TEAM;\n\n' +
      'REVOKE DELETE ON PROJECT1 TO MKT_TEAM;\n\n' +
      'GRANT MKT_TEAM TO FINANCE_JIM;\n' +
      'ALTER USER FINANCE_JIM DEFAULT ROLE MKT_TEAM;\n\n' +
      'Which statement is true?',
    answers: [
      {
        answerText: 'A. FINANCE_JIM has all privileges on project 1.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The last query will not execute successfully as we cannot use ALTER USER to grant a user a role.',
        isCorrect: false,
      },
      {
        answerText:
          'C. FINANCE_JIM will have exactly the same privileges as MKT_TEAM.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The REVOKE statement will not execute successfully as we cannot REVOKE objects privilege after a GRANT ALL.',
        isCorrect: false,
      },
    ],
    help: 'FINANCE_JIM is granted the role "MKT_TEAM" therefore he will have exactly the same privileges as MKT_TEAM.',
  },
  {
    questionId: '59',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding virtual columns? (choose two.)',
    answers: [
      {
        answerText:
          'A. Virtual columns can be referenced in the WHERE clause of updates and deletes, but they cannot be manipulated by DML.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Virtual columns are not supported for index-organized, external, and object tables but they are supported for temporary tables.',
        isCorrect: false,
      },
      {
        answerText: 'C. The output of the expression must be a scalar value.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It cannot return an Oracle supplied datatype, a user-defined type, or LOB.',
        isCorrect: true,
      },
    ],
    help:
      'Virtual columns cannot be manipulated by DML and must return scalar values.\n' +
      'They are not supported for index-organized, external, and object tables, or GTT.',
  },
  {
    questionId: '60',
    questionTypeId: 'SC',
    questionText: 'Which query executes successfully?',
    answers: [
      {
        answerText:
          "A. SELECT id, name, gender, name ||' work's in '||dept||' department' AS \"work\" FROM DIOR_DPT",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT id, name, gender, name ||q ['work's ||in']'||dept||' department' AS \"work\" FROM DIOR_DPT;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT id, name, gender, name ||q {'work}'s||in||dept||' department' AS \"work\" FROM DIOR_DPT",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT id, name, gender, name ||' work'||'s'||' in '||dept||' department' AS \"work\" FROM DIOR_DPT;",
        isCorrect: true,
      },
      {
        answerText:
          "E. SELECT id, name, gender, name ||q'<work's in '>'||dept||' department' AS \"work\" FROM DIOR_DPT;",
        isCorrect: false,
      },
    ],
    help: 'D: is the only correct syntax.',
  },
  {
    questionId: '61',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about CUBE?',
    answers: [
      {
        answerText:
          'A. CUBE is an extension of GROUP BY and creates multiple levels of subtotals and totals across a specified group of attributes.',
        isCorrect: false,
      },
      {
        answerText:
          'B. CUBE is an extension of GROUP BY and creates grouping sets for all combinations of dimensions.',
        isCorrect: true,
      },
      {
        answerText:
          'C. You cannot CUBE so that only some of the subtotals are included.',
        isCorrect: false,
      },
      {
        answerText:
          'D. CUBE is an implicit GROUP BY on the columns not specified in the clause CUBE_FOR_CLAUSE.',
        isCorrect: false,
      },
    ],
    help:
      'A: is the definition of ROLLUP.\n' +
      'ROLLUP does not create grouping sets for all combinations of dimensions.\n' +
      'You need to know the difference between the two even if you will seldom use it in real life...\n' +
      'Also, you can CUBE only column such as GROUP BY COLUMN1 CUBE (Column2..........COLUMN N).',
  },
  {
    questionId: '62',
    questionTypeId: 'MC',
    questionText:
      'The user Cristiano issues this SQL statement:\n' +
      'GRANT SELECT ON Cristiano.EMP TO Lionel WITH GRANT OPTION;\n\n' +
      'The user Lionel issues this SQL statement:\n' +
      'GRANT SELECT ON Cristiano.EMP TO Kylian WITH GRANT OPTION;\n\n' +
      'The user Kylian issues this SQL statement:\n' +
      'GRANT SELECT ON Cristiano.EMP TO Herling;\n\n' +
      'The user Cristiano issues this SQL statement:\n' +
      'REVOKE select on Cristiano.EMP FROM Lionel;\n\n' +
      'For which users does the revoke command revoke SELECT privileges on the Cristiano.EMP table?',
    answers: [
      {
        answerText: 'A. Lionel, Kylian and Herling',
        isCorrect: true,
      },
      {
        answerText: 'B. Lionel and Herling',
        isCorrect: false,
      },
      {
        answerText: 'C. Lionel and Kylian',
        isCorrect: false,
      },
      {
        answerText: 'D. Lionel',
        isCorrect: false,
      },
    ],
    help: '-',
  },
  {
    questionId: '63',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the EXISTS operator used in the correlated subqueries? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The outer query stops evaluating the result set of the inner query when the first value is found.',
        isCorrect: true,
      },
      {
        answerText:
          'B. It is used to test whether the values retrieved by the inner query exist in the result of the outer query.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It is used to test whether the values retrieved by the outer query exist in the result set of the inner query.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The outer query continues evaluating the result set of the inner query until all the values in the result set are processed.',
        isCorrect: false,
      },
    ],
    help:
      'The outer query comes first because the question asks you about correlated subqueries.\n' +
      'Once the value is found by the outer query, it stops.',
  },
  //----------- Marc 2 --------------------
  {
    questionId: '64',
    questionTypeId: 'SC',
    questionText:
      'Suppose you are a salesperson for BEL Corporation and you want to call your primary contact people at\n' +
      "all of Feternes' customer organizations in France. BEL pays bonuses to its salespeople based on\n" +
      'their total monthly sales volume. The higher the volume is, the higher the bonus percentage is.\n\n' +
      'You want to know the number of all salespeople who had a sale of at least twice the average sale of all\n' +
      'the other salespeople.\n\n' +
      'Which statement is true?',
    answers: [
      {
        answerText:
          'A. SELECT TMl.EmpID FROM TRANSMASTER TM1' +
          '   GROUP BY TMl.Department' +
          '   HAVING MAX (TMl.NetAmount) >= ALL' +
          '         (SELECT 2 * AVG (TM2.NetAmount)' +
          '         FROM TRANSMASTER TM2' +
          '         WHERE TMl.EmpID <> TM2.EmplD);',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT TMl.EmpID FROM TRANSMASTER TM1' +
          '   GROUP BY TMl.Department' +
          '   HAVING MAX (TMl.NetAmount) > ANY' +
          '   (SELECT 2 * AVG (TM2.NetAmount)' +
          '      FROM TRANSMASTER TM2' +
          '      WHERE TMl.EmpID <> TM2.EmplD);',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT TMl.EmpID' +
          '   FROM TRANSMASTER TM1' +
          '   GROUP BY TMl.Department' +
          '   HAVING MAX (TMl.NetAmount) IN' +
          '   (SELECT 2 * AVG (TM2.NetAmount)' +
          '      FROM TRANSMASTER TM2' +
          '      WHERE TMl.EmpID = TM2.EmplD);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT TMl.EmpID' +
          '   FROM TRANSMASTER TM1' +
          '   GROUP BY TMl.Department' +
          '   HAVING MAX (TMl.NetAmount) >= ALL' +
          '   (SELECT 2 * AVG (TM2.NetAmount)' +
          '      FROM TRANSMASTER TM2' +
          '      WHERE TMl.EmpID = TM2.EmplD);',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      "The outer query groups TRANSMASTER rows by the employees' department.\n" +
      'This is done with the SELECT, FROM, and GROUP BY clauses.\n' +
      'The HAVING clause filters these groups.\n' +
      'For each group, it calculates the MAX of the Net Amount column for the rows in that group.\n' +
      'The inner query evaluates twice the average Net Amount from all rows of TRANSMASTER whose\n' +
      'EmpID is different from the-EmpID of the current group of the outer query.\n' +
      'In the last line, you must reference two different EmpID values (so you use different aliases\n' +
      'for TRANSMASTER in the FROM clauses of the outer and inner queries).\n' +
      "You use those aliases in the comparison of the query's last line to indicate that you're referencing\n" +
      'both the EmpID from the current row of the inner subquery (TM2.EmpID) and the EmpID from the current group of the outer subquery (TM1.EmpID).',
  },
  {
    questionId: '65',
    questionTypeId: 'MC',
    questionText: 'Which two statements are ture about LONG datatype?',
    answers: [
      {
        answerText:
          'A. You can use columns defined as LONG with GROUP BY clauses.',
        isCorrect: false,
      },
      {
        answerText:
          'B. You can use columns defined as LONG with HAVING clauses.',
        isCorrect: false,
      },
      {
        answerText:
          'C. You can use columns defined as LONG with external tables.',
        isCorrect: false,
      },
      {
        answerText: 'D. You can use triggers with Long datatype.',
        isCorrect: true,
      },
      {
        answerText:
          'E. You can use columns defined as LONG in VALUES clauses of INSERT statements',
        isCorrect: true,
      },
    ],
    answer: 'D, E',
    help:
      'Triggers can use the LONG data type with some restrictions.\n' +
      'The use of LONG values is subject to these restrictions.\n' +
      'Do not create tables with LONG columns -> Use LOB columns (CLOB, NCLOB, BLOB) instead.\n' +
      'LONG columns are supported only for backward compatibility.',
  },
  {
    questionId: '66',
    questionTypeId: 'MC',
    questionText: 'Which two queries execute successfully? (Choose two.)',
    answers: [
      {
        answerText:
          "A. SELECT TO_DATE('31-AUG-2020/,DD-MON-YYYY') + TO_YMINTERVAL('0-1') FROM DUAL;",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT TO_DATE(,29-FEB-20207DD-MON-YYYY') + TO_YMINTERVAL('1-0') FROM DUAL;",
        isCorrect: true,
      },
      {
        answerText:
          "C. SELECT TO_DATE('29-FEB-2020', 'DD-MON-YYYY') + TO_YMINTERVAL('4-0') FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT TO_DATE('31-AUG-2020/,DD-MON-YYYY') + TO_YMINTERVAL('1-0') FROM DUAL;",
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help:
      'The first fails because adding one month to a 31-day month would result in September 31, which is not a valid date.\n' +
      'The second fails because adding one year to a date that exists only every four years is not valid.',
  },
  {
    questionId: '67',
    questionTypeId: 'SC',
    questionText:
      'Which of the following statements about SQL sequences is true?',
    answers: [
      {
        answerText: 'A. The start value of the sequence is always 1.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The minimum value of an ascending sequence defaults to 1.',
        isCorrect: true,
      },
      {
        answerText: 'C. A sequence always increments by 1.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The maximum value of descending sequence defaults to 1.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: 'The start values of a Sequence defaults to 1 but another value may be specified with the START WITH clause.',
  },
  {
    questionId: '68',
    questionTypeId: 'SC',
    questionText: 'What is true about updates through a view?',
    answers: [
      {
        answerText: 'A. You cannot update a view with group functions.',
        isCorrect: true,
      },
      {
        answerText:
          'B. When you update a view group functions are automatically computed.',
        isCorrect: false,
      },
      {
        answerText:
          'C. When you update a view only the constraints on the underlying table will be in effect.',
        isCorrect: false,
      },
      {
        answerText:
          'D. When you update a view the constraints on the views always override the constraints on the underlying tables.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: 'You cannot update a view with group functions, and DISTINCT.',
  },
  {
    questionId: '69',
    questionTypeId: 'MC',
    questionText: 'What is true about constraints? (choose two.)',
    answers: [
      {
        answerText:
          'A. BLOB and CLOB can be used with NOT NULL AND CHECK constraints',
        isCorrect: true,
      },
      {
        answerText:
          'B. TIMESTAMP WITH TIME ZONE cannot be used UNIQUE and CHECK constraints.',
        isCorrect: false,
      },
      {
        answerText:
          'C. CLOB can be used with PRIMAREY KEY and FOREIGN KEY but BLOB cannot.',
        isCorrect: false,
      },
      {
        answerText:
          'D. TIMESTAMP WITH TIME ZONE can be used with FOREIGN KEY and PRIMAREY KEY.',
        isCorrect: true,
      },
    ],
    answer: 'A, D',
    help:
      'B: TIMESTAMP WITH TIME ZONE cannot be used UNIQUE but can be used with CHECK constraints.\n' +
      'C: CLOB and BLOB can be used with PRIMAREY KEY and FOREIGN KEY.',
  },
  {
    questionId: '70',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure and data in the PRICE-LIST table:\n' +
      'PROD-ID     NOT NULL  NUMBER(3)\n' +
      'PROD_PRICE            VARCHAR2(10)\n\n' +
      'PROD_ID  PROD_PRICE\n' +
      '-------  ----------\n' +
      '10       $87,654.55\n' +
      '11       $509.75\n' +
      '12       $16669,234\n\n' +
      'Which SQL statement would give the required result?',
    answers: [
      {
        answerText:
          "A. SELECT TO-CHAR(PROD_PRICE * .14, '$99,999.99') FROM PRICE-LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT TO_NUMBER(TO_NUMBER(PROD_PRICE, '$99,999.99')* .14/$99.999.00') FROM PRICE-LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT TO_CHAR(TO_NUMBER(PROD_PRICE )* .14, '$99,999.00') FROM PRICE-LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT TO_CHAR(TO_NUMBER(PROD_PRICE, 'S99.999.99')* .14.'$99.999.00') FROM PRICE-LIST;",
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '71',
    questionTypeId: 'SC',
    questionText:
      'The EMPLOYEES table contains columns EMP_ID of data type NUMBER and HIRE_DATE of data type DATE.\n\n' +
      'You want to display the date of the first Thursday after the completion of 4 month since hiring.\n' +
      'The NLS_TERRITORY parameter is set to EUROPE in the session.\n\n' +
      'Which query can be used?',
    answers: [
      {
        answerText:
          'A. SELECT emp_id, NEXT_DAY(MONTHS_BETWEEN(hire_date, SYSDATE), 4) FROM employees;',
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT emp_id, NEXT_DAY(ADD_MONTHS(hire_date, 4), 'Thursday') FROM employees;",
        isCorrect: true,
      },
      {
        answerText:
          "C. SELECT emp_id, ADD_MONTHS(hire_date, 4), NEXT_DAY('Thursday') FROM employees;",
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT emp_id, NEXT_DAY(ADD_MONTHS(hire_date, 4), 4) FROM employees;',
        isCorrect: false,
      },
      {
        answerText:
          "E. SELECT emp_id, ADD_MONTHS(NEXT_DAY(hire_date, 4), 'Thursday') FROM employees;",
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: "Next_day(d. c)-> 'c' must be a character datatype (Thursday),",
  },
  {
    questionId: '72',
    questionTypeId: 'MC',
    questionText: 'Which three statements are true about the DESCRIBE command?',
    answers: [
      {
        answerText:
          'A. It displays the PRIMARY KEY constraint for any column or columns that have that constraint.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It displays the NOT NULL constraint for any columns that have that constraint.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It can be used to display the structure of an existing view.',
        isCorrect: true,
      },
      {
        answerText: 'D. It can be used only from SQL*Plus.',
        isCorrect: false,
      },
      {
        answerText:
          'E. It displays all constraints that are defined for each column.',
        isCorrect: false,
      },
      {
        answerText: 'F. It can be used from SQL Developer.',
        isCorrect: true,
      },
    ],
    answer: 'B, C, F',
    help: 'DESC only displays the NOT NULL constraint. DESC can also be used from SQL Developer.',
  },
  {
    questionId: '73',
    questionTypeId: 'MC',
    questionText:
      'No-user-defined locks are used in your database.\n\n' +
      'Which three are true about Transaction Control Language (TCL)?',
    answers: [
      {
        answerText:
          "A. COMMIT erases all the transaction's savepoints and releases its locks.",
        isCorrect: true,
      },
      {
        answerText:
          "B. ROLLBACK TO SAVEPOINT undoes the transaction's changes made since the named savepoint and then ends the transaction.",
        isCorrect: false,
      },
      {
        answerText:
          'C. COMMIT ends the transaction and makes all its changes permanent.',
        isCorrect: true,
      },
      {
        answerText:
          "D. ROLLBACK without the TO SAVEPOINT clause undoes all the transaction's changes but does not erase its savepoints.",
        isCorrect: false,
      },
      {
        answerText:
          "E. ROLLBACK without the TO SAVEPOINT clause undoes all the transaction's changes but does not release its locks.",
        isCorrect: false,
      },
      {
        answerText:
          "F. ROLLBACK without the TO SAVEPOINT clause undoes all the transaction's changes, releases its locks and erases its savepoints.",
        isCorrect: true,
      },
    ],
    answer: 'A, C, F',
    help: 'https.//docs.oracle.com/en/database/oracle/oracle-database/12.2/sqlrf/COMMIT.html#GUID-6CD5C9A7-54B9-4FA2-BA3C-D6B4492B9EE2',
  },
  {
    questionId: '74',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about the date functions?',
    answers: [
      {
        answerText:
          'A. LOCALTIMESTAMP returns the current date In the session time zone.',
        isCorrect: true,
      },
      {
        answerText:
          'B. CURRENT_DATE and CURRENT_TIMESTAMP return the current date as per the oracle database server time.',
        isCorrect: false,
      },
      {
        answerText:
          'C. CURRENT_TIMESTAMP returns the current date as per the Oracle database server time zone.',
        isCorrect: false,
      },
      {
        answerText:
          'D. CURRENT_DATE and SYSDATE return the current date as per the oracle database server time zone.',
        isCorrect: false,
      },
      {
        answerText:
          'E. CURRENT_DATE and SYSDATE return the current date in the session time zone.',
        isCorrect: false,
      },
      {
        answerText:
          'F. SYSTIMESTAMP returns the current date & time, including fractional seconds in the session time zone.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'LOCALTIMESTAMP is similar to CURRENT TIMESTAMP except CURRENT TIMESTAMP returns\n' +
      'a TIMESTAMP WITH TIME ZONE whereas LOCALTIMESTAMP returns a TIMESTAMP value.' +
      'CURRENT_DATE returns the current date in the session timezone.',
  },
  {
    questionId: '75',
    questionTypeId: 'SC',
    questionText:
      'What is the output of the following query:\n\n' +
      "SELECT SOUNDEX('MERKEL'), SOUNDEX('MACRON') FROM DUAL;",
    answers: [
      {
        answerText: 'A. 4E62E3 and 4A25O3',
        isCorrect: false,
      },
      {
        answerText: 'B. 5E12E5 and 5A2601',
        isCorrect: false,
      },
      {
        answerText: 'C. ME62ELand MA435N',
        isCorrect: false,
      },
      {
        answerText: 'D. MER43L and MA56ON',
        isCorrect: false,
      },
      {
        answerText: 'E. 5E62E4 and 5A26O5',
        isCorrect: true,
      },
      {
        answerText: 'F. 4E52E3 and 4A15O3',
        isCorrect: false,
      },
    ],
    answer: 'E',
    help: 'SOUNDEX() rules -> L = 4 / M an N = 5 / R = 6 / K and C = 2',
  },
  {
    questionId: '76',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding subqueries? (Choose two.)',
    answers: [
      {
        answerText: 'A. Only two subqueries can be placed at one level.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A subquery in the WHERE clause of a SELECT statement can be nested up to three levels only.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A subquery can be used to access data from one or more tables or views.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The columns in a subquery must always be qualified with the name or alias of the table used.',
        isCorrect: false,
      },
      {
        answerText:
          'E. If the subquery returns 0 row, then the value returned by the subquery expression is NULL.',
        isCorrect: true,
      },
    ],
    answer: 'C, E',
    help: '',
  },
  {
    questionId: '77',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structures of the EMPLOYEES and DEPARTMENTS tables\n\n' +
      'EMPLOYEES\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  ------------\n' +
      'EMPLOYEE_ID  NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME             VARCHAR2(20)\n' +
      'LAST_NAME    NOT NULL  VARCHAR2(25)\n' +
      'HIRE_DATE    NOT NULL  DATE\n' +
      'JOB_ID       NOT NULL  VARCHAR2(10)\n' +
      'SALARY                 NUMBER(10,2)\n' +
      'COMMISSION             NUMBER(6,2)\n' +
      'MANAGER_ID             NUMBER(6)\n' +
      'DEPARTMENT_ID          NUMBER(4)\n\n' +
      'DEPARTMENTS\n' +
      'Name             Null?     Type\n' +
      '---------------  --------  ------------\n' +
      'DEPARTMENT_ID    NOT NULL  NUMBER(4)\n' +
      'DEPARTMENT_NAME  NOT NULL  VARCHAR2(30)\n' +
      'MANAGER_ID                 NUMBER(6)\n' +
      'LOCATION_ID                NUMBER(4)\n\n' +
      'You want to update EMPLOYEES table as follows:\n' +
      '• Update only those employees who work in Miami or Dallas (locations 1001 and 1002),\n' +
      '• Set department_id for these employees to the departmentjd corresponding to London (locationjd 2100).\n' +
      "• Set the employees' salary in locationjd 2100 to 1.1 times the average salary of their department.\n" +
      "• Set the employees' commission in locationjd 2100 to 1.5 times the average commission of their department.\nYou issue the following command:\n\n" +
      'UPDATE EMPLOYEES\n' +
      '   SET DEPARTMENT_ID = (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE LOCATION_ID = 2100)\n' +
      '   (SALARY, COMMISSION) = (SELECT 1.1*AVG(SALARY), 1.5*AVG(COMMISSION) FROM EMPLOYEES, DEPARTMENTS\n' +
      '    WHERE DEPARTMENTS.LOCATION_ID IN(1001, 1002, 2100))\n' +
      '   WHERE DEPARTMENT_ID IN (SELECT DEPARTMENT_ID FROM DEPARTMENTS WHERE LOCATION_ID = 1001\n' +
      '  OR LOCATION_ID = 1002);\n\n' +
      'What is the outcome?',
    answers: [
      {
        answerText:
          'A. It generates an error because multiple columns (SALARY, COMMISSION) cannot be specified together in an UPDATE statement.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It generates an error because a subquery cannot have a join condition in a UPDATE statement.',
        isCorrect: false,
      },
      {
        answerText: 'C. It executes successfully and gives the desired update.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It executes successfully but does not give the desired update.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      "It can appear on either side of a comparison operator and SQL won't return an error.\n" +
      'However, Oracle advices to add a subquery on the right side of a comparison operator.',
  },
  {
    questionId: '78',
    questionTypeId: 'SC',
    questionText:
      'What is the output of the following query:\n\n' +
      'SELECT REMAINDERS(11,3) and SELECT REMAINDER(mod(23,3), 2)?',
    answers: [
      {
        answerText: 'A. -1, 0',
        isCorrect: true,
      },
      {
        answerText: 'B. 2, -1',
        isCorrect: false,
      },
      {
        answerText: 'C. 2, 0',
        isCorrect: false,
      },
      {
        answerText: 'D. -1, -1',
        isCorrect: false,
      },
      {
        answerText: 'E. -1, 1',
        isCorrect: false,
      },
      {
        answerText: 'F. -1, ERROR',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '79',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about CASE?',
    answers: [
      {
        answerText:
          'A. CASE expressions must include at least two WHEN expressions.',
        isCorrect: false,
      },
      {
        answerText:
          'B. If no condition matches, the result is NULL or the empty set.',
        isCorrect: false,
      },
      {
        answerText: 'C. ELSE is mandatory.',
        isCorrect: false,
      },
      {
        answerText: 'D. NULL is considered as not TRUE in a CASE expression.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '80',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure and data in the PRICE_LIST table:\n\n' +
      'Name        Null?     Type\n' +
      '----------  --------  -----------\n' +
      'PROD_ID     NOT NULL  NUMBER(3)\n' +
      'PROD_PRICE            VARCHAR2(10)\n\n' +
      'PROD_ID  PROD_PRICE\n' +
      '100      $234.55\n' +
      '101      $6,509.75\n' +
      '102      $1,234\n\n' +
      'You plan to give a discount of 25% on the product price and need to display the discount\n' +
      'amount in the same format as the PROD_PRICE.\n\n' +
      'Which SQL statement would give the required result?',
    answers: [
      {
        answerText:
          "A. SELECT TO_CHAR(prod_price*.25, '$99,999.99') FROM PRICE_LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT TO_CHAR(TO_NUMBER(prod_price) * .25, '$99,999.00') FROM PRICE_LIST;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT TO_CHAR(TO_NUMBER(prod_price, '$99,999.99') * .25, '$99,999.00') FROM PRICE_LIST;",
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT TO_NUMBER TO_NUMBER(prod_price, '$99,999.99') * .25, '$99,999.00') FROM PRICE_LIST;",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '81',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about substitution variable?',
    answers: [
      {
        answerText:
          "A. SQL Developer pre-processes the prefix substitution variable and substitutes the variable's value.",
        isCorrect: false,
      },
      {
        answerText:
          'B. If the variable was not previously defined then SQL*Plus prompts you for a value before doing the substitution.',
        isCorrect: true,
      },
      {
        answerText:
          'C. If a single ampersand prefix is used with an undefined variable, the value you enter at the prompt is stored.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Any subsequent reference to the variable using either "&" or "&&" substitutes the newly defined value.',
        isCorrect: true,
      },
    ],
    answer: 'B, D',
    help:
      'A: SQL*Plus not SQL Developer.\n' +
      'C: If a single ampersand prefix is used with an undefined variable,\n' +
      'the value you enter at the prompt is NOT stored.',
  },
  {
    questionId: '82',
    questionTypeId: 'MC',
    questionText:
      'Examine the commands used to create COUNTRIES.DETAILS table:\n\n' +
      'CREATE TABLE COUNTRIES_DETAILS (COUNTRIES_ID NUMBER PRIMARY KEY, \n' +
      'COUNTRIES_NAME VARCHAR2(70), SIZE NUMBER(30), GDP NUMBER);\n\n' +
      "You must determine if any countries' details have been entered more than one using a different\n" +
      'COUNTRIES_ID, by listing all duplicate names.\n' +
      'Which two methods can you use to get the required result?',
    answers: [
      {
        answerText: 'A. CROSS JOIN',
        isCorrect: false,
      },
      {
        answerText: 'B. SELF JOIN',
        isCorrect: true,
      },
      {
        answerText: 'C. SUBQUERY',
        isCorrect: true,
      },
      {
        answerText: 'D. FULL OUTER JOIN with SELF JOIN',
        isCorrect: false,
      },
      {
        answerText: 'E. JOIN with USING',
        isCorrect: false,
      },
      {
        answerText: 'F. CARTESIAN JOIN',
        isCorrect: false,
      },
      {
        answerText: 'G. WHERE EXISTS clause',
        isCorrect: false,
      },
    ],
    answer: 'B, C',
    help: '',
  },
  {
    questionId: '83',
    questionTypeId: 'MC',
    questionText:
      'Which statements correctly grants a privilege successfully? (Choose all that apply.)',
    answers: [
      {
        answerText: 'A. GRANT ALL PRIVILEGES ON TABLEI TO CLAUDE.DEBUSSY;',
        isCorrect: true,
      },
      {
        answerText:
          'B. GRANT ALL PRIVILEGES ON TABLEI TO ERIK.SATIE WITH GRANT OPTION;',
        isCorrect: true,
      },
      {
        answerText: 'C. GRANT ALL ON TABLEI TO LANG.LANG;',
        isCorrect: true,
      },
      {
        answerText:
          'D. GRANT ALL PRIVILEGES ON TABLEI TO ERIK.SATIE WITH ADMIN OPTION;',
        isCorrect: false,
      },
      {
        answerText: 'E. GRANT ALL ON TABLEI TO LANG.LANG WITH ADMIN OPTION;',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C',
    help:
      'GRANT ALL PRIVILEGES ON or GRANT ALL ON are both valid syntaxes for object privs.\n' +
      'WITH AMIN OPTION can only be used with SYS privs.',
  },
  {
    questionId: '84',
    questionTypeId: 'SC',
    questionText:
      'You are asked to check what system privileges are granted on objects for which the user, public,\n' +
      'or enable role is the grantee.\n\n' +
      'Which data dictionary view do you have to query?',
    answers: [
      {
        answerText: 'A. USER_SYS_PRIVS',
        isCorrect: false,
      },
      {
        answerText: 'B. SESSION_PRIVS',
        isCorrect: false,
      },
      {
        answerText: 'C. DBA_SYS_PRIVS',
        isCorrect: false,
      },
      {
        answerText: 'D. ALL_TAB_PRIVS_RECD',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      'The ALL_TAB_PRIVS_RECD view contains data about incoming grants only.\n' +
      'USER_TAB_COLUMNS has no information about grants neither does USER_TABLES.',
  },
  {
    questionId: '85',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true about the DESCRIBE command? (Choose three.)',
    answers: [
      {
        answerText:
          'A. It can be used to display the structure of an existing view',
        isCorrect: true,
      },
      {
        answerText: 'B. It can be used only from SQL*Plus',
        isCorrect: false,
      },
      {
        answerText:
          'C. It displays the PRIMARY KEY constraint for any column or columns that have that constraint',
        isCorrect: false,
      },
      {
        answerText:
          'E. It displays all constraints that are defined for each column.',
        isCorrect: false,
      },
      {
        answerText: 'F. It displays UNUSED columns.',
        isCorrect: false,
      },
      {
        answerText: 'G. It cannot display INVISIBLE columns.',
        isCorrect: true,
      },
      {
        answerText:
          'H. It displays the NOT NULL constraint for any columns that have that constraint.',
        isCorrect: true,
      },
    ],
    answer: 'A, G, H',
    help: '',
  },
  {
    questionId: '86',
    questionTypeId: 'MC',
    questionText: 'Which three tasks can be performed by DDL statements?',
    answers: [
      {
        answerText: 'A. Providing an alternative name for a table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Initiating performance analysis on objects using built-in tools.',
        isCorrect: true,
      },
      {
        answerText: 'C. Removing all data in the associated indexes.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Preventing data retrieval from a table outside of office hours.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Creating multiple savepoints to enable partial rollback of a transaction.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Performing a combination of DML statements in a single statement.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C',
    help: 'RENAME, AUDIT, DROP',
  },
  {
    questionId: '87',
    questionTypeId: 'MC',
    questionText: 'Which two tasks can be performed by DML statements?',
    answers: [
      {
        answerText:
          'A. Performing a combination of DML statements in a single statement.',
        isCorrect: true,
      },
      {
        answerText: 'B. Removing data from an existing table in the database.',
        isCorrect: false,
      },
      {
        answerText: 'C. Modifying data through a view.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Initiating performance analysis on objects using built-in tools.',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: 'MERGE, UPDATE',
  },
  {
    questionId: '88',
    questionTypeId: 'MC',
    questionText:
      'Which tasks can be performed using SQL functions that are built into Oracle database? (Choose three.)',
    answers: [
      {
        answerText: 'A. finding the remainder of a division',
        isCorrect: true,
      },
      {
        answerText: 'B. adding a number to a date for a resultant date value',
        isCorrect: false,
      },
      {
        answerText:
          'C. comparing two expressions to check whether they are equal',
        isCorrect: true,
      },
      {
        answerText:
          'D. checking whether a specified character exists in a given string',
        isCorrect: true,
      },
      {
        answerText:
          'E. removing trailing, leading, and embedded characters from a character string.',
        isCorrect: false,
      },
    ],
    answer: 'A, C, D',
    help: 'MOD, NULLIF, INSTR',
  },
  {
    questionId: '89',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding constraints? (Choose two.)',
    answers: [
      {
        answerText: 'A. A foreign key cannot contain NULL values.',
        isCorrect: false,
      },
      {
        answerText: 'B. The column with a UNIQUE constraint can store NULLS.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A constraint is enforced only for an INSERT operation on a table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. You can have more than one column in a table as part of a primary key.',
        isCorrect: true,
      },
      {
        answerText: 'E. VARCHAR(n) has a better performance than CHAR(n)',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help: 'D: Composite PK.\n' + 'CHAR performs better than VARCHAR.',
  },
  {
    questionId: '90',
    questionTypeId: 'MC',
    questionText:
      'Evaluate the SQL statement\n\n' +
      'DROP TABLE COUNTRIES_GDP:\n\n' +
      'Which four statements are true of the SQL statement? (Choose four.)',
    answers: [
      {
        answerText: 'A. You cannot roll back this statement.',
        isCorrect: true,
      },
      {
        answerText: 'B. All pending transactions are committed.',
        isCorrect: true,
      },
      {
        answerText:
          'C. All views based on the COUNTRIES_GDP table are deleted.',
        isCorrect: false,
      },
      {
        answerText:
          'D. All indexes based on the COUNTRIES_GDP table are dropped.',
        isCorrect: true,
      },
      {
        answerText:
          'E. All data in the table is deleted, and the table structure is also deleted.',
        isCorrect: true,
      },
      {
        answerText:
          'F. All data in the table is deleted, but the structure of the table is retained.',
        isCorrect: false,
      },
      {
        answerText:
          'G. All synonyms based on the COUNTRIES_GDP table are deleted.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, D, E',
    help: 'VIEWS and SYNONYMS are not deleted but the structure of the table is deleted.',
  },
  {
    questionId: '91',
    questionTypeId: 'SC',
    questionText: 'Which is true about virtual columns?',
    answers: [
      {
        answerText: 'A. Virtual columns use more data space.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Virtual columns improve performance as they just use metadata.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Virtual columns can be used with LOBs but not with LONG and user-defined type.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Virtual columns do not work with indexed, external and temporary tables.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      'Virtual columns consume minimal space.\n' +
      'Oracle only stores the metadata, not the data of the virtual columns.\n' +
      'Virtual columns cannot be used with LOBs.',
  },
  {
    questionId: '92',
    questionTypeId: 'SC',
    questionText:
      'SELECT NVL(1, NULL);\n' +
      'SELECT COALESCE(1, (1/0));\n' +
      'SELECT NVL(1, (1/0));\n\n' +
      'Which statement is true?',
    answers: [
      {
        answerText: 'A. 1, ERROR, ERROR',
        isCorrect: false,
      },
      {
        answerText: 'B. ERROR, 1, 0',
        isCorrect: false,
      },
      {
        answerText: 'C. ERROR, 1, 1',
        isCorrect: false,
      },
      {
        answerText: 'D. 1, ERROR, 1',
        isCorrect: false,
      },
      {
        answerText: 'E. 1, 1, ERROR',
        isCorrect: true,
      },
      {
        answerText: 'F. 1, 0, ERROR',
        isCorrect: false,
      },
    ],
    answer: 'E',
    help: 'COALESCE stops as soon as it finds a no NULL value.',
  },
  {
    questionId: '93',
    questionTypeId: 'MC',
    questionText:
      'Examine the ORDERJTEMS and ORDERS tables:\n' +
      'CREATE TABLE ORDER_ITEMS(\n' +
      '  ORDER_ID   NUMBER NOT NULL,\n' +
      '  PRODUCT_ID NUMBER,\n' +
      '  UNIT_PRICE NUMBER,\n' +
      '  QUANTITY   NUMBER);\n\n' +
      'CREATE TABLE ORDERS(\n' +
      '  ORDER_ID    NUMBER NOT NULL,\n' +
      '  CUSTOMER_ID NUMBER,\n' +
      '  ORDER_TOTAL NUMBER,\n' +
      '  DISCOUNT_ID);\n\n' +
      'You are asked to retrieve the ORDER_ID, PRODUCT_ID,\n' +
      'and total price (UNIT_PRICE multiplied by QUANTITY),\n' +
      'where the total price is greater than 256,000.\n\n' +
      'You executed the following SQL statement:\n' +
      'SELECT ORDER_ID, PRODUCT_ID, UNIT_PRICE * QUANTITY AS "total price" FROM order_items\n' +
      'WHERE UNIT_PRICE*QUANTITY > 256000 NATURAL JOIN ORDERS;\n\n' +
      'Which two statements are true regarding the execution of the statement?',
    answers: [
      {
        answerText:
          'A. The statement would execute and provide the desired result.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The statement would not execute because the ON keyword is missing in the NATURAL JOIN clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement would not execute because the WHERE clause is before the NATURAL JOIN clause.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The statement would not execute because the USING keyword is missing in the NATURAL JOIN clause.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The statement would not execute because columns do not have aliases.',
        isCorrect: false,
      },
      {
        answerText:
          'F. The statement would not execute because NATURAL JOIN only work with EQUIJOIN.',
        isCorrect: true,
      },
    ],
    answer: 'C, F',
    help: '',
  },
  {
    questionId: '94',
    questionTypeId: 'SC',
    questionText:
      'Examine the ORDERS table:\n\n' +
      'CREATE TABLE ORDERS(\n' +
      '  ORDER_ID    NUMBER NOT NULL,\n' +
      '  ORDER_DATE  TIMESTAMP WITH TIMEZONE NOT NULL,\n' +
      '  CUSTOMER_ID NUMBER,\n' +
      '  ORDER_TOTAL NUMBER,\n' +
      '  DISCOUNT_ID);\n\n' +
      'Which UPDATE statement is valid?',
    answers: [
      {
        answerText:
          "A. UPDATE orders SET order_date = '12-mar-2023', order_total IS NULL WHERE order_id = 25;",
        isCorrect: false,
      },
      {
        answerText:
          "B. UPDATE orders SET order_date = '12-mar-2023', AND order_total = TO_NUMBER(NULL) WHERE order_id = 25;",
        isCorrect: false,
      },
      {
        answerText:
          "C. UPDATE orders SET order_date = '12-mar-2023', order_total = NULL WHERE order_id = 25;",
        isCorrect: true,
      },
      {
        answerText:
          "D. UPDATE orders SET order_date = TO_DATE('12-mar-2023','dd-mon-yyyy'), SET order_total = TO_MUMBER(NULL) WHERE order_id = 25;",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: 'Order_total - NULL is ok in this situation. It would be different if it was a SELECT statement.',
  },
  {
    questionId: '95',
    questionTypeId: 'SC',
    questionText:
      "Which statement is true about a JOIN specified in a query's WHERE clause?",
    answers: [
      {
        answerText: 'A. It only applies for equijoin conditions.',
        isCorrect: false,
      },
      {
        answerText: 'B. It applies for equijoin and nonequijoin conditions.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It requires column names to be the same in all tables being joined.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It must have primary-key and foreign-key constraints defined on the join columns.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: 'JOIN can be used with Equijoins and Nonequijoins.',
  },
  {
    questionId: '96',
    questionTypeId: 'SC',
    questionText:
      'Which task can be performed by using a single Data Manipulation Language statement?',
    answers: [
      {
        answerText:
          'A. adding a column constraint while inserting a row into a table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. adding a column with a default value while inserting a row into a table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. removing all data only from a single column on which a unique constraint is defined.',
        isCorrect: true,
      },
      {
        answerText:
          'D. removing all data only from a single column on which a primary key constraint is defined.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '97',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following CREATE TABLE commands:\n\n' +
      'CREATE TABLE SALES(\n' +
      '  ord_no   NUMBER(2) CONSTRAINT ord_pk PRIMARY KEY,\n' +
      '  ord_date DATE,\n' +
      '  cust_id  NUMBER(4));\n\n' +
      'CREATE TABLE ord_items(\n' +
      '  ord_no      NUMBER(2),\n' +
      '  item_no     NUMBER(3),\n' +
      '  qty         NUMBER(3) CHECK (qty BETWEEEN 100 AND 200),\n' +
      '  expiry_date DATE      CHECK (expiry_date> SYSDATE),\n' +
      '  CONSTRAINT it_pk  PRYMARY KEY (ord_no, item_no),\n' +
      '  CONSTRAINT ord_fk FOREIGN KEY (ord_no)\n' +
      '  REFERENCES SALES (ord_no));\n\n' +
      'Why would the ORD_ITEMS table not get created?',
    answers: [
      {
        answerText: 'A. SYSDATE cannot be used with the CHECK constraint.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The BETWEEN clause cannot be used twice for the same table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The CHECK constraint cannot be placed on columns having the DATE data type.',
        isCorrect: false,
      },
      {
        answerText:
          'D. ORD_NO and ITEM_NO cannot be used as a composite primary key because ORD_NO is also the FOREIGN KEY.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'SYSDATE, USER, UID, and USERINV do not work with the CHECK constraint.\n' +
      'It cannot refer to CUURVAL, NEXTVAL, and ROWNUM columns.',
  },
  {
    questionId: '98',
    questionTypeId: 'MC',
    questionText:
      'What are the privileges that can be restricted to one or two columns? (Choose all that apply.)',
    answers: [
      {
        answerText: 'A. CREATE',
        isCorrect: false,
      },
      {
        answerText: 'B. UPDATE',
        isCorrect: true,
      },
      {
        answerText: 'C. ALTER',
        isCorrect: false,
      },
      {
        answerText: 'D. INSERT',
        isCorrect: true,
      },
      {
        answerText: 'E. DROP',
        isCorrect: false,
      },
      {
        answerText: 'F. TRUNCATE',
        isCorrect: false,
      },
      {
        answerText: 'G. RENAME',
        isCorrect: false,
      },
      {
        answerText: 'H. REFERENCES',
        isCorrect: true,
      },
    ],
    answer: 'B, D, H',
    help: '',
  },
  {
    questionId: '99',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding savepoints? (Choose two.)',
    answers: [
      {
        answerText: 'A. Savepoints are effective for both COMMIT and ROLLBACK.',
        isCorrect: false,
      },
      {
        answerText: 'B. Savepoints can be used for only DML statements.',
        isCorrect: true,
      },
      {
        answerText: 'C. Savepoints are effective only for COMMIT.',
        isCorrect: false,
      },
      {
        answerText: 'D. Savepoints may be used to ROLLBACK.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Savepoints can be used for both DML and DDL statements.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Savepoints are particularly effective when the system crashes.',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help: 'Savepoints are not effective for commit, they can be used only for DML statements.',
  },
  {
    questionId: '100',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding subqueries? (Choose two.)',
    answers: [
      {
        answerText:
          'A. A subquery can appear on either side of a comparison operator.',
        isCorrect: true,
      },
      {
        answerText: 'B. Only two subqueries can be placed at one level.',
        isCorrect: false,
      },
      {
        answerText: 'C. A subquery can retrieve zero or more rows.',
        isCorrect: true,
      },
      {
        answerText: 'D. A subquery can be used only in SQL query statements.',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: 'You can place as many subqueries as you want at one level.',
  },
  {
    questionId: '101',
    questionTypeId: 'SC',
    questionText: 'What is true about CURRENT_TIMESTAMP and LOCALTIMESTAMP?',
    answers: [
      {
        answerText:
          'A. CURRENT_TIMESTAMP returns the current date in the session time zone but LOCALTIMESTAMP does not.',
        isCorrect: false,
      },
      {
        answerText:
          'B. LOCALTIMESTAMP returns the current date in the session time zone but CURRENT_TIMESTAMP does not.',
        isCorrect: false,
      },
      {
        answerText:
          'C. They both return the date as per the oracle database server time zone.',
        isCorrect: false,
      },
      {
        answerText:
          'D. LOCALTIMESTAMP returns a TIMESTAMP with time zone whereas CURRENT_TIMESTAMP returns only a TIMESTAMP.',
        isCorrect: false,
      },
      {
        answerText:
          'E. CURRENT_TIMESTAMP returns a TIMESTAMP with time zone whereas LOCALTIMESTAMP returns only a TIMESTAMP in the session time zone.',
        isCorrect: true,
      },
      {
        answerText:
          'F. CURRENT_TIMESTAMP returns a TIMESTAMP with time zone whereas LOCALTIMESTAMP returns only a TIMESTAMP as per the oracle database server time zone.',
        isCorrect: false,
      },
    ],
    answer: 'E',
    help: '',
  },
  {
    questionId: '102',
    questionTypeId: 'MC',
    questionText: 'Which two are true about SELF JOIN?',
    answers: [
      {
        answerText: 'A. They do not need to use the ON condition.',
        isCorrect: false,
      },
      {
        answerText: 'B. They require table aliases.',
        isCorrect: true,
      },
      {
        answerText:
          'C. They can use INNER JOIN, OUTER JOIN, EQUIJOIN, but not NON-EQUIJOIN.',
        isCorrect: false,
      },
      {
        answerText: 'D. They can join only 2 columns within the same table.',
        isCorrect: false,
      },
      {
        answerText:
          'E. They can join two columns within the same table then the performance will be poor.',
        isCorrect: false,
      },
      {
        answerText:
          'F. They may require the EXISTS operator in the join condition.',
        isCorrect: false,
      },
      {
        answerText: 'G. They must have a condition.',
        isCorrect: true,
      },
    ],
    answer: 'B, G',
    help:
      'SELF JOIN requires table aliases and a condition.\n' +
      'They can be used with equijoin, inner join, and outer join, and nonequijoin.',
  },
  {
    questionId: '103',
    questionTypeId: 'MC',
    questionText:
      'Which statement is true about SQL query processing in an Oracle database instance? (Choose the best answer.)',
    answers: [
      {
        answerText:
          'A. During parsing, a SQL statement containing literals in the WHERE clause that has been executed by any session and which is cached in memory, is always reused for the current execution.',
        isCorrect: false,
      },
      {
        answerText:
          'B. During execution, the Oracle server may read data from storage if the required data is not already in nemory.',
        isCorrect: false,
      },
      {
        answerText:
          'C. During row source generation, rows that satisfy the query are retrieved from the database and stored in memory.',
        isCorrect: false,
      },
      {
        answerText:
          'D. During optimization, execution plans are formulated based on the statistics gathered by the database instance, and the lowest cost plan is selected for execution.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help:
      'https://docs.oracle.com/database/121/TGSQL/tgsql_sqlproc.htm#TGSQL188\n' +
      'During execution, the database reads the data from disk into memory if the data is not in memory.\n' +
      'The database also takes out any locks and latches necessary to ensure data integrity and logs any\n' +
      'changes made during the SQL execution.\n' +
      'The final stage of processing a SQL statement is closing the cursor.',
  },
  {
    questionId: '104',
    questionTypeId: 'SC',
    questionText:
      'What are the steps to partitioning?\n' +
      '1) create partition function in db\n' +
      '2) Create table ON scheme\n' +
      '3) Create partition SCHEME ON FUNCTION\n' +
      '4) Add filegroup\n' +
      '5) Add file to filegroup',
    answers: [
      {
        answerText: 'A. 45132',
        isCorrect: true,
      },
      {
        answerText: 'B. 45231',
        isCorrect: false,
      },
      {
        answerText: 'C. 54132',
        isCorrect: false,
      },
      {
        answerText: 'D. 54213',
        isCorrect: false,
      },
      {
        answerText: 'E. 45123',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '105',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the data in the PROMOTIONS table.\n\n' +
      'PROMO_NAME                   PROMO_CATECORY  PROMO_COST  PROMO_BEQIN_DATE\n' +
      '---------------------------  --------------  ----------  ----------------\n' +
      'NO PROMOTION #               NO PROMOTION             0  01-JAN-99\n' +
      'newspaper promotion #16-108  newspaper              200  23-DEC-00\n' +
      'post promotion #20-232       post                   300  25-SEP-98\n' +
      'newspaper promotion #16-349  newspaper              400  10-JUL-98\n' +
      'internet promotion #14-471   internet               600  26-FEB-00\n' +
      'TV promotion #13-448         TV                    1100  06-AUC-00\n' +
      'internet promotion #25-86    internet              1400  20-SEP-98\n' +
      'TV promotion #12-49          TV                    1500  10-AUC-00\n' +
      'post promotion #21-166       post                  2000  25-SEP-98\n' +
      'newspaper promotion #19-210  newspaper             2100  19-MAR-99\n' +
      'post promotion #20-282       post                  2300  06-DEC-00\n' +
      'newspaper promotion #16-327  newspaper             2800  09-APR-99\n' +
      'internet promotion #29-289   internet              3000  01-NOV-98\n' +
      'TV promotion #12-252         TV                    3100  20-JUN-98\n' +
      'magazinepromotion#26-258     magazine              3200  04-MAY-00\n\n' +
      'PROMO_BEGIN_DATE is stored in dd-mon-rr\n' +
      'You need to produce a report that provides the name, cost, and start date of all\n' +
      'promos in the POST category that were launched before September 1, 1999.\n\n' +
      'Which SQL statement would you use?',
    answers: [
      {
        answerText:
          'A. SELECT promo_name, promo_cost, promo_begin_date FROM promotions WHERE promo_category = "post" AND promo_begin_date < \'01-SEPT-99\';',
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT promo_name, promo_cost, promo_begin_date FROM promotions WHERE promo_category LIKE 'P%' AND promo_begin_date < '1-SEPTEMBER-99';",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT promo_name, promo_cost, promo_begin_date FROM promotions WHERE promo_cost LIKE 'post%' AND promo_begin_date < '01-09-1999';",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT promo_name, promo_cost, promo_begin_date FROM promotions WHERE promo_category LIKE '%post%' AND promo_begin_date < '1-SEPT-99';",
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      'PROMO_BEGIN_DATE is stored in dd-mon-rr.\n' + "LIKE '%POST%' is valid.",
  },
  {
    questionId: '106',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true regarding constraints?',
    answers: [
      {
        answerText: 'A. A foreign key column cannot contain null values.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A column with the UNIQUE constraint can contain null values.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A constraint is enforced only for INSERT operation on the table.',
        isCorrect: false,
      },

      {
        answerText:
          'D. A constraint can be disabled even if the constraint column contains data.',
        isCorrect: true,
      },
      {
        answerText:
          'E. All constraints can be defined at the column level and at the table level.',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '107',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true regarding Oracle Data Pump?',
    answers: [
      {
        answerText:
          'A. EXPDP and IMPDP are the client components of Oracle Data Pump.',
        isCorrect: true,
      },
      {
        answerText:
          'B. DBMS_DATAPUMP PL/SQL packages can be used independently of the Data Pump clients.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Oracle Data Pump export and import operations can be performed only by users with the SYSDBA xwilege.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Oracle Data Pump imports can be done from the export files generated in the Original Export Utility.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: 'http://docs.oracle.com/cd/B19306_01/server.102/b14215/dp_overview.htm',
  },
  {
    questionId: '108',
    questionTypeId: 'SC',
    questionText: 'What is true about sequences?',
    answers: [
      {
        answerText: 'A. Once created, a sequence belongs to a specific schema.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Once created, a sequence is linked to a specific table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Once created, a sequence is automatically available to all users.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Only the DBA can control which sequence is used by a certain table.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Once created, a sequence is automatically used in all INSERT and UPDATE statements.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '109',
    questionTypeId: 'SC',
    questionText: 'Which statement would execute successfully?',
    answers: [
      {
        answerText:
          'A. Create table PRODUCT1 (id number, product varchar2(50), price number(10,2), price_with_discount(10,2) generated always as (round (price*0.92)) virtual);',
        isCorrect: true,
      },
      {
        answerText:
          'B. Create table PRODUCT1 (id number, product varchar2(50), price number(10,2), price_with_discount(10,2) generated always as virtual (round(price*0.92)));',
        isCorrect: false,
      },
      {
        answerText:
          'C. Create table PRODUCT1 (id number, product varchar2, price number(10,2), price_with_discount(10,2) generated always as (round(price*0.92)) virtual);',
        isCorrect: false,
      },
      {
        answerText:
          'D. Create table AS SELECT PRODUCT1 (id number, product varchar2(50), price number(10,2), price_with_discount(10,2) generated always as (round(price*0.92)) virtual);',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'VARCHAR needs precision. Varchar(n)!\n' +
      'VIRTUAL is placed at the end of the CREATE TABLE statement.\n' +
      'Virtual columns cannot be created as part of external tables.',
  },
  {
    questionId: '110',
    questionTypeId: 'SC',
    questionText:
      'Examine the commands:\n' +
      'SQL> ALTER SESSION SET RECYCLEBIN = ON;\n' +
      '  Session altered.\n\n' +
      'SQL> DROP TABLE COUNTRIES;\n' +
      '  Total dropped.\n\n' +
      'SQL> CREATE TABLE COUNTRIES (id NUMBER CONSTRAINT Countries_Name_idx PRIMARY KEY,\n' +
      'Language VARCHAR2(15), Size NUMBER(7,2));\n' +
      '  Table created.\n\n' +
      'You then execute multiple INSERT statements to insert rows into COUNTRIES table and drop the table again:\n\n' +
      'SQL> DROP TABLE COUNTRIES;\n' +
      '  Table dropped.\n\n' +
      'SQL> FLASHBACK TABLE COUNTRIES TO BEFORE DROP;\n\n' +
      'Which statement is true about the FLASHBACK command?',
    answers: [
      {
        answerText:
          'A. It recovers the structure, data, and indexes of the first COUNTRIES table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It recovers the structure, data, and indexes of the second COUNTRIES table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It recovers only the structure of the second COUNTRIES table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It returns an error because two tables with the same name exist in the recycle bin.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '111',
    questionTypeId: 'SC',
    questionText:
      'You have altered an index supporting a constraint to be invisible on a table.\n' +
      'Which statement is true?',
    answers: [
      {
        answerText:
          'A. You might retain the index, and leave it as invisible, and the constraint will still be recognized and enforced.',
        isCorrect: true,
      },
      {
        answerText:
          'B. You must retain the index and make it visible again for the constraint to be recognized and enforced.',
        isCorrect: false,
      },
      {
        answerText:
          'C. You might drop the index and use a constraint with the DISABLE NOVALIDATE RELY flags for the constraint to be recognized.',
        isCorrect: false,
      },
      {
        answerText:
          'D. You might drop the index and make the constraint invisible, for the constraint to be recognized and enforced.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '112',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following SQL statement:\n\n' +
      "SELECT APPLE_PRODUCT_NAME || 'it's not available for order' FROM product_information\n" +
      "WHERE product_status = 'Not supported';\n\n" +
      'You received the following error while executing the above query:\n\n' +
      'ERROR-\n' +
      'ORA-01756: quoted string not properly terminated\n\n' +
      'What would you do to execute the query successfully?',
    answers: [
      {
        answerText:
          'A. Enclose the literal character string in the SELECT clause within the double quotation marks.',
        isCorrect: false,
      },
      {
        answerText:
          "B. Use q'|| or q'<> to allow the use of single quotation mark in the literal character string.",
        isCorrect: true,
      },
      {
        answerText:
          'C. Do not enclose the character literal string in the SELECT clause within the single quotation marks.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Use /ESCAPE/ to negate the single quotation mark inside the literal character string in the SELECT clause.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '113',
    questionTypeId: 'MC',
    questionText:
      'On your Oracle 12c database, you invoked SQL *Loader to load data into the MANAGERS_FINANCE\n' +
      'table in the HR schema by issuing the following command:\n\n' +
      '$> sqlldr hr/hr@pdb table=MANAGERS_FINANCE\n\n' +
      'Whch two statements are true regarding the command?',
    answers: [
      {
        answerText:
          'A. It succeeds with default settings if the MANAGERS_FINANCE table belonging to HR is already defined in the database.',
        isCorrect: true,
      },
      {
        answerText:
          'B. It fails because no SQL *Loader data file location is specified.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It fails if the HR user does not have the CREATE ANY DIRECTORY privilege.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It fails because no SQL *Loader control file location is specified.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: '',
  },
  {
    questionId: '114',
    questionTypeId: 'MC',
    questionText:
      'Which two statements would execute successfully AND with the expected output? (choose two.)',
    answers: [
      {
        answerText:
          "A. SELECT LAST_NAME, DEPT_ID FROM EMPLOYEES WHERE SOUNDEX(LAST_NAME) = 'BARBIER';",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT LAST_NAME, DEPT_ID, SALARY, SUM(COMMISSION) FROM EMPLOYEES WHERE LAST_NAME LIKE 'B%';",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT SUM(DISTINCT NVL(COMMISSION,0), MAX(COMMISSION), FROM EMPLOYEES WHERE LAST_NAME LIKE 'B%';",
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT LAST_NAME, MAX(AVG(COMMISSION)) FROM EMPLOYEES WHERE DEPT_ID > 4;',
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help:
      'B: It misses the GROUP BY clause.\n' +
      "A: it needs to be SOUNDEX(LAST_NAME) = SOUNDEX('BARBIER') in order to be a valid statement.",
  },
  {
    questionId: '115',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding views? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The WITH CHECK OPTION constraint can be used in a view definition to restrict the columns displayed through the view.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The OR REPLACE option is used to change the definition of an existing view without dropping and recreating it.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Rows cannot be deleted through a view if the view definition contains the DISTINCT keyword.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Rows added through a view are deleted from the table automatically when the vtew is dropped.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A simple view in which column aliases have been used cannot be updated.',
        isCorrect: false,
      },
      {
        answerText:
          'F. A subquery used in a complex view definition cannot contain group functions or joins.',
        isCorrect: false,
      },
    ],
    answer: 'B, C',
    help: '',
  },
  {
    questionId: '116',
    questionTypeId: 'MC',
    questionText:
      'View the Exhibit and examine the structure of ORDER_ITEMS and ORDERS tables.\n' +
      'You need to remove from the ORDERJTEMS table those rows that have an order status of 0 or 1 in the ORDERS table.\n\n' +
      'Table ORDER_ITEMS\n' +
      'Name          Null?     Type\n' +
      '------------  --------  -----------\n' +
      'ORDER_ID      NOT NULL  NUMBER(12)\n' +
      'LINE_ITEM_ID  NOT NULL  NUMBER(3)\n' +
      'PRODUCT_ID    NOT NULL  NUMBER(6)\n' +
      'UNIT_PRICE              NUMBER(8,2)\n' +
      'QUATITY                 NUMBER(3)\n\n' +
      'Table ORDERS\n' +
      'Name          Null?     Type\n' +
      '------------  --------  -----------\n' +
      'ORDER_ID      NOT NULL  NUMBER(12)\n' +
      'ORDER_DATE    NOT NULL  TIMESTAMP(6)\n' +
      '                        WITHLOCALTIMEZONE\n' +
      'ORDER_MODE              VARCHAR2(8)\n' +
      'CUSTOMER_ID   NOT NULL  NUMBER(6)\n' +
      'ORTER_STATUS            NUMBER(2)\n' +
      'ORDER_TOTAL             NUMBER(8,2)\n' +
      'SALES_REP_ID            NUMBER(6)\n' +
      'PROMOTION_ID            NUMBER(6)\n\n' +
      'Which two DELETE statements are valid (Choose two.)',
    answers: [
      {
        answerText:
          'A. DELETE * FROM order_items WHERE order_id IN (SELECT order_id) FROM orders WHERE order_status IN (0,1));',
        isCorrect: false,
      },
      {
        answerText:
          'B. DELETE FROM (SELECT * FROM order_items i, orders o WHERE i.order_id = o.order_id AND order_status IN (0,1));',
        isCorrect: false,
      },
      {
        answerText:
          'C. DELETE FROM order_items i WHERE order_id = (SELECT order_id FROM orders o WHERE i.order_id = o.order_id AND order_status IN (0,1));',
        isCorrect: true,
      },
      {
        answerText:
          'D. DELETE FROM order_items WHERE order_id IN (SELECT order_id FROM orders WHERE order_status in (0,1));',
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help:
      'A: DELETE * is not a valid syntax.\n' +
      'B: does not give the required result.',
  },
  {
    questionId: '117',
    questionTypeId: 'SC',
    questionText:
      'The following SELECT statement formats the number 4000 with the decimal character\n' +
      'and group separator specified in the ALTER SESSION statement.\n\n' +
      'RESULT: 4.000,00',
    answers: [
      {
        answerText: "A. SELECT TO_CHAR(4000, '9G999D99') FROM DUAL;",
        isCorrect: true,
      },
      {
        answerText: "B. SELECT TO_CHAR(4000, '9D999V99') FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText: "C. SELECT TO_CHAR(4000, '9D999G99') FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText: "D. SELECT TO_CHAR(4000, 'L9G999D99') FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText: "E. SELECT TO_CHAR(4000, 'G9L999D99') FROM DUAL;",
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: 'g: group separator / d: decimal. No currency needed.',
  },
  {
    questionId: '118',
    questionTypeId: 'MC',
    questionText:
      'Wich two statements are true about the Oracle data type conversion?',
    answers: [
      {
        answerText:
          'A. During SELECT and UPDATE operations, Oracle converts automatically the data from the column to the type of the target variable.',
        isCorrect: true,
      },
      {
        answerText:
          'B. When comparing a date value with a numeric value, Oracle converts the date data to a numeric value.',
        isCorrect: false,
      },
      {
        answerText:
          'C. During conversion from a timestamp value to a DATE value, the fractional seconds portion of the timestamp value is rounded.',
        isCorrect: false,
      },
      {
        answerText:
          'D. During concatenation operations, Oracle converts from noncharacter data types to only CHAR datatype.',
        isCorrect: false,
      },
      {
        answerText:
          'E. You can convert LONG to INTERVAL using TO_CHAR(interval), and then convert the resulting VARCHAR2 value to INTERVAL.',
        isCorrect: true,
      },
    ],
    answer: 'A, E',
    help:
      "Oracle doesn't convert automatically a date to a number.\n" +
      'During conversion from a timestamp value to a DATE value,\n' +
      'the fractional seconds portion of the timestamp value is TRUNCATED, (it used to be rounded though)\n' +
      'Oracle cannot convert automatically the DATE data to a NUMERIC value.\n' +
      'During concatenation operations, Oracle converts from noncharacter data types to CHAR or NCHAR.',
  },
  {
    questionId: '119',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following CREATE SEQUENCE statement:\n\n' +
      'CREATE SEQUENCE seql\n' +
      'START WITH 100 INCREMENT BY 10\n' +
      'MAXVALUE 200\n' +
      'NOCACHE;\n\n' +
      'The SEQ1 sequence has generated numbers up to the maximum limit of 200.\n' +
      'You issue the following SQL statement:\n\n' +
      'SELECT seql.nextval FROM dual;\n\n' +
      'What is displayed by the SELECT statement?',
    answers: [
      {
        answerText: 'A. 1',
        isCorrect: true,
      },
      {
        answerText: 'B. 10',
        isCorrect: false,
      },
      {
        answerText: 'C. 100',
        isCorrect: false,
      },
      {
        answerText: 'D. an error',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: 'No MINVALUE therefore NEXTVAL is 1.',
  },
  {
    questionId: '120',
    questionTypeId: 'MC',
    questionText: 'Which three tasks can be performed by DDL statements?',
    answers: [
      {
        answerText: 'A. Providing an alternative name for a table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Modifying a table to prevent data that violate certain conditions from being entered in a column.',
        isCorrect: true,
      },
      {
        answerText: 'C. Preventing any data modification to a table.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Preventing data retrieval from a table outside of office hours.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Creating multiple savepoints to enable partial rollback of a transaction.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C',
    help: 'RENAME, GRANT/REVOKE, ALTER TABLE.',
  },
  {
    questionId: '121',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about the Oracle data type conversion?',
    answers: [
      {
        answerText:
          'A. You can convert NUMBER to DATE directly using TO_TIMESTAMP().',
        isCorrect: false,
      },
      {
        answerText: 'B. You can convert CLOB to CHAR directly using TO_CHAR().',
        isCorrect: true,
      },
      {
        answerText:
          'C. The output of the conversion between NVARCHAR2 and CHAR will always be NVARCHAR2.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The output of the conversion between NCHAR and CHAR will always be CHAR.',
        isCorrect: false,
      },
    ],
    answer: 'B, C',
    help:
      'https://docs.oracle.com/database/121/SQLRF/sql_elements002.htm#SQLRF51056\n' +
      'TABLE2-11 Conversion Direction of Different Character Types',
  },
  {
    questionId: '122',
    questionTypeId: 'SC',
    questionText:
      'What is the output of this query?\n\n' +
      "SELECT INTERVAL '122' YEAR + INTERVAL '20' MONTH;",
    answers: [
      {
        answerText: "A. INTERVAL '123-8' YEAR TO MONTH",
        isCorrect: false,
      },
      {
        answerText: "B. INTERVAL '122' YEAR + INTERVAL '11-7' MONTH",
        isCorrect: false,
      },
      {
        answerText: 'C. An error',
        isCorrect: true,
      },
      {
        answerText: "D. INTERVAL '122-20' YEAR TO MONTH",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: "It returns an error, because the default precision is 2, and '123' has 3 digits -> INTERVAL '123-8' YEAR(3) TO MONTH",
  },
  {
    questionId: '123',
    questionTypeId: 'MC',
    questionText: 'Which three statements are true about sequences?',
    answers: [
      {
        answerText:
          'A. The INCREMENT BY value can be any positive or negative integers, and it can be 0.',
        isCorrect: false,
      },
      {
        answerText:
          'B. If you omit the INCREMENT BY clause, then the interval defaults to 0.',
        isCorrect: false,
      },
      {
        answerText: 'C. MAXVALUE can be equal to START WITH.',
        isCorrect: true,
      },
      {
        answerText:
          'D. CACHE specifies how many values of the sequences the database preallocates and keeps in memory for faster access.',
        isCorrect: true,
      },
      {
        answerText:
          'E. If a system failure occurs, all cached sequence values that have not been used in committed DML statements are lost. The potential number of lost values is equal to the value of the CACHE parameter',
        isCorrect: true,
      },
    ],
    answer: 'C, D, E',
    help:
      'INCREMENT BY cannot be 0 but it can positive or negative integers.\n' +
      'If you omit this clause, then the interval defaults to 1.',
  },
  {
    questionId: '124',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding tables? (Choose three.)',
    answers: [
      {
        answerText: 'A. A table name can be of any length.',
        isCorrect: false,
      },
      {
        answerText: 'B. A table can have any number of columns.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A column that has a DEFAULT value cannot store null values.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A table and a view can have the same name in the same schema.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A table and a synonym can have the same name in the same schema.',
        isCorrect: true,
      },
      {
        answerText:
          'F. The same table name can be used in different schemas in the same database.',
        isCorrect: true,
      },
      {
        answerText: 'G. You can use _ and $ and # in the table name.',
        isCorrect: true,
      },
      {
        answerText:
          'H. A table is case insensitive even we use quotation marks.',
        isCorrect: false,
      },
    ],
    answer: 'E, F, G',
    help:
      'D: Tables and views are in the same namespace.\n' +
      'H: if we use "" cases are case sensitive.',
  },
  {
    questionId: '125',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true? (Choose two.)',
    answers: [
      {
        answerText:
          'A. In an INSERT... AS SELECT operation, you can bind up to 4000 bytes of data to LOB columns and attributes. There is no length restriction when you do INSERT... AS SELECT from one table to another table using SQL with no bind variables.',
        isCorrect: true,
      },
      {
        answerText:
          'B. You cannot specify LOB columns in the ORDER BY clause of a query or an aggregate function.',
        isCorrect: true,
      },
      {
        answerText: 'C. You can specify a LOB column as part of an index key.',
        isCorrect: false,
      },
      {
        answerText: 'D. You can specify a LOB as a primary key column',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help:
      'You cannot specify a LOB column as part of an index key.\n' +
      'However, you can specify a LOB column in the index type specification of a domain index.\n' +
      'In addition, Oracle lets you define an index on a CLOB column.\n' +
      'You cannot specify a LOB as a primary key column.',
  },
  {
    questionId: '126',
    questionTypeId: 'MC',
    questionText:
      'Suppose you are a salesperson for FETERNES Corporation and you want to call your primary contact\n' +
      "people at all of Feternes' customer organizations in France. You execute the following query:\n\n" +
      'SELECT * FROM CONTACT\n' +
      'WHERE EXISTS (SELECT*\n' +
      '      FROM CUSTOMER\n' +
      '      WHERE CustCountry = TRANCE1 AND CONTACT.CustID = CUSTOMER.CustID);\n\n' +
      'Which two statements are NOT true?',
    answers: [
      {
        answerText:
          'A. The CustID column links the CONTACT table to the CUSTOMER table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The next CONTACT record is processed in the same way, and soon, until the entire CONTACT table has been processed.',
        isCorrect: false,
      },
      {
        answerText:
          "C. Because the query specifies SELECT * FROM CONTACT, all the contact table's fields are returned, including the contact's name and phone number.",
        isCorrect: false,
      },
      {
        answerText:
          "D. SQL looks at the first record in the CONTACT table, finds the row in the CUSTOMER table that has the same CustID, and checks that row's CustCountry field.",
        isCorrect: false,
      },
      {
        answerText:
          "E. If CUSTOMER.CustCountry=TRANCE', the current CONTACT row is removed to the result table.",
        isCorrect: true,
      },
      {
        answerText:
          'F. For each candidate row of the inner query, you evaluate the outer query, using the CustID value from the current CONTACT row of the outer query in the WHERE clause of the inner query.',
        isCorrect: true,
      },
      {
        answerText:
          'G. The CONTACT.CustID, which is referencing a column from the outer query and comparing it with another column, CUSTOMER.CustID, from the inner query.',
        isCorrect: false,
      },
    ],
    answer: 'E, F',
    help:
      "E: If CUSTOMER-CustCountry - 'FRANCE', the current CONTACT row is ADDED to the result table.\n" +
      'F: For each candidate row of the OUTER query, you evaluate the INNER query, using the CustID\n' +
      'value from the current CONTACT row of the outer query in the WHERE clause of the inner query.',
  },
  //--------------------------------- Exam 3 ---------------------------------------
  {
    questionId: '127',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about date/time functions in a session where NLS_DATE_FORMAT is set to\n' +
      'MON_YYYY HH24:MI:SS?',
    answers: [
      {
        answerText:
          'A. CURRENT_TIMESTAMP returns the same time with time zone as LOCALTIMESTAMP.',
        isCorrect: false,
      },
      {
        answerText: 'B. SYSDATE can be queried only from the DUAL table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. SYSDATE returns the current date as per the session time zone.',
        isCorrect: false,
      },
      {
        answerText:
          'D. CURRENT_TIMESTAMP returns the same date and time as LOCALTIMESTAMP with additional details of fractional seconds.',
        isCorrect: false,
      },
      {
        answerText:
          'E. OBTIMETIMEZONE and SESSIONTIMEZONE can return an offset from Universal Coordinated Time (UTC).',
        isCorrect: true,
      },
    ],
    answer: 'E',
    help: '',
  },
  {
    questionId: '128',
    questionTypeId: 'MC',
    questionText:
      'The SALES table has columns PRODUCT and PRODUCTS.SOLD of data type NUMBER.\n' +
      'Which two queries execute successfully? (Choose two.)',
    answers: [
      {
        answerText:
          'A. SELECT COUNT(PRODUCT) FROM sales WHERE PRODUCTS_SOLD > 10000 AND COUNT(*) > 10 GROUP BY COUNT(PRODUCT) > 10;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT PRODUCT FROM sales WHERE PRODUCTS_SOLD > 10000 GROUP BY PRODUCT HAVING COUNT(*) > 10;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT COUNT(prod_id) FROM sales GROUP BY prod_id WHERE PRODUCTS_SOLD > 10000;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT_COUNT(PRODUCT) FROM sales WHERE PRODUCTS_SOLD > 10000 GROUP BY PRODUCT;',
        isCorrect: true,
      },
      {
        answerText:
          'E. PRODUCT FROM sales WHERE PRODUCTS_SOLD > 10000 GROUP BY COUNT(PRODUCT) HAVING COUNT(*) > 10;',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '129',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about sequences created in a single instance database? (Choose two.)',
    answers: [
      {
        answerText:
          'A. When the MAXVALUE limit for the sequence is reached, you can increase the MAXVALUE limit by using the ALTER SEQUENCE statement.',
        isCorrect: true,
      },
      {
        answerText:
          "B. DELETE 'sequence_name' would remove a sequence from the database.",
        isCorrect: false,
      },
      {
        answerText:
          'C. The numbers generated by a sequence can be used only for one table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. CURRVAL is used to refer to the last sequence number that has been generated.',
        isCorrect: true,
      },
      {
        answerText:
          'E. When a database instance shuts down abnormally, the sequence numbers that have been cached but not used would be available once again when the database instance is restarted.',
        isCorrect: false,
      },
    ],
    answer: 'A, D',
    help:
      'http://docs.oracle.com/cd/E11882_01/server:112/e41084/statements_2012.htm#SQLRF00817\n' +
      'https://docs.oracle.com/cd/A84870_01/doc/server:816/a76989/ch26.htm',
  },
  {
    questionId: '130',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about substitution variable?',
    answers: [
      {
        answerText:
          'A. DEFINE; specifies a user or predefined variable and assigns a VARCHAR value to it.',
        isCorrect: false,
      },
      {
        answerText:
          'B. UNDEFINE; deletes one or more substitution variables that you defined only explicitly.',
        isCorrect: false,
      },
      {
        answerText:
          'C. ACCEPT; reads a line of input and stores it in a given substitution variable.',
        isCorrect: true,
      },
      {
        answerText:
          'D. SHOW DEFINE; lists all existing variables defined for the session.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help:
      'Specifies a user or predefined variable and assigns a CHAR value to it.\n' +
      'Tricky but pay special attention to this detail!!!\n' +
      'D: SHOW DEFINE; lists the current state of the DEFINE system variables.\n' +
      'UNDEFINE; Deletes one or more substitution variables that you defined either explicitly\n' +
      '(with the DEFINE command) or implicitly (with an argument to the START command).',
  },
  {
    questionId: '131',
    questionTypeId: 'MC',
    questionText:
      "What's the difference between SQL and a database? (Choose two.)",
    answers: [
      {
        answerText:
          'A. An ERD is a relational database management system that uses SQL.',
        isCorrect: false,
      },
      {
        answerText:
          'B. SQL is a query programming language that manages RDBMS.',
        isCorrect: true,
      },
      {
        answerText:
          'C. SQL allows you to handle, store, modify and delete data and store data in an organized way. (mysql - rdbms)',
        isCorrect: false,
      },
      {
        answerText:
          'D. SQL is a software that manage or organize the data in a database.',
        isCorrect: false,
      },
      {
        answerText: 'E. SQL does not provide security to the database.',
        isCorrect: true,
      },
    ],
    answer: 'B, E',
    help: '',
  },
  {
    questionId: '132',
    questionTypeId: 'MC',
    questionText:
      'The relations between logical database design and physical database design are. (choose two.)',
    answers: [
      {
        answerText:
          'A. An ERD defines the data elements and their relationship.',
        isCorrect: true,
      },
      {
        answerText: 'B. An ERD develops the actual database.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A column is a physical implementation of an entity of a certain attribute.',
        isCorrect: false,
      },
      {
        answerText:
          'D. An ERD is a logical representation of a real-world system. ',
        isCorrect: true,
      },
    ],
    answer: 'A, D',
    help:
      'The act of modelling real-world business syste often includes the creation of a data model, which is depicted in an ERD.\n' +
      "When building a relational database, entities are transformed into tables, and an entity’s attributes are implemented as the table's columns.\n" +
      "An ERD is just a type of flowchart that illustrates how entities such as 'people, objects, or concepts' relate to each other within a system.\n" +
      'C: A column is a physical implementation of an attribute of a certain entity.',
  },
  {
    questionId: '133',
    questionTypeId: 'MC',
    questionText:
      'Examnine the SALES table:\n\n' +
      'CREATE TABLE SALES(\n' +
      '  SALES_ID     NUMBER NOT NULL,\n' +
      '  PRODUCT_NAME VARCHAR2(50),\n' +
      '  QUARTER1     NUMBER,\n' +
      '  QUARTER2     NUMBER,\n' +
      '  QUARTER3     NUMBER,\n' +
      '  QUARTER4     NUMBER);\n\n' +
      'Which twos statements would execute successfully?',
    answers: [
      {
        answerText:
          'A. SELECT SUM(DISTINCT NVL(QUARTER1,O)), MAX(QUARTER1) FROM SALES WHERE QUARTER1 > QUARTER2;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT PRODUCT_NAME, subject1 FROM SALES WHERE QUARTER1 > AVG(subject1);',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT SUM(QUARTER1 + QUARTER2 + QUARTER3 + QUARTER4) FROM SALES WHERE RODUCT_NAME IS NULL;',
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT PRODUCT_NAME, SUM(QUARTER1) FROM SALES WHERE PRODUCT_NAME LIKE 'RED_W%' GROUP BY QUARTER1;",
        isCorrect: false,
      },
      {
        answerText:
          'E. SELECT SUM(DISTINCT NVL2(QUARTER1,O)), MAX(QUARTER1) FROM SALES WHERE QUARTER1 > QUARTER2 FETCH FIRST 5 ROWS WITH TIES;',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '134',
    questionTypeId: 'SC',
    questionText:
      'Examine the EMPLOYEES table:\n' +
      '\n' +
      'CREATE TABLE EMPLOYEES (\n' +
      '  EMPLOYEES_ID NUMBER NOT NULL,\n' +
      '  PROJECT_NAME VARCHAR2(50),\n' +
      '  SALARY       NUMBER,\n' +
      '  COMMISSION   NUMBER\n' +
      'INSERT INTO TABLES\n' +
      '  VALUES (1, DATA,     3200, 1400),\n' +
      '  VALUES (2, GROWTH,   3050, 2900)\n' +
      '  VALUES (3, STRATEGY, 4800, 2000);\n' +
      '\n' +
      '  Which SQL statement find the 3rd highest salary from the EMPLOYEES table?',
    answers: [
      {
        answerText:
          'A. SELECT Salary FROM Employees Emp1\n' +
          '    WHERE EMPLOYEE_ID < ANY (\n' +
          '     SELECT COUNT(DISTINCT (Emp2.Salary))\n' +
          '     FROM Employees Emp2\n' +
          '     WHERE Emp2.Salary > Emp1.Salary);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT Salary FROM Employees Emp1\n' +
          '    WHERE 2 = (\n' +
          '     SELECT COUNT(DISTINCT (Emp2.Salary))\n' +
          '     FROM Employees Emp2\n' +
          '     WHERE Emp2.Salary > Emp1.Salary);',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT Salary FROM Employees Emp1\n' +
          '    WHERE EMPLOYEE_ID > ALL (\n' +
          '     SELECT COUNT( DISTINCT ( Emp2.Salary ))\n' +
          '     FROM Employees Emp2\n' +
          '     WHERE Emp2.Salary > Emp1.Salary);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT Salary FROM Employees Emp1\n' +
          '    WHERE N-1 = (\n' +
          '     SELECT COUNT(DISTINCT (Emp2.Salary))\n' +
          '     FROM Employees Emp2\n' +
          '     WHERE Emp2.Salary > Emp1.Salary);',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '135',
    questionTypeId: 'SC',
    questionText:
      'Examine both tables below:\n' +
      '\n' +
      'CREATE TABLE COUNTRIES(COUNTRIES_ID NUMBER, LANGUAGE_ID CHAR,\n' +
      '  SIZE NUMBER, GDP NUMBER, COUNTRIES_CODE VARCHAR2(2);\n' +
      '\n' +
      'CREATE TABLE COUNTRIES_ECONOMY(COUNTRIES_ID NUMBER, GDP NUMBER,\n' +
      '  TRADE_BALANCE NUMBER);\n' +
      '\n' +
      'You execute this SQL statement:\n' +
      '\n' +
      'INSERT INTO COUNTRIES VALUES(4, POL, 102, (\n' +
      "  SELECT GDP FROM COUNTRIES_ECONOMY WHERE TRADE_BALANCE = 'WHEAT'), 79);\n" +
      '\n' +
      'Which statement is true?',
    answers: [
      {
        answerText:
          'A. The statement will execute successfully and a new row will be inserted into the COUNTRIES table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The statement will fail because a subquery may not contained in a VALUES clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement will fail if a row already exists in the COUNTRIES table for COUNTRIES_ID 4.',
        isCorrect: false,
      },
      {
        answerText:
          "D. The statement will execute successfully only if trade_balance ='WHEAT' exists.",
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'B: Subqueries can appear in DML statements, CREATE VIEW and CREATE TABLE\n' +
      'C: Nothing within the CREATE TABLE statement mentions that COUNTRIES_ID has to be UNIQUE.\n' +
      'D: Nothing within the CREATE TABLE statement mentions that COUNTRIES_ID has to be NOT NULL.',
  },
  {
    questionId: '136',
    questionTypeId: 'MC',
    questionText: 'Which three are true about privileges and roles?',
    answers: [
      {
        answerText: 'A. A role is owned by the user who created it.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A role can contain a combination of several privileges and roles.',
        isCorrect: true,
      },
      {
        answerText:
          'C. System privileges always set privileges for an entire database.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A user has all object privileges for every object in their schema by default.',
        isCorrect: true,
      },
      {
        answerText: 'E. All roles are owned by the SYS schema.',
        isCorrect: false,
      },
      {
        answerText: 'F. PUBLIC can be revoked from a user.',
        isCorrect: false,
      },
      {
        answerText:
          'G. PUBLIC acts as a default role granted to every user in a database.',
        isCorrect: true,
      },
    ],
    answer: 'B, D, G',
    help: '',
  },
  {
    questionId: '137',
    questionTypeId: 'MC',
    questionText:
      'Examine the EMPLOYEES table:\n' +
      '\n' +
      'CREATE TABLE EMPLOYEES (EMPLOYEES_ID VARCHAR2(100) NOT NULL, \n' +
      '  LAST_NAME VARCHAR2(100) NOT NULL, CITY VARCHAR2(50), SALARY NUMBER);\n' +
      '\n' +
      'Examine the partial query below:\n' +
      '\n' +
      'SELECT CITY, LAST_NAME "LNAME" FROM EMPLOYEES;\n' +
      '\n' +
      'You want to display all salaries which starts by 5.\n' +
      'Then, the cities must be returned in ascending order,\n' +
      'with the last names further sorted in descending order.\n' +
      'Which tow clauses must you add to the query? (choose two.)',
    answers: [
      {
        answerText: 'A. ORDER BY 1, LNAME',
        isCorrect: false,
      },
      {
        answerText: 'B. ORDER BY 2, 1 DESC',
        isCorrect: false,
      },
      {
        answerText: "C. WHERE SALARY IN ('5')",
        isCorrect: false,
      },
      {
        answerText: "D. WHERE SALARY IN ('5%')",
        isCorrect: false,
      },
      {
        answerText: "E. WHERE SALARY LIKE '%5%'",
        isCorrect: false,
      },
      {
        answerText: "F. WHERE SALARY LIKE '_5%'",
        isCorrect: false,
      },
      {
        answerText: "G. WHERE SALARY LIKE '5%'",
        isCorrect: true,
      },
      {
        answerText: 'H. ORDER BY 1, 2 DESC',
        isCorrect: true,
      },
    ],
    answer: 'G, H',
    help:
      "G: The salaries must start with 5 -> '5%'. Also, you must use the LIKE command.\n" +
      'H: 1 -> CITY and 2 -> LAST_NAME OR LNAME.',
  },
  {
    questionId: '138',
    questionTypeId: 'MC',
    questionText:
      'Examine the RENTING table:\n' +
      '\n' +
      'CREATE TABLE RENTING(\n' +
      ' RENTING_ID     NUMBER NOT NULL,\n' +
      ' RENTING_DATE   DATE,\n' +
      ' RENTING_AMOUNT NUMBER);\n' +
      '\n' +
      'Which two SQL statements would execute successfully?',
    answers: [
      {
        answerText:
          "A. SELECT RENTING_ID, NVL2(RENTING_AMOUNT, 'NOT YET', 'NO') FROM RENTING;",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT RENTING_ID, NVL2(RENTING_AMOUNT, RENTING_DATE , 'Not Available') FROM RENTING;",
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT RENTING_ID, NVL2(RENTING_AMOUNT, sysdate-RENTING_DATE, sysdate) FROM RENTING;',
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT RENTING_ID, NVL2(RENTING_AMOUNT, RENTING_AMOUNT *.25, 'Not Available') FROM RENTING;",
        isCorrect: false,
      },
      {
        answerText:
          "E. SELECT RENTING_ID, NVL(RENTING.AMOUNT, 'NOT YET', 'NO') FROM RENTING;",
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help:
      'NVL(E1, E2, E3) -> E: can be any data type and is never returned.\n' +
      'However, E2 and E3 must be the same datatype.\n' +
      'If Expression1 is not null, then Expression2 is returned, if Expression1 is NULL then Expressions3 is returned',
  },
  {
    questionId: '139',
    questionTypeId: 'MC',
    questionText:
      'Examine table below:\n' +
      '\n' +
      'CREATE TABLE COUNTRIES(\n' +
      ' COUNTRIES_ID   NUMBER PRIMARY KEY,\n' +
      ' LANGUAGE       LONG,\n' +
      ' SIZE           NUMBER UNIQUE,\n' +
      ' GDP            NUMBER,\n' +
      ' COUNTRIES_CODE VARCHAR2(2) NOT NULL;\n' +
      ' RACES LONG)\n' +
      'CONSTRAINT CDU_RACES_FK REFERENCES POVERTY (RACES),\n' +
      'CONSTRAINT SIZE_SZ NOT NULL);\n' +
      '\n' +
      'Which two things must be changed for it to execute successfully? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The foreign key constraint on RACES must be defined at the table level instead of the column level.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The NOT NULL constraint on SIZE must be defined at the column level instead of the table level.',
        isCorrect: true,
      },
      {
        answerText: 'C. The primary key constraint on EMP_ID must have a name.',
        isCorrect: false,
      },
      {
        answerText:
          'D. One of the LONG columns must be changed to a VARCHAR2 or CLOB.',
        isCorrect: true,
      },
      {
        answerText:
          'E. The word CONSTRAINT in the foreign key constraint on RACES must be changed to FOREIGN KEY.',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help:
      'NOT NULL can only be defined at the column level.\n' +
      'You can only have one LONG per table.',
  },
  {
    questionId: '140',
    questionTypeId: 'MC',
    questionText:
      'The EMPLOYEES table has a primary key constraint on the EMPLOYEES_ID column.\n' +
      '\n' +
      'The DEPT table has a foreign key constraint on the EMPLOYEES_ID column,\n' +
      'referencing the primary key of the EMPLOYEES table.\n' +
      'The constraint is defined with ON DELETE CASCADE.\n' +
      '\n' +
      'There are rows in the EMPLOYEES table with a SALARY_COM of less than 35000.\n' +
      '\n' +
      'Which three DELETE statements execute successfully? (Choose three.)',
    answers: [
      {
        answerText:
          'A. DELETE EMPLOYEES_ID FROM EMPLOYEES WHERE SALARY_COM < 35000;',
        isCorrect: false,
      },
      {
        answerText: 'B. DELETE EMPLOYEES WHERE SALARY_COM < 1000;',
        isCorrect: true,
      },
      {
        answerText: 'C. DELETE * FROM EMPLOYEES WHERE order_total < 35000;',
        isCorrect: false,
      },
      {
        answerText: 'D. DELETE FROM EMPLOYEES;',
        isCorrect: true,
      },
      {
        answerText: 'E. DELETE FROM EMPLOYEES WHERE SALARY_COM < 35000;',
        isCorrect: true,
      },
    ],
    answer: 'B, D, E',
    help:
      'DELETE * is not a valid syntax.\n' + 'A: You cannot delete EMPLOYEE_ID.',
  },
  {
    questionId: '141',
    questionTypeId: 'MC',
    questionText:
      'DAVID and his colleague JEREMY have these privileges on the EMPLOYEE_RECORDS table:\n' +
      '\n' +
      '1. SELECT\n' +
      '2. INSERT\n' +
      '3. UPDATE\n' +
      '4. DELETE\n' +
      '\n' +
      'DAVID connect to the database instance and perform an update to some of the rows in EMPLOYEE_RECORDS,\n' +
      'but do not commit yet.\n' +
      '\n' +
      'JEREMY connects to the database instance and queries the table.\n' +
      '\n' +
      'No other users are accessing the table.\n' +
      '\n' +
      'Which two statements are true at this point? (Choose two.)',
    answers: [
      {
        answerText:
          'A. JEREMY will be unable to see the changes DAVID has made.',
        isCorrect: true,
      },
      {
        answerText:
          'B. JEREMY will be unable to perform any INSERTS, UPDATES, or DELETES on the table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. JEREMY will be able to SELECT from the table, but not be unable to modify any existing rows.',
        isCorrect: false,
      },
      {
        answerText: 'D. JEREMY will be able to see the changes DAVID has made.',
        isCorrect: false,
      },
      {
        answerText:
          "E. JEREMY will be able to modify any rows in the table that have not been modified by DAVID's transaction.",
        isCorrect: true,
      },
    ],
    answer: 'A, E',
    help:
      'No commit -> therefore JEREMY is unable to see the changes David has made.\n' +
      'E: there is nothing wrong answer about this statement.',
  },
  {
    questionId: '142',
    questionTypeId: 'MC',
    questionText:
      'CREATE TABLE EMPLOYEES(\n' +
      '  EMPLOYEE_ID NUMBER NOT NULL,\n' +
      '  SALARY      NUMBER,\n' +
      '  DEPT_ID     NUMBER);\n' +
      '\n' +
      'Which two queries return the highest salary in the table?',
    answers: [
      {
        answerText:
          'A. SELECT MAX(salary) FROM employees GROUP BY department_Id HAVING MAX(salary) = MAX(MAXfsalary));',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT MAX(salary) FROM employees GROUP BY department_Id;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT department_id, MAX(salary) FROM employees GROUP BY department_id;',
        isCorrect: false,
      },
      {
        answerText: 'D. SELECT MAX(salary) FROM employees;',
        isCorrect: true,
      },
      {
        answerText:
          'E. SELECT MAX(MAX(salary)) FROM employees GROUP BY department_id;',
        isCorrect: true,
      },
    ],
    answer: 'D, E',
    help: '',
  },
  {
    questionId: '143',
    questionTypeId: 'SC',
    questionText:
      'Examine this statement:\n' +
      'Assume every constraints are respected.\n' +
      '\n' +
      'INSERT ALL\n' +
      'INTO people (person_id, given_name, family_name, title)\n' +
      'VALUES (id, given_name, family_name, title)\n' +
      'INTO patients (patient_id, last_admission_date)\n' +
      'VALUES (id, admission_date)\n' +
      'INTO staff (staff_id, hired_date)\n' +
      'VALUES (id, hired_date)\n' +
      'WITH names AS (\n' +
      " SELECT 4 id, 'Ruth' given_name, 'Fox' family_name, 'Mrs' title,\n" +
      "   NULL hired_date, DATE'2009-12-31' admission_date\n" +
      ' FROM dual UNION ALL\n' +
      " SELECT 5 id, 'Isabelle' given_name, 'Squirrel' family_name, 'Miss' title,\n" +
      "   NULL hired_date, DATE'2014-01-01' admission_date\n" +
      ' FROM dual UNION ALL\n' +
      " SELECT 6 id, 'Justin' given_name, 'Frog' family_name, 'Master' title,\n" +
      "   NULL hired_date, DATE'2015-04-22' admission_date\n" +
      ' FROM dual UNION ALL\n' +
      " SELECT 7 id, 'Lisa' given_name, 'Owl' family_name, 'Dr' title,\n" +
      "   DATE'2023-01-01' hired_date, NULL admission_date\n" +
      ' FROM dual\n' +
      ')\n' +
      'SELECT * FROM names;\n' +
      '\n' +
      'What is true about this statement?',
    answers: [
      {
        answerText:
          'A. The statement will execute successfully and 12 rows will be created.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The statement will fail because you cannot use SET operators with INSERT ALL.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement will fail because you cannot use WITH AS with INSERT ALL.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The statement will fail because you cannot use a subquery at the end of an INSERT ALL statement. ',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'This statement uses an INSERT ALL statement to insert multiple rows into the PEOPLE, PATIENTS, and STAFF tables.\n' +
      'For each row that is inserted, the columns values are assigned based on the corresponding column names in the select query.',
  },
  {
    questionId: '144',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about LISTAGG?',
    answers: [
      {
        answerText:
          'A. The LISTAGG aggregate function orders the columns for each group in a query according to the GROUP BY expression and then concatenates the values into a single string.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The LISTAGG aggregate function orders the rows for each group in a query according to the ORDER BY expression and then concatenates the values into a single string.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The LISTAGG aggregate function orders the rows for each group in a query according to the GROUP BY expression and then concatenates the values into a single string.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The LISTAGG aggregate function orders the rows for each group in a query according to the GROUP BY expression but it does not concatenate the values into a single string.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help:
      'The LISTAGG aggregate function orders the rows for each group in a query according to the ORDER BY\n' +
      'expression and then concatenates the values into a single string.\n' +
      'LISTAGG ([ALL] column_name [delimiter]) WITHIN GROUP ORDER BY sort_expressions);',
  },
  {
    questionId: '145',
    questionTypeId: 'SC',
    questionText:
      'Assume you have two tables: PRODUCTS and PRODUCT-CATEGORIES with columns named\n' +
      'category_name, list_price, category_id.\n' +
      '\n' +
      'Imagine you want the product categories whose average list prices are greater than 1000.\n' +
      'Which query would give you the required output?',
    answers: [
      {
        answerText:
          'A. SELECT category_name, AVG(list_price) avg_list_price\n' +
          '   FROM products GROUP BY category_name HAVING AVG(list_price) > 1000\n' +
          '   ORDER BY category_name;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT category_name, ROUND(AVG(list_price), 2) avg_list_price\n' +
          '   FROM products INNER JOIN product_categories USING(category_id)\n' +
          '   GROUP BY category_name\n' +
          '   HAVING AVG(list_price) > 1000\n' +
          '   ORDER BY category_name;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT category_name, ROUND(AVG(list_price), 2) avg_list_price\n' +
          '   FROM products INNER JOIN product_categories USING (list_price)\n' +
          '   GROUP BY category_id\n' +
          '   HAVING AVG(list_price) > 1000\n' +
          '   ORDER BY categoryjd;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT category_name, ROUND(AVG(list_price), 2) avg_list_price\n' +
          '   FROM products INNER JOIN product_categories ON (category_id)\n' +
          '   GROUP BY category_name\n' +
          '   HAVING AVG(list_price) > 1000\n' +
          '   ORDER BY category_name;',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '146',
    questionTypeId: 'MC',
    questionText:
      '|  CONTACTS   |  |  EMPLOYEES   |\n' +
      '|-------------|  |--------------|\n' +
      '| *CONTACT_ID |  | *EMPLOYEE_ID |\n' +
      '| FIRST_NAME  |  | FIRST_NAME   |\n' +
      '| LAST_NAME   |  | LAST_NAME    |\n' +
      '| EMAIL       |  | EMAIL        |\n' +
      '| PHONE       |  | PHONE        |\n' +
      '| CUSTOMER_ID |  | HIRE_DATE    |\n' +
      '                 | MANAGER_ID   |\n' +
      '                 | JOB_TITLE    |\n' +
      '\n' +
      'Which two statements gives you the last names used by people in both contacts and employes?',
    answers: [
      {
        answerText:
          'A. SELECT last_name FROM contacts\n' +
          '   INTERSECT\n' +
          '   SELECT last_name FROM employees ORDER BY last_name;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT last_name FROM contacts ORDER BY last_name\n' +
          '   INTERSECT\n' +
          '   SELECT last_name FROM employees;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT last_name FROM contacts\n' +
          '   INTERSECT\n' +
          '   SELECT last_name FROM employees ORDER BY 1;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT last_name FROM contacts ORDER BY 1\n' +
          '   INTERSECT\n' +
          '   SELECT last_name FROM employees;',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: 'You can ORDER BY by reference or by position but the ORDER BY clause must be at the end of your statement.',
  },
  {
    questionId: '147',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true about indexes and their administration in an Oracle database? (Choose three.)',
    answers: [
      {
        answerText:
          'A. The same table column can be part of a unique and non-unique index.',
        isCorrect: true,
      },
      {
        answerText: 'B. A descending index is a type of function-based index.',
        isCorrect: true,
      },
      {
        answerText:
          'C. An INVINSIBLE index is not maintained when DML is performed on its underlying table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. If a query filters on an indexed column then it will always be used during execution of the query.',
        isCorrect: false,
      },
      {
        answerText:
          'E. An index can be created as part of a CREATE TABLE statement.',
        isCorrect: true,
      },
      {
        answerText:
          'F. An UNUSABLE index is maintained when DML is performed on its underlying table.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, E',
    help:
      'When you create a table it automatically creates an INDEX. (UNIQUE and PK).\n' +
      'A descending index is indeed a type of function based index (it improves performance).\n' +
      'A unique and non-unique can be created on the same table column (one would be visible and the other one invisible).\n' +
      'An index invisible or not is always maintained when DML is performed.',
  },
  {
    questionId: '148',
    questionTypeId: 'MC',
    questionText:
      'Which three actions can you perform with system privileges? (Choose three.)',

    answers: [
      {
        answerText: 'A. Create roles.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Create FOREIGN KEY constraints that reference tables in other schemas.',
        isCorrect: false,
      },
      {
        answerText: 'C. Delete rows from tables in any schema.',
        isCorrect: true,
      },
      {
        answerText: 'D. Set default and temporary tablespaces for a user.',
        isCorrect: true,
      },
      {
        answerText: 'E. Execute a procedure or function in another schema. ',
        isCorrect: false,
      },
    ],
    answer: 'A, C, D',
    help:
      'A: You must have the CREATE ROLE system privilege to create a role.\n' +
      'B: Object privileges REFERENCES object type Table or materialized view.\n' +
      '   The REFERENCES privilege on a parent table implicitly grants SELECT privilege on the parent table.\n' +
      'C: DELETE TABLE is an object privilege but DELETE ANY TABLE is a system privilege.\n' +
      '   It enables a user to delete from any table in the database.\n' +
      'D: system privilege.\n' +
      "E: That's an object type PL/SQL package, procedure or function.\n" +
      '   It enables a user to execute a PL/SQL package, procedure or function directly.',
  },
  {
    questionId: '149',
    questionTypeId: 'MC',
    questionText:
      'CREATE TABLE charges(id NUMBER PRIMARY KEY, amount NUMBER(10,2));\n' +
      'INSERT INTO charges (amount) VALUES (18);\n' +
      'INSERT INTO charges (amount) VALUES (15);\n' +
      'INSERT INTO charges (amount) VALUES (27);\n' +
      '\n' +
      'How would you add a column showing how much each charge represents as a percentage of the total charges?\n' +
      'Which two statements can you use in order to get this output?',
    answers: [
      {
        answerText: 'A. A subquery',
        isCorrect: true,
      },
      {
        answerText: 'B. A cross join',
        isCorrect: true,
      },
      {
        answerText: 'C. An inner join',
        isCorrect: false,
      },
      {
        answerText: 'D. A full outer join',
        isCorrect: false,
      },
      {
        answerText: 'E. A simple select clause.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help:
      'A: In this solution, for each record, we divide the amount by the sum of all the amounts to get the percentage.\n' +
      'SELECT *, ROUND(amount / (\n' +
      '  SELECT SUM(amount) FROM charges) * 100) AS percent\n' +
      'FROM charges\n' +
      'B: In this solution, we create a result set with one value (the sum of the amounts) and then cross join the charges table on it.\n' +
      'That will add the total to each record, which we can then divide the amount by to get the percentage:\n' +
      'SELECT id, amount, ROUND(amount / total * 100) AS percent\n' +
      'FROM charges CROSS JOIN (\n' +
      '  SELECT SUM(amount) AS total FROM charges) t;',
  },
  {
    questionId: '150',
    questionTypeId: 'MC',
    questionText:
      'Examine the description of the ACTORS table:\n' +
      '\n' +
      'ACTORS_ID  ACTORS_NAME\n' +
      '1          SMITH\n' +
      '2          SMINT\n' +
      '3          Smain\n' +
      '4          Smoult\n' +
      '5          SMIEL\n' +
      '\n' +
      'RESULT\n' +
      'ACTORS_NAME\n' +
      '-----------\n' +
      'Smain / Smoult\n' +
      '\n' +
      'Mich two SELECT statements will return these results: (Choose two.)',
    answers: [
      {
        answerText:
          "A. SELECT ACTORS_NAME FROM ACTORS WHERE ACTORS_NAME LIKE '%m%';",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT ACTORS_NAME FROM ACTORS WHERE ACTORS_NAME LIKE '*Sm*';",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT ACTORS_NAME FROM ACTORS WHERE ACTORS_NAME LIKE 'Sm*';",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT ACTORS_NAME FROM ACTORS WHERE UPPER(ACTORS_NAME) LIKE 'SM%';",
        isCorrect: false,
      },
      {
        answerText:
          "E. SELECT ACTORS_NAME FROM ACTORS WHERE UPPER(ACTORS_NAME) LIKE 'SM*';",
        isCorrect: false,
      },
      {
        answerText:
          "F. SELECT ACTORS_NAME FROM ACTORS WHERE ACTORS_NAME LIKE 'Sm%';",
        isCorrect: true,
      },
      {
        answerText:
          "G. SELECT ACTORS_NAME FROM ACTORS WHERE ACTORS_NAME = '*Sm*'; ",
        isCorrect: false,
      },
    ],
    answer: 'A, F',
    help:
      'B and C: It misses the LIKE command.\n' +
      'E and G: are wrong because * is not a valid syntax.\n' +
      "D: is a valid syntax, but it only recalls uppercase actors' name.",
  },
  {
    questionId: '151',
    questionTypeId: 'SC',
    questionText:
      'FET is a private synonym for the DAVID.ORDERS table.\n' +
      'The user DAVID issues the following command:\n' +
      '\n' +
      'DROP SYNONYM FET;\n' +
      '\n' +
      'Which statement is true regarding the above SQL statement?',
    answers: [
      {
        answerText: 'A. Only the synonym would be dropped.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The synonym would be dropped and the corresponding table would become invalid.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The synonym would be dropped and the packages referring to the synonym would be dropped.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The synonym would be dropped and any PUBLIC synonym with the same name becomes invalid.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'Private synonyms are schema objects.\n' +
      'Either they must be in your own schema, or they must be qualified with the schema name.\n' +
      'Public synonyms exist independently of a schema (own namespace).\n' +
      'A public synonym can be referred to by any user to whom permission has been granted to see it without the need to qualify it with a schema name.\n' +
      'Private synonyms must be a unique name within their schema.\n' +
      'Oracle will first look for the object in the local schema, and only if it cannot be found will it look for a public synonym.',
  },
  {
    questionId: '152',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following query:\n' +
      '\n' +
      "SELECT INTERVAL '408' MONTH,\n" +
      "INTERVAL '22-6' YEAR TO MONTH,\n" +
      "INTERVAL '09:05:02.654' HOUR TO SECOND\n" +
      'FROM dual;\n' +
      '\n' +
      'What is the correct output of the above query?',
    answers: [
      {
        answerText: 'A. +34-00,  +22-06,  +00 09:05:02.65',
        isCorrect: true,
      },
      {
        answerText: 'B. +00-408, +22-06,  +00 09:05:02.65',
        isCorrect: false,
      },
      {
        answerText: 'C. +34-00,  +00-270, +00 09:05:02.65',
        isCorrect: false,
      },
      {
        answerText: 'D. +00-408, +00-270, +00 09:05:02.65',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'The trailing field must be less than the leading field.\n' +
      "For example, INTERVAL '1-2' MONTH TO YEAR is invalid because trailing is YEAR which is greater than the leading field which is MONTH.",
  },
  {
    questionId: '153',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the ORDERS table:\n' +
      '\n' +
      'CREATE TABLE ORDERS(\n' +
      ' ORDER_ID       NUMBER(8,2) NOT NULL,\n' +
      ' ORDER_NAME     VARCHAR(50) NOT NULL,\n' +
      ' ORDER_CATEGORY VARCHAR(50) NOT NULL,\n' +
      ' ORDER_COST     NUMBER(8,2) NOT NULL;\n' +
      '\n' +
      'As a manager, you want a report of unique order costs in each order category.\n' +
      'Which query would achieve the required result?',
    answers: [
      {
        answerText:
          'A. SELECT DISTINCT order_cost, order_category FROM orders WHERE order_category is NULL ORDER BY 2;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT order_category, DISTINCT order_cost FROM orders GROUP BY order_category ORDER BY 2;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT DISTINCT order_cost, order_category FROM orders;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT DISTINCT order_category, order_cost FROM orders ORDER BY 1;',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      'B: DISTINCT must be right after SELECT.\n' +
      "D: is the only possible answer as you want a report in 'in each order category'.",
  },
  {
    questionId: '154',
    questionTypeId: 'MC',
    questionText:
      'In which two cases would you use an outer join? (Choose two.)',
    answers: [
      {
        answerText: 'A. The tables being joined have NOT NULL columns.',
        isCorrect: false,
      },
      {
        answerText: 'B. The columns being joined have NULL values.',
        isCorrect: true,
      },
      {
        answerText: 'C. The tables being joined have only matched data.',
        isCorrect: false,
      },
      {
        answerText: 'D. The tables being joined have only unmatched data.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The tables being joined have both matched and unmatched data.',
        isCorrect: true,
      },
      {
        answerText:
          'F. Only when the tables have a primary key/foreign key relationship.',
        isCorrect: false,
      },
    ],
    answer: 'B, E',
    help:
      'You use an outer join to also see rows that do not meet the join condition.\n' +
      'A/B: meets a join condition.\n' +
      'D: meets non join condition only.\n' +
      'E: does not take into consideration of primary key and foreign key relationship.',
  },
  {
    questionId: '155',
    questionTypeId: 'SC',
    questionText:
      'The EMPLOYEES_NY table has these columns: EMPLOYEES_ID and ADDRESS.\n' +
      'The EMPLOYEES_ID column is the primary key for the EMPLOYEES table.\n' +
      'You need to determine how dispersed your EMPLOYEES base is.\n' +
      'Which expression finds the number of different neighborhoods represented in the EMPLOYEES table?',
    answers: [
      {
        answerText:
          'A. SELECT COUNT(UPPER(ADDRESS)) FROM EMPLOYEES GROUP BY ADDRESS;',
        isCorrect: false,
      },
      {
        answerText: 'B. SELECT COUNT(DIFF(UPPER(ADDRESS))) FROM EMPLOYEES;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT COUNT(DISTINCT (UPPER(ADDRESS))) FROM EMPLOYEES;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT COUNT DISTINCT UPPER(ADDRESS) FROM EMPLOYEES GROUP BY ADDRESS;',
        isCorrect: false,
      },
      {
        answerText: 'F. SEELCT COUNT(UNIQUE(UPPER(ADDRESS))) FROM EMPLOYEES;',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '156',
    questionTypeId: 'SC',
    questionText:
      'Examine the CUSTOMERS and NEW_CUSTOMERS tables:\n' +
      '\n' +
      'CREATE TABLE CUSTOMERS(\n' +
      ' CUSTOMERS_ID NUMBER PRIMARY KEY,\n' +
      ' FIRST_NAME   VARCHAR2(25),\n' +
      ' LAST_NAME    VARCHAR2(25),\n' +
      ' ORDER_DATE   DATE);\n' +
      '\n' +
      'CREATE TABLE NEW_CUSTOMERS(\n' +
      ' CUSTOMERS_ID NUMBER PRIMARY KEY,\n' +
      ' LAST_NAME    VARCHAR2(50));\n' +
      '\n' +
      'Which DELETE statement is valid?',
    answers: [
      {
        answerText:
          'A. DELETE FROM CUSTOMERS WHERE CUSTOMERS_ID = (SELECT CUSTOMERS_ID FROM CUSTOMERS);',
        isCorrect: false,
      },
      {
        answerText:
          'B. DELETE * FROM CUSTOMERS WHERE CUSTOMERS_ID = (SELECT CUSTOMERS_ID FROM NEW_ CUSTOMERS);',
        isCorrect: false,
      },
      {
        answerText:
          "C. DELETE FROM CUSTOMERS WHERE CUSTOMERS_ID IN (SELECT CUSTOMERS_ID FROM NEW_CUSTOMERS WHERE name = 'SMITH');",
        isCorrect: true,
      },
      {
        answerText:
          "D. DELETE * FROM CUSTOMERS WHERE CUSTOMERS_ID IN (SELECT CUSTOMERS_ID FROM new_CUSTOMERS WHERE last_name = 'SMITH');",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help:
      "A: You cannot use '=' because it will return more than one row. A single row subquery cannot return more than one row.\n" +
      'B and D: are invalid syntaxes.',
  },
  {
    questionId: '157',
    questionTypeId: 'MC',
    questionText:
      'The ORDERS table has columns ORDERS_QTY and ORDERS_SOLD of data type NUMBER.\n' +
      'Which two queries execute successfully? (Choose two.)',
    answers: [
      {
        answerText:
          'A. SELECT COUNT(ORDERS_QTY) FROM ORDERS WHERE ORDERS_SOLD > 10000 AND COUNT(*) > 10 GROUP BY COUNT(ORDERS) > 10;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT ORDERS_QTY FROM ORDERS WHERE ORDERS_SOLD > 10000 GROUP BY ORDERS_QTY HAVING COUNT(*) > 10;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT COUNT(ORDERS-QTY) FROM ORDERS GROUP BY ORDERS_SOLD WHERE ORDERS_SOLD > 10000;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT COUNT(ORDERS_QTY) FROM ORDERS WHERE ORDERS_SOLD > 10000 GROUP BY ORDERS_QTY;',
        isCorrect: true,
      },
      {
        answerText:
          'E. SELECT ORDERS_QTY FROM ORDERS WHERE ORDERS_SOLD > 10000 GROUP BY COUNT(ORDERS_QTY) HAVING COUNT(*) > 10;',
        isCorrect: false,
      },
      {
        answerText:
          'F. SELECT ORDERS_QTY COUNT(ORDERS_SOLD) FROM ORDERS WHERE AVG(ORDERS_SOLD) > 10000 ORDERS BY ORDERS_QTY;',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help:
      'A and E: You can use aggregate functions with WHERE____\n' +
      'C: The level of aggregation is right but the GROUP BY does not match the SELECT COUNT(xy) statement.',
  },
  {
    questionId: '158',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about WHERE and HAVING clauses? (Choose two)',
    answers: [
      {
        answerText:
          'A. A WHERE clause can be used to restrict both rows and groups.',
        isCorrect: false,
      },
      {
        answerText: 'B. A WHERE clause can be used to restrict rows only.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A HAVING clause can be used to restrict both rows and groups.',
        isCorrect: false,
      },
      {
        answerText: 'D. A HAVING clause CANNOT be used in sub queries.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A WHERE clause CANNOT be used in a query of the query uses a HAVING clause.',
        isCorrect: false,
      },
      {
        answerText: 'F. A HAVING clause can be used to restrict groups only.',
        isCorrect: true,
      },
    ],
    answer: 'B, F',
    help:
      'B: WHERE clause cannot be used to restrict groups. WHERE clause cannot be used when there is an aggregate function.\n' +
      'F: A HAVING clause can only e used to restrict GROUPS.\n' +
      'HAVING clause specifies which groups are to be displayed and thus further restrict the groups on the basis of aggregate information.\n' +
      'The Oracle server performs the following steps when you use the Having clause. 1. rows are grouped. 2. the group function is applied\n' +
      'to the group. 3. the group that match the criteria in the Having clause are displayed.',
  },
  {
    questionId: '159',
    questionTypeId: 'MC',
    questionText:
      'Which two statements about creating constraints are true? (Choose two)',
    answers: [
      {
        answerText: 'A. Constraint names must start with SYS_C.',
        isCorrect: false,
      },
      {
        answerText: 'B. All constraints must be defined at the column level.',
        isCorrect: false,
      },
      {
        answerText: 'C. Constraints can be created after the table is created.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Constraints can be created at the same time the table is created.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Information about constraints is found in the VIEW-CONSTRAINTS dictionary view.',
        isCorrect: false,
      },
    ],
    answer: 'C, D',
    help:
      'E: VIEW_CONSTRAINTS does not exist.\n' +
      'A: Irrelevant.\n' +
      'B: In line and Out of line.',
  },
  {
    questionId: '160',
    questionTypeId: 'SC',
    questionText:
      'You are granted the CREATE VIEW privilege. What does this allow you to do?',
    answers: [
      {
        answerText: 'A. Create a table view.',
        isCorrect: false,
      },
      {
        answerText: 'B. Create a view in any schema.',
        isCorrect: false,
      },
      {
        answerText: 'C. Create a view in your schema.',
        isCorrect: true,
      },
      {
        answerText: 'D. Create a sequence view in any schema.',
        isCorrect: false,
      },
      {
        answerText: 'E. Create a view that is accessible by everyone.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Create a view only if it is based on tables that you created.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help:
      'E: You can create a view in your own schema, but not only for tables in your schema.\n' +
      '   You can use object from other user schemas if you have privileges to retrieve data from them.\n' +
      'B: You need CREATE ANY VIEW privilege.',
  },
  {
    questionId: '161',
    questionTypeId: 'MC',
    questionText:
      'Examine this statement:\n' +
      '\n' +
      "INSERT INTO class VALUES(5, 'Rahul');\n" +
      'COMMIT;\n' +
      "UPDATE class SET name = 'Abhijit' WHERE id = '5';\n" +
      'SAVEPOINT A;\n' +
      "INSERT INTO class VALUES(6, 'Chris');\n" +
      'SAVEPOINT B;\n' +
      "INSERT INTO class VALUES(7, 'Bravo');\n" +
      'SAVEPOINT C;\n' +
      'ROLLBACK TO SAVEPOINT B;\n' +
      'ROLLBACK;\n' +
      'SELECT * FROM class;\n' +
      '\n' +
      'Which two statements are true?',
    answers: [
      {
        answerText: 'A. The ID 6 is Chris.',
        isCorrect: false,
      },
      {
        answerText: 'B. The ID 7 is BRAVO.',
        isCorrect: false,
      },
      {
        answerText: 'C. The ID 5 is Abhijit.',
        isCorrect: false,
      },
      {
        answerText: 'D. There is no row containing ID 6.',
        isCorrect: true,
      },
      {
        answerText: 'E. There is no row containing ID 5.',
        isCorrect: false,
      },
      {
        answerText: 'F. There is no row containing ID 7.',
        isCorrect: true,
      },
    ],
    answer: 'D, F',
    help: 'The last ROLLBACK rolls back the state of data to the last COMMIT therefore only one row ID 5.',
  },
  {
    questionId: '162',
    questionTypeId: 'SC',
    questionText:
      '1. SELECT count(*) FROM hr.employees\n' +
      '   WHERE salary > ANY (\n' +
      '     SELECT salary FROM hr.employees\n' +
      "     WHERE first_name LIKE Henri%');\n" +
      '\n' +
      '2. SELECT count(*) FROM hr.employees WHERE salary IN (\n' +
      "     SELECT salary FROM hr.employees WHERE first_name LIKE Henri%');\n" +
      '\n' +
      '3. SELECT count(*) FROM hr.employees WHERE salary >= ALL (\n' +
      "     SELECT salary FROM hr.employees WHERE first_name LIKE Henri%');\n" +
      '\n' +
      'Which query answers the following question:\n' +
      'how many people make more than any of the Henri people?',
    answers: [
      {
        answerText: 'A. None',
        isCorrect: false,
      },
      {
        answerText: 'B. 1 and 3',
        isCorrect: false,
      },
      {
        answerText: 'C. 2',
        isCorrect: false,
      },
      {
        answerText: 'D. 3',
        isCorrect: false,
      },
      {
        answerText: 'E. 1',
        isCorrect: true,
      },
      {
        answerText: 'F. 2 and 3',
        isCorrect: false,
      },
    ],
    answer: 'E',
    help: "The ANY condition is like the IN condition except you can add a comparison. All doesn't answer the question.",
  },
  {
    questionId: '163',
    questionTypeId: 'SC',
    questionText:
      "SQL> select to_date('05-JUN-2022') + interval '-4' month from dual;\n" +
      '\n' +
      'What the result would be?',
    answers: [
      {
        answerText: 'A. Error',
        isCorrect: false,
      },
      {
        answerText: 'B. 05-FEB-2022',
        isCorrect: true,
      },
      {
        answerText: 'C. 05-OCT-2022',
        isCorrect: false,
      },
      {
        answerText: 'D. 05-JUN-2022 ',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: 'We can substract that date (or add the negative interval).',
  },
  {
    questionId: '164',
    questionTypeId: 'SC',
    questionText:
      'The EMPLOYEES table has these columns:\n' +
      '\n' +
      'LAST_NAME VARCHAR2(35)\n' +
      'SALARY    NUMBER(8, 2)\n' +
      'HIRE_DATE DATE\n' +
      '\n' +
      'You, as a manager, want to add a default value to the SALARY column.\n' +
      'You plan to alter the table by using this SQL statement:\n' +
      '\n' +
      'ALTER TABLE EMPLOYEES MODIFY (SALARY DEFAULT 4000);\n' +
      '\n' +
      'What is true about your ALTER statement?',
    answers: [
      {
        answerText:
          'A. Column definitions cannot be altered to add DEFAULT values.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A change to the DEFAULT value affects only subsequent insertions to the table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Column definitions cannot be altered at add DEFAULT values for columns with a NUMBER data type.',
        isCorrect: false,
      },
      {
        answerText:
          'D. All the rows that have a NULL value for the SALARY column will be updated with the value 4000.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: 'A change to the DEFAULT value affects only subsequent insertions to the table. Existing rows will not be affected.',
  },
  {
    questionId: '165',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding roles? (Choose two.)',
    answers: [
      {
        answerText: 'A. A role can be granted to itself.',
        isCorrect: false,
      },
      {
        answerText: 'B. A role can be granted to PUBLIC.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A user can be granted only one role at any point of time.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The REVOKE command can be used to remove privileges but not roles from other users.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Roles are named groups of related privileges that can be granted to users or other roles.',
        isCorrect: true,
      },
    ],
    answer: 'B, E',
    help: '',
  },
  {
    questionId: '166',
    questionTypeId: 'MC',
    questionText:
      'Scalar subqueries are not valid expressions _____. (Choose all that apply.)',
    answers: [
      {
        answerText: 'A. As default values for columns.',
        isCorrect: true,
      },
      {
        answerText: 'B. In the RETURNING clause of DML statements.',
        isCorrect: true,
      },
      {
        answerText: 'C. In CHECK constraints.',
        isCorrect: true,
      },
      {
        answerText: 'D. In GROUP BY clauses.',
        isCorrect: true,
      },
      {
        answerText: 'E. In most syntax that calls for an expression.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C, D',
    help: 'https://docs.oracle.com/database/121/SQLRF/expressionsO14.htm#SQLRF52093',
  },
  {
    questionId: '167',
    questionTypeId: 'SC',
    questionText:
      'As a manager, you want to rank the employees in a sample schema in department 60 based on their salaries.\n' +
      'You already know that there are no identical salary values amongst employees within department 60.\n' +
      'Examine these statements:\n' +
      '\n' +
      'SELECT department_id, last_name, salary,\n' +
      '  DENSE-RANK() OVER (PARTITION BY department_id ORDER BY salary) DENSE_RANK \n' +
      'FROM employees WHERE department_id = 60\n' +
      'ORDER BY DENSE_RANK, last_name;\n' +
      '\n' +
      'SELECT department_id, last_name, salary,\n' +
      '  RANK() OVER (PARTITION BY department_id ORDER BY salary) RANK\n' +
      'FROM employees WHERE department_id = 60\n' +
      'ORDER BY RANK, last_name;\n' +
      '\n' +
      'What would have to be added to these queries in order to produce the required result?',
    answers: [
      {
        answerText:
          'A. Nothing, the queries will work successfully but will not give the same result.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Nothing, the queries will work successfully and will give the same result.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The first query will only work successfully and give the required result.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The second query will only work successfully and give the required result. ',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: 'We already know that there are no identical salary values amongst employees within department 60 therefore RANK and DENSE_RANK give the same result.',
  },
  {
    questionId: '168',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about invisible indexes?',
    answers: [
      {
        answerText: 'A. Indexes are visible by default.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Information about whether an index is visible or invisible is available from the SHOW VISIBILITY.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Making an index invisible and visible can be expensive for a large table.',
        isCorrect: false,
      },
      {
        answerText: 'D. Index visibility affects index maintenance.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A table with no explicit primary key may still have an effective implicit primary key if it has any UNIQUE indexes on NOT NULL columns.',
        isCorrect: true,
      },
      {
        answerText:
          'F. Invisible indexes make it impossible to test the effect of removing an index on query performance, without making a destructive change that must be undone should the index turn out to be required.',
        isCorrect: false,
      },
    ],
    answer: 'A, E',
    help:
      'B: SHOW INDEX\n' +
      'C: Dropping and re-adding an index can be expensive for a large table, whereas making it invisible and visible arc fast, in-place operations.\n' +
      'D: Index visibility does not affect index maintenance. An index continues to be updated per changes to table rows,\n' +
      '   and a unique index prevents insertion of duplicates into a column, regardless of whether the index is visible or invisible.\n' +
      'F: If an index made invisible actually is needed or used by the optimizer, there are several ways to notice the effect of its absence on queries for the table.\n' +
      'Errors occur for queries that include index hints that refer to the invisible index.\n' +
      'Performance Schema data shows an increase in workload for affected queries.\n' +
      'Queries have different EXPLAIN execution plans.\n' +
      'Queries appear in the slow query log that did not appear there previously.',
  },
  {
    questionId: '169',
    questionTypeId: 'SC',
    questionText:
      'Examine the description of the CUSTOMERS table:\n' +
      '\n' +
      'CREATE TABLE CUSTOMERS(\n' +
      ' CUST_ID       NUMBER NOT NULL,\n' +
      ' CUST_NAME     VARCHAR2(40),\n' +
      ' POSTAL_CODE   NUMBER(5),\n' +
      ' AMOUNT_BOUGHT NUMBER(8,2),\n' +
      ' DOP           DATE);\n' +
      '\n' +
      'Which query is valid?',
    answers: [
      {
        answerText:
          'A. SELECT POSTAL_CODE, CUST_NAME, MAX(AVG(AMOUNT_BOUGHT)) FROM CUSTOMERS GROUP BY POSTAL_CODE;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT POSTAL_CODE, CUST_NAME, AVG(MAX(AMOUNT_BOUGHT)) FROM CUSTOMERS GROUP BY POSTAL_CODE;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT POSTAL_CODE, DOP, SUM(AMOUNT_BOUGHT) FROM CUSTOMERS GROUP BY POSTAL_CODE, DOP;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT POSTAL_CODE, DOP, SUM(AMOUNT_BOUGHT) FROM CUSTOMERS GROUP BY POSTAL_CODE;',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help:
      'A and B: levels of aggregation are wrong.\n' +
      'D: it misses GROUP BY POSTAL_CODE, POP;',
  },
  {
    questionId: '170',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding constraints? (Choose two)',
    answers: [
      {
        answerText:
          'A. A constraint is enforced only for an INSERT operation on a table.',
        isCorrect: false,
      },
      {
        answerText: 'B. A foreign key cannot contain NULL values.',
        isCorrect: false,
      },
      {
        answerText: 'C. A column with the UNIQUE constraint can store NULLS.',
        isCorrect: true,
      },
      {
        answerText:
          'D. You can have more than one column in a table as part of a primary key.',
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help:
      'C: NULL is a value. A column with the UNIQUE constraint can have a NULL value.\n' +
      '   In fact, it can have exactly one NULL value in its column.\n' +
      'D: PRIMARY KEYS can be applied to more than one column create a composite primary key.',
  },
  {
    questionId: '171',
    questionTypeId: 'MC',
    questionText:
      'Which three are true about the CREATE TABLE command? (Choose three.)',
    answers: [
      {
        answerText:
          'A. It can include the CREATE..INDEX statement for creating an index to enforce the primary key constraint.',
        isCorrect: true,
      },
      {
        answerText: 'B. It implicitly executes a commit.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A user must have the CREATE ANY TABLE privilege to create tables.',
        isCorrect: false,
      },
      {
        answerText: 'D. It implicitly rolls back any pending transactions.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The owner of the table should have space quota available on the tablespace where the table is defined.',
        isCorrect: true,
      },
      {
        answerText:
          'F. The owner of the table must have the UNLIMITED TABLESPACE system privilege. ',
        isCorrect: false,
      },
    ],
    answer: 'A, B, E',
    help:
      'B: CREATE TABLE -> DDL -> COMMIT\n' +
      'C: CREATE TABLE privilege is enough.\n' +
      'E: You need space quota available.\n' +
      'F: Not necessarily.',
  },
  {
    questionId: '172',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true? (choose two.)',
    answers: [
      {
        answerText:
          'A. In the context of other data types, numeric data types have lower precedence than the datetime/interval/ character data types',
        isCorrect: false,
      },
      {
        answerText:
          'B. Two objects of non scalar type are comparable if they are of the same named type and there is a one-to-one correspondence between their elements.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A group comparison condition specifies a comparison with any or all members in a list or subquery.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Large objects (LOBs) are supported in comparison conditions.',
        isCorrect: false,
      },
    ],
    answer: 'B, C',
    help:
      'A: In the context of other data types, numeric data types have lower precedence than the datetime/interval data types and higher precedence than character and all other data types.\n' +
      'D: Large objects (LOBs) are not supported in comparison conditions. However, you can use PL/SQL programs for comparisons on CLOB data.\n' +
      'C: ANY, SOME, ALL (list or subquery).',
  },
  {
    questionId: '173',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about TRUNCATE TABLE?',
    answers: [
      {
        answerText:
          'A. To specify the CASCADE clause, all affected child tables must be in your schema and you must have the DROP ANY TABLE system privilege.',
        isCorrect: false,
      },
      {
        answerText:
          'B. TRUNCATE TABLE deallocates all space used by the removed rows.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Removing rows with the DELETE statement can be more efficient than truncating a table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. You cannot roll back a TRUNCATE TABLE statement, nor can you use a FLASHBACK TABLE statement to retrieve the contents of a table that has been truncated.',
        isCorrect: true,
      },
    ],
    answer: 'B, D',
    help:
      'A: To specify the CASCADE clause, all affected child tables must be in your schema or you must have the DROP ANY TABLE system privilege.\n' +
      'C: Removing rows with the TRUNCATE TABLE statement can be faster than removing all rows with the DELETE statement,\n' +
      '   especially if the table has numerous triggers, indexes, and other dependencies.',
  },
  {
    questionId: '174',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about the ALTER TABLE clause?',
    answers: [
      {
        answerText:
          'A. You can add an INVISIBLE column or modify an existing column to be INVISIBLE to a temporary table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. For an external table, you cannot add a LONG, LOB, or object type column or change the data type of an external table column to any of these data types.',
        isCorrect: true,
      },
      {
        answerText: 'C. You cannot add a constraint to an external table.',
        isCorrect: true,
      },
      {
        answerText:
          'D. When the table is in READ ONLY mode, you cannot issue any DML and DDL statements or any SELECT ... FOR UPDATE statements.',
        isCorrect: false,
      },
    ],
    answer: 'B, C',
    help:
      'A: You can modify, drop columns from, or rename a temporary table.\n' +
      '   However, you cannot add an INVISIBLE column or modify an existing column to be INVISIBLE.\n' +
      'D: Specify READ ONLY to pul the table in read-only mode.\n' +
      '   When the table is in READ ONLY mode, you cannot issue any DML statements that affect the table or any SELECT... FOR UPDATE statements.\n' +
      '   You can issue DDL statements as long as they do not modify any table data.\n' +
      '   Operations on indexes associated with the table are allowed when the table is in READ ONLY mode.',
  },
  {
    questionId: '175',
    questionTypeId: 'MC',
    questionText: 'Which three statements are true about sequences?',
    answers: [
      {
        answerText:
          "A. To create a sequence in another user's schema, you must have the CREATE ANY SEQUENCE system privilege.",
        isCorrect: true,
      },
      {
        answerText:
          'B. You need to specify CACHE to indicate that the sequence continues to generate values after reaching either its maximum or minimum value.',
        isCorrect: false,
      },
      {
        answerText:
          'C. After a sequence is created, you can only access its values in SQL statements with the CURRVAL pseudocolumn, which returns the current value of the sequence.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It is possible that individual sequence numbers will appear to be skipped, because they were generated and used in a transaction that ultimately rolled back.',
        isCorrect: true,
      },
    ],
    answer: 'A, D',
    help:
      'B: You need to specify CYCLE to indicate that the sequence continues to generate values after reaching either its maximum or minimum value.\n' +
      'C: After a sequence is created, you can access its values in SQL statements with the CURRVAL pseudocolumn, which returns the current value of the sequence,\n' +
      '   or the NEXTVAL pseudocolumn, which increments the sequence and returns the new value.\n' +
      'D: Sequence numbers are generated independently of tables, so the same sequence can be used for one or for multiple tables. It is possible that individual\n' +
      '   sequence numbers will appear to be skipped, because they were generated and used in a transaction that ultimately rolled back.',
  },
  {
    questionId: '176',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about TRUNCATE TABLE?',
    answers: [
      {
        answerText:
          'A. You can truncate index-organized tables and temporary tables.',
        isCorrect: false,
      },
      {
        answerText:
          'B. When the table is truncated, the index is not truncated.',
        isCorrect: false,
      },
      {
        answerText:
          'C. If table is partitioned, then all partitions or subpartitions are truncated.',
        isCorrect: true,
      },
      {
        answerText:
          'D. You cannot truncate the parent table of an enabled foreign key constraint.',
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help:
      'A: You can truncate index-organized tables and temporary tables. When you truncate a temporary table, only the rows created during the current session are removed.\n' +
      'B: When the table is truncated, the index is also truncated, and a new high water mark is calculated for the index segment.\n' +
      'C: If table is partitioned, then all partitions or subpartitions, as well as the LOB data and LOB index segments for each partition or subpartition, are truncated.\n' +
      'D: You cannot truncate the parent table of an enabled foreign key constraint. You must disable the constraint before truncating the table.\n' +
      'An exception is that you can truncate the table if the integrity constraint is self-referential.',
  },
  {
    questionId: '177',
    questionTypeId: 'MC',
    questionText: 'Which two statements are true about UNUSED columns?',
    answers: [
      {
        answerText:
          'A. Once you execute the statement SET UNUSED, the column is no longer visible for accessing.',
        isCorrect: true,
      },
      {
        answerText: 'B. The only valid syntax is SET UNUSED COLUMN1.',
        isCorrect: false,
      },
      {
        answerText:
          'C. You can view the number of unused columns per table from the DBA_COL_TABS view.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Unused columns count against the 1000-column limit for tables in an Oracle database.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Once you set a column to unused, the only way to reuse this column is to use FLASHBACK TABLE.',
        isCorrect: false,
      },
    ],
    answer: 'A, D',
    help:
      'B: SET UNUSED COLUMN 1 or SET UNUSED COLUMN COLUMN1\n' +
      'C: You can view the number of unused columns per table from the DBA_UNUSED_COL_TABS view.\n' +
      'E: This feature is just intended to allow you to hide one or more columns from a large table\n' +
      'in preparation for dropping them later when you have a larger downtime window.\n' +
      'It is intended to be just as irreversible as dropping the column.',
  },
  {
    questionId: '178',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about dropping views? (Choose two.)',
    answers: [
      {
        answerText:
          "A. Data selected by a view's defining query is deleted from its underlying tables when the view is chopped.",
        isCorrect: false,
      },
      {
        answerText: 'B. Read only views cannot be dropped.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The creator of a view to be dropped must have the DROP ANY VIEW privilege.',
        isCorrect: false,
      },
      {
        answerText:
          'D. CASCADE CONSTRAINTS must be specified when referential integrity constraints on other objects refer to primary or unique keys in the view to be dropped.',
        isCorrect: true,
      },
      {
        answerText: 'E. Views referencing a dropped view become invalid.',
        isCorrect: true,
      },
    ],
    answer: 'D, E',
    help:
      "C: An object's owner has all object privileges for that object, and those privileges cannot be revoked.\n" +
      'E and A: Views arc not dropped instead they become invalid.',
  },
  {
    questionId: '179',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about time zones, date data types,\n' +
      'and timestamp data types in an Oracle database?',
    answers: [
      {
        answerText:
          'A. The DBTIMEZONE function can return an offset from Universal Coordinated Time (UTC).',
        isCorrect: true,
      },
      {
        answerText:
          'B. A TIMESTAMP data type column contains information about year, month, and day.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The CURRENT_TIMESTAMP function returns data without time zone information.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A TIMESTAMP WITH LOCAL TIMEZONE data type column is stored in the database using the time zone of the session that inserted the row.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The CURRENT_TIMESTAMP function returns data as per ORACLE server time.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: '',
  },
  {
    questionId: '180',
    questionTypeId: 'SC',
    questionText:
      'Examine the EMPLOYEES table:\n' +
      '\n' +
      'CREATE TABLE(\n' +
      ' MEMBER_ID  NOT NULL VARCHAR2(6),\n' +
      ' FIRST_NAME VARCHAR2(50),\n' +
      ' LAST_NAME  NOT NULL VARCHAR2(50),\n' +
      ' ADDRESS    VARCHAR2(50));\n' +
      '\n' +
      'You execute the SQL statement:\n' +
      '\n' +
      "SELECT member_id,'', first_name,'', last.name \"ID FIRSTNAME LASTNAME\"\n" +
      'FROM EMPLOYEES;\n' +
      '\n' +
      'What is the outcome?',
    answers: [
      {
        answerText:
          'A. It fails because the alias name specified after the column names is invalid.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It fails because the space specified in single quotation marks after the first two column names is invalid.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It executes successfully and displays the column details in a single column with only the alias column heading.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It executes successfully and displays the column details in three separate columns and replaces only the last column heading with the alias.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '181',
    questionTypeId: 'SC',
    questionText: 'Which constraints can be composite?',
    answers: [
      {
        answerText: 'A. UNIQUE and NOT NULL',
        isCorrect: false,
      },
      {
        answerText: 'B. NOT NULL and FOREIGN KEY',
        isCorrect: false,
      },
      {
        answerText: 'C. CHECK and FOREIGN KEY',
        isCorrect: false,
      },
      {
        answerText: 'D. PRIMARY and FOREIGN KEY',
        isCorrect: false,
      },
      {
        answerText: 'E. PRIMARY KEY and UNIQUE.',
        isCorrect: true,
      },
    ],
    answer: 'E',
    help: 'Primary key and Unique constraints can be composite.',
  },
  {
    questionId: '182',
    questionTypeId: 'MC',
    questionText:
      'Which three arithmetic operations can be performed on a column by using a SQL\n' +
      'function that is built into Oracle database? (Choose three.)',
    answers: [
      {
        answerText: 'A. Finding the lowest value',
        isCorrect: true,
      },
      {
        answerText: 'B. Finding the quotient',
        isCorrect: false,
      },
      {
        answerText: 'C. Raising to a power',
        isCorrect: true,
      },
      {
        answerText: 'D. Subtraction',
        isCorrect: false,
      },
      {
        answerText: 'E. Modulo',
        isCorrect: true,
      },
    ],
    answer: 'A, C, E',
    help: '',
  },
  {
    questionId: '183',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the CUSTOMERS table.\n' +
      '\n' +
      'CREATE TABLE CUSTOMERS(\n' +
      ' CUST_ID     NUMBER NOT NULL,\n' +
      ' C_LAST_NAME VARCHAR2(40),\n' +
      ' ORDERS_QTY  NUMBER);\n' +
      '\n' +
      'You want to generate a report showing the last names and quantity orders of all customers\n' +
      'whose last names start with G, H or I, and ORDERS_QTY is below 20.\n' +
      '\n' +
      'Evaluate the following two queries:\n' +
      '\n' +
      'SELECT C_LAST_NAME, ORDERS_QTY FROM customers\n' +
      "WHERE (UPPER(C_LAST_NAME) LIKE 'G%' OR UPPER(C_LAST_NAME) LIKE ~H%'\n" +
      "   OR UPPER(C_LAST_NAME) LIKE ~l%') AND ORDERS_QTY < 20;\n" +
      '\n' +
      'SELECT C_LAST_NAME, ORDERS_QTY FROM customers\n' +
      "WHERE UPPER(C_LAST_NAME) BETWEEN 'G' AND 'I' AND ORDERS_QTY < 20;\n" +
      '\n' +
      'Which statement is true regarding the execution of the above queries?',
    answers: [
      {
        answerText: 'A. Only the second query gives the correct result',
        isCorrect: false,
      },
      {
        answerText:
          'B. Both execute successfully but do not give the required result',
        isCorrect: false,
      },
      {
        answerText: 'C. Only the first query gives the correct result',
        isCorrect: true,
      },
      {
        answerText: 'D. Both execute successfully and give the same result',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '184',
    questionTypeId: 'SC',
    questionText:
      'You want to update the CITY_NAME column of the COUNTRIES table for all the rows with the \n' +
      'corresponding value in the CITY_NAME column of the LOCATIONS table for each department.\n' +
      '\n' +
      'Which SQL statement would you execute to accomplish the task?',
    answers: [
      {
        answerText:
          'A. UPDATE COUNTRIES c SET CITY_NAME = ALL (SELECT CITY_NAME FROM locations l WHERE c.location.id = l.location.id);',
        isCorrect: false,
      },
      {
        answerText:
          'B. UPDATE COUNTRIES c SET CITY_NAME = (UPDATE COUNTRIES c SET (SELECT CITY_NAME FROM locations l)) WHERE c.location.id = l.location.id;',
        isCorrect: false,
      },
      {
        answerText:
          'C. UPDATE COUNTRIES c SET CITY_NAME = ANY (SELECT CITY_NAME FROM locations l);',
        isCorrect: false,
      },
      {
        answerText:
          'D. UPDATE COUNTRIES c SET CITY_NAME = (SELECT CITY_NAME FROM locations l WHERE c.location.id = l.location.id);',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: 'D: is the only syntax that makes sense.',
  },
  {
    questionId: '185',
    questionTypeId: 'MC',
    questionText: 'Wtiich four statements are true about single-row functions?',
    answers: [
      {
        answerText:
          'A. The data type returned can be different from the data type of the argument.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The argument can be a column name, variable, literal or an expression.',
        isCorrect: true,
      },
      {
        answerText: 'C. They can be nested to any level.',
        isCorrect: true,
      },
      {
        answerText: 'D. They return a single result row per table.',
        isCorrect: false,
      },
      {
        answerText: 'E. They can accept only one argument.',
        isCorrect: false,
      },
      {
        answerText:
          'F. They can be used only in the SET clause of an UPDATE statement.',
        isCorrect: false,
      },
      {
        answerText: 'G. They can have 0 parameter.',
        isCorrect: true,
      },
      {
        answerText:
          ' H. You can only use single-row functions with the DUAL table.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C, G',
    help:
      'A: Length(). C: Scalar functions have no effect on the level of aggregation.\n' +
      'As the result, you can nest scalar functions as many times as you want.\n' +
      'G: You can have 0 parameter.',
  },
  {
    questionId: '186',
    questionTypeId: 'SC',
    questionText: 'What is the output of TRUNC((145,79), -3)?',
    answers: [
      {
        answerText: 'A. 0',
        isCorrect: true,
      },
      {
        answerText: 'B. ERROR',
        isCorrect: false,
      },
      {
        answerText: 'C. 140',
        isCorrect: false,
      },
      {
        answerText: 'D. 100',
        isCorrect: false,
      },
      {
        answerText: 'E. 1',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '187',
    questionTypeId: 'SC',
    questionText:
      'CREATE TABLE STRONGESTATHLETES(\n' +
      '  ATHLETES_ID    NUMBER,\n' +
      '  ATHLETES_NAME  VARCHAR2(50),\n' +
      '  PERFORMANCE    NUMBER,\n' +
      '  DOB            DATE,\n' +
      '  NATIONALITY    VARCHAR2(30);\n' +
      '\n' +
      'INSERT INTO TABLES\n' +
      'VALUES (1, ADAM TRAORE,     555, 03/03/1995, SENEGAL),\n' +
      'VALUES (2, SERGUEI KRISTOV, 601, 02/01/1991, RUSSIA)\n' +
      'VALUES (3, ANDREW SORENSEN, 498, 05/051987,  NORWAY);\n' +
      '\n' +
      "Which SQL query update the athletes' names by removing leading and trailing spaces?",
    answers: [
      {
        answerText:
          'A. UPDATE STRONGESTATHLETES SET ATHLETES_NAME = TRIM(LTRIM(ATHLETES_NAME));',
        isCorrect: false,
      },
      {
        answerText:
          'B. UPDATE STRONGESTATHLETES SET ATHLETES_NAME = RTRIM(LTRIM(ATHLETES_NAME));',
        isCorrect: false,
      },
      {
        answerText:
          'C. UPDATE STRONGESTATHLETES SET ATHLETES_NAME = LTRIM(RTRIM(ATHLETES_NAME));',
        isCorrect: true,
      },
      {
        answerText:
          'D. UPDATE STRONGESTATHLETES SET ATHLETES_NAME = TRIM(RTRIM)(ATHLETES_NAME));',
        isCorrect: false,
      },
      {
        answerText:
          'E. UPDATE STRONGESTATHLETES SET ATHLETES_NAME = RTRIM(TRIM(ATHLETES_NAME));',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '188',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the UNION and UNION ALL operators? (Choose two.)',
    answers: [
      {
        answerText: 'A. The output is sorted by the UNION ALL operator.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The names of columns selected in each SELECT statement must be identical.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The number of columns selected in each SELECT statement must be identical.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Duplicates are eliminated automatically by the UNION ALL operator.',
        isCorrect: false,
      },
      {
        answerText: 'E. NULLS are not ignored during duplicate checking.',
        isCorrect: true,
      },
    ],
    answer: 'C, E',
    help:
      'NULLS are not ignored during duplicate checking -> It returns distinct rows.\n' +
      'The number of columns selected from each table should be the same.\n' +
      'Datatypes of corresponding columns selected from each table should be the same.',
  },
  {
    questionId: '189',
    questionTypeId: 'MC',
    questionText: 'Which three statements are true about built-in data types?',
    answers: [
      {
        answerText:
          'A. A BFILE stores unstructured binary data in operating system files.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The default length for a CHAR column is always one character.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A VARCHAR2 blank-pads column values only if the data stored is non-numeric and contains no special characters.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A VARCHAR2 column definition does not require the length to be specified.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A CHAR Column definition does not require the length to be specified.',
        isCorrect: true,
      },
      {
        answerText:
          'F. A BLOB stores unstructured binary data within the database.',
        isCorrect: false,
      },
      {
        answerText:
          'G. A BFILE stores unstructured binary data within the database.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, E',
    help: 'D: Precision (N) is mandatory VARCHAR2(N).',
  },
];