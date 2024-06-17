import { Question } from "../models/definitions";

export const questions: Question[] = [
    {
        "questionId": "1",
        "questionTypeId": "SC",
        "questionText": "Suppose that you work for a company that designs and builds experimental rockets.\n"+
                        "You have several projects in the works. You also have several design engineers who have skills in multiple areas.\n"+
                        "As a manager, you want to know which employees, having which skills, have worked on which projects.\n"+
                        "Currently, this data is scattered among the EMPLOYEE table, the PROJECTS table, and the SKILLS table.\n"+
                        "The EMPLOYEE table carries data about employees, and EMPLOYEE.EmpID is its primary key.\n"+
                        "The PROJECTS table has a row for each project that an employee has worked on.\n"+
                        "Suppose that, as a manager, you want to see all the information about all the employees.\n\n"+
                        "SELECT *\nFROM EMPLOYEE E, PROJECTS P, SKILLS S\nWHERE E.EmpID = P.EmpID AND E.EmpID = S.EmpID;\n\n"+
                        "Which query would give the same output?",
        "answers": [
          {
            "answerText": "A. SELECT * FROM EMPLOYEE E INNER JOIN PROJECTS P ON (E.EmpID = P.EmpID) INNER JOIN SKILLS S ON (E.EmpID = S.EmpID);",
            "isCorrect": true
          },
          {
            "answerText": "B. SELECT * FROM EMPLOYEE E RIGHT JOIN PROJECTS P ON (E.EmpID = P.EmpID) INNER JOIN SKILLS S ON (E.EmpID = S.EmpID);",
            "isCorrect": false
          },
          {
            "answerText": "C. SELECT * FROM EMPLOYEE E INNER JOIN PROJECTS P ON (E.EmpID = P.EmpID) LEFT OUTER JOIN SKILLS S ON (E.EmpID = S.EmpID);",
            "isCorrect": false
          },
          {
            "answerText": "D. SELECT * FROM EMPLOYEE E INNER JOIN PROJECTS P ON (E.EmpID = P.EmpID) INNER JOIN SKILLS S ON (E.EmpID = S.EmpID);",
            "isCorrect": false
          }
        ],
        "help": "\"All the information\" and \"all employees\" you must use INNER JOIN."
      },
      {
        "questionId": "2",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true? (Choose two.)",
        "answers": [
          {
            "answerText": "A. LONG is an Oracle data type for storing characters data of variable length up to 2 Gigabytes in length.",
            "isCorrect": true
          },
          {
            "answerText": "B. The length of LONG values might be limited by the memory available on your computer.",
            "isCorrect": true
          },
          {
            "answerText": "C. You can use columns defined as LONG in SELECT lists, SET clauses of UPDATE statements, and VALUES clauses of multitable Inserts statements.",
            "isCorrect": false
          },
          {
            "answerText": "D. You cannot use columns defined as LONG in SELECT lists with SET operators but you can use them in the ORDER BY.",
            "isCorrect": false
          },
          {
            "answerText": "E. You can use columns defined as LONG in virtual columns.",
            "isCorrect": false
          }
        ],
        "help": "You cannot use columns defined as LONG with SET operators and virtual columns."
      },
      {
        "questionId": "3",
        "questionTypeId": "MC",
        "questionText": "Which two statements will return the names of the 5 employees with the lowest salaries? (Choose two.)",
        "answers": [
          {
            "answerText": "A. SELECT LAST_NAME, SALARY FROM EMPLOYEES FETCH FIRST 5 ROWS ONLY ORDER BY SALARY;",
            "isCorrect": false
          },
          {
            "answerText": "B. SELECT LAST_NAME, SALARY FROM EMPLOYEES FETCH FIRST 5 ROWS WITH TIES;",
            "isCorrect": true
          },
          {
            "answerText": "C. SELECT LAST_NAME, SALARY FROM EMPLOYEES WHERE ROWNUM <= 5 ORDER BY (SELECT SALARY FROM EMPLOYEES);",
            "isCorrect": false
          },
          {
            "answerText": "D. SELECT LAST_NAME, SALARY FROM EMPLOYEES ORDER BY SALARY; FETCH FIRST 5 ROWS ONLY;",
            "isCorrect": true
          }
        ],
        "help": "WITH TIES AND ONLY give the same result when there is no ORDER BY clause."
      },
      {
        "questionId": "4",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true regarding LOBs? (Choose two.)",
        "answers": [
          {
            "answerText": "A. You cannot define more than one LOB column in a table.",
            "isCorrect": false
          },
          {
            "answerText": "B. LOBs can be attributes of an object type (user-defined data type).",
            "isCorrect": true
          },
          {
            "answerText": "C. NCLOB and BFILE can store large and unstructured data such as text, image, video, and spatial data.",
            "isCorrect": true
          },
          {
            "answerText": "D. NCLOB and BFILE can only store large text data in an operating system file.",
            "isCorrect": false
          }
        ],
        "help": "You can define more than one LOB column in a table. NCLOB store data internally and BFILE store externally."
      },
      {
        "questionId": "5",
        "questionTypeId": "MC",
        "questionText": "What can DDL be used for? (Choose three.)",
        "answers": [
          {
            "answerText": "A. Add comments to a database table",
            "isCorrect": true
          },
          {
            "answerText": "B. Add columns to a database table",
            "isCorrect": true
          },
          {
            "answerText": "C. Add data to a database table",
            "isCorrect": true
          },
          {
            "answerText": "D. Add privileges for a user to a database table",
            "isCorrect": false
          },
          {
            "answerText": "E. Query data from a given table",
            "isCorrect": false
          }
        ],
        "help": "There is no DDL statement to remove data from a database table. For this, use either UPDATE or DELETE. UPDATE can be used to remove data from one or more columns in a given row, and DELETE can be used to remove an entire row. E is a DML statement."
      },
      {
        "questionId": "6",
        "questionTypeId": "SC",
        "questionText": "Evaluate the following CREATE SEQUENCE statement:\n\n"+
                        "CREATE SEQUENCE seq1 START WITH 100 INCREMENT BY 20 MAXVALUE 460 CYCLE NOCACHE;\n\n"+
                        "The sequence SEQ1 has generated numbers up to the maximum limit of 460.\n"+
                        "You issue the following SQL statement:\n\nSELECT seql.nextval FROM dual;\n\n"+
                        "What is displayed by the SELECT statement?",
        "answers": [
          {
            "answerText": "A. 100",
            "isCorrect": false
          },
          {
            "answerText": "B. an error",
            "isCorrect": false
          },
          {
            "answerText": "C. 20",
            "isCorrect": false
          },
          {
            "answerText": "D. 1",
            "isCorrect": true
          },
          {
            "answerText": "E. 461",
            "isCorrect": false
          }
        ],
        "help": "The sequence will go to the minimum value at cycle, and with no minimum value specified, the default is 1."
      },
      {
        "questionId": "7",
        "questionTypeId": "SC",
        "questionText": "Examine this statement:\n\n"+
                        "SELECT student_id, height FROM student_heights WHERE height > &&value;\n\n"+
                        "You run the statement once, and when prompted you enter a value of 5.8.\n"+
                        "A report is produced. What happens when you run the statement a second time?",
        "answers": [
          {
            "answerText": "A. An error is returned.",
            "isCorrect": false
          },
          {
            "answerText": "B. You are prompted to enter a new value.",
            "isCorrect": false
          },
          {
            "answerText": "C. A report is produced that matches the first report produced.",
            "isCorrect": true
          },
          {
            "answerText": "D. You are asked whether you want a new value or if you want to run the report based on the previous value.",
            "isCorrect": false
          }
        ],
        "help": "Use the double-ampersand if you want to reuse the variable value without prompting the user each time."
      },
      {
        "questionId": "8",
        "questionTypeId": "MC",
        "questionText": "Examine the structure of the PLAYERS table:\n\nPLAYERS_ID NUMBER Primary Key\n"+
                        "FIRST_NAME VARCHAR2(25)\nLAST_NAME  VARCHAR2(25)\n\n"+
                        "Which three statements insert a row into the table? (Choose three.)",
        "answers": [
          {
            "answerText": "A. INSERT INTO PLAYERS VALUES (NULL,'Donald','Trump');",
            "isCorrect": false
          },
          {
            "answerText": "B. INSERT INTO PLAYERS(first_name, LAST_NAME ) VALUES('Donald','Trump');",
            "isCorrect": false
          },
          {
            "answerText": "C. INSERT INTO PLAYERS VALUES ( 1000, 'Donald', NULL);",
            "isCorrect": true
          },
          {
            "answerText": "D. INSERT INTO PLAYERS (first_name, LAST_NAME, PLAYERS_ID) VALUES (1000, 'Donald', 'Trump');",
            "isCorrect": false
          },
          {
            "answerText": "E. INSERT INTO PLAYERS (PLAYERS_ID) VALUES (1000);",
            "isCorrect": true
          },
          {
            "answerText": "F. INSERT INTO PLAYERS (PLAYERS_ID, first_name, LAST_NAME) VALUES (1000, 'Donald', '');",
            "isCorrect": true
          }
        ],
        "help": "A: and B: are wrong because PLAYERS_ID cannot be NULL (PK). D: is incorrect because the third value should be LAST_NAME, not a number."
      },
      {
        "questionId": "9",
        "questionTypeId": "SC",
        "questionText": "Which of the following is not a capability of the SELECT statement?",
        "answers": [
          {
            "answerText": "A. It can transform queried data and display the results.",
            "isCorrect": false
          },
          {
            "answerText": "B. It can remove data from a table.",
            "isCorrect": true
          },
          {
            "answerText": "C. It can join data from multiple tables.",
            "isCorrect": false
          },
          {
            "answerText": "D. It can aggregate database data.",
            "isCorrect": false
          }
        ],
        "help": "The SELECT statement is not used to remove data from a table. The act of querying merely copies data out of a table for reporting and other comparable purposes, but the SELECT statement—as a stand-alone statement— always leaves the data it encounters untouched and unmodified."
      },
      {
        "questionId": "10",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true regarding constraints? (Choose two.)",
        "answers": [
          {
            "answerText": "A. A foreign key cannot contain NULL values.",
            "isCorrect": false
          },
          {
            "answerText": "B. The column with a UNIQUE constraint can store NULLS.",
            "isCorrect": true
          },
          {
            "answerText": "C. A foreign key must contain only values from the parent table primary key or unique key.",
            "isCorrect": true
          },
          {
            "answerText": "D. A foreign key value cannot be modified.",
            "isCorrect": false
          }
        ],
        "help": "The UNIQUE constraint allows NULLs. Foreign keys can contain NULL values."
      },
      {
        "questionId": "11",
        "questionTypeId": "MC",
        "questionText": "What is true about JOIN? (choose two.)",
        "answers": [
          {
            "answerText": "A. SQL combines the result of two or more SELECT statements.",
            "isCorrect": false
          },
          {
            "answerText": "B. JOIN combines data from many tables based on a matched condition between them.",
            "isCorrect": true
          },
          {
            "answerText": "C. Datatypes of corresponding columns selected from each table should be same.",
            "isCorrect": false
          },
          {
            "answerText": "D. It returns distinct rows.",
            "isCorrect": false
          },
          {
            "answerText": "E. It combines data into new columns.",
            "isCorrect": true
          }
        ],
        "help": "A. Set operators. \nC. Datatypes of corresponding columns selected from each table can be different. \nE. It may not return distinct columns."
      },
      {
        "questionId": "12",
        "questionTypeId": "MC",
        "questionText": "What is true about virtual columns?",
        "answers": [
          {
            "answerText": "A. Virtual columns perfom better because they are calculated at run-time.",
            "isCorrect": false
          },
          {
            "answerText": "B. Virtual columns can be manipualted by DML.",
            "isCorrect": false
          },
          {
            "answerText": "C. The expression may refer to a deterministic user-defined function, however, if it does, the virtual column cannot be used as a partitioning key column.",
            "isCorrect": true
          },
          {
            "answerText": "D. The expression in the virtual colum can referto normal columns of other tables.",
            "isCorrect": false
          }
        ],
        "help": "A. Virtual columns may reduce query performance because their values are calculated at run-time.\nB. Virtual columns cannot be manipulated by DML statements.\nD. The expression in the virtual column has many restrictions. One of them is that it cannot refer to other virtual columns."
      },
      {
        "questionId": "13",
        "questionTypeId": "MC",
        "questionText": "Examine the structure and data in the PRICE_LIST table:\nPROD_ID    NOT NULL NUMBER(3)\nPROD_PRICE VARCHAR2(10)\n\nPROD_ID  PROD_PRICE\n-------  ----------\n10       $87,654.55\n11       $509.75\n12       $16669,234\n\nWhich SQL statement would give the required result?",
        "answers": [
          {
            "answerText": "A. SELECT TO_CHAR(PROD_PRICE * .14, '$99,999.99') FROM PRICE_LIST;",
            "isCorrect": false
          },
          {
            "answerText": "B. SELECT TO_NUMBER(TO_NUMBER(PROD_PRICE, '$99,999.99')* .14/$99.999.00') FROM PRICE_LIST;",
            "isCorrect": false
          },
          {
            "answerText": "C. SELECT TO_CHAR(TO_NUMBER(PROD_PRICE )* .14, '$99,999.00') FROM PRICE_LIST;",
            "isCorrect": false
          },
          {
            "answerText": "D. SELECT TO_CHAR(TO_NUMBER(PROD_PRICE, 'S99.999.99')* .14.'$99,999.00') FROM PRICE_LIST;",
            "isCorrect": true
          }
        ],
        "help": "TO_CHAR(TO_NUMBER()) is needed and you need to add NLS_PARAMETERS for both functions therefore C is wrong."
      },
      {
        "questionId": "14",
        "questionTypeId": "MC",
        "questionText": "Which three factors influences the optimizer's choice of an execution plan? (Choose three.)",
        "answers": [
          {
            "answerText": "A. Cardinality estimates.",
            "isCorrect": true
          },
          {
            "answerText": "B. The OPTIMIZER_MODE initialization parameter.",
            "isCorrect": true
          },
          {
            "answerText": "C. Fixed baselines.",
            "isCorrect": false
          },
          {
            "answerText": "D. Type of connection used to connect to database instance.",
            "isCorrect": false
          },
          {
            "answerText": "E. Object statistics in the data dictionary.",
            "isCorrect": true
          }
        ],
        "help": "Less repetitive data and higher degree of selectivity arc more likely to be included in an index. Fixed baselines and the type of connection do not influence the optimizer’s choice."
      },
      {
        "questionId": "15",
        "questionTypeId": "MC",
        "questionText": "Examine the command:\n\nSQL> ALTER TABLE YSL_SALES\nADD CONSTRAINT fk_SALES_id FOREIGN KEY (SALESJd)\nREFERENCES YSL (YSLJd) ON DELETE CASCADE;\n\nWhat does ON DELETE CASCADE imply?",
        "answers": [
          {
            "answerText": "A. When the YSL table is dropped, the YSL_SALES table is dropped.",
            "isCorrect": false
          },
          {
            "answerText": "B. When the YSL table is dropped, all the rows in the YSL_SALES table are deleted but the table structure is retained.",
            "isCorrect": false
          },
          {
            "answerText": "C. When a value in the YSL.SALESJD column is deleted, the corresponding value is updated in the YSL_SALES.SALES_id column.",
            "isCorrect": false
          },
          {
            "answerText": "D. When a row in the YSL table is deleted, the rows in the YSL_SALES table whose SALESJd matches that of the deleted row in the YSL table are also deleted.",
            "isCorrect": true
          }
        ],
        "help": "D is the definition of ON DELETE CASCADE."
      },
      {
        "questionId": "16",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true regarding the USING clause in table joins? (Choose two.)",
        "answers": [
          {
            "answerText": "A. It can be used to join a maximum of three tables.",
            "isCorrect": false
          },
          {
            "answerText": "B. It can be used to access data from tables through equijoins as well as nonequijoins.",
            "isCorrect": false
          },
          {
            "answerText": "C. It can be used to join tables that have columns with the same name and compatible data types.",
            "isCorrect": true
          },
          {
            "answerText": "D. It can be used to restrict the number of columns used in a join.",
            "isCorrect": true
          }
        ],
        "help": "Nonequijoins do not work with the USING clause.\nA. you can join as many tables as you want."
      },
      {
        "questionId": "17",
        "questionTypeId": "MC",
        "questionText": "In which three situations does a transaction complete? (Choose three.)",
        "answers": [
          {
            "answerText": "A. When a ROLLBACK command is executed.",
            "isCorrect": true
          },
          {
            "answerText": "B. When a DELETE statement is executed.",
            "isCorrect": false
          },
          {
            "answerText": "C. When a PL/SQL anonymous block is executed.",
            "isCorrect": false
          },
          {
            "answerText": "D. When a data definition language (DDL) statement is executed.",
            "isCorrect": true
          },
          {
            "answerText": "E. When a TRUNCATE statement is executed after the pending transaction.",
            "isCorrect": true
          }
        ],
        "help": "B. DELETE is a DML statement -> No commit.\nC. is irrelevant."
      },
      {
        "questionId": "18",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true about the data dictionary? (choose two.)",
        "answers": [
          {
            "answerText": "A. The SYS user owns all base tables and user-accessible views in the data dictionary.",
            "isCorrect": true
          },
          {
            "answerText": "B. All user actions are recorded in the data dictionary.",
            "isCorrect": false
          },
          {
            "answerText": "C. The data dictionary is constantly updated to reflect changes to database objects, permissions, and data.",
            "isCorrect": true
          },
          {
            "answerText": "D. All users have permission to access all information in the data dictionary by default.",
            "isCorrect": false
          },
          {
            "answerText": "E. Base tables in the data dictionary have the prefix DBA_.",
            "isCorrect": false
          }
        ],
        "help": "A and C are correct. You need permission to access ALL information in the data dictionary. DBA_ means all objects in the database."
      },
      {
        "questionId": "19",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true about the MERGE statement? (Choose two.)",
        "answers": [
          {
            "answerText": "A. The WHEN NOT MATCHED clause can be used to specify the inserts to be performed.",
            "isCorrect": true
          },
          {
            "answerText": "B. The WHEN MATCHED clause can be used to specify the inserts to be performed.",
            "isCorrect": false
          },
          {
            "answerText": "C. The WHEN NOT MATCHED clause can be used to specify the updates to be performed.",
            "isCorrect": false
          },
          {
            "answerText": "D. The WHEN NOT MATCHED clause can be used to specify the deletions to be performed.",
            "isCorrect": false
          },
          {
            "answerText": "E. The WHEN MATCHED clause can be used to specify the updates to be performed.",
            "isCorrect": true
          }
        ],
        "help": "WHEN NOT MATCHED -> INSERT.\nWHEN MATCHED -> UPDATE and DELETE."
      },
      {
        "questionId": "20",
        "questionTypeId": "MC",
        "questionText": "What is the default value for CURRENT TIMESTAMP?",
        "answers": [
          {
            "answerText": "A. 1",
            "isCorrect": false
          },
          {
            "answerText": "B. 2",
            "isCorrect": false
          },
          {
            "answerText": "C. 6",
            "isCorrect": true
          },
          {
            "answerText": "D. 9",
            "isCorrect": false
          },
          {
            "answerText": "E. 0",
            "isCorrect": false
          }
        ],
        "help": "Current_timestamp gives the date and time in the SESSION timezone, in a value of datatype \"timestamp with time zone\". If you omit precision, then the default is 6."
      },
      {
        "questionId": "21",
        "questionTypeId": "MC",
        "questionText": "On your Oracle 12c database, you issue the following commands to create indexes:\n\nSQL> CREATE INDEX oe.ord_Countries_IDX ON oe.orders (COUNTRIES_Id, sales_AV_id);\n\nSQL> CREATE BITMAP INDEX oe.ord_COUNTRIES_IDXX ON oe.orders (COUNTRIES_Id, sales_AV_id);\n\nWhich statement is correct?",
        "answers": [
          {
            "answerText": "A. Only the ORD_COUNTRIESJDX index is created and it is visible.",
            "isCorrect": true
          },
          {
            "answerText": "B. Both the indexes are created and both of them are visible.",
            "isCorrect": false
          },
          {
            "answerText": "C. Both the indexes are created; however, only the ORD_COUNTRIES_IDX index is visible.",
            "isCorrect": false
          },
          {
            "answerText": "D. Both the indexes are created; however, only the ORD_COUNTRIES_IDXX index is visible.",
            "isCorrect": false
          }
        ],
        "help": "BITMAP datatype cannot be indexed here. Index is visible because we did not include INVISIBLE when we wrote CREATE INDEX."
      },
      {
        "questionId": "22",
        "questionTypeId": "MC",
        "questionText": "Which statement is true about aggregate functions?",
        "answers": [
          {
            "answerText": "A. SUM() and AVG() only accept Numeric and Date datatypes.",
            "isCorrect": false
          },
          {
            "answerText": "B. MEDIANO only accepts Numeric datatype.",
            "isCorrect": false
          },
          {
            "answerText": "C. MEDIAN)) accepts both Numeric and Date datatypes.",
            "isCorrect": true
          },
          {
            "answerText": "D. MIN() and MAX() only accept Numeric and Date datatypes.",
            "isCorrect": false
          },
          {
            "answerText": "E. MIN() and MAX() only accept Numeric and Character datatypes.",
            "isCorrect": false
          }
        ],
        "help": "Character, date, numeric. COUNT, MIN, MAX.\nNumeric only. SUM, AVG.\nNumeric, date. MEDIAN."
      },
      {
        "questionId": "23",
        "questionTypeId": "MC",
        "questionText": "What are the output of select trunc(mod(23,3), -1) and select round(mod(23,3), -1) ?",
        "answers": [
          {
            "answerText": "A. 0,1",
            "isCorrect": false
          },
          {
            "answerText": "B. 0,2",
            "isCorrect": false
          },
          {
            "answerText": "C. 2,0",
            "isCorrect": false
          },
          {
            "answerText": "D. 2,2",
            "isCorrect": false
          },
          {
            "answerText": "E. 0,0",
            "isCorrect": true
          },
          {
            "answerText": "F. 1,0",
            "isCorrect": false
          }
        ],
        "help": "-"
      },
      {
        "questionId": "24",
        "questionTypeId": "MC",
        "questionText": "Which normal form is a table in if it has no multi-valued attributes and no partial dependencies?",
        "answers": [
          {
            "answerText": "A. second normal form",
            "isCorrect": false
          },
          {
            "answerText": "B. first normal form",
            "isCorrect": true
          },
          {
            "answerText": "C. third normal form",
            "isCorrect": false
          },
          {
            "answerText": "D. fourth normal form",
            "isCorrect": false
          }
        ],
        "help": "1NF. Eliminate all repeating values and identify a primary key or primary composite key.\n2NF. Make certain the table is in INF and eliminate any partial dependencies.\n3NF. Make certain the table is in 2NF and remove any transitive dependencies."
      },
      {
        "questionId": "25",
        "questionTypeId": "MC",
        "questionText": "Which statement is true regarding external tables?",
        "answers": [
          {
            "answerText": "A. The CREATE TABLE AS SELECT statement can be used to upload data into regular table in the database from an external table.",
            "isCorrect": true
          },
          {
            "answerText": "B. The data and metadata for an external table are stored outside the database.",
            "isCorrect": false
          },
          {
            "answerText": "C. The default REJECT LIMIT for external tables is UNLIMITED.",
            "isCorrect": false
          },
          {
            "answerText": "D. ORACLE_LOADER and ORACLE_DATAPUMP have exactly the same functionality when used with an external table.",
            "isCorrect": false
          }
        ],
        "help": "Create table as select allows us to upload data into normal table from external table."
      },
      {
        "questionId": "26",
        "questionTypeId": "MC",
        "questionText": "Examine the structure of the CUSTOMERS table: (Choose two.)\n\nNAME              NULL?     TYPE\n----------------  --------  ------------\nCUSTNO            NOT NULL  NUMBER(3)\nCUSTNAME          NOT NULL  VARCHAR2(25)\nCUSTADDRESS                 VARCHAR2(35)\nCUST_CREDIT_LMIT            NUMBER(5)\n\nYou must determine if any customers' details have been entered more than once using a different CUSTNO, by listing all duplicate names. Which two methods can you use to get the required result?",
        "answers": [
          {
            "answerText": "A. Subquery",
            "isCorrect": true
          },
          {
            "answerText": "B. Self-join",
            "isCorrect": true
          },
          {
            "answerText": "C. Full outer-join with EXISTS",
            "isCorrect": false
          },
          {
            "answerText": "D. Left outer-join with self-join",
            "isCorrect": false
          },
          {
            "answerText": "E. Natural join with using",
            "isCorrect": false
          }
        ],
        "help": "Self join and a subquery work perfectly fine in this example. You already have a condition and you must not forget aliases for tables."
      },
      {
        "questionId": "27",
        "questionTypeId": "MC",
        "questionText": "Evaluate the following two SQL statements:\n\nSELECT prodjd, NVL2 (prod_expiry_date, prod_expiry_date + 15,'') FROM products;\n\nSELECT prodjd, NVL (prod_expiry_date, prod_expiry_date + 15) FROM products;\n\nWhich statement is true regarding the outcome?",
        "answers": [
          {
            "answerText": "A. Both the statements execute and give different results.",
            "isCorrect": true
          },
          {
            "answerText": "B. Only the second SQL statement executes successfully.",
            "isCorrect": false
          },
          {
            "answerText": "C. Both the statements execute and give the same result.",
            "isCorrect": false
          },
          {
            "answerText": "D. Only the first SQL statement executes successfully.",
            "isCorrect": false
          }
        ],
        "help": "It cannot give the same result as in NVL2(el, e2, e3); cl never returns."
      },
      {
        "questionId": "28",
        "questionTypeId": "MC",
        "questionText": "Examine the structure of the PRODUCTS table:\n\nName              Null?     Type\n----------------  --------  ---------------\nPROD_ID           NOT NULL  NUMBER (6)\nPROD_NAME         NOT NULL  VARCHAR2 (50)\nPROD_DESC         NOT NULL  VARCHAR2 (4000)\nPROD_SUBCATEGORY  NOT NULL  VARCHAR2 (50)\nPROD_MIN_PRICE    NOT NULL  NUMBER (8,2)\nPROD_TOTAL        NOT NULL  VARCHAR2 (13)\nPROD_TOTAL_ID     NOT NULL  NUMBER\nPROD_DETAILS      NOT NULL  VARCHAR2 (2000)\n\nYou want to change the definition of the PRODUCTS table. The PROD_DETAILS column must be changed to allow 3580 characters. Which statement is valid?",
        "answers": [
          {
            "answerText": "A. ALTER TABLE products MODIFY (prod_details CHAR2(3580));",
            "isCorrect": false
          },
          {
            "answerText": "B. ALTER TABLE products MODIFY COLUMN (prod_detalls CHAR (3580));",
            "isCorrect": false
          },
          {
            "answerText": "C. ALTER TABLE products CHANGE (prod_details VARCHAR2 (3580));",
            "isCorrect": false
          },
          {
            "answerText": "D. ALTER TABLE products MODIFY (prod.details VARCHAR2 (3580));",
            "isCorrect": true
          }
        ],
        "help": "D is the correct syntax. ALTER TABLE TABLEI MODIFY (COLUMN_NAME DATATYPE);"
      },
  {
      "questionId": "29",
      "questionTypeId": "MC",
      "questionText": "Which two statements are true about the Oracle data type conversion?",
      "answers": [
          {
              "answerText": "A. SQL statements are easier to understand when you use explicit data type conversion functions.",
              "isCorrect": true
          },
          {
              "answerText": "B. Implicit data type conversion has no impact on performance.",
              "isCorrect": false
          },
          {
              "answerText": "C. Implicit conversion from a datetime value to a CHAR and NCHAR value will always return an unexpected year depending on the value of the NLS_DATE_FORMAT parameter.",
              "isCorrect": false
          },
          {
              "answerText": "D. If implicit data type conversion occurs in an index expression, then Oracle Database might not use the index.",
              "isCorrect": true
          }
      ],
      "help": "A. Explicit data conversion is always preferred.\nD. it is defined for the pre-conversion data type. This can have a negative impact on performance. Implicit data type conversion can have a negative impact on performance, especially if the data type of a column value is converted to that of a constant rather than the other way around. C. is a bit tricky. Implicit conversion depends on the context in which it occurs and may not work the same way in every case. For example, implicit conversion from a datetime value to a VARCHAR2 value may return an unexpected year depending on the value of the NLS_DATE_FORMAT parameter."
  },
  {
      "questionId": "30",
      "questionTypeId": "MC",
      "questionText": "Which two statements are true?",
      "answers": [
          {
              "answerText": "A. INTERVAL YEAR TO MONTH stores a period of time in years, months, and days.",
              "isCorrect": false
          },
          {
              "answerText": "B. INTERVAL DAY TO SECOND stores a period of time in days, hours, minutes, and seconds.",
              "isCorrect": true
          },
          {
              "answerText": "C. The default of INTERVAL YEAR TO MONTH is 2 and the default of INTERVAL DAY TO SECOND is 6.",
              "isCorrect": false
          },
          {
              "answerText": "D. If you specify a trailing field, then it must be less significant than the leading field.",
              "isCorrect": true
          }
      ],
      "help": "The INTERVAL DAY TO SECOND stores a period of time in terms of days, hours, minutes, and seconds. The default of INTERVAL YEAR TO MONTH is 2 and the default of INTERVAL DAY TO SECOND is 2. The trailing field must be less than the leading field. For example, INTERVAL '1-2' MONTH TO YEAR is invalid because trailing is YEAR which is greater than the leading field which is MONTH."
  },
  {
      "questionId": "31",
      "questionTypeId": "MC",
      "questionText": "Examine the output using the format value that was specified for NLS_TIMESTAMP_TZ_FORMAT.\n2023-02-02 05:00:00.230000 -07:00\n\nWhich TO_TIMESTAMP_TZ function would give the same result?",
      "answers": [
          {
              "answerText": "A. SELECT TO_TIMESTAMP_TZ (\"2023-02-02, 05:00:00.23 AMERICA/LOS ANGLELES\", yyyy-mm-dd hh:mi:ss.ff TZR) FROM DUAL;",
              "isCorrect": false
          },
          {
              "answerText": "B. SELECT TO_TIMESTAMP_TZ ('2023-02-02, 05:00:00.23 AMERICA/LOS ANGLELES', 'yyyy-mm-dd hh:mi:ss.ff TZR') FROM DUAL;",
              "isCorrect": true
          },
          {
              "answerText": "C. SELECT TO_TIMESTAMP_TZ (\"2023:02:02, 05:00:00:23 AMERICA/LOS ANGLELES\", \"yyyy-mm-dd hh:mi:ss.ff TZR\") FROM DUAL;",
              "isCorrect": false
          },
          {
              "answerText": "D. SELECT TO_TIMESTAMP_TZ ('2023-02-02, 05:00:00.23 AMERICA/LOS ANGLELES', yyyy-mm-dd hh:mi:ss.ff TZR) FROM DUAL;",
              "isCorrect": false
          }
      ],
      "help": "B is the correct syntax. Single quotation marks must be used in this example. As a reminder, only use double quotation marks when you use aliases."
  },
  {
      "questionId": "32",
      "questionTypeId": "MC",
      "questionText": "Examine this statement:\n\nCREATE TABLE COUNTRIES1 (COUNTRIES_ID, NAME, SIZE, GDP) AS SELECT COUNTRIES_NB, COUNTRIES_NAME, SIZE, GDP FROM COUNTRIES WHERE 1=2;\n\nWhich two statements are true about the COUNTRIES1 table?",
      "answers": [
          {
              "answerText": "A. It will not be created because the column-specified names in the SELECT and CREATE TABLE clauses do not match.",
              "isCorrect": false
          },
          {
              "answerText": "B. It will have NOT NULL constraints on the selected columns which had those constraints in the COUNTRIES table.",
              "isCorrect": true
          },
          {
              "answerText": "C. It will not be created because of the invalid WHERE clause.",
              "isCorrect": false
          },
          {
              "answerText": "D. It is created with no rows.",
              "isCorrect": true
          },
          {
              "answerText": "E. It has PRIMARY KEY and UNIQUE constraints on the selected columns which had those constraints in the COUNTRIES table.",
              "isCorrect": false
          }
      ],
      "help": "B. ONLY NOT NULL constraints.\nD. 1=2 no rows.\nA. the column-specified names in the SELECT and CREATE TABLE clauses do not have to match."
  },
  {
      "questionId": "33",
      "questionTypeId": "MC",
      "questionText": "Which two statements are true regarding views? (Choose two.)",
      "answers": [
          {
              "answerText": "A. The WITH CHECK OPTION constraint can be used in a view definition to restrict the columns displayed through the view.",
              "isCorrect": false
          },
          {
              "answerText": "B. We cannot refer to a global temporary table with a view.",
              "isCorrect": false
          },
          {
              "answerText": "C. CREATE VIEW can be used with subqueries.",
              "isCorrect": true
          },
          {
              "answerText": "D. Rows added through a view are deleted from the table automatically when the view is dropped.",
              "isCorrect": false
          },
          {
              "answerText": "E. Aliases are mandatory when we use aggregate functions within a view.",
              "isCorrect": true
          },
          {
              "answerText": "F. A subquery used in a complex view definition cannot contain group functions or joins.",
              "isCorrect": false
          }
      ],
      "help": "C. Subqueries -> DML, CREATE TABLE, CREATE VIEW."
  },
  {
      "questionId": "34",
      "questionTypeId": "MC",
      "questionText": "Assume that you are connected in the sample schema in Capetown, South Africa. Suppose the NLS_ISO_CURRENCY is set to FRANCE.\n\nWhich of the following statement would give the required output?\n\nOUTPUT: ZAR04,070.56",
      "answers": [
          {
              "answerText": "A. SELECT TO_CHAR(sales_total_france, 'C09G999D99') FROM SALES;",
              "isCorrect": false
          },
          {
              "answerText": "B. SELECT TO_CHAR(sales_total_france, 'C09G999D99') FROM SALES;",
              "isCorrect": false
          },
          {
              "answerText": "C. SELECT TO_CHAR(sales_total_france, 'L09G999D99') FROM SALES;",
              "isCorrect": true
          },
          {
              "answerText": "D. SELECT TO_CHAR(sales_total_france, 'C9G999D99') FROM SALES;",
              "isCorrect": false
          }
      ],
      "help": "C means ISO CURRENCY as defined in the NLS_ISO_CURRENCY parameter. G GROUP SEPARATOR, and D DECIMAL. L means local currency symbol. France uses the Euro and not the Rand South African therefore C is the only correct answer."
  },
  {
      "questionId": "35",
      "questionTypeId": "MC",
      "questionText": "Which two statements are true about COALESCE?",
      "answers": [
          {
              "answerText": "A. The COALESCE expression doesn't allow for user-specified NULL-handling.",
              "isCorrect": false
          },
          {
              "answerText": "B. You cannot specify two or more arguments to COALESCE.",
              "isCorrect": false
          },
          {
              "answerText": "C. Arguments that you specify to COALESCE must all be of the same type, with the exception of integers with doubles.",
              "isCorrect": true
          },
          {
              "answerText": "D. COALESCE does support multi-assign attributes.",
              "isCorrect": false
          },
          {
              "answerText": "E. You can use the COALESCE expression to evaluate records for multiple values and return the first non-NULL value.",
              "isCorrect": true
          }
      ],
      "help": "-"
  },
  {
      "questionId": "36",
      "questionTypeId": "MC",
      "questionText": "Which three statements are true regarding the data types?",
      "answers": [
          {
              "answerText": "A. The minimum column width that can be specified for a VARCHAR2 data type column is one.",
              "isCorrect": true
          },
          {
              "answerText": "B. Only one LONG column can be used per table.",
              "isCorrect": true
          },
          {
              "answerText": "C. A TIMESTAMP data type column stores only time values with fractional seconds.",
              "isCorrect": false
          },
          {
              "answerText": "D. The BLOB data type column is used to store binary data in an operating system file.",
              "isCorrect": false
          },
          {
              "answerText": "E. The value for a CHAR data type column is blank-padded to the maximum defined column width.",
              "isCorrect": true
          }
      ],
      "help": "C. TIMESTAMP can store time values without fractional seconds.\nD. BLOBs are not stored in the normal database files on disk in the same way as is other data managed by DB. Instead, they are stored as binary files in a special directory set aside for the purpose. If you are using an environment, then by default the BLOB directory’ is created within the environment's home directory."
  },
  {
      "questionId": "37",
      "questionTypeId": "MC",
      "questionText": "Which statement is true about Data Manipulation Language (DML)?",
      "answers": [
          {
              "answerText": "A. DML automatically disables foreign key constraints when modifying primary key values in the parent table.",
              "isCorrect": false
          },
          {
              "answerText": "B. Each DML statement forms a transaction by default.",
              "isCorrect": false
          },
          {
              "answerText": "C. A transaction can consist of one or more DML statements.",
              "isCorrect": true
          },
          {
              "answerText": "D. DML disables foreign key constraints when deleting primary key values in the parent table, only when the ON DELETE CASCADE option is set for the foreigner constraint.",
              "isCorrect": false
          }
      ],
      "help": "-"
  },
  {
      "questionId": "38",
      "questionTypeId": "MC",
      "questionText": "You want to display all employees and their managers having 100 as the MANAGERID. You want the output in two columns: the first column would have the LAST NAME of the managers and the second column would have LAST_NAME of the employees. Which SQL statement would you execute?",
      "answers": [
          {
              "answerText": "A. SELECT M.LASTNAME \"MANAGER\", E.LASTNAME \"EMPLOYEE\" FROM EMPLOYEES M LEFT OUTER JOIN EMPLOYEES E ON E.EMPLOYEEJD = M.MANAGERJD WHERE M.MANAGERJD = 100;",
              "isCorrect": false
          },
          {
              "answerText": "B. SELECT M.LASTNAME \"MANAGER\", E.LASTNAME \"EMPLOYEE\" FROM EMPLOYEES M JOIN EMPLOYEES E ON M.EMPLOYEEJD = E.MANAGERJD WHERE M.MANAGERJD = 100;",
              "isCorrect": false
          },
          {
              "answerText": "C. SELECT M.LASTNAME \"MANAGER\", E.LASTNAME \"EMPLOYEE\" FROM EMPLOYEES M JOIN EMPLOYEES E ON M.EMPLOYEEJD = E.MANAGERJD WHERE E.MANAGERJD = 100;",
              "isCorrect": true
          },
          {
              "answerText": "D. SELECT M.LASTNAME \"MANAGER\", E.LASTNAME \"EMPLOYEE\" FROM EMPLOYEES M RIGHT JOIN EMPLOYEES E ON M.EMPLOYEEJD = E.MANAGERJD AND E.MANAGERJD = 100;",
              "isCorrect": false
          }
      ],
      "help": "C is the correct syntax. You need an INNER JOIN in this context."
  },
  {
      "questionId": "39",
      "questionTypeId": "MC",
      "questionText": "You want to create a script to be used to calculate a subgroup statistic on a numeric column.\n\nSELECT &GROUP_COL, MAX(&NUMBER_COL) MAXIMUM\nFROM &TABLE\nGROUP BY &GROUP_COL;\n\nWhat would have to be added to this query on order to produce the required result?",
      "answers": [
          {
              "answerText": "A. &TABLE should be &&table.",
              "isCorrect": false
          },
          {
              "answerText": "B. Nothing, the query will work successfully but will not give the required result.",
              "isCorrect": false
          },
          {
              "answerText": "C. Nothing, the query will work successfully and will give the required result.",
              "isCorrect": true
          },
          {
              "answerText": "D. GROUP BY does not work with substituion variable.",
              "isCorrect": false
          }
      ],
      "help": "C. There is nothing with this query. I will give the required result."
  },
  {
      "questionId": "40",
      "questionTypeId": "MC",
      "questionText": "Examine the commands used to create COUNTRIES_DETAILS and LENDING_DETAILS tables:\n\nCREATE TABLE COUNTRIES_DETAILS (COUNTRIES_ID NUMBER PRIMARY KEY, COUNTRIES.NAME VARCHAR2(70), SIZE NUMBER (30));\n\nCREATE TABLE LENDING_DETAILS (LENDING_ID NUMBER NOT NULL, COUNTRIES JNAME VARCHAR2(70), COUNTRIES_ID NUMBER)), COUNTRIES_ID NUMBER REFERENCES LENDING_DETAILS(COUNTRIES_ID));\n\nYou want to generate a list of all countries IDs along with any lending IDs that may have been assigned to them.\nWhich SQL statement must you use?",
      "answers": [
          {
              "answerText": "A. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c \n   RIGHT OUTER JOIN LENDINGJDETAILS l ON (c.COUNTRIES_ID = l.COUNTRIES_ID);",
              "isCorrect": false
          },
          {
              "answerText": "B. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c \n   LEFT OUTER JOIN LENDINGJDETAILS l ON (c.COUNTRIES_ID = l.COUNTRIES_ID);",
              "isCorrect": true
          },
          {
              "answerText": "C. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM LENDING_DETAILS \n   LEFT OUTER JOIN COUNTRIES_DETAILS c ON (l.COUNTRIES_ID = c.COUNTRIES_ID );",
              "isCorrect": false
          },
          {
              "answerText": "D. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c \n   RIGHT OUTER JOIN LENDINGJDETAILS l ON (l.COUNTRIES_ID = c.COUNTRIES_ID);",
              "isCorrect": false
          },
          {
              "answerText": "E. SELECT c.COUNTRIES_ID, l.LENDING_ID FROM COUNTRIES_DETAILS c \n   FULL OUTER JOIN LENDINGJDETAILSI ON (c.COUNTRIES_ID = l.COUNTRIES_ID);",
              "isCorrect": false
          }
      ],
      "help": "LEFT OUTER JOIN must be used in this context as you want 'all countries' and only the lending IDs that have been assigned to them."
  },
  {
      "questionId": "41",
      "questionTypeId": "MC",
      "questionText": "Which statement correctly grants a system privilege? (choose one.)",
      "answers": [
          {
              "answerText": "A. GRANT CREATE VIEW ON table1 TO JOHN_KEYNES;",
              "isCorrect": false
          },
          {
              "answerText": "B. GRANT ALTER TABLE TO PUBLIC;",
              "isCorrect": false
          },
          {
              "answerText": "C. GRANT CREATE TABLE TO JOHN_KEYNES, ADAM_SMITH;",
              "isCorrect": true
          },
          {
              "answerText": "D. GRANT CREATE SESSION TO ALL;",
              "isCorrect": false
          },
          {
              "answerText": "E. GRANT CREATE TABLE, SELECT TO KARL_MARX;",
              "isCorrect": false
          },
          {
              "answerText": "F. GRANT CREATE PUBLIC SYNONYM, ALTER USER TO ECONOMISTS_ROLE;",
              "isCorrect": false
          }
      ],
      "help": "GRANT SYS PRIV TO USERI, USER2........USER N is the only valid syntax. You cannot grant a SYS and OBJ privs at the same time. You cannot grant 2 SYS privs to a role at the same time."
  },
  {
      "questionId": "42",
      "questionTypeId": "MC",
      "questionText": "Which two statements are true regarding data type conversion in query expressions? (Choose two.)",
      "answers": [
          {
              "answerText": "A. SELECT INV_NO FROM INVOICE WHERE inv_date = '15-february-2008' :uses implicit conversion",
              "isCorrect": true
          },
          {
              "answerText": "B. SELECT INV_NO + '350' FROM INVOICE : uses implicit conversion",
              "isCorrect": true
          },
          {
              "answerText": "C. SELECT TO_DATE(INV_DATE) FROM INVOICE : requires explicit conversion",
              "isCorrect": false
          },
          {
              "answerText": "D. SELECT CONCAT(inv_amt, inv_date) : requires explicit conversion",
              "isCorrect": false
          },
          {
              "answerText": "E. SELECT INV_NO FROM INVOICE WHERE inv_AMT BETWEEN '101' AND '102' : uses explicit conversion",
              "isCorrect": false
          }
      ],
      "help": "E. it uses implicit conversion (character to number). D. doesn’t require explicit conversion at all."
  },
  {
      "questionId": "43",
      "questionTypeId": "MC",
      "questionText": "Which two statements are true about sequences created in a single instance Oracle database? (Choose two.)",
      "answers": [
          {
              "answerText": "A. When the MAXVALUE limit for a sequence is reached, it can be increased by using the ALTER SEQUENCE statement.",
              "isCorrect": true
          },
          {
              "answerText": "B. DELETE SEQUENCEl would remove a sequence from the database.",
              "isCorrect": false
          },
          {
              "answerText": "C. The numbers generated by an explicitly defined sequence can only be used to insert data in one table.",
              "isCorrect": false
          },
          {
              "answerText": "D. CURRVAL is used to refer to the most recent sequence number that has been generated for a particular sequence.",
              "isCorrect": true
          },
          {
              "answerText": "E. When a database instance shuts down abnormally, sequence numbers that have been cached but not used are available again when the instance is restarted.",
              "isCorrect": false
          }
      ],
      "help": "B. The correct statement for removing a sequence is DROP SEQUENCE. E. This behavior is not related to sequence numbers."
  },
  {
    "questionId": "44",
    "questionTypeId": "MC",
    "questionText": "You execute this command:\n\nTRUNCATE TABLE EMPLOYEES;\n\nWhich two statements are true?",
    "answers": [
      {
        "answerText": "A. It drops any triggers defined on the table.",
        "isCorrect": false
      },
      {
        "answerText": "B. It always retains the space used by the removed rows.",
        "isCorrect": false
      },
      {
        "answerText": "C. The table 'EMPLOYEES' can be ROLLBACK.",
        "isCorrect": false
      },
      {
        "answerText": "D. You need DROP_ANY_TABLE privilege to execute Truncate.",
        "isCorrect": true
      },
      {
        "answerText": "E. It retains the indexes defined on the table.",
        "isCorrect": true
      },
      {
        "answerText": "F. A FLASHBACK TABLE statement can be used to retrieve the deleted data.",
        "isCorrect": false
      }
    ],
    "help": "A. Truncate doesn't drop any triggers. B. Truncate releases space used by the table. C. Truncate is not transactional, so it can't be rolled back. F. Truncate cannot be undone with Flashback."
  },
  {
    "questionId": "45",
    "questionTypeId": "MC",
    "questionText": "Which two statements are true regarding the execution of the correlated subqueries? (Choose two.)",
    "answers": [
      {
        "answerText": "A. The nested query executes after the outer query returns the row.",
        "isCorrect": true
      },
      {
        "answerText": "B. The nested query executes first and then the outer query executes.",
        "isCorrect": false
      },
      {
        "answerText": "C. The outer query executes only once for the result returned by the inner query.",
        "isCorrect": false
      },
      {
        "answerText": "D. Each row returned by the outer query is evaluated for the results returned by the inner query.",
        "isCorrect": true
      }
    ],
    "help": "Correlated subqueries: The outer query fetches a row first, then the inner query executes and returns results based on the fetched row. This process is repeated for each row of the outer query."
  },
  {
    "questionId": "46",
    "questionTypeId": "MC",
    "questionText": "The DBA issues this SQL command:\n\nCREATE USER Anthony IDENTIFIED by Anthony_Finance_DPT;\n\nWhat privileges does the user Anthony have at this point?",
    "answers": [
      {
        "answerText": "A. no privileges",
        "isCorrect": true
      },
      {
        "answerText": "B. only the SELECT privilege",
        "isCorrect": false
      },
      {
        "answerText": "C. only the CONNECT privilege",
        "isCorrect": false
      },
      {
        "answerText": "D. all the privileges of a default user",
        "isCorrect": false
      },
      {
        "answerText": "E. Anthony can only create tables in his own schema.",
        "isCorrect": false
      }
    ],
    "help": "When a user is created in Oracle, by default, no privileges are granted to the user."
  },
  {
    "questionId": "47",
    "questionTypeId": "MC",
    "questionText": "What two statements are true? (choose two.)",
    "answers": [
      {
        "answerText": "A. CASE and DECODE accept optional default values to return if the evaluated expression doesn't match any of the specified possible matches.",
        "isCorrect": true
      },
      {
        "answerText": "B. CASE and NULLIF accept optional default values to return if the evaluated expression doesn't match any of the specified possible matches.",
        "isCorrect": false
      },
      {
        "answerText": "C. NULLIF and DECODE accept optional default values to return if the evaluated expression doesn't match any of the specified possible matches.",
        "isCorrect": false
      },
      {
        "answerText": "D. NVL considers an expression and evaluates its value to determine whether the value is NULL.",
        "isCorrect": true
      },
      {
        "answerText": "E. NULLIF considers an expression and evaluates its value to determine whether the value is NULL.",
        "isCorrect": false
      },
      {
        "answerText": "F. COALESCE considers an expression and evaluates its value to determine whether the value is NULL.",
        "isCorrect": false
      }
    ],
    "help": "CASE and DECODE accept optional default values. D is the definition of NVL."
  },
  {
    "questionId": "49",
    "questionTypeId": "MC",
    "questionText": "Evaluate the following SQL statement:\n\nSELECT PROD_ID\n  FROM COSTS\n WHERE DISCOUNT_id IN (SELECT DISCOUNT_id\n                        FROM PROMO_TB \n                       WHERE DISCOUNT_COST < ALL (SELECT MAX(DISCOUNT_COST\n                                                    FROM PROMO_TB\n                                                   GROUP BY (DISCOUNT_END_DAY-DISCOUNT_BEG_DAY)));\n\nWhat would be the outcome of the above SQL statement?",
    "answers": [
      {
        "answerText": "A. It displays prod IDs in the discount with the lowest cost.",
        "isCorrect": false
      },
      {
        "answerText": "B. It displays prod IDs in the discounts with the lowest cost in the same time interval.",
        "isCorrect": false
      },
      {
        "answerText": "C. It displays prod IDs in the discounts with the highest cost in the same time interval.",
        "isCorrect": false
      },
      {
        "answerText": "D. It displays prod IDs in the discounts which cost less than the highest cost in the same time interval.",
        "isCorrect": false
      },
      {
        "answerText": "E. None of the above.",
        "isCorrect": true
      }
    ],
    "help": "Even if D is arguable, E is the most correct because you need a correlated subquery in order to achieve D. Wrong syntax. Basically, just gibberish. It would return an error."
  },
  {
    "questionId": "50",
    "questionTypeId": "MC",
    "questionText": "NUMTOYMINTERVAL(n, interval unit). Interval unit accepts ____?\n\nWhich statements are true? {choose all that apply.)",
    "answers": [
      {
        "answerText": "A. CHAR",
        "isCorrect": true
      },
      {
        "answerText": "B. VARCHAR",
        "isCorrect": true
      },
      {
        "answerText": "C. NCHAR",
        "isCorrect": true
      },
      {
        "answerText": "D. BLOB",
        "isCorrect": false
      },
      {
        "answerText": "E. NUMBER",
        "isCorrect": false
      },
      {
        "answerText": "F. DATE",
        "isCorrect": false
      },
      {
        "answerText": "G. TIMESTAMP",
        "isCorrect": false
      },
      {
        "answerText": "H. VARCHAR2",
        "isCorrect": true
      }
    ],
    "help": "Interval unit must be characters datatype, and not LOBs."
  },
  {
    "questionId": "51",
    "questionTypeId": "MC",
    "questionText": "Which three statements indicate the end of a transaction? (Choose three.)",
    "answers": [
      {
        "answerText": "A. after a COMMENT ON COLUMN_NAME statement is issued.",
        "isCorrect": true
      },
      {
        "answerText": "B. after two SAVEPOINTs in a row are issued.",
        "isCorrect": false
      },
      {
        "answerText": "C. after a SELECT statement is issued.",
        "isCorrect": false
      },
      {
        "answerText": "D. after a ROLLBACK is issued.",
        "isCorrect": true
      },
      {
        "answerText": "E. after a RENAME statement is issued.",
        "isCorrect": true
      }
    ],
    "help": "You can have as many savepoints as you want, it will not indicate the end of a transaction. SELECT is a DML statement as a result it does not end the transaction."
  },
  {
    "questionId": "52",
    "questionTypeId": "MC",
    "questionText": "Which statement is true about the UNION operator?",
    "answers": [
      {
        "answerText": "A. NULLs are considered.",
        "isCorrect": false
      },
      {
        "answerText": "B. You cannot use aliases in the SELECT statement.",
        "isCorrect": false
      },
      {
        "answerText": "C. You can use the UNION operator within a subquery.",
        "isCorrect": true
      },
      {
        "answerText": "D. You can use the UNION operator with an UPDATE statement.",
        "isCorrect": false
      }
    ],
    "help": "NULLs are not considered; you can use aliases in the SELECT statement (and then the ORDER BY clause). SET operators are SELECT-only statements."
  },
  {
    "questionId": "53",
    "questionTypeId": "MC",
    "questionText": "A subquery is called a single-row subquery when ____.",
    "answers": [
      {
        "answerText": "A. There is only one subquery in the outer query and the inner query returns one or more values",
        "isCorrect": false
      },
      {
        "answerText": "B. The inner query uses an aggregating function and returns one or more values.",
        "isCorrect": false
      },
      {
        "answerText": "C. The inner query returns one or more values and the outer query returns a single value.",
        "isCorrect": false
      },
      {
        "answerText": "D. The inner query returns a single row to the outer query and returns multiple columns to the outer query.",
        "isCorrect": false
      },
      {
        "answerText": "E. The inner query returns a single value to the outer query.",
        "isCorrect": true
      }
    ],
    "help": "-"
  },
  {
    "questionId": "54",
    "questionTypeId": "MC",
    "questionText": "Examine the EMPLOYEES table\n\nCREATE TABLE EMPLOYEES (LAST_NAME VARCHAR(30), SALARY NUMBER, HIRE_DATE DATE NOT NULL);\n\nYou must display the maximum and minimum salaries of employees hired 1 year ago.\nWhich two statements would provide the correct output? (Choose two.)",
    "answers": [
      {
        "answerText": "A. SELECT MIN(Salary) MIN_SALARY, MAX(salary) AS \"MAX_SALARY\" FROM employees WHERE hire_date < SYSDATE-365 GROUP BY MIN(salary), MAX(salary);",
        "isCorrect": false
      },
      {
        "answerText": "B. SELECT MIN_SALARY, MAX_SALARY FROM (SELECT MIN(salary) MIN_SALARY, MAX(salary) MAX_SALARY FROM employees WHERE hire_date < SYSDATE-365) GROUP BY maxsal, MIN_SALARY;",
        "isCorrect": true
      },
      {
        "answerText": "C. SELECT MIN_SALARY, MAX_SALARY FROM (SELECT MIN(salary) MIN_SALARY, MAX(salary) MAX_SALARY FROM employees WHERE hire_date < SYSDATE-365 GROUP BY MIN(salary), MAX(salary));",
        "isCorrect": false
      },
      {
        "answerText": "D. SELECT MIN(Salary), MAX(salary) FROM (SELECT salary FROM employees WHERE hire_date < SYSDATE-365);",
        "isCorrect": true
      }
    ],
    "help": "Aggregate functions imply the use of GROUP BY later in the statement. Aggregate functions can appear in select lists, in ORDER BY clauses, and HAVING clauses. A and C are wrong because you can't use aggregate functions in the GROUP BY clause."
  },
  {
    "questionId": "55",
    "questionTypeId": "MC",
    "questionText": "Evaluate the following statement.\n\nINSERT ALL\n  WHEN order_total < 10000 THEN\n  INTO small_orders\n  WHEN order_total > 10000 AND order_total < 20000 THEN\n  INTO medium_orders\n  WHEN order_total > 2000000 THEN\n  INTO large_orders\nSELECT order_id, order_total, customer_id\n  FROM orders;\n\nWhich statement is true regarding the evaluation of rows returned by the subquery in the INSERT statement?",
    "answers": [
      {
        "answerText": "A. Each row is evaluated by the first WHEN clause and if the condition is false then the row would be evaluated by the subsequent when clauses.",
        "isCorrect": false
      },
      {
        "answerText": "B. All rows are evaluated by all the three WHEN clauses.",
        "isCorrect": true
      },
      {
        "answerText": "C. Each row is evaluated by the first WHEN clause and if the condition is true, then the row would be evaluated by the subsequent when clauses.",
        "isCorrect": false
      },
      {
        "answerText": "D. The INSERT statement will return an error because the ELSE clause is missing.",
        "isCorrect": false
      }
    ],
    "help": "INSERT ALL is different than INSERT FIRST. All rows are evaluated in an INSERT ALL statement."
  },
  
      {
        "questionId": "56",
        "questionTypeId": "MC",
        "questionText": "The first DROP operation is performed on PRODUCTS table using this command:\n\nDROP TABLE products PURGE;\n\nThen a FLASHBACK operation is performed using this command:\n\nFLASHBACK TABLE products TO BEFORE DROP;\n\nWhich is true about the result of the FLASHBACK command?",
        "answers": [
          {
            "answerText": "A. It recovers only the table structure.",
            "isCorrect": false
          },
          {
            "answerText": "B. It recovers the table structure, data, and the indexes.",
            "isCorrect": false
          },
          {
            "answerText": "C. It recovers the table structure and data but not the related indexes.",
            "isCorrect": false
          },
          {
            "answerText": "D. It is not possible to recover the table structure, data, or the related indexes.",
            "isCorrect": true
          },
          {
            "answerText": "E. DATA that has been changed in the PRODUCTS table can be restored to some previous point in time, provided that the table's structure hasn't been changed in such a way that the table is no longer able to receive the restored data.",
            "isCorrect": false
          }
        ],
        "help": "D is the only correct answer. E would be true if the query was DROP TABLE PRODUCTS."
      },
      {
        "questionId": "57",
        "questionTypeId": "MC",
        "questionText": "Examine the SALES table:\n\nCREATE TABLE SALES (SALES_ID     NUMBER NOT NULL,\n                    PRODUCT_NAME VARCHAR2(50),\n                    QUARTER1     NUMBER,\n                    QUARTER2     NUMBER,\n                    QUARTERS     NUMBER,\n                    QUARTER4     NUMBER));\n\nSELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTER4 > QUARTERS ORDER BY 2 DESC\nUNION\nSELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTER2 > QUARTER1\nMINUS\nSELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTERS > QUARTER2\nUNION\nSELECT SALES_ID, PRODUCT_NAME FROM SALES WHERE QUARTER1 > QUARTER4;\n\nWhich statement is true regarding the outcome of the query?",
        "answers": [
          {
            "answerText": "A. It produces an error because SET operators cannot be combined.",
            "isCorrect": false
          },
          {
            "answerText": "B. It produces an error because positional notation cannot be used in the ORDER BY clause with SET operators.",
            "isCorrect": false
          },
          {
            "answerText": "C. It produces an error because we cannot use > with SET operators.",
            "isCorrect": false
          },
          {
            "answerText": "D. It produces an error because the ORDER BY clause should appear only at the end of a compound query-that is, with the last SELECT statement.",
            "isCorrect": true
          }
        ],
        "help": "This query looks hard but this question can be answered quickly when you read answers first. ORDER BY must be used in the last SELECT statement (always!). SET operators can obviously be combined. You can ORDER BY by position or by reference."
      },
      {
        "questionId": "58",
        "questionTypeId": "MC",
        "questionText": "CREATE ROLE MKT_TEAM IDENTIFIED BY MKT123;\n\nGRANT SELECT, UPDATE, DELETE ON PROJECT1 TO MKT_TEAM;\n\nGRANT ALL ON PROJECT1 TO MKT_TEAM;\n\nREVOKE DELETE ON PROJECT1 TO MKT_TEAM;\n\nGRANT MKT_TEAM TO FINANCE_JIM;\nALTER USER FINANCE_JIM DEFAULT ROLE MKT_TEAM;\n\nWhich statement is true?",
        "answers": [
          {
            "answerText": "A. FINANCE_JIM has all privileges on project 1.",
            "isCorrect": false
          },
          {
            "answerText": "B. The last query will not execute successfully as we cannot use ALTER USER to grant a user a role.",
            "isCorrect": false
          },
          {
            "answerText": "C. FINANCE_JIM will have exactly the same privileges as MKT_TEAM.",
            "isCorrect": true
          },
          {
            "answerText": "D. The REVOKE statement will not execute successfully as we cannot REVOKE objects privilege after a GRANT ALL.",
            "isCorrect": false
          }
        ],
        "help": "FINANCE_JIM is granted the role \"MKT_TEAM\" therefore he will have exactly the same privileges as MKT_TEAM."
      },
      {
        "questionId": "59",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true regarding virtual columns? (choose two.)",
        "answers": [
          {
            "answerText": "A. Virtual columns can be referenced in the WHERE clause of updates and deletes, but they cannot be manipulated by DML.",
            "isCorrect": false
          },
          {
            "answerText": "B. Virtual columns are not supported for index-organized, external, and object tables but they are supported for temporary tables.",
            "isCorrect": false
          },
          {
            "answerText": "C. The output of the expression must be a scalar value.",
            "isCorrect": true
          },
          {
            "answerText": "D. It cannot return an Oracle supplied datatype, a user-defined type, or LOB.",
            "isCorrect": true
          }
        ],
        "help": "Virtual columns cannot be manipulated by DML and must return scalar values. They are not supported for index-organized, external, and object tables, or GTT."
      },
      {
        "questionId": "60",
        "questionTypeId": "MC",
        "questionText": "Which query executes successfully?",
        "answers": [
          {
            "answerText": "A. SELECT id, name, gender, name ||' work's in '||dept||' department' AS \"work\" FROM DIOR_DPT",
            "isCorrect": false
          },
          {
            "answerText": "B. SELECT id, name, gender, name ||q ['work´s ||in']'||dept||' department' AS \"work\" FROM DIOR_DPT;",
            "isCorrect": false
          },
          {
            "answerText": "C. SELECT id, name, gender, name ||q {'work}´s||in||dept||' department' AS \"work\" FROM DIOR_DPT",
            "isCorrect": false
          },
          {
            "answerText": "D. SELECT id, name, gender, name ||' work'||'s'||' in '||dept||' department' AS \"work\" FROM DIOR_DPT;",
            "isCorrect": true
          },
          {
            "answerText": "E. SELECT id, name, gender, name ||q'<work´s in '>'||dept||' department' AS \"work\" FROM DIOR_DPT;",
            "isCorrect": false
          }
        ],
        "help": "D is the only correct syntax."
      },
      {
        "questionId": "61",
        "questionTypeId": "MC",
        "questionText": "Which statement is true about CUBE?",
        "answers": [
          {
            "answerText": "A. CUBE is an extension of GROUP BY and creates multiple levels of subtotals and totals across a specified group of attributes.",
            "isCorrect": false
          },
          {
            "answerText": "B. CUBE is an extension of GROUP BY and creates grouping sets for all combinations of dimensions.",
            "isCorrect": true
          },
          {
            "answerText": "C. You cannot CUBE so that only some of the subtotals are included.",
            "isCorrect": false
          },
          {
            "answerText": "D. CUBE is an implicit GROUP BY on the columns not specified in the clause CUBE_FOR_CLAUSE.",
            "isCorrect": false
          }
        ],
        "help": "A is the definition of ROLLUP. ROLLUP does not create grouping sets for all combinations of dimensions. You need to know the difference between the two even if you will seldom use it in real life... Also, you can CUBE only column such as GROUP BY COLUMN 1 CUBE (Column2..........COLUMN N)."
      },
      {
        "questionId": "62",
        "questionTypeId": "MC",
        "questionText": "The user Cristiano issues this SQL statement:\nGRANT SELECT ON Cristiano.EMP TO Lionel WITH GRANT OPTION;\n\nThe user Lionel issues this SQL statement:\nGRANT SELECT ON Cristiano.EMP TO Kylian WITH GRANT OPTION;\n\nThe user Kylian issues this SQL statement:\nGRANT SELECT ON Cristiano.EMP TO Herling;\n\nThe user Cristiano issues this SQL statement:\nREVOKE select on Cristiano.EMP FROM Lionel;\n\nFor which users does the revoke command revoke SELECT privileges on the Cristiano.EMP table?",
        "answers": [
          {
            "answerText": "A. Lionel, Kylian and Herling",
            "isCorrect": true
          },
          {
            "answerText": "B. Lionel and Herling",
            "isCorrect": false
          },
          {
            "answerText": "C. Lionel and Kylian",
            "isCorrect": false
          },
          {
            "answerText": "D. Lionel",
            "isCorrect": false
          }
        ],
        "help": "-"
      },
      {
        "questionId": "63",
        "questionTypeId": "MC",
        "questionText": "Which two statements are true regarding the EXISTS operator used in the correlated subqueries? (Choose two.)",
        "answers": [
          {
            "answerText": "A. The outer query stops evaluating the result set of the inner query when the first value is found.",
            "isCorrect": true
          },
          {
            "answerText": "B. It is used to test whether the values retrieved by the inner query exist in the result of the outer query.",
            "isCorrect": false
          },
          {
            "answerText": "C. It is used to test whether the values retrieved by the outer query exist in the result set of the inner query.",
            "isCorrect": true
          },
          {
            "answerText": "D. The outer query continues evaluating the result set of the inner query until all the values in the result set are processed.",
            "isCorrect": false
          }
        ],
        "help": "The outer query comes first because the question asks you about correlated subqueries. Once the value is found by the outer query, it stops."
      }
]