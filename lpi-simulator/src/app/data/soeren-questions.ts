import { Question } from '../models/definitions';

export const questions: Question[] = [
  {
    questionId: '1',
    questionTypeId: 'MC',
    questionText:
      'Evaluate the following SQL statement:\n' +
      '\n' +
      'SQL> select cust_id, cust_last_name "Last name"\n' +
      'FROM customers\n' +
      'WHERE country_id = 10\n' +
      'UNION\n' +
      'SELECT cust_id CUST_NO, cust_last_name\n' +
      'FROM customers\n' +
      'WHERE country_id = 30\n' +
      '\n' +
      'Identify three ORDER BY clauses either one of which can complete the query.',
    answers: [
      {
        answerText: 'A. ORDER BY "Last name"',
        isCorrect: true,
      },
      {
        answerText: 'B. ORDER BY 2, cust_id',
        isCorrect: true,
      },
      {
        answerText: 'C. ORDER BY CUST_NO',
        isCorrect: false,
      },
      {
        answerText: 'D. ORDER BY 2, 1',
        isCorrect: true,
      },
      {
        answerText: 'E. ORDER BY "CUST_NO"',
        isCorrect: false,
      },
    ],
    answer: 'A, B, D',
    help:
      'Explanation:\n' +
      'Using the ORDER BY Clause in Set Operations\n' +
      '-The ORDER BY clause can appear only once at the end of the compound query.\n' +
      '-Component queries cannot have individual ORDER BY clauses.\n' +
      '-The ORDER BY clause recognizes only the columns of the first SELECT query.\n' +
      '-By default, the first column of the first SELECT query is used to sort the output in an ascending order.',
  },
  {
    questionId: '2',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding the WHERE and HAVING\n' +
      'clauses in a SQL statement? (Choose three.)',
    answers: [
      {
        answerText:
          'A. WHERE and HAVING clauses cannot be used together in a SQL statement.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The HAVING clause conditions can have aggregate functions.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The HAVING clause conditions can use aliases for the columns.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The WHERE clause is used to exclude rows before the grouping of data.',
        isCorrect: true,
      },
      {
        answerText:
          'E. The HAVING clause is used to exclude one or more aggregated results after grouping data.',
        isCorrect: true,
      },
    ],
    answer: 'B, D, E',
    help: '',
  },
  {
    questionId: '3',
    questionTypeId: 'SC',
    questionText: 'Which statement is true regarding external tables?',
    answers: [
      {
        answerText:
          'A. The CREATE TABLE AS SELECT statement can be used to upload data into a normal table in the database from an external table.',
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
    answer: 'A',
    help:
      'Reference:\n' +
      'https://docs.oracle.com/cd/B28359_01/server.111/b28310/tables013.htm',
  },
  {
    questionId: '4',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about Data Manipulation Language (DML) statements?',
    answers: [
      {
        answerText:
          'A. An INSERT INTO...VALUES.. statement can add multiple rows per execution to a table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. An UPDATE... SET... statement can modify multiple rows based on multiple conditions on a table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A DELETE FROM   statement can remove rows based on only a single condition on a table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. An INSERT INTO... VALUES    statement can add a single row based on multiple conditions on a table.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A DELETE FROM   statement can remove multiple rows based on multiple conditions on a table.',
        isCorrect: true,
      },
      {
        answerText:
          'F. An UPDATE   SET    statement can modify multiple rows based on only a single condition on a table.',
        isCorrect: false,
      },
    ],
    answer: 'B, E',
    help: 'Reference:\n' + 'http://www.techonthenet.com/sql/and_or.php',
  },
  {
    questionId: '5',
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
    help:
      'Reference:\n' +
      'http://docs.oracle.com/cd/E25054_01/network.1111/e16543/authorization.htm#autoId28',
  },
  {
    questionId: '6',
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
    help: '',
  },
  {
    questionId: '7',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following statement.\n' +
      '\n' +
      'INSERT ALL\n' +
      '  WHEN order_total < 10000 THEN\n' +
      '    INTO small_orders\n' +
      '  WHEN order_total > 10000 AND order_total < 20000 THEN\n' +
      '    INTO medium_orders\n' +
      '  WHEN order_total > 200000 AND order_total < 20000 THEN\n' +
      '    INTO large_orders\n' +
      'SELECT order_id, order_total, customer_id FROM orders;\n' +
      '\n' +
      'Which statement is true regarding the evaluation of rows returned by\n' +
      'the subquery in the INSERT statement?',
    answers: [
      {
        answerText:
          'A. They are evaluated by all the three WHEN clauses regardless of the results of the evaluation of any other WHEN clause.',
        isCorrect: true,
      },
      {
        answerText:
          'B. They are evaluated by the first WHEN clause. If the condition is true, then the row would be evaluated by the subsequent WHEN clauses.',
        isCorrect: false,
      },
      {
        answerText:
          'C. They are evaluated by the first WHEN clause. If the condition is false, then the row would be evaluated by the subsequent WHEN clauses.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The insert statement would give an error because the ELSE clause is not present for support in case none of WHEN clauses are true.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: 'Reference:\n' + 'http://psoug.org/definition/WHEN.htm',
  },
  {
    questionId: '8',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the MEMBERS table:\n' +
      '\n' +
      'Table MEMBERS\n' +
      'Name        Null?     Type\n' +
      '----------  --------  -----------\n' +
      'MEMBER_ID   NOT NULL  VARCHAR2(6)\n' +
      'FIRST_NAME            VARCHAR2(50)\n' +
      'LAST_NAME   NOT NULL  VARCHAR2(50)\n' +
      'ADDRESS               VARCHAR2(50)\n' +
      'CITY                  VARCHAR2(25)\n' +
      'STATE                 VARCHAR2(3)\n' +
      '\n' +
      'You want to display details of all members who reside in states starting with the letter A\n' +
      'followed by exactly one character. Which SQL statement must you execute?',
    answers: [
      {
        answerText: "A. SELECT * FROM MEMBERS WHERE state LIKE '%A_';",
        isCorrect: false,
      },
      {
        answerText: "B. SELECT * FROM MEMBERS WHERE state LIKE 'A_';",
        isCorrect: true,
      },
      {
        answerText: "C. SELECT * FROM MEMBERS WHERE state LIKE 'A_%';",
        isCorrect: false,
      },
      {
        answerText: "D. SELECT * FROM MEMBERS WHERE state LIKE 'A%';",
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '9',
    questionTypeId: 'SC',
    questionText:
      'You want to display 5 percent of the rows from the SALES table for products with the lowest\n' +
      'AMOUNT_SOLD and also want to include the rows that have the same \n' +
      'AMOUNT_SOLD even if this causes the output to exceed 5 percent of the rows.\n' +
      '\n' +
      'Which query will provide the required result?',
    answers: [
      {
        answerText:
          'A. SELECT prod_id, cust_id, amount_sold\n' +
          '   FROM sales\n' +
          '   ORDER BY amount_sold\n' +
          '   FETCH FIRST 5 PERCENT ROWS WITH TIES;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT prod_id, cust_id, amount_sold\n' +
          '   FROM sales\n' +
          '   ORDER BY amount_sold\n' +
          '   FETCH FIRST 5 PERCENT ROWS ONLY WITH TIES;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT prod_id, cust_id, amount_sold\n' +
          '   FROM sales\n' +
          '   ORDER BY amount_sold\n' +
          '   FETCH FIRST 5 PERCENT ROWS WITH TIES ONLY;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT prod_id, cust_id, amount_sold\n' +
          '   FROM sales\n' +
          '   ORDER BY amount_sold\n' +
          '   FETCH FIRST 5 PERCENT ROWS ONLY;',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '10',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the MEMBERS table:\n' +
      '\n' +
      'Name        Null?     Type\n' +
      '----------  --------  ------------\n' +
      'MEMBER_ID   NOT NULL  VARCHAR2(6)\n' +
      'FIRST_NAME            VARCHAR2(50)\n' +
      'LAST_NAME   NOT NULL  VARCHAR2(50)\n' +
      'ADDRESS               VARCHAR2(50)\n' +
      '\n' +
      'You execute the SQL statement:\n' +
      "SQL > SELECT member_id, '', first_name, '', last_name \"ID FIRSTNAME LASTNAME\" FROM members;\n" +
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
    questionId: '11',
    questionTypeId: 'MC',
    questionText:
      'You issue the following command to drop the PRODUCTS table:\n' +
      '\n' +
      'SQL> DROP TABLE products;\n' +
      '\n' +
      'Which three statements are true about the implication of this command? (Choose three.)',
    answers: [
      {
        answerText: 'A. All data along with the table structure is deleted.',
        isCorrect: true,
      },
      {
        answerText: 'B. A pending transaction in the session is committed.',
        isCorrect: true,
      },
      {
        answerText:
          'C. All indexes on the table remain but they are invalidated.',
        isCorrect: false,
      },
      {
        answerText:
          'D. All views and synonyms on the table remain but they are invalidated.',
        isCorrect: true,
      },
      {
        answerText:
          'E. All data in the table is deleted but the table structure remains.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, D',
    help: '',
  },
  {
    questionId: '12',
    questionTypeId: 'SC',
    questionText:
      'You execute the following commands:\n' +
      '\n' +
      "SQL> DEFINE hiredate = '01-APR-2011'\n" +
      '\n' +
      'SQL> SELECT employee_id, first_name, salary\n' +
      'FROM employees\n' +
      "WHERE hire_date > '&hiredate'\n" +
      'AND manager_id > &mgr_id;\n' +
      '\n' +
      'For which substitution variables are you prompted for the input?',
    answers: [
      {
        answerText: 'A. none, because no input required',
        isCorrect: false,
      },
      {
        answerText:
          "B. both the substitution variables ''hiredate' and 'mgr_id'.",
        isCorrect: false,
      },
      {
        answerText: "C. only hiredate'",
        isCorrect: false,
      },
      {
        answerText: "D. only 'mgr_id'",
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '13',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of ORDERS and ORDER_ITEMS tables.\n' +
      'ORDER_ID is the primary key in the ORDERS table.\n' +
      'It is also the foreign key in the ORDER_ITEMS table wherein it is created\n' +
      'with the ON DELETE CASCADE option.\n' +
      '\n' +
      'ORDER_ITEMS   ORDERS\n' +
      '\n' +
      'Which DELETE statement would execute successfully?',
    answers: [
      {
        answerText:
          'A. DELETE orders o, order_items i WHERE o.order_id = i.order_id;',
        isCorrect: false,
      },
      {
        answerText:
          'B. DELETE FROM orders WHERE (SELECT order_id FROM order_items);',
        isCorrect: false,
      },
      {
        answerText: 'C. DELETE orders WHERE order_total < 1000;',
        isCorrect: true,
      },
      {
        answerText: 'D. DELETE order_id FROM orders WHERE order_total < 1000;',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '14',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of CUSTOMERS table.\n' +
      'Using the CUSTOMERS table, you need to generate a report that shows an increase \n' +
      'in the credit limit by 15% for all customers.\n' +
      'Customers whose credit limit has not been entered should have the\n' +
      'message "Not Available" displayed.\n' +
      '\n' +
      'Which SQL statement would produce the required result?\n' +
      '\n' +
      'Table CUSTOMERS\n' +
      'Name                 Null?     Type \n' +
      '-------------------  --------  ------------\n' +
      'CUST_ID              NOT NULL  NUMBER\n' +
      'CUST_FIRST_NAME      NOT NULL  VARCHAR2(20)\n' +
      'CUST_LAST_NAME       NOT NULL  VARCHAR2(40)\n' +
      'CUST_GENDER          NOT NULL  CHAR(1)\n' +
      'CUST_YEAR_OF_BIRTH   NOT NULL  NUMBER(4)\n' +
      'CUST_MARITAL_STATUS            VARCHAR2(20)\n' +
      'CUST_STREET_ADDRESS  NOT NULL  VARCHAR2(40)\n' +
      'CUST_POSTAL_CODE     NOT NULL  VARCHAR2(10)\n' +
      'CUST_CITY            NOT NULL  VARCHAR2(30)\n' +
      'CUST_STATE_PROVINCE  NOT NULL  VARCHAR2(40)\n' +
      'COUNTRY_ID           NOT NULL  NUMBER\n' +
      'CUST_INCOME_LEVEL              VARCHAR2(30)\n' +
      'CUST_CREDIT_LIMIT              NUMBER\n' +
      'CUST_EMAIL                     VARCHAR2(30)',
    answers: [
      {
        answerText:
          'A. SELECT NVL (TO CHAR(cust_credit_limit * .15), \'Not Available\') "NEW CREDIT" FROM customers;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT TO_CHAR (NVL(cust_credit_limit * .15), \'Not Available\') "NEW CREDIT" FROM customers;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT NVL(cust_credit_limit * .15), \'Not Available\') "NEW CREDIT" FROM customers;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT NVL(cust_credit_limit), \'Not Available\') "NEW CREDIT" FROM customers;',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '15',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structures of the EMPLOYEES and DEPARTMENTS tables.\n' +
      '\n' +
      'Table EMPLOYEES\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME               VARCHAR2(20)\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\n' +
      'HIRE_DATE      NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'SALARY                   NUMBER(10,2)\n' +
      'COMMISSION               NUMBER(6,2)\n' +
      'MANAGER_ID               NUMBER(6)\n' +
      'DEPARTMENT_ID            NUMBER(4)\n' +
      '\n' +
      'Table DEPARTMENTS\n' +
      'Name             Null?     Type\n' +
      '---------------  --------  ------------\n' +
      'DEPARTMENT_ID    NOT NULL  NUMBER(4)\n' +
      'DEPARTMENT_NAME  NOT NULL  VARCHAR2(30)\n' +
      'MANAGER_ID                 NUMBER(6)\n' +
      'LOCATION_ID                NUMBER(4)\n' +
      '\n' +
      'You want to update EMPLOYEES table as follows:\n' +
      '- Update only those employees who work in Boston or Seattle (locations 2900 and 2700).\n' +
      '- Set department_id for these employees to the department_id corresponding to London\n' +
      '  (location_id 2100).\n' +
      "- Set the employees' salary in location_id 2100 to 1.1 times the average salary of their\n" +
      '  department.\n' +
      "- Set the employees' commission in location_id 2100 to 1.5 times the average commission of\n" +
      '  their department.\n' +
      '\n' +
      'You issue the following command: \n' +
      '\n' +
      'SQL> UPDATE employees\n' +
      '     SET department_id =\n' +
      '          (SELECT department_id\n' +
      '           FROM departments\n' +
      '           WHERE location_id = 2100),\n' +
      '        (salary, commission) =\n' +
      '          (SELECT 1.1*AVG(salary), 1.5*AVG(commission)\n' +
      '           FROM employees, departments\n' +
      '           WHERE departments.location_id IN(2900, 2700, 2100))\n' +
      '     WHERE department_id IN\n' +
      '       (SELECT department_id\n' +
      '        FROM departments\n' +
      '        WHERE location_id = 2900\n' +
      '        OR location_id = 2700);\n' +
      '\n' +
      'What is outcome?',
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
        answerText: 'C. It executes successfully and gives the desired update',
        isCorrect: false,
      },
      {
        answerText:
          'D. It executes successfully but does not give the desired update',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '16',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following two queries:\n' +
      '\n' +
      'SQL> SELECT cust_last_name, cust_city FROM customers\n' +
      'WHERE cust_credit_limit IN (1000, 2000, 3000);\n' +
      '\n' +
      'SQL> SELECT cust_last_name, cust_city FROM customers\n' +
      'WHERE cust_credit_limit = 1000 or cust_credit_limit = 2000 or cust_credit_limit = 3000\n' +
      '\n' +
      'Which statement is true regarding the above two queries?',
    answers: [
      {
        answerText:
          'A. Performance would improve in query 2 only if there are null values in the CUST_CREDIT_LIMIT column.',
        isCorrect: false,
      },
      {
        answerText: 'B. There would be no change in performance.',
        isCorrect: true,
      },
      {
        answerText: 'C. Performance would degrade in query 2.',
        isCorrect: false,
      },
      {
        answerText: 'D. Performance would improve in query 2.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '17',
    questionTypeId: 'MC',
    questionText:
      'Examine the business rule:\n' +
      '\n' +
      'Each student can work on multiple projects and each project can have multiple students.\n' +
      '\n' +
      'You must design an Entity Relationship (ER) model for optimal data storage and allow for\n' +
      'generating reports in this format:\n' +
      '\n' +
      'STUDENT_ID FIRST_NAME LAST_NAME PROJECT_ID PROJECT_NAME PROJECT_TASK\n' +
      '\n' +
      'Which two statements are true? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The ER must have a 1-to-many relationship between the STUDENTS and PROJECTS entities. ',
        isCorrect: false,
      },
      {
        answerText:
          'B. The ER must have a many-to-many relationship between the STUDENTS and PROJECTS entities that must be resolved into 1-to-many relationships.',
        isCorrect: true,
      },
      {
        answerText:
          'C. STUDENT_ID must be the primary key in the STUDENTS entity and foreign key in the PROJECTS entity.',
        isCorrect: false,
      },
      {
        answerText:
          'D. PROJECT_ID must be the primary key in the PROJECTS entity and foreign key in the STUDENTS entity.',
        isCorrect: false,
      },
      {
        answerText:
          'E. An associative table must be created with a composite key of STUDENT_ID and PROJECT_ID, which is the foreign key linked to the STUDENTS and PROJECTS entities.',
        isCorrect: true,
      },
    ],
    answer: 'B, E',
    help: '',
  },
  {
    questionId: '18',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the details of PRODUCT_INFORMATION table.\n' +
      'PRODUCT_NAME        CATEGORY_ID  SUPPLIER_ID\n' +
      '------------------  -----------  -----------\n' +
      'Inkjet C/8/HQ           12       102094\n' +
      'Inkjet C/4              12       102090\n' +
      'LaserPro 600/6/BW       12       102087\n' +
      'LaserPro 12OO/8/BW      12       102099\n' +
      'Inkjet B/6              11       102096\n' +
      'Industrial 700/ID       12       102086\n' +
      'Industrial 600/DQ       12       102088\n' +
      'Compact 400/LQ          12       102087\n' +
      'Compact 400/DQ          12       102088\n' +
      'HD 12GB/R               13       102090\n' +
      'HD 10GB/I               13       102071\n' +
      'HD 12GB@7200/SE         13       102057\n' +
      'HD 18.2GB@10000/E       13       102078\n' +
      'HD 18.2GB@10000/I       13       102050\n' +
      'HD 18GB/SE              13       102083\n' +
      'HD 6GB/I                13       102072\n' +
      'HD 8.2GB@5400           13       102093\n' +
      '\n' +
      'You have the requirement to display PRODUCT_NAME from the table where the CATEGORY_ID\n' +
      'column has values 12 or 13, and the SUPPLIER_ID column has the value 102088.\n' +
      'You executed the following SQL statement:\n' +
      '\n' +
      'SELECT product_name\n' +
      'FROM product_information\n' +
      'WHERE (category_id = 12 AND category_id = 13) AND supplier_id = 102088;\n' +
      '\n' +
      'Which statement is true regarding the execution of the query?',
    answers: [
      {
        answerText:
          'A. It would not execute because the same column has been used in both sides of the AND logical operator to form the condition.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It would not execute because the entire WHERE clause condition is not enclosed within the parentheses.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It would execute and the output would display the desired result.',
        isCorrect: false,
      },
      {
        answerText: 'D. It would execute but the output would return no rows.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '19',
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
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '20',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure of the STORES table.\n' +
      '\n' +
      'Table STORES\n' +
      'Name            Null?  Type\n' +
      '--------------  -----  ------\n' +
      'STORE_ID               NUMBER\n' +
      'NAME                   VARCHAR2(100)\n' +
      'ADDRESS                VARCHAR2(200)\n' +
      'CITY                   VARCHAR2(100)\n' +
      'COUNTRY                VARCHAR2(100)\n' +
      'START_DATE             DATE\n' +
      'END_DATE               DATE\n' +
      'PROPERTY_PRICE         NUMBER\n' +
      '\n' +
      'You must display the NAME of stores along with the ADDRESS, START_DATE,\n' +
      'PROPERTY_PRICE, and the projected property price, which is 115% of property price.\n' +
      '\n' +
      'The stores displayed must have START_DATE in the range of 36 months starting from\n' +
      '01-Jan-2000 and above. Which SQL statement would get the desired output? ',
    answers: [
      {
        answerText:
          "A. SELECT name, concat(address||', '||city||', ', country) AS full_address,\n" +
          '          start_date, property_price, property_price*115/100\n' +
          '   FROM stores\n' +
          "   WHERE MONTHS_BETWEEN (start_date, '01-JAN-2000') <= 36;",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT name, concat(address||', '||city||', ', country) AS full_address,\n" +
          '          start_date, property_price, property_price*115/100\n' +
          '   FROM stores\n' +
          "   WHERE TO_NUMBER(start_date - TO_DATE('01-JAN-2000','DD-MON-RRRR')) <= 36;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT name, address||', '||city||', '||country AS full_address,\n" +
          '          start_date, property_price, property_price*115/100\n' +
          '   FROM stores\n' +
          "   WHERE MONTHS_BETWEEN(start_date, TO_DATE('01-JAN-2000','DD-MON-RRRR')) <= 36;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT name, concat(address||', '||city||', ', country) AS full_address,\n" +
          '          start_date, property_price, property_price*115/100\n' +
          '   FROM stores\n' +
          "   WHERE MONTHS_BETWEEN(start_date, TO_DATE('01-JAN-2000','DD-MON-RRRR')) <= 36;",
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '21',
    questionTypeId: 'SC',
    questionText:
      'The BOOKS_TRANSACTIONS table exists in your database.\n' +
      '\n' +
      'SQL>SELECT * FROM books_transactions ORDER BY 3;\n' +
      '\n' +
      'What is the outcome on execution?',
    answers: [
      {
        answerText:
          'A. The execution fails unless the numeral 3 in the ORDER BY clause is replaced by a column name.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Rows are displayed in the order that they are stored in the table only for the three rows with the lowest values in the key column.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Rows are displayed in the order that they are stored in the table only for the first three rows.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Rows are displayed sorted in ascending order of the values in the third column in the table.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '22',
    questionTypeId: 'SC',
    questionText:
      'Examine the command:\n' +
      '\n' +
      'SQL> ALTER TABLE books_transactions\n' +
      'ADD CONSTRAINT fk_book_id FOREIGN KEY (book_id)\n' +
      'REFERENCES books (book_id) ON DELETE CASCADE;\n' +
      '\n' +
      'What does ON DELETE CASCADE imply?',
    answers: [
      {
        answerText:
          'A. When the BOOKS table is dropped, the BOOK_TRANSACTIONS table is dropped.',
        isCorrect: false,
      },
      {
        answerText:
          'B. When the BOOKS table is dropped, all the rows in the BOOK_TRANSACTIONS table are deleted but the table structure is retained.',
        isCorrect: false,
      },
      {
        answerText:
          'C. When a row in the BOOKS table is deleted, the rows in the BOOK_TRANSACTIONS table whose BOOK_ID matches that of the deleted row in the BOOKS table are also deleted.',
        isCorrect: true,
      },
      {
        answerText:
          'D. When a value in the BOOKS.BOOK_ID column is deleted, the corresponding value is updated in the BOOKS_TRANSACTIONS.BOOK_ID column.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '23',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure of the EMPLOYEES table.\n' +
      '\n' +
      'Table EMPLOYEES\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME               VARCHAR2(20)\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\n' +
      'EMAIL          NOT NULL  VARCHAR2(25)\n' +
      'PHONE_NUMBER             VARCHAR2(20)\n' +
      'HIRE_DATE      NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'SALARY                   NUMBER(10,2)\n' +
      'COMMISSION               NUMBER(6,2)\n' +
      'MANAGER_ID               NUMBER(6)\n' +
      'DEPARTMENT_ID            NUMBER(4)\n' +
      '\n' +
      'You want to display all employees and their managers having 100 as the MANAGER_ID.\n' +
      'You want the output in two columns: the first column would have the LAST_NAME of the\n' +
      'managers and the second column would have LAST_NAME of the employees.\n' +
      '\n' +
      'Which SQL statement would you execute?',
    answers: [
      {
        answerText:
          'A. SELECT m.last_name "Manager", e.last_name "Employee"\n' +
          '   FROM employees m JOIN employees e\n' +
          '   ON m.employee_id = e.manager_id\n' +
          '   WHERE m.manager_id = 100;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT m.last_name "Manager", e.last_name "Employee"\n' +
          '   FROM employees m JOIN employees e\n' +
          '   ON m.employee_id = e.manager_id\n' +
          '   WHERE e.manager_id = 100;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT m.last_name "Manager", e.last_name "Employee"\n' +
          '   FROM employees m JOIN employees e\n' +
          '   ON e.employee_id = m.manager_id\n' +
          '   WHERE m.manager_id = 100;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT m.last_name "Manager", e.last_name "Employee"\n' +
          '   FROM employees m JOIN employees e\n' +
          '   WHERE m.employee_id = e.manager_id AND e.manager_id = 100',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '24',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true about multiple-row subqueries?',
    answers: [
      {
        answerText: 'A. They can contain a subquery within a subquery.',
        isCorrect: true,
      },
      {
        answerText: 'B. They can return multiple columns as well as rows.',
        isCorrect: true,
      },
      {
        answerText: 'C. They cannot contain a subquery within a subquery.',
        isCorrect: false,
      },
      {
        answerText: 'D. They can return only one column but multiple rows.',
        isCorrect: false,
      },
      {
        answerText:
          'E. They can contain group functions and GROUP BY and HAVING clauses.',
        isCorrect: true,
      },
      {
        answerText:
          'F. They can contain group functions and the GROUP BY clause, but not the HAVING clause.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, E',
    help: '',
  },
  {
    questionId: '25',
    questionTypeId: 'SC',
    questionText:
      ' Examine the structure of the EMPLOYEES table.\n' +
      '\n' +
      'Table EMPLOYEES\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME               VARCHAR2(20)\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\n' +
      'EMAIL          NOT NULL  VARCHAR2(25)\n' +
      'PHONE_NUMBER             VARCHAR2(20)\n' +
      'HIRE_DATE      NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'SALARY                   NUMBER(10,2)\n' +
      'COMMISSION               NUMBER(6,2)\n' +
      'MANAGER_ID               NUMBER(6)\n' +
      'DEPARTMENT_ID            NUMBER(4)\n' +
      '\n' +
      'There is a parent/child relationship between EMPLOYEE_ID and MANAGER_ID.\n' +
      'You want to display the last names and manager IDs of employees who work\n' +
      'for the same manager as the employee whose EMPLOYEE_ID is 123.\n' +
      '\n' +
      'Which query provides the correct output?',
    answers: [
      {
        answerText:
          'A. SELECT e.last_name, m.manager_id\n' +
          '   FROM employees e RIGHT OUTER JOIN employees m\n' +
          '   ON (e.manager_id = m.employee_id)\n' +
          '   AND e.employee_id = 123;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT e.last_name, m.manager_id\n' +
          '   FROM employees e LEFT OUTER JOIN employees m\n' +
          '   ON (e.employee_id = m.manager_id)\n' +
          '   WHERE e.employee_id = 123;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT e.last_name, e.manager_id\n' +
          '   FROM employees e RIGHT OUTER JOIN employees m\n' +
          '   ON (e.employee_id = m.employee_id)\n' +
          '   WHERE e.employee_id = 123;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT m.last_name, e.manager_id\n' +
          '   FROM employees e LEFT OUTER JOIN employees m\n' +
          '   ON (e.manager_id = m.manager_id)\n' +
          '   WHERE e.employee_id = 123;',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '26',
    questionTypeId: 'SC',
    questionText:
      'Which normal form is a table in if it has no multi-valued attributes and no partial dependencies?',
    answers: [
      {
        answerText: 'A. second normal form',
        isCorrect: true,
      },
      {
        answerText: 'B. first normal form',
        isCorrect: false,
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
    answer: 'A',
    help: '',
  },
  {
    questionId: '27',
    questionTypeId: 'SC',
    questionText:
      'Sales data of a company is stored in two tables, SALES1 and SALES2,\n' +
      'with some data being duplicated across the tables.\n' +
      'You want to display the results from the SALES1 table,\n' +
      'which are not present in the SALES2 table. \n' +
      '\n' +
      'Table SALES1\n' +
      'Name        Null?  Type\n' +
      '----------  -----  ------\n' +
      'SALES_ID           NUMBER\n' +
      'STORE_ID           NUMBER\n' +
      'ITEMS_ID           NUMBER\n' +
      'QUANTITY           NUMBER\n' +
      'SALES_DATE         DATE\n' +
      '\n' +
      'Table SALES2\n' +
      'Name        Null?  Type\n' +
      '----------  -----  ------\n' +
      'SALES_ID           NUMBER\n' +
      'STORE_ID           NUMBER\n' +
      'ITEMS_ID           NUMBER\n' +
      'QUANTITY           NUMBER\n' +
      'SALES_DATE         DATE\n' +
      '\n' +
      'Which set operator generates the required output?',
    answers: [
      {
        answerText: 'A. INTERSECT',
        isCorrect: false,
      },
      {
        answerText: 'B. UNION',
        isCorrect: false,
      },
      {
        answerText: 'C. PLUS',
        isCorrect: false,
      },
      {
        answerText: 'D. MINUS',
        isCorrect: true,
      },
      {
        answerText: 'E. SUBTRACT',
        isCorrect: false,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '28',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following ALTER TABLE statement:\n' +
      '\n' +
      'ALTER TABLE orders\n' +
      'SET UNUSED (order_date);\n' +
      '\n' +
      'Which statement is true?',
    answers: [
      {
        answerText:
          'A. After executing the ALTER TABLE command, you can add a new column called ORDER_DATE to the ORDERS table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The ORDER_DATE column must be empty for the ALTER TABLE command to execute successfully.',
        isCorrect: false,
      },
      {
        answerText:
          'C. ROLLBACK can be used to get back the ORDER_DATE column in the ORDERS table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The DESCRIBE command would still display the ORDER_DATE column.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '29',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following SQL statements that are issued in the given order:\n' +
      '\n' +
      'CREATE TABLE emp(\n' +
      '  emp_no NUMBER(2) CONSTRAINT emp_emp_no_pk PRIMARY KEY,\n' +
      '  ename  VARCHAR2(15),\n' +
      '  salary NUMBER(8,2),\n' +
      '  mgr_no NUMBER(2) CONSTRAINT emp_mgr_fk REFERENCES emp(emp_no));\n' +
      '\n' +
      'ALTER TABLE emp\n' +
      'DISABLE CONSTRAINT emp_emp_no_pk CASCADE;\n' +
      '\n' +
      'ALTER TABLE emp\n' +
      'ENABLE CONSTRAINT emp_emp_no_pk;\n' +
      '\n' +
      'What would be the status of the foreign key EMP_MGR_PK?',
    answers: [
      {
        answerText:
          'A. It would remain disabled and can be enabled only by dropping the foreign key constraint and recreating it.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It would remain disabled and has to be enabled manually using the ALTER TABLE command.',
        isCorrect: true,
      },
      {
        answerText: 'C. It would be automatically enabled and immediate.',
        isCorrect: false,
      },
      {
        answerText: 'D. It would be automatically enabled and deferred.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '30',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding the data types? (Choose three.)',
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
    answer: 'A, B, E',
    help: '',
  },
  {
    questionId: '31',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding subqueries? (Choose three.)',
    answers: [
      {
        answerText:
          'A. Multiple columns or expressions can be compared between the main query and subquery.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Subqueries can contain ORDER BY but not the GROUP BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Main query and subquery can get data from different tables.',
        isCorrect: true,
      },
      {
        answerText: 'D. Subqueries can contain GROUP BY and ORDER BY clauses.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Main query and subquery must get data from the same tables.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Only one column or expression can be compared between the main query and subquery.',
        isCorrect: false,
      },
    ],
    answer: 'A, C, D',
    help: '',
  },
  // Fehlt die Frage Nr. 32
  {
    questionId: '33',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the MEMBERS table.\n' +
      '\n' +
      'Table MEMBERS\n' +
      'Name        Null?     Type\n' +
      '----------  --------  -----------\n' +
      'MEMBER_ID   NOT NULL  VARCHAR2(6)\n' +
      'FIRST_NAME            VARCHAR2(50)\n' +
      'LAST_NAME   NOT NULL  VARCHAR2(50)\n' +
      'ADDRESS               VARCHAR2(50)\n' +
      'CITY                  VARCHAR2(25)\n' +
      'STATE                 VARCHAR2(3)\n' +
      '\n' +
      'Which query can be used to display the last names and city names only for members from\n' +
      'the states MO and MI?',
    answers: [
      {
        answerText:
          "A. SELECT last_name, city FROM members WHERE state ='MO' AND state ='MI';",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT last_name, city FROM members WHERE state LIKE 'M%';",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT last_name, city FROM members WHERE state IN ('MO', 'MI');",
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT DISTINCT last_name, city FROM members WHERE state ='MO' OR state ='MI';",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '34',
    questionTypeId: 'SC',
    questionText:
      "Which statement is true about an inner join specified in a query's WHERE clause?",
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
    help: '',
  },
  {
    questionId: '35',
    questionTypeId: 'SC',
    questionText:
      'Which task can be performed by using a single Data Manipulation Language (DML) statement?',
    answers: [
      {
        answerText:
          'A. adding a column constraint while inserting a row into a table',
        isCorrect: false,
      },
      {
        answerText:
          'B. adding a column with a default value while inserting a row into a table',
        isCorrect: false,
      },
      {
        answerText:
          'C. removing all data only from a single column on which a unique constraint is defined',
        isCorrect: true,
      },
      {
        answerText:
          'D. removing all data only from a single column on which a primary key constraint is defined',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '36',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the BOOKS_TRANSACTIONS table:\n' +
      '\n' +
      'Table BOOKS_TRANSACTIONS\n' +
      'Name            Null?     Type\n' +
      '--------------  --------  -----------\n' +
      'TRANSACTION_ID  NOT NULL  VARCHAR2(6)\n' +
      'BORROWED_DATE             DATE\n' +
      'DUE_DATE                  DATE\n' +
      'BOOK_ID                   VARCHAR2(6)\n' +
      'MEMBER_ID                 VARCHAR2(6)\n' +
      '\n' +
      'You want to display the member IDs, due date, and late fee as $2 for all transactions.\n' +
      'Which SQL statement must you execute?',
    answers: [
      {
        answerText:
          'A. SELECT member_id AS MEMBER_ID, due_date AS DUE_DATE, $2 AS LATE_FEE FROM BOOKS_TRANSACTIONS;',
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT member_id 'MEMBER ID', due_date 'DUE DATE', '$2 AS LATE FEE' FROM BOOKS_TRANSACTIONS;",
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT member_id AS "MEMBER ID", due_date AS "DUE DATE", \'$2\' AS "LATE FEE" FROM BOOKS_TRANSACTIONS;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT member_id AS "MEMBER ID", due_date AS "DUE DATE", $2 AS "LATE FEE" FROM BOOKS_TRANSACTIONS;',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '37',
    questionTypeId: 'MC',
    questionText: 'In which three situations does a transaction complete?',
    answers: [
      {
        answerText: 'A. when a PL/SQL anonymous block is executed',
        isCorrect: false,
      },
      {
        answerText: 'B. when a DELETE statement is executed',
        isCorrect: false,
      },
      {
        answerText: 'C. when a ROLLBACK command is executed',
        isCorrect: true,
      },
      {
        answerText:
          'D. when a data definition language (DDL) statement is executed',
        isCorrect: true,
      },
      {
        answerText:
          'E. when a TRUNCATE statement is executed after the pending transaction',
        isCorrect: true,
      },
    ],
    answer: 'C, D, E',
    help: '',
  },
  {
    questionId: '38',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the data in ORDERS_MASTER and MONTHLY_ORDERS tables.\n' +
      '\n' +
      'ORDERS_MASTER\n' +
      'ORDER_ID  ORDER_TOTAL\n' +
      '       1         1000\n' +
      '       2         2000\n' +
      '       3         3000\n' +
      '       4\n' +
      '\n' +
      'MONTHLY_ORDERS     \n' +
      'ORDER_ID  ORDER_TOTAL\n' +
      '       2         2500\n' +
      '       3\n' +
      '\n' +
      'Evaluate the following MERGE statement:\n' +
      '\n' +
      'MERGE_INTO orders_master o\n' +
      'USING monthly_orders m\n' +
      'ON (o.order_id = m.order_id)\n' +
      'WHEN MATCHED THEN\n' +
      'UPDATE SET o.order_total = m.order_total\n' +
      'DELETE WHERE (m.order_total IS NULL)\n' +
      'WHEN NOT MATCHED THEN\n' +
      'INSERT VALUES (m.order_id, m.order_total)\n' +
      '\n' +
      'What would be the outcome of the above statement?',
    answers: [
      {
        answerText:
          'A. The ORDERS_MASTER table would contain the ORDER_IDs 1, 2, 3 and 4.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The ORDERS_MASTER table would contain the ORDER_IDs 1, 2 and 4.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The ORDERS_MASTER table would contain the ORDER_IDs 1, 2 and 3.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The ORDERS_MASTER table would contain the ORDER_IDs 1 and 2.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '39',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following SQL statement:\n' +
      '\n' +
      "SELECT product_name || 'it's not available for order'\n" +
      'FROM product_information\n' +
      "WHERE product_status = 'obsolete';\n" +
      '\n' +
      'You received the following error while executing the above query:\n' +
      'ERROR\n' +
      'ORA-01756: quoted string not properly terminated\n' +
      '\n' +
      'What would you do to execute the query successfully?',
    answers: [
      {
        answerText:
          'A. Remove the single quotation marks enclosing the character literal string in the SELECT clause',
        isCorrect: false,
      },
      {
        answerText:
          'B. Use the escape character to negate the single quotation mark within the literal character string in the SELECT clause',
        isCorrect: false,
      },
      {
        answerText:
          'C. Enclose the character literal string in the SELECT clause within double quotation marks',
        isCorrect: false,
      },
      {
        answerText:
          'D. Use the Oracle (q) operator and delimiter to allow the use of a single quotation mark within the literal character string in the SELECT clause',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '40',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the ORDERS table.\n' +
      '\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(4)\n' +
      'ORDER_DATE             DATE\n' +
      'CUSTOMER_ID            NUMBER(3)\n' +
      'ORDER_TOTAL            NUMBER(7,2)\n' +
      '\n' +
      'The ORDERS table contains data and all orders have been assigned a customer ID.\n' +
      'Which statement would add a NOT NULL constraint to the CUSTOMER_ID column?',
    answers: [
      {
        answerText:
          'A. ALTER TABLE orders MODIFY CONSTRAINT orders_cust_id_nn NOT NULL (customer_id);',
        isCorrect: false,
      },
      {
        answerText:
          'B. ALTER TABLE orders ADD CONSTRAINT orders_cust_id_nn NOT NULL (customer_id);',
        isCorrect: false,
      },
      {
        answerText:
          'C. ALTER TABLE orders MODIFY customer_id CONSTRAINT orders_cust_nn NOT NULL (customer_id);',
        isCorrect: true,
      },
      {
        answerText:
          'D. ALTER TABLE orders ADD customer_id NUMBER(6)CONSTRAINT orders_cust_id_nn NOT NULL;',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '41',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure of the INVOICE table.\n' +
      '\n' +
      'Table INVOICE\n' +
      'Name      Null?     Type\n' +
      '--------  --------  ------------\n' +
      'INV_NO    NOT NULL  NUMBER(3)\n' +
      'INV_DATE            DATE\n' +
      'INV_AMT             NUMBER(10,2)\n' +
      '\n' +
      'Which two SQL statements would execute successfully?',
    answers: [
      {
        answerText:
          "A. SELECT inv_no, NVL2(inv_date, 'Pending', 'Incomplete') FROM invoice;",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT inv_no, NVL2(inv_amt, inv_date, 'Not Available') FROM invoice;",
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT inv_no, NVL2(inv_date, sysdate-inv_date, sysdate) FROM invoice;',
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT inv_no, NVL2(inv_amt, inv_amt*.25, 'Not Available') FROM invoice;",
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '42',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true about the ALTER TABLE...DROP COLUMN  command?',
    answers: [
      {
        answerText:
          'A. A column can be dropped only if it does not contain any data.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A column can be dropped only if another column exists in the table.',
        isCorrect: true,
      },
      {
        answerText: 'C. A dropped column can be rolled back.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The column in a composite PRIMARY KEY with the CASCADE option can be dropped.',
        isCorrect: true,
      },
      {
        answerText: 'E. A parent key column in the table cannot be dropped.',
        isCorrect: true,
      },
    ],
    answer: 'B, D, E',
    help: '',
  },
  {
    questionId: '43',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the description of the PRODUCT_INFORMATION table.\n' +
      '\n' +
      'Table PRODUCT_INFORMATION\n' +
      'Name                 Null?     Type\n' +
      '-------------------  --------  --------------\n' +
      'PRODUCT_ID           NOT NULL  NUMBER(6)\n' +
      'PRODUCT_NAME                   VARCHAR2(50)\n' +
      'PRODUCT_DESCRIPTION            VARCHAR2(2000)\n' +
      'CATEGORY_ID                    NUMBER(2)\n' +
      'WEIGHT_CLASS                   NUMBER(1)\n' +
      'WARRANTY_PERIOD                INTERVALYEAR(2)\n' +
      '                               TOMONTH\n' +
      'SUPLIER_ID                     NUMBER(6)\n' +
      'PRODUCT_STATUS                 VARCHAR2(20)\n' +
      'LIST_PRICE                     NUMBER(8,2)\n' +
      'MIN_PRICE                      NUMBER(8,2)\n' +
      'CATALOG_URL                    VARCHAR2(50)\n' +
      '\n' +
      'Which SQL statement would retrieve from the table the number of products\n' +
      'having LIST_PRICE as NULL?',
    answers: [
      {
        answerText:
          'A. SELECT COUNT (DISTINCT list_price)\n' +
          '   FROM product_information\n' +
          '   WHERE list_price is NULL',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT COUNT (NVL(list_price, 0))\n' +
          '   FROM product_information\n' +
          '   WHERE list_price is NULL',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT COUNT (list_price)\n' +
          '   FROM product_information\n' +
          '   WHERE list_price i= NULL',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT COUNT (list_price)\n' +
          '   FROM product_information\n' +
          '   WHERE list_price is NULL',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '44',
    questionTypeId: 'MC',
    questionText:
      'Which three tasks can be performed using SQL functions built into Oracle Database?',
    answers: [
      {
        answerText: 'A. displaying a date in a nondefault format',
        isCorrect: true,
      },
      {
        answerText: 'B. finding the number of characters in an expression',
        isCorrect: true,
      },
      {
        answerText:
          'C. substituting a character string in a text expression with a specified string',
        isCorrect: true,
      },
      {
        answerText:
          'D. combining more than two columns or expressions into a single column in the output',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C',
    help: '',
  },
  {
    questionId: '45',
    questionTypeId: 'SC',
    questionText:
      'The user SCOTT who is the owner of ORDERS and ORDER_ITEMS tables issues this GRANT command:\n' +
      '\n' +
      'GRANT ALL\n' +
      'ON orders, order_items\n' +
      'TO PUBLIC;\n' +
      '\n' +
      'What must be done to fix the statement?',
    answers: [
      {
        answerText: 'A. PUBLIC should be replaced with specific usernames.',
        isCorrect: false,
      },
      {
        answerText:
          'B. ALL should be replaced with a list of specific privileges.',
        isCorrect: false,
      },
      {
        answerText: 'C. WITH GRANT OPTION should be added to the statement.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Separate GRANT statements are required for the ORDERS and ORDER_ITEMS tables.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '46',
    questionTypeId: 'MC',
    questionText:
      'You are designing the structure of a table in which two columns have the specifications:\n' +
      '\n' +
      'COMPONENT_ID - must be able to contain a maximum of 12 alphanumeric characters and must\n' +
      'uniquely identify the row\n' +
      '\n' +
      'EXECUTION_DATETIME - contains Century, Year, Month, Day, Hour, Minute, Second to the\n' +
      'maximum precision and is used for calculations and comparisons between components.\n' +
      '\n' +
      'Which two options define the data types that satisfy these requirements most efficiently?\n' +
      '(Choose two.)',
    answers: [
      {
        answerText:
          'A. The EXECUTION_DATETIME must be of INTERVAL DAY TO SECOND data type.',
        isCorrect: false,
      },
      {
        answerText: 'B. The EXECUTION_DATETIME must be of TIMESTAMP data type.',
        isCorrect: false,
      },
      {
        answerText: 'C. The EXECUTION_DATETIME must be of DATE data type.',
        isCorrect: true,
      },
      {
        answerText: 'D. The COMPONENT_ID must be of ROWID data type.',
        isCorrect: false,
      },
      {
        answerText: 'E. The COMPONENT_ID must be of VARCHAR2 data type.',
        isCorrect: false,
      },
      {
        answerText: 'F. The COMPONENT_ID column must be of CHAR data type.',
        isCorrect: true,
      },
    ],
    answer: 'C, F',
    help: '',
  },
  {
    questionId: '47',
    questionTypeId: 'SC',
    questionText:
      'You want to display the date for the first Monday of the next month and issue the\n' +
      'following command:\n' +
      '\n' +
      "SQL> SELECT TO_CHAR(NEXT_DAY(LAST_DAY(SYSDATE),'MON'),\n" +
      '\'dd "is the first Monday for" fmmonth rrrr\')\n' +
      'FROM DUAL;\n' +
      '\n' +
      'What is the outcome?',
    answers: [
      {
        answerText:
          'A. In generates an error because rrrr should be replaced by rr in the format string.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It executes successfully but does not return the correct result.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It executes successfully and returns the correct result.',
        isCorrect: true,
      },
      {
        answerText:
          'D. In generates an error because TO_CHAR should be replaced with TO_DATE.',
        isCorrect: false,
      },
      {
        answerText:
          'E. In generates an error because fm and double quotation marks should not be used in the format string.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '48',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the GROUP BY clause in a SQL statement? (Choose two.)',
    answers: [
      {
        answerText: 'A. You can use column alias in the GROUP BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Using the WHERE clause after the GROUP BY clause excludes the rows after creating groups.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The GROUP BY clause is mandatory if you are using an aggregate function in the SELECT clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Using the WHERE clause before the GROUP BY clause excludes the rows before creating groups.',
        isCorrect: true,
      },
      {
        answerText:
          'E. If the SELECT clause has an aggregate function, then those individual columns without an aggregate function in the SELECT clause should be included in the GROUP BY cause.',
        isCorrect: true,
      },
    ],
    answer: 'D, E',
    help: '',
  },
  {
    questionId: '49',
    questionTypeId: 'SC',
    questionText:
      'Examine the commands used to create DEPARTMENT_DETAILS and COURSE_DETAILS tables:\n' +
      '\n' +
      'SQL> CREATE TABLE DEPARTMENT_DETAILS\n' +
      '(DEPARTMENT_ID  NUMBER PRIMARY KEY,\n' +
      'DEPARTMENT_NAME VARCHAR2(50),\n' +
      'HOD             VARCHAR2(50));\n' +
      '\n' +
      'SQL> CREATE TABLE COURSE_DETAILS\n' +
      '(COURSE_ID     NUMBER PRIMARY KEY,\n' +
      'C0URSE_NAME    VARCHAR2(50) ,\n' +
      'DEPARTMENT_ID  VARCHAR2(50));\n' +
      'DEPARTMENT_ID  NUMBER REFERENCIES DEPARTMENT_DETAILS(DEPARTMENT_ID));\n' +
      '\n' +
      'You want to generate a list of all department IDs along with any course IDs\n' +
      'that may have been assigned to them. Which SQL statement must you use?',
    answers: [
      {
        answerText:
          'A. SELECT d.department_id, c.course_id FROM department_details d RIGHT OUTER JOIN course_details c ON (d.department_id=c.department_id);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT d.department_id, c.course_id FROM department_details d LEFT OUTER JOIN course_details c ON (d.department_id=c.department_id);',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT d.department_id, c.course_id FROM course_details c LEFT OUTER JOIN department_details d ON (c.department_id=d.department_id);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT d.department_id, c.course_id FROM department_details d RIGHT OUTER JOIN course_details c ON (c.department_id=d.department_id);',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '50',
    questionTypeId: 'MC',
    questionText:
      'Which two tasks can be performed by using Oracle SQL statements? (Choose two.)',
    answers: [
      {
        answerText: 'A. changing the password for an existing database user',
        isCorrect: true,
      },
      {
        answerText: 'B. connecting to a database instance',
        isCorrect: false,
      },
      {
        answerText: 'C. querying data from tables in different databases',
        isCorrect: true,
      },
      {
        answerText: 'D. starting up a database instance',
        isCorrect: false,
      },
      {
        answerText: 'E. executing operating system (OS) commands in a session',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '51',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit for the structure of the STUDENT and FACULTY tables.\n' +
      '\n' +
      'Table STUDENT\n' +
      'Name          Null?     Type\n' +
      '------------  --------  ------------\n' +
      'STUDENT_ID    NOT NULL  NUMBER(2)\n' +
      'STUDENT_NAME            VARCHAR2(20)\n' +
      'FACULTY_ID              VARCHAR2(2)\n' +
      'LOCATION_ID             NUMBER(2)\n' +
      '\n' +
      'Table FACULTY\n' +
      'Name          Null?     Type\n' +
      '------------  --------  -----------\n' +
      'FACULTY_ID    NOT NULL  NUMBER(2)\n' +
      'FACULTY_NAME            VARCHAR2(20)\n' +
      'LOCATION_ID             NUMBER(2)\n' +
      '\n' +
      'You need to display the faculty name followed by the number of students handled\n' +
      'by the faculty at the base location.\n' +
      'Examine the following two SQL statements:\n' +
      '\n' +
      'Statement 1\n' +
      'SQL>SELECT faculty_name, COUNT(student_id)\n' +
      'FROM student JOIN faculty\n' +
      'USING (faculty_id, location_id)\n' +
      'GROUP BY faculty_name;\n' +
      '\n' +
      'Statement 2\n' +
      'SQL>SELECT faculty_name, COUNT(student_id)\n' +
      'FROM student NATURAL JOIN faculty\n' +
      'GROUP BY faculty_name;\n' +
      '\n' +
      'Which statement is true regarding the outcome?',
    answers: [
      {
        answerText:
          'A. Only statement 2 executes successfully and gives the required result.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Only statement 1 executes successfully and gives the required result.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Both statements 1 and 2 execute successfully and give different results.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Both statements 1 and 2 execute successfully and give the same required result.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '52',
    questionTypeId: 'SC',
    questionText: 'Which statement correctly grants a system privilege?',
    answers: [
      {
        answerText: 'A. GRANT CREATE VIEW ON table1 TO user1;',
        isCorrect: false,
      },
      {
        answerText: 'B. GRANT ALTER TABLE TO PUBLIC;',
        isCorrect: false,
      },
      {
        answerText: 'C. GRANT CREATE TABLE TO user1, user2;',
        isCorrect: true,
      },
      {
        answerText: 'D. GRANT CREATE SESSION TO ALL;',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '53',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure of ORDERS and CUSTOMERS tables.\n' +
      '\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(4)\n' +
      'ORDER_DATE             DATE\n' +
      'ORDER_MODE             VARCHAR2(8)\n' +
      'CUSTOMER_ID  NOT NULL  NUMBER(3)\n' +
      'ORDER_TOTAL            NUMBER(7,2)\n' +
      '\n' +
      'Table CUSTOMERS\n' +
      'Name                 Null?     Type \n' +
      '-------------------  --------  ------------\n' +
      'CUST_ID              NOT NULL  NUMBER(6)\n' +
      'CUST_FIRST_NAME      NOT NULL  VARCHAR2(20)\n' +
      'CUST_LAST_NAME       NOT NULL  VARCHAR2(20)\n' +
      'CUST_ADDRESS                   VARCHAR2(40)\n' +
      'CREDIT_LIMIT                   NUMBER(9,2)\n' +
      '\n' +
      'Which INSERT statement should be used to add a row into the ORDERS table for the customer\n' +
      'whose CUST_LAST_NAME is Roberts and CREDIT_LIMIT is 600? Assume there exists only one row\n' +
      'with CUST_LAST_NAME as Roberts and CREDIT_LIMIT as 600.',
    answers: [
      {
        answerText:
          'A. INSERT INTO (\n' +
          '     SELECT o.order_id, o.order_date, o.order_mode, c.customer_id, o.order_total\n' +
          '     FROM orders o, customers c\n' +
          "     WHERE o.customer_id = c.customer_id AND c.cust_last_name='Roberts' AND c.credit_limit=600)\n" +
          "   VALUES (1, '10-mar-2007', 'direct', (SELECT customer_id FROM customers\n" +
          "     WHERE cust_last_name='Roberts' AND credit_limit=600.) , 1000);",
        isCorrect: false,
      },
      {
        answerText:
          'B. INSERT INTO orders (order_id, order_date, order_mode, \n' +
          '     (SELECT customer_id FROM customers\n' +
          "      WHERE cust_last_name='Roberts' AND credit_limit=600), order_total)\n" +
          "   VALUES (1, '10-mar-2007', 'direct', &customer_id, 1000);",
        isCorrect: false,
      },
      {
        answerText:
          'C. INSERT INTO orders\n' +
          "   VALUES (1, '10—mar—2007', 'direct',\n" +
          '   (SELECT customer_id FROM customers\n' +
          "   WHERE cust_last_name='Roberts' AND credit_limit=600), 1000);",
        isCorrect: true,
      },
      {
        answerText:
          'D. INSERT INTO orders (order_id, prder_date, order_mode,\n' +
          '     (SELECT customer_id FROM customers\n' +
          "      WHERE cust_last_name='Roberts' AND credit_limit=600), order_total)\n" +
          "   VALUES (1, '10-mar-2007', 'direct', &&customer_id, 1000);",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '54',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are correct regarding indexes? (Choose three.)',
    answers: [
      {
        answerText:
          'A. A non-deferrable PRIMARY KEY or UNIQUE KEY constraint in a table automatically attempts to create a unique index.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Indexes should be created on columns that are frequently referenced as part of any expression.',
        isCorrect: false,
      },
      {
        answerText:
          'C. When a table is dropped, corresponding indexes are automatically dropped.',
        isCorrect: true,
      },
      {
        answerText:
          'D. For each DML operation performed on a table, the corresponding indexes are automatically updated if required.',
        isCorrect: true,
      },
    ],
    answer: 'A, C, D',
    help: '',
  },
  {
    questionId: '55',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the description of the DEPARTMENTS and EMPLOYEES tables.\n' +
      '\n' +
      'Table DEPARTMENTS\n' +
      'Name             Null?     Type\n' +
      '---------------  --------  ------------\n' +
      'DEPARTMENT_ID    NOT NULL  NUMBER(4)\n' +
      'DEPARTMENT_NAME  NOT NULL  VARCHAR2(30)\n' +
      'MANAGER_ID                 NUMBER(6)\n' +
      'LOCATION_ID                NUMBER(4)\n' +
      '\n' +
      'Table EMPLOYEES\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME               VARCHAR2(20)\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\n' +
      'EMAIL          NOT NULL  VARCHAR2(25)\n' +
      'PHONE_NUMBER             VARCHAR2(20)\n' +
      'HIRE_DATE      NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'SALARY                   NUMBER(10,2)\n' +
      'COMMISSION               NUMBER(6,2)\n' +
      'MANAGER_ID               NUMBER(6)\n' +
      'DEPARTMENT_ID            NUMBER(4)\n' +
      '\n' +
      'You wrote this SQL statement to retrieve EMPLOYEE_ID, FIRST_NAME, and DEPARTMENT NAME,\n' +
      'for all employees:\n' +
      '\n' +
      'SELECT employee_id, first_name, department_name\n' +
      'FROM employees\n' +
      'NATURAL JOIN departments;\n' +
      '\n' +
      'The desired output is not obtained after executing the above SQL statement.\n' +
      'What could be the reason for this?',
    answers: [
      {
        answerText:
          'A. The table prefix is missing for the column names in the SELECT clause.',
        isCorrect: false,
      },
      {
        answerText: 'B. The NATURAL JOIN clause is missing the USING clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The DEPARTMENTS table is not used before the EMPLOYEES table in the FROM clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The EMPLOYEES and DEPARTMENTS tables have more than one column with the same column name and data type.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      'Natural join needs only one column to be the same in each table.\n' +
      'The EMPLOYEES and DEPARTMENTS tables have two columns that are the same (Department_ID and Manager_ID)',
  },
  {
    questionId: '56',
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
          'B. DELETE <sequencename> would remove a sequence from the database.',
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
    answer: 'A, D',
    help: '',
  },
  {
    questionId: '57',
    questionTypeId: 'MC',
    questionText:
      'View the exhibit and examine the structure of the CUSTOMERS table.\n' +
      '\n' +
      'Table CUSTOMERS\n' +
      'Name                 Null?     Type \n' +
      '-------------------  --------  ------------\n' +
      'CUST_ID              NOT NULL  NUMBER\n' +
      'CUST_FIRST_NAME      NOT NULL  VARCHAR2(20)\n' +
      'CUST_LAST_NAME       NOT NULL  VARCHAR2(40)\n' +
      'CUST_GENDER          NOT NULL  CHAR(1)\n' +
      'CUST_YEAR_OF_BIRTH   NOT NULL  NUMBER(4)\n' +
      'CUST_MARITAL_STATUS            VARCHAR2(20)\n' +
      'CUST_STREET_ADDRESS  NOT NULL  VARCHAR2(40)\n' +
      'CUST_POSTAL_CODE     NOT NULL  VARCHAR2(10)\n' +
      'CUST_CITY            NOT NULL  VARCHAR2(30)\n' +
      'CUST_STATE_PROVINCE  NOT NULL  VARCHAR2(40)\n' +
      'COUNTRY_ID           NOT NULL  NUMBER\n' +
      'CUST_INCOME_LEVEL              VARCHAR2(30)\n' +
      'CUST_CREDIT_LIMIT              NUMBER\n' +
      'CUST_EMAIL                     VARCHAR2(30)' +
      '\n' +
      'Which two tasks would require subqueries or joins to be executed in a single statement?',
    answers: [
      {
        answerText:
          'A. finding the number of customers, in each city, whose credit limit is more than the average credit limit of all the customers',
        isCorrect: true,
      },
      {
        answerText:
          "B. finding the average credit limit of male customers residing in 'Tokyo' or 'Sydney'",
        isCorrect: false,
      },
      {
        answerText:
          'C. listing of customers who do not have a credit limit and were born before 1980',
        isCorrect: false,
      },
      {
        answerText:
          "D. finding the number of customers, in each city, whose marital status is 'married'",
        isCorrect: false,
      },
      {
        answerText:
          "E. listing of those customers, whose credit limit is the same as the credit limit of customers residing in the city 'Tokyo'.",
        isCorrect: true,
      },
    ],
    answer: 'A, E',
    help: '',
  },
  {
    questionId: '58',
    questionTypeId: 'SC',
    questionText: 'Which statement is true about transactions?',
    answers: [
      {
        answerText:
          'A. A set of Data Manipulation Language (DML) statements executed in a sequence ending with a SAVEPOINT forms a single transaction.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Each Data Definition Language (DDL) statement executed forms a single transaction.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A set of DDL statements executed in a sequence ending with a COMMIT forms a single transaction.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A combination of DDL and DML statements executed in a sequence ending with a COMMIT forms a single transaction.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '59',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure in ORDERS and ORDER_ITEMS tables.\n' +
      '\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(4)\n' +
      'ORDER_DATE   NOT NULL  TIMISTAM(6)\n' +
      '                       WTHLOCALTIMEZONE\n' +
      'ORDER_MODE             VARCHAR2(8)\n' +
      'CUSTOMER_ID  NOT NULL  NUMBER(6)\n' +
      'ORDER_TOTAL            NUMBER(7,2)\n' +
      'SALES_REP_ID           NUMBER(6)\n' +
      'PROMOTION_ID           NUMBER(6)\n' +
      '\n' +
      'Table ORDER_ITEMS\n' +
      'Name          Null?     Type\n' +
      '------------  --------  -----------\n' +
      'ORDER_ID      NOT NULL  NUMBER(12)\n' +
      'LINE_ITEM_ID  NOT NULL  NUMBER(3)\n' +
      'PRODUCT_ID    NOT NULL  NUMBER(6)\n' +
      'UNIT_PRICE              NUMBER(8,2)\n' +
      'QUANTITY                NUMBER(8)\n' +
      '\n' +
      'You need to create a view that displays the ORDER_ID, ORDER_DATE, \n' +
      'and the total number of items in each order.\n' +
      '\n' +
      'Which CREATE VIEW statement would create the view successfully?',
    answers: [
      {
        answerText:
          'A. CREATE OR REPLACE VIEW ord_vu\n' +
          '   AS SELECT o.order_id, o.order_date, COUNT (1.line_item_id)\n' +
          '   FROM orders o JOIN order_items i\n' +
          '   ON (o.order_id = i.order_id)\n' +
          '   GROUP BY o.order_id, o.order_date;',
        isCorrect: false,
      },
      {
        answerText:
          'B. CREATE OR REPLACE VIEW ord_vu (order_id, order_date)\n' +
          '   AS SELECT o,order_id, o.order_date, COUNT (i.line_item_id)\n' +
          '   "NO OF ITEMS"\n' +
          '   FROM orders- o„, JOIN order_items i\n' +
          '   ON (o.order_id ~ i.order_id)\n' +
          '   GROUP BY o.order_id, o .order_date;',
        isCorrect: false,
      },
      {
        answerText:
          'C. CREATE OR REPLACE VIEW ord_vu\n' +
          '   AS SELECT o.order_id, o.order_date, COUNT (i.line_item_id)\n' +
          '   "NO OF ITEMS"\n' +
          '   FROM orders o JOIN order_items 1\n' +
          '   ON (o.order_id = i.order_id)\n' +
          "   GROUP BY' o.order_id, o . order_date ;",
        isCorrect: true,
      },
      {
        answerText:
          'D. CREATE OR REPLACE VIEW ord_vu\n' +
          '   AS SELECT o.order_id, o.order_date, COUNT (i.line_item_id) || "NO OF ITEMS"\n' +
          '   FROM orders o JOIN order_items i\n' +
          '   ON (o.order_id = i .order_id),\n' +
          "   GROUP BY' o.order_id, o.order_date WHITE CHECK OPTION;",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '60',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about an inner join specified in the WHERE clause of a query?',
    answers: [
      {
        answerText:
          'A. It must have primary-key and foreign-key constraints defined on the columns used in the join condition.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It requires the column names to be the same in all tables used for the join conditions.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It is applicable for equijoin and nonequijoin conditions.',
        isCorrect: true,
      },
      {
        answerText: 'D. It is applicable for only equijoin conditions.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '61',
    questionTypeId: 'SC',
    questionText: 'Which statement is true regarding the INTERSECT operator?',
    answers: [
      {
        answerText:
          'A. The names of columns in all SELECT statements must be identical.',
        isCorrect: false,
      },
      {
        answerText: 'B. It ignores NULL values.',
        isCorrect: false,
      },
      {
        answerText:
          'C. Reversing the order of the intersected tables alters the result.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The number of columns and data types must be identical for all SELECT statements in the query.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help:
      "INTERSECT Returns only the rows that occur in both queries' result sets, sorting them and removing duplicates.\n" +
      'The columns in the queries that make up a compound query can have different names, but the output result set\n' +
      'will use the names of the columns in the first query.',
  },
  {
    questionId: '62',
    questionTypeId: 'SC',
    questionText:
      'Examine the following query:\n' +
      '\n' +
      'SQL> SELECT prod_id, amount_sold\n' +
      '     FROM sales\n' +
      '     ORDER BY amount_sold\n' +
      '     FETCH FIRST 5 PERCENT ROWS ONLY;\n' +
      '\n' +
      'What is the output of this query?',
    answers: [
      {
        answerText:
          'A. It displays 5 percent of the products with the highest amount sold.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It displays the first 5 percent of the rows from the SALES table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It displays 5 percent of the products with the lowest amount sold.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It results in an error because the ORDER BY clause should be the last clause.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '63',
    questionTypeId: 'SC',
    questionText:
      'The first DROP operation is performed on PRODUCTS table using this command:\n' +
      '\n' +
      'DROP TABLE products PURGE;\n' +
      '\n' +
      'Then a FLASHBACK operation is performed using this command:\n' +
      '\n' +
      'FLASHBACK TABLE products TO BEFORE DROP;\n' +
      '\n' +
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
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '64',
    questionTypeId: 'SC',
    questionText:
      'These are the steps for a correlated subquery, listed in random order:\n' +
      '\n' +
      '1. The WHERE clause of the outer query is evaluated.\n' +
      '2. A candidate row is fetched from the table specified in the outer query.\n' +
      '3. This is repeated for the subsequent rows of the table, until all the rows are processed.\n' +
      '4. Rows are returned by the inner query, after being evaluated with the value from the candidate\n' +
      'row in the outer query.\n' +
      '\n' +
      'Which is the correct sequence in which the Oracle server evaluates a correlated subquery?',
    answers: [
      {
        answerText: 'A. 2,1,4,3',
        isCorrect: false,
      },
      {
        answerText: 'B. 4,1,2,3',
        isCorrect: false,
      },
      {
        answerText: 'C. 4,2,1,3',
        isCorrect: false,
      },
      {
        answerText: 'D. 2,4,1,3',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '65',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following query:\n' +
      '\n' +
      'SQL> SELECT TRUNC (ROUND(156.00, -1),-1)\n' +
      'FROM DUAL;\n' +
      '\n' +
      'What would be the outcome?',
    answers: [
      {
        answerText: 'A. 150',
        isCorrect: false,
      },
      {
        answerText: 'B. 200',
        isCorrect: false,
      },
      {
        answerText: 'C. 160',
        isCorrect: true,
      },
      {
        answerText: 'D. 16',
        isCorrect: false,
      },
      {
        answerText: 'E. 100',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '66',
    questionTypeId: 'SC',
    questionText:
      'Examine the data in the CUST_NAME column of the CUSTOMERS table.\n' +
      '\n' +
      'CUST_NAME\n' +
      '-----------------\n' +
      'Renske Ladwig\n' +
      'Jason Mallin\n' +
      'Samuel McCain\n' +
      'Allan MCEwen\n' +
      'Irene Mikkilineni\n' +
      'Julia Nayer\n' +
      '\n' +
      'You need to display customers\' second names where the second name starts with "Mc" or "MC".\n' +
      'Which query gives the required output?',
    answers: [
      {
        answerText:
          "A. SELECT SUBSTR(cust_name, INSTR(cust_name, ' ') + 1) FROM customers\n" +
          "    WHERE SUBSTR(cust_name, INSTR(cust_name, ' ') + 1) LIKE INITCAP('MC%');",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT SUBSTR(cust_name, INSTR(cust_name, ' ') + 1) FROM customers\n" +
          "    WHERE INITCAP(SUBSTR(cust_name, INSTR(cust_name, ' ') + 1)) = 'Mc';",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT SUBSTR(cust_name, INSTR(cust_name, ' ') + 1) FROM customers\n" +
          "    WHERE INITCAP(SUBSTR(cust_name, INSTR(cust_name, ' ') + 1)) LIFE 'Mc%';",
        isCorrect: true,
      },
      {
        answerText:
          "D. SELECT SUBSTR(cust_name, INSTR(cust_name, ' ') + 1) FROM customers\n" +
          "    WHERE INITCAP(SUBSTR(cust_name, INSTR(cust_name, ' ') + 1)) = INITCAP('MC%');",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '67',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure of the SALES, CUSTOMERS, PRODUCTS and TIMES tables.\n' +
      '\n' +
      'Table STORES                           |  Table TIMES\n' +
      'Name           Null?     Type          |  Name                   Null?     Type\n' +
      '-------------  --------  ------------  |  ---------------------  --------  ------------\n' +
      'PROD_ID        NOT NULL  NUMBER        |  TIME_ID                NOT NULL  NUMBER(6)\n' +
      'CUST_ID        NOT NULL  NUMBER        |  DAY_NAME               NOT NULL  VARCHAR2(50)\n' +
      'TIME_ID        NOT NULL  DATE          |  DAY_NUMBER_IN_MONTH    NOT NULL  NUMBER(2)\n' +
      'CHANEL_ID      NOT NULL  NUMBER        |  CALENDER_WEEK_NUMBER   NOT NULL  NUMBER(2)\n' +
      'PROMO_ID       NOT NULL  NUMBER        |  CALENDER_MONTH_NUMBER  NOT NULL  NUMBER(2)\n' +
      'QUANTITY_SOLD  NOT NULL  NUMBER(10,2)  |  CALENDER_MONTH_NAME    NOT NULL  VARCHAR2(20)\n' +
      '-------------------------------------  |  CALENDER_YEAR          NOT NULL  NUMBER(4)\n' +
      '                                          ---------------------------------------------\n' +
      'Table CUSTOMERS                              |  Table PRODUCTS\n' +
      'Name                 Null?     Type          |  Name                  Null?     Type\n' +
      '-------------------  --------  ------------  |  --------------------  --------  --------------\n' +
      'CUST_ID              NOT NULL  NUMBER        |  PROD_ID               NOT NULL  NUMBER(6)\n' +
      'CUST_FIRST_NAME      NOT NULL  VARCHAR2(20)  |  PROD_NAME             NOT NULL  VARCHAR2(50)\n' +
      'CUST_LAST_NAME       NOT NULL  VARCHAR2(40)  |  PROD_DESC             NOT NULL  VARCHAR2(2000)\n' +
      'CUST_GENDER          NOT NULL  CHAR(1)       |  PROD_CATEGORY         NOT NULL  VARCHAR2(50)\n' +
      'CUST_YEAR_OF_BIRTH   NOT NULL  NUMBER(4)     |  PROD_CATEGORY_ID      NOT NULL  NUMBER(2)\n' +
      'CUST_MARITAL_STATUS            VARCHAR2(20)  |  PROD_UNIT_OF_MEASURE  NOT NULL  VARCHAR2(20)\n' +
      'CUST_STREET_ADDRESS  NOT NULL  VARCHAR2(40)  |  SUPLIER_ID            NOT NULL  NUMBER(6)\n' +
      'CUST_POSTAL_CODE     NOT NULL  VARCHAR2(10)  |  PROD_STATUS           NOT NULL  VARCHAR2(20)\n' +
      'CUST_CITY            NOT NULL  VARCHAR2(30)  |  PROD_LIST_PRICE       NOT NULL  NUMBER(8,2)\n' +
      'CUST_STATE_PROVINCE  NOT NULL  VARCHAR2(40)  |  PROD_MIN_PRICE        NOT NULL  NUMBER(8,2)\n' +
      'COUNTRY_ID           NOT NULL  NUMBER        |  ----------------------------------------------\n' +
      'CUST_INCOME_LEVEL              VARCHAR2(30)  |\n' +
      'CUST_CREDIT_LIMIT              NUMBER        |\n' +
      'CUST_EMAIL                     VARCHAR2(30)  |\n' +
      '\n' +
      'The PROD_ID column is the foreign key in the SALES table, which references the PRODUCTS table.\n' +
      '\n' +
      'Similarly, the CUST_ID and TIME_ID columns are also foreign keys in the SALES table referencing\n' +
      'the CUSTOMERS and TIMES tables, respectively.\n' +
      '\n' +
      'Evaluate the following CREATE TABLE command:\n' +
      '\n' +
      'CREATE TABLE new_sales (prod_id, cust_id, order_date DEFAULT SYSDATE)\n' +
      'AS\n' +
      'SELECT prod_id, cust_id, time_id\n' +
      'FROM sales;\n' +
      '\n' +
      'Which statement is true regarding the above command?',
    answers: [
      {
        answerText:
          'A. The NEW_SALES table would get created and all the NOT NULL constraints defined on the specified columns would be passed to the new table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The NEW_SALES table would not get created because the DEFAULT value cannot be specified in the column definition.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The NEW_SALES table would not get created because the column names in the CREATE TABLE command and the SELECT clause do not match.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The NEW_SALES table would get created and all the FOREIGN KEY constraints defined on the specified columns would be passed to the new table.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '68',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the USING and ON clauses in table joins?',
    answers: [
      {
        answerText:
          'A. Both USING and ON clauses can be used for equijoins and nonequijoins.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A maximum of one pair of columns can be joined between two tables using the ON clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The ON clause can be used to join tables on columns that have different names but compatible data types.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The WHERE clause can be used to apply additional conditions in SELECT statements containing the ON or the USING clause.',
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help: '',
  },
  {
    questionId: '69',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding group functions? (Choose three.)',
    answers: [
      {
        answerText: 'A. They can be used on columns or expressions.',
        isCorrect: true,
      },
      {
        answerText:
          'B. They can be passed as an argument to another group function.',
        isCorrect: true,
      },
      {
        answerText:
          'C. They can be used only with a SQL statement that has the GROUP BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. They can be used on only one column in the SELECT clause of a SQL statement.',
        isCorrect: false,
      },
      {
        answerText:
          'E. They can be used along with the single-row function in the SELECT clause of a SQL statement.',
        isCorrect: true,
      },
    ],
    answer: 'A, B, E',
    help: '',
  },
  {
    questionId: '70',
    questionTypeId: 'MC',
    questionText: 'Which three statements are true? (Choose three.)',
    answers: [
      {
        answerText:
          'A. The data dictionary is created and maintained by the database administrator.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The data dictionary views consist of joins of dictionary base tables and user-defined tables.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The usernames of all the users including database administrators are stored in the data dictionary.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The USER_CONS_COLUMNS view should be queried to find the names of columns to which constraints apply.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Both USER_OBJECTS and CAT views provide the same information about all objects that are owned by the user.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Views with the same name but different prefixes, such as DBA, ALL and USER, reference the same base tables from the data dictionary.',
        isCorrect: true,
      },
    ],
    answer: 'C, D, F',
    help: '',
  },
  {
    questionId: '71',
    questionTypeId: 'SC',
    questionText:
      'View the exhibits and examine the structures of the COSTS and PROMOTIONS tables.\n' +
      '\n' +
      'Table COSTS\n' +
      'Name        Null?     Type\n' +
      '----------  --------  ------------\n' +
      'PROD_ID     NOT NULL  NUMBER\n' +
      'TIME_ID     NOT NULL  DATE\n' +
      'PROMO_ID    NOT NULL  NUMBER\n' +
      'CHANNEL_ID  NOT NULL  NUMBER\n' +
      'UNIT_COST   NOT NULL  NUMBER(10,2)\n' +
      'UNIT PRICE  NOT NULL  NUMBER(10,2)\n' +
      '\n' +
      'Table PROMOTIONS\n' +
      'Name                  Null?     Type\n' +
      '--------------------  --------  ------------\n' +
      'PROMO_ID              NOT NULL  NUMBER(6)\n' +
      'PROMO_NAME            NOT NULL  VARCHAR2(30)\n' +
      'PROMO_SUBCATEGORY     NOT NULL  VARCHAR2(30)\n' +
      'PROMO_SUBCATEGORY_ID  NOT NULL  NUMBER\n' +
      'PROMO_CATEGORY        NOT NULL  VARCHAR2(30)\n' +
      'PROMO_CATEGORY_ID     NOT NULL  NUMBER\n' +
      'PROMO_COST            NOT NULL  NUMBER(10,2)\n' +
      'PROMO_BEGIN_DATE      NOT NULL  DATE\n' +
      'PROMO_END_DATE        NOT NULL  DATE\n' +
      '\n' +
      'Evaluate the following SQL statement:\n' +
      '\n' +
      'SQL> SELECT prod_id\n' +
      '     FROM costs\n' +
      '     WHERE promo_id IN (SELECT promo_id FROM promotions\n' +
      '                        WHERE promo_cost < ALL \n' +
      '                          (SELECT MAX(prcmo_cost) FROM promotions\n' +
      '                           GROUP BY (promc_end_date - promo_begin_date)));\n' +
      '\n' +
      'What would be the outcome of the above SQL statement?',
    answers: [
      {
        answerText:
          'A. It displays prod IDs in the promo with the lowest cost.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It displays prod IDs in the promos with the lowest cost in the same time interval.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It displays prod IDs in the promos with the highest cost in the same time interval.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It displays prod IDs in the promos which cost less than the highest cost in the same time interval.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '72',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the descriptions of the DEPT and LOCATIONS tables.\n' +
      '\n' +
      'Table DEPT     \n' +
      'Name              Null?     Type\n' +
      '----------------  --------  ------------\n' +
      'DEPARTMENT_ID               NUMBER(4)\n' +
      'DEPARTMEENT_NAME  NOT NULL  VARCHAR2(30)\n' +
      'MANAGER_ID                  NUMBER(6)\n' +
      'LOCATION_ID                 NUMBER(4)\n' +
      'CITY                        VARCHAR2(30)\n' +
      '\n' +
      'Table LOCATIONS\n' +
      'Name            Null?     Type\n' +
      '--------------  --------  ------------\n' +
      'LOCATION_ID     NOT NULL  NUMBER(4)\n' +
      'STREET_ADDRESS            VARCHAR2(40)\n' +
      'POSTAL_CODE               VARCHAR2(12)\n' +
      'CITY            NOT NULL  VARCHAR2(30)\n' +
      'STATE_PROVINCE            VARCHAR2(25)\n' +
      'COUNTRY_ID                CHAR(2)\n' +
      '\n' +
      'You want to update the CITY column of the DEPT table for all the rows with the corresponding\n' +
      'value in the CITY column of the LOCATIONS table for each department.\n' +
      'Which SQL statement would you execute to accomplish the task?',
    answers: [
      {
        answerText:
          'A. UPDATE dept d\n' +
          '   SET city = ALL (SELECT city\n' +
          '   FROM locations l\n' +
          '   WHERE d.location_id = l.location_id);',
        isCorrect: false,
      },
      {
        answerText:
          'B. UPDATE dept d\n' +
          '   SET city = (SELECT city\n' +
          '   FROM locations l)\n' +
          '   WHERE d.location_id = l.location_id;',
        isCorrect: false,
      },
      {
        answerText:
          'C. UPDATE dept d\n' +
          '   SET city = ANY (SELECT city\n' +
          '   FROM locations l)',
        isCorrect: false,
      },
      {
        answerText:
          'D. UPDATE dept d\n' +
          'SET city = (SELECT city\n' +
          'FROM locations l\n' +
          'WHERE d.location_id = l.location_id);',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '73',
    questionTypeId: 'SC',
    questionText:
      'The BOOKS_TRANSACTIONS table exists in your schema in this database.\n' +
      '\n' +
      'You execute this SQL statement when connected to your schema in your database instance.\n' +
      'SQL> SELECT * FROM books_transactions ORDER BY 3;\n' +
      '\n' +
      'What is the result?',
    answers: [
      {
        answerText:
          'A. The execution fails unless the numeral 3 in the ORDER BY clause is replaced by a column name.',
        isCorrect: false,
      },
      {
        answerText:
          'B. All table rows are displayed sorted in ascending order of the values in the third column.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The first three rows in the table are displayed in the order that they are stored.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Only the three rows with the lowest values in the key column are displayed in the order that they are stored.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '74',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about Data Manipulation Language (DML)?',
    answers: [
      {
        answerText:
          'A. DML automatically disables foreign ley constraints when modifying primary key values in the parent table.',
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
          'D. DML disables foreign key constraints when deleting primary key values in the parent table, only when the ON DELETE CASCADE option is set for the foreign key constraint.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '75',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure of the PROMOTIONS table.\n' +
      '\n' +
      'Table PROMOTIONS\n' +
      'Name                  Null?     Type\n' +
      '--------------------  --------  ------------\n' +
      'PROMO_ID              NOT NULL  NUMBER(6)\n' +
      'PROMO_NAME            NOT NULL  VARCHAR2(30)\n' +
      'PROMO_SUBCATEGORY     NOT NULL  VARCHAR2(30)\n' +
      'PROMO_SUBCATEGORY_ID  NOT NULL  NUMBER\n' +
      'PROMO_CATEGORY        NOT NULL  VARCHAR2(30)\n' +
      'PROMO_CATEGORY_ID     NOT NULL  NUMBER\n' +
      'PROMO_COST            NOT NULL  NUMBER(10,2)\n' +
      'PROMO_BEGIN_DATE      NOT NULL  DATE\n' +
      'PROMO_END_DATE        NOT NULL  DATE\n' +
      '\n' +
      'You have to generate a report that displays the promo name and start date for all promos that\n' +
      "started after the last promo in the 'INTERNET' category.\n" +
      '\n' +
      'Which query would give you the required output?',
    answers: [
      {
        answerText:
          'A. SELECT promo_name, promo_begin_date FROM promotions\n' +
          '   WHERE promo_begin_date > ALL (SELECT MAX(promo_begin_date)\n' +
          "   FROM promotions) AND promo_category= 'INTERNET';",
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT promo_name, promo_begin_date FROM promotions\n' +
          '   WHERE promo_begin_date IN (SELECT promo_begin_date\n' +
          '   FROM promotions\n' +
          "   WHERE promo_category= 'INTERNET');",
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT promo_name, promo_begin_date FROM promotions\n' +
          '   WHERE promo_begin_date > ALL (SELECT promo_begin_date\n' +
          '   FROM promotions\n' +
          "   WHERE promo_category = 'INTERNET');",
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT promo_name, promo_begin_date FROM promotions\n' +
          '   WHERE promo_begin_date > ANY (SELECT promo_begin_date\n' +
          '   FROM promotions\n' +
          "   WHERE promo_category = 'INTERNET');",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '76',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the ORDER_ITEMS table.\n' +
      '\n' +
      'Table ORDER_ITEMS\n' +
      'Name          Null?     Type\n' +
      '------------  --------  -----------\n' +
      'ORDER_ID      NOT NULL  NUMBER(12)\n' +
      'LINE_ITEM_ID  NOT NULL  NUMBER(3)\n' +
      'PRODUCT_ID    NOT NULL  NUMBER(6)\n' +
      'UNIT_PRICE              NUMBER(8,2)\n' +
      'QUANTITY                NUMBER(8)\n' +
      '\n' +
      'Examine the following SQL statement:\n' +
      '\n' +
      'SELECT order_id, product_id, unit_price\n' +
      'FROM order_items\n' +
      'WHERE unit_price =\n' +
      '(SELECT MAX(unit_price)\n' +
      'FROM order_items\n' +
      'GROUP BY order_id);\n' +
      '\n' +
      'You want to display the PRODUCT_ID of the product that has the highest UNIT_PRICE per ORDER_ID.\n' +
      'What correction should be made in the above SQL statement to achieve this?',
    answers: [
      {
        answerText:
          'A. Remove the GROUP BY clause from the subquery and place it in the main query',
        isCorrect: false,
      },
      {
        answerText: 'B. Replace = with the >ANY operator',
        isCorrect: false,
      },
      {
        answerText: 'C. Replace = with the >ALL operator',
        isCorrect: false,
      },
      {
        answerText: 'D. Replace = with the IN operator',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '77',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following CREATE TABLE command:\n' +
      '\n' +
      'CREATE TABLE order_item(\n' +
      '  order_id NUMBER(3),\n' +
      '  item-id  NUMBER(2),\n' +
      '  qty      NUMBER(4),\n' +
      '  CONSTRAINT ord_itm_id_pk PRIMARY KEY (order_id, item_id)\n' +
      '  USING INDEX (CREATE INDEX ord_itm_idx\n' +
      '  ON order_item (order_id, item_id)));\n' +
      '\n' +
      'Which statement is true regarding the above SQL statement?',
    answers: [
      {
        answerText:
          'A. It would execute successfully and only ORD_ITM_IDX index would be created.',
        isCorrect: true,
      },
      {
        answerText:
          'B. It would give an error because the USING INDEX clause cannot be used on a composite primary.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It would execute successfully and two indexes ORD_ITM_IDX and ORD_ITM_ID_PK would be created.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It would give an error because the USING INDEX clause is not permitted in the CREATE TABLE command.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '78',
    questionTypeId: 'SC',
    questionText:
      'Using the CUSTOMERS table, you need to generate a report that shows 50% of each \n' +
      'credit amount in each income level. The report should NOT show any repeated\n' +
      'credit amounts in each income level.\n' +
      '\n' +
      'Which query would give the required result?',
    answers: [
      {
        answerText:
          "A. SELECT cust_income_level || ' ' || cust_credit_limit * 0.50 AS “50% Credit Limit” FROM customers.",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT DISTINCT cust_income_level || ' ' || cust_credit_limit * 0.50 AS “50% Credit Limit” FROM customers.",
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT DISTINCT cust_income_level, DISTINCT cust_credit_limit * 0.50 AS “50% Credit Limit” FROM customers.',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT cust_income_level, DISTINCT cust_credit_limit * 0.50 AS “50% Credit Limit” FROM customers',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '79',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding the SQL WHERE and HAVING clauses?',
    answers: [
      {
        answerText:
          'A. The HAVING clause conditions can have aggregating functions.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The HAVING clause conditions can use aliases for the columns.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The WHERE and HAVING clauses cannot be used together in a SQL statement.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The WHERE clause is used to exclude rows before grouping data.',
        isCorrect: true,
      },
      {
        answerText:
          'E. The HAVING clause is used to exclude one or more aggregated results after grouping data.',
        isCorrect: true,
      },
    ],
    answer: 'A, D, E',
    help: '',
  },
  {
    questionId: '80',
    questionTypeId: 'SC',
    questionText:
      "You need to display the date 11-oct-2007 in words as 'Eleventh of October,\n" +
      "Two Thousand Seven'.\n" +
      'Which SQL statement would give the required result?',
    answers: [
      {
        answerText:
          "A. SELECT TO_CHAR(TO_DATE('11-oct-2007'), 'fmDdthsp “of” Month, Year') FROM DUAL",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT TO_CHAR('11-oct-2007', 'fmDdspth “of” Month, Year') FROM DUAL",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT TO_CHAR(TO_DATE('11-oct-2007'), 'fmDdspth of month, year') FROM DUAL",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT TO_DATE(TO_CHAR('11-oct-2007'), 'fmDdspth “of” Month, Year')) FROM DUAL",
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '81',
    questionTypeId: 'SC',
    questionText:
      'Examine the commands used to create DEPARTMENT_DETAILS and COURSE_DETAILS:\n' +
      '\n' +
      'SQL> CREATE TABLE DEPARTMENT_DETAILS (\n' +
      'DEPARTMENT_ID    NUMBER PRIMARY KEY,\n' +
      'DEPARTMENT_NAME  VARCHAR2(50),\n' +
      'HOD              VARCHAR2(50));\n' +
      '\n' +
      'SQL> CREATE TABLE COURSE_DETAILS (\n' +
      'COURSE_ID      NUMBER PRIMARY KEY,\n' +
      'COURSE_NAME    VARCHAR2(50),\n' +
      'DEPARTMENT_ID  NUMBER REFERENCES DEPARTMENT_DETAILS (DEPARTMENT_ID));\n' +
      '\n' +
      'You want to generate a report that shows all course IDs irrespective of whether they have\n' +
      'corresponding department IDs or not but no department IDs if they do not have any courses.\n' +
      '\n' +
      'Which SQL statement must you use?',
    answers: [
      {
        answerText:
          'A. SELECT course_id, department_id, FROM department_details d RIGHT OUTER JOIN course_details c USING (department_id)',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT c.course_id, d.department_id FROM course_details c RIGHT OUTER JOIN .department_details d ON (c.depatrment_id=d.department_id) ',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT c.course_id, d.department_id FROM course_details c FULL OUTER JOIN department_details d ON (c.department_id=d. department_id)',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT c.course_id, d.department_id FROM course_details c FULL OUTER JOIN department_details d ON (c.department_id<>d. department_id)',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '82',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the structure of the SALES, CUSTOMERS,\n' +
      'PRODUCTS and TIMES tables.\n' +
      '\n' +
      'Table SALES                            |  Table TIMES\n' +
      'Name           Null?     Type          |  Name                   Null?     Type\n' +
      '-------------  --------  ------------  |  ---------------------  --------  ------------\n' +
      'PROD_ID        NOT NULL  NUMBER        |  TIME_ID                NOT NULL  NUMBER(6)\n' +
      'CUST_ID        NOT NULL  NUMBER        |  DAY_NAME               NOT NULL  VARCHAR2(50)\n' +
      'TIME_ID        NOT NULL  DATE          |  DAY_NUMBER_IN_MONTH    NOT NULL  NUMBER(2)\n' +
      'CHANEL_ID      NOT NULL  NUMBER        |  CALENDER_WEEK_NUMBER   NOT NULL  NUMBER(2)\n' +
      'PROMO_ID       NOT NULL  NUMBER        |  CALENDER_MONTH_NUMBER  NOT NULL  NUMBER(2)\n' +
      'QUANTITY_SOLD  NOT NULL  NUMBER(10,2)  |  CALENDER_MONTH_NAME    NOT NULL  VARCHAR2(20)\n' +
      '-------------------------------------  |  CALENDER_YEAR          NOT NULL  NUMBER(4)\n' +
      '                                          ---------------------------------------------\n' +
      'Table CUSTOMERS                              |  Table PRODUCTS\n' +
      'Name                 Null?     Type          |  Name                  Null?     Type\n' +
      '-------------------  --------  ------------  |  --------------------  --------  --------------\n' +
      'CUST_ID              NOT NULL  NUMBER        |  PROD_ID               NOT NULL  NUMBER(6)\n' +
      'CUST_FIRST_NAME      NOT NULL  VARCHAR2(20)  |  PROD_NAME             NOT NULL  VARCHAR2(50)\n' +
      'CUST_LAST_NAME       NOT NULL  VARCHAR2(40)  |  PROD_DESC             NOT NULL  VARCHAR2(2000)\n' +
      'CUST_GENDER          NOT NULL  CHAR(1)       |  PROD_CATEGORY         NOT NULL  VARCHAR2(50)\n' +
      'CUST_YEAR_OF_BIRTH   NOT NULL  NUMBER(4)     |  PROD_CATEGORY_ID      NOT NULL  NUMBER(2)\n' +
      'CUST_MARITAL_STATUS            VARCHAR2(20)  |  PROD_UNIT_OF_MEASURE  NOT NULL  VARCHAR2(20)\n' +
      'CUST_STREET_ADDRESS  NOT NULL  VARCHAR2(40)  |  SUPLIER_ID            NOT NULL  NUMBER(6)\n' +
      'CUST_POSTAL_CODE     NOT NULL  VARCHAR2(10)  |  PROD_STATUS           NOT NULL  VARCHAR2(20)\n' +
      'CUST_CITY            NOT NULL  VARCHAR2(30)  |  PROD_LIST_PRICE       NOT NULL  NUMBER(8,2)\n' +
      'CUST_STATE_PROVINCE  NOT NULL  VARCHAR2(40)  |  PROD_MIN_PRICE        NOT NULL  NUMBER(8,2)\n' +
      'COUNTRY_ID           NOT NULL  NUMBER        |  ----------------------------------------------\n' +
      'CUST_INCOME_LEVEL              VARCHAR2(30)  |\n' +
      'CUST_CREDIT_LIMIT              NUMBER        |\n' +
      'CUST_EMAIL                     VARCHAR2(30)  |\n' +
      '\n' +
      '\n' +
      'The PROD_ID column is the foreign key in the SALES table referencing the PRODUCTS table.\n' +
      '\n' +
      'The CUST_ID and TIME_ID columns are also foreign keys in the SALES table referencing the\n' +
      'CUSTOMERS and TIMES tables, respectively.\n' +
      '\n' +
      'Examine this command:\n' +
      '\n' +
      'CREATE TABLE new_sales (prod_id, cust_id, order_date DEFAULT SYSDATE)\n' +
      'AS\n' +
      'SELECT prod_id, cust_id, time_id\n' +
      'FROM sales;\n' +
      '\n' +
      'Which statement is true?',
    answers: [
      {
        answerText:
          'A. The NEW_SALES table would get created and all the FOREIGN KEY constraints defined on the selected columns from the SALES table would be created on the corresponding columns in the NEW_SALES table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The NEW_SALES table would not get created because the column names in the CREATE TABLE command and the SELECT clause do not match.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The NEW_SALES table would not get created because the DEFAULT value cannot be specified in the column definition.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The NEW_SALES table would get created and all the NOT NULL constraints defined on the selected columns from the SALES table would be created on the corresponding columns in the NEW_SALES table.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '83',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the ORDERS table.\n' +
      'The ORDER_ID column is the PRIMARY KEY in the ORDERS table.\n' +
      '\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(4)\n' +
      'ORDER_DATE   NOT NULL  TIMISTAM(6)\n' +
      '                       WTHLOCALTIMEZONE\n' +
      'ORDER_MODE             VARCHAR2(8)\n' +
      'CUSTOMER_ID  NOT NULL  NUMBER(6)\n' +
      'ORDER_TOTAL            NUMBER(7,2)\n' +
      'SALES_REP_ID           NUMBER(6)\n' +
      'PROMOTION_ID           NUMBER(6)\n' +
      '\n' +
      'Evaluate the following CREATE TABLE command:\n' +
      '\n' +
      'CREATE TABLE new_orders(ord_id, ord_date DEFAULT SYSDATE, cus_id) AS\n' +
      'SELECT order_id.order_date,customer_id\n' +
      'FROM orders;\n' +
      '\n' +
      'Which statement is true regarding the above command?',
    answers: [
      {
        answerText:
          'A. The NEW_ODRDERS table would not get created because the DEFAULT value cannot be specified in the column definition.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The NEW_ODRDERS table would get created and only the NOT NULL constraint defined on the specified columns would be passed to the new table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The NEW_ODRDERS table would not get created because the column names in the CREATE TABLE command and the SELECT clause do not match.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The NEW_ODRDERS table would get created and all the constraints defined on the specified columns in the ORDERS table would be passed to the new table.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '84',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following statement.\n' +
      '\n' +
      'INSERT ALL\n' +
      '  WHEN order_total < 10000 THEN\n' +
      '    INTO small_orders\n' +
      '  WHEN order_total >,10000 AND order_total < 20000 THEN\n' +
      '    INTO mediun_orders ,\n' +
      '  WHEN order_total > 2000000 THEN\n' +
      '    INTO large_orders\n' +
      'SELECT order_id, order_total, customer_id\n' +
      'FROM orders;\n' +
      '\n' +
      'Which statement is true regarding the evaluation of rows returned by the subquery in the\n' +
      'INSERT statement?',
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
    answer: 'B',
    help: '',
  },
  {
    questionId: '85',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the SQL GROUP BY clause?',
    answers: [
      {
        answerText: 'A. You can use a column alias in the GROUP BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Using the WHERE clause after the GROUP BY clause excludes rows after creating groups.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The GROUP BY clause is mandatory if you are using an aggregating function in the SELECT clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Using the WHERE clause before the GROUP BY clause excludes rows before creating groups.',
        isCorrect: true,
      },
      {
        answerText:
          'E. If the SELECT clause has an aggregating function, then columns without an aggregating function in the SELECT clause should be included in the GROUP BY clause.',
        isCorrect: true,
      },
    ],
    answer: 'D, E',
    help: '',
  },
  {
    questionId: '86',
    questionTypeId: 'MC',
    questionText:
      'You issue this command which succeeds:\n' +
      '\n' +
      'SQL> DROP TABLE products;\n' +
      '\n' +
      'Which three statements are true?',
    answers: [
      {
        answerText:
          'A. All existing views and synonyms that refer to the table are invalidated but retained.',
        isCorrect: true,
      },
      {
        answerText:
          'B. Any uncommitted transaction in the session is committed.',
        isCorrect: false,
      },
      {
        answerText: 'C. Table data and the table structure are deleted.',
        isCorrect: true,
      },
      {
        answerText:
          "D. All the table's indexes if any exist, are invalidated but retained.",
        isCorrect: true,
      },
      {
        answerText:
          'E. Table data is deleted but the table structure is retained.',
        isCorrect: false,
      },
    ],
    answer: 'A, C, D',
    help: '',
  },
  {
    questionId: '87',
    questionTypeId: 'SC',
    questionText:
      'You execute the SQL statement:\n' +
      '\n' +
      'SQL> CREATE TABLE citizens (\n' +
      '       citizen_id CHAR(10) PRIMARY KEY,\n' +
      '       last_name  VARCHAR2(50) NOT NULL,\n' +
      '       first_name VARCHAR2(50),\n' +
      '       address    VARCHAR2(100),\n' +
      "       city       VARCHAR2(30) DEFAULT 'SEATTLE' NOT NULL,\n" +
      '       CONSTRAINT cnames CHECK (first_name <> last_name));\n' +
      '\n' +
      'What is the outcome?',
    answers: [
      {
        answerText:
          'A. It fails because the NOT NULL and DEFAULT options cannot be combined for the same column.',
        isCorrect: true,
      },
      {
        answerText:
          "B. It succeeds and CITY can contain only 'SEATTLE' or null for all rows.",
        isCorrect: false,
      },
      {
        answerText:
          'C. It fails because the condition for the CNAMES constraint is not valid.',
        isCorrect: false,
      },
      {
        answerText: 'D. It succeeds and an index is created for CITIZEN_ID.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '88',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following CREATE TABLE commands:\n' +
      '\n' +
      'CREATE_TABLE orders (\n' +
      'ord_no    NUMBER(2) CONSTRAINT ord_pk PRIMARY KEY,\n' +
      'ord_date  DATE,\n' +
      'cust_id   NUMBER(4));\n' +
      '\n' +
      'CREATE TABLE ord_items (\n' +
      'ord_no       NUMBER(2),\n' +
      'item_no      NUMBER(3),\n' +
      'qty          NUMBER (3) CHECK (qty BETWEEEN 100 AND 200),\n' +
      'expiry_date  date       CHECK (expiry_date > SYSDATE),\n' +
      'CONSTRAINT   it_pk  PRIMARY KEY (ord_no, item_no),\n' +
      'CONSTRAINT   ord_fk FOREIGN KEY (ord_no)\n' +
      'REFERENCES   orders (ord_no));\n' +
      '\n' +
      'The above command fails when executed. What could be the reason?',
    answers: [
      {
        answerText: 'A. SYSDATE cannot be used with the CHECK constraint.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The BETWEEN clause cannot be used for the CHECK constraint.',
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
    help: '',
  },
  {
    questionId: '89',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure of the PROGRAMS table:\n' +
      '\n' +
      'Table PROGRAMS\n' +
      'Name        Null?     Type\n' +
      '----------  --------  -----------\n' +
      'PROG_ID     NOT NULL  NUMBER(3)\n' +
      'PROG_COST             NUMBER(8.2)\n' +
      'START_DATE  NOT NULL  DATE\n' +
      'END_DATE              DATE\n' +
      '\n' +
      'Which two SQL statements would execute successfully?',
    answers: [
      {
        answerText:
          'A. SELECT NVL(ADD_MONTHS(END_DATE, 1), SYSDATE) FROM programs;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT TO_DATE(NVL(SYSDATE - END_DATE, SYSDATE)) FROM programs;',
        isCorrect: true,
      },
      {
        answerText:
          "C. SELECT NVL(MONTHS_BETWEEN(start_date, end_date), 'Ongoing') FROM programs;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT NVL(TO_CHAR(MONTHS_BETWEEN(start-date, end_date)), 'Ongoing') FROM programs",
        isCorrect: true,
      },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '90',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the CUSTOMERS table.\n' +
      '\n' +
      'Table CUSTOMERS\n' +
      'Name                 Null?     Type \n' +
      '-------------------  --------  ------------\n' +
      'CUST_ID              NOT NULL  NUMBER\n' +
      'CUST_FIRST_NAME      NOT NULL  VARCHAR2(20)\n' +
      'CUST_LAST_NAME       NOT NULL  VARCHAR2(40)\n' +
      'CUST_GENDER          NOT NULL  CHAR(1)\n' +
      'CUST_YEAR_OF_BIRTH   NOT NULL  NUMBER(4)\n' +
      'CUST_MARITAL_STATUS            VARCHAR2(20)\n' +
      'CUST_STREET_ADDRESS  NOT NULL  VARCHAR2(40)\n' +
      'CUST_POSTAL_CODE     NOT NULL  VARCHAR2(10)\n' +
      'CUST_CITY            NOT NULL  VARCHAR2(30)\n' +
      'CUST_STATE_PROVINCE  NOT NULL  VARCHAR2(40)\n' +
      'COUNTRY_ID           NOT NULL  NUMBER\n' +
      'CUST_INCOME_LEVEL              VARCHAR2(30)\n' +
      'CUST_CREDIT_LIMIT              NUMBER\n' +
      'CUST_EMAIL                     VARCHAR2(30)' +
      '\n' +
      'Using the CUSTOMERS table, you must generate a report that displays a\n' +
      'credit limit increase of 15% for all customers.\n' +
      '\n' +
      'Customers with no credit limit should have “Not Available” displayed.\n' +
      '\n' +
      'Which SQL statement would produce the required result?',
    answers: [
      {
        answerText:
          "A. SELECT NVL(TO_CHAR(cust_credit_limit*.15), 'Not Available') “NEW CREDIT” FROM customers;",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT TO_CHAR(NVL(cust_credit_limit*.15, 'Not Available')) “NEW CREDIT” FROM customers;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT NVL(cust_credit_limit*.15, 'Not Available') “NEW CREDIT” FROM customers;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT NVL(cust_credit_limit, 'Not Available')*.15 “NEW CREDIT” FROM customers;",
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '91',
    questionTypeId: 'SC',
    questionText:
      'Examine these SQL statements that are executed in the given order:\n' +
      '\n' +
      'CREATE TABLE emp (\n' +
      '  emp_no NUMBER(2) CONSTRAINT emp_emp_no_pk PRIMARY KEY,\n' +
      '  ename  VARCHAR2(15),\n' +
      '  salary NUMBER(8,2),\n' +
      '  mgr_no NUMBER(2) CONSTRAINT emp_mgr_fk REFERENCES emp (emp_no));\n' +
      '\n' +
      'ALTER TABLE emp\n' +
      'DISABLE CONSTRAINT emp_emp_no_pk CASCADE;\n' +
      '\n' +
      'ALTER TABLE emp\n' +
      'ENABLE CONSTRAINT emp_emp_no_pk;\n' +
      '\n' +
      'What will be the status of the foreign key EMP_MGR_FK?',
    answers: [
      {
        answerText: 'A. It will be enabled and immediate.',
        isCorrect: false,
      },
      {
        answerText: 'B. It will be enabled and deferred.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It will remain disabled and can be re-enabled manually.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It will remain disabled and can be enabled only by dropping the foreign key constraint and re¬creating it.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '92',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure in the EMPLOYEES tables.\n' +
      '\n' +
      'Table EMPLOYEES\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME               VARCHAR2(20)\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\n' +
      'EMAIL          NOT NULL  VARCHAR2(25)\n' +
      'PHONE_NUMBER             VARCHAR2(20)\n' +
      'HIRE_DATE      NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'SALARY                   NUMBER(10,2)\n' +
      'COMMISSION               NUMBER(6,2)\n' +
      'MANAGER_ID               NUMBER(6)\n' +
      'DEPARTMENT_ID            NUMBER(4)\n' +
      '\n' +
      'Evaluate the following SQL statement:\n' +
      '\n' +
      'SELECT employee_id, department_id\n' +
      'FROM employees\n' +
      'WHERE department_id = 50 ORDER BY department_id\n' +
      'UNION\n' +
      'SELECT employee_id, department_id\n' +
      'FROM employees\n' +
      'WHERE department_id = 90\n' +
      'UNION\n' +
      'SELECT employee_id, department_id\n' +
      'FROM employees\n' +
      'WHERE department_id = 10;\n' +
      '\n' +
      'What would be the outcome of the above SQL statement?',
    answers: [
      {
        answerText:
          'A. The statement would not execute because the positional notation instead of the column name should be used with the ORDER BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The statement would execute successfully and display all the rows in the ascending order of DEPARTMENT_ID.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement would execute successfully but it will ignore the ORDER BY clause and display the rows in random order.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The statement would not execute because the ORDER BY clause should appear only at the end of the SQL statement, that is, in the last SELECT statement.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '93',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the description for the SALES and CHANNELS tables.\n' +
      '(Choose the best answer.)\n' +
      '\n' +
      'Table SALES\n' +
      'Name        Null?  Type\n' +
      '----------  -----  ------\n' +
      'PROD_ID        NOT NULL  NUMBER\n' +
      'CUST_ID        NOT NULL  NUMBER\n' +
      'TIME_ID        NOT NULL  DATE\n' +
      'CHANNEL_ID     NOT NULL  NUMBER\n' +
      'PROMO_ID       NOT NULL  NUMBER\n' +
      'QUANTITY_SOLD  NOT NULL  NUMBER(10,2)\n' +
      '\n' +
      'Table CHANNELS\n' +
      'Name              Null?     Type\n' +
      '----------------  --------  ------------\n' +
      'CHANNEL_ID        NOT NULL  NUMBER\n' +
      'CHANNEL_DESC      NOT NULL  VARCHAR2(20)\n' +
      'CHANNEL_CLASS     NOT NULL  VARCHAR2(20)\n' +
      'CHANNEL_CLASS_ID  NOT NULL  NUMBER\n' +
      'CHANNEL_TOTAL     NOT NULL  VARCHAR2(13)' +
      'CHANNEL_TOTAL_ID  NOT NULL  NUMBER\n' +
      '\n' +
      'You issued this SQL statement:\n' +
      '\n' +
      '\n' +
      '\n' +
      'Which statement is true regarding the result?\n' +
      '\n' +
      'INSERT INTO SALES\n' +
      'VALUES (23, 2300, SYSDATE,\n' +
      '        (SELECT CHANNEL_ID\n' +
      '         FROM CHANNELS\n' +
      "         WHERE CHANNEL_DESC = 'DIRECT SALES'),\n" +
      '        12, 1, 500);',
    answers: [
      {
        answerText:
          'A. The statement will fail because the subquery in the VALUES clause is not enclosed within single quotation marks.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The statement will fail because a subquery cannot be used in a VALUES clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement will execute and a new row will be inserted in the SALES table.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The statement will fail because the VALUES clause is not required with the subquery.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '94',
    questionTypeId: 'MC',
    questionText:
      'View the Exhibit and examine the description of the ORDERS table.\n' +
      '\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(4)\n' +
      'ORDER_DATE   NOT NULL  TIMISTAM(6)\n' +
      '                       WTHLOCALTIMEZONE\n' +
      'ORDER_MODE             VARCHAR2(8)\n' +
      'CUSTOMER_ID  NOT NULL  NUMBER(6)\n' +
      'ORDER_TOTAL            NUMBER(7,2)\n' +
      'SALES_REP_ID           NUMBER(6)\n' +
      'PROMOTION_ID           NUMBER(6)\n' +
      '\n' +
      'Which two WHERE clause conditions demonstrate the correct usage of\n' +
      'conversion functions? (Choose two.)',
    answers: [
      {
        answerText:
          "A. WHERE order_date IN (TO_DATE('OCT 21 2003','MON DD YYYY'), TO_CHAR('NOV 21 2003','MON DD YYYY'))",
        isCorrect: false,
      },
      {
        answerText:
          "B. WHERE order_date > TO_CHAR(ADD_MONTHS(SYSDATE, 6),'MON DD YYYY')",
        isCorrect: false,
      },
      {
        answerText:
          "C. WHERE TO_CHAR(order_date, 'MON DD YYYY') = 'JAN 20 2003'",
        isCorrect: true,
      },
      {
        answerText:
          "D. WHERE order_date > TO_DATE('JUL 10 2006', 'MON DD YYYY')",
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help: '',
  },
  {
    questionId: '95',
    questionTypeId: 'MC',
    questionText:
      'Which three arithmetic operations can be performed on a column by using a\n' +
      'SQL function that is built into Oracle database? (Choose three.)',
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
        answerText: 'E. Addition',
        isCorrect: true,
      },
    ],
    answer: 'A, C, E',
    help: '',
  },
  {
    questionId: '96',
    questionTypeId: 'MC',
    questionText:
      'View the Exhibit and examine the structure of the EMPLOYEES and JOB_HISTORY tables.\n' +
      '\n' +
      'Table EMPLOYEES\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'FIRST_NAME               VARCHAR2(20)\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\n' +
      'EMAIL          NOT NULL  VARCHAR2(25)\n' +
      'PHONE_NUMBER             VARCHAR2(20)\n' +
      'HIRE_DATE      NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'SALARY                   NUMBER(10,2)\n' +
      'COMMISSION               NUMBER(6,2)\n' +
      'MANAGER_ID               NUMBER(6)\n' +
      'DEPARTMENT_ID            NUMBER(4)\n' +
      '\n' +
      'Table JOB_HISTORY\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\n' +
      'START_DATE     NOT NULL  DATE\n' +
      'END_DATE       NOT NULL  DATE\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\n' +
      'DEPARTMEND_ID            NUMBER(4)\n' +
      '\n' +
      'Examine this query which must select the employee IDs of all the employees who have held the\n' +
      'job SA_MAN at any time during their employment.\n' +
      '\n' +
      'SELECT EMPLOYEE_ID\n' +
      'FROM EMPLOYEES\n' +
      "WHERE JOB_ID = 'SA_MAN'\n" +
      '\n' +
      'SELECT EMPLOYEE_ID\n' +
      'FROM JOB_HISTORY\n' +
      "WHERE JOB_ID = 'SA_MAN';\n" +
      '\n' +
      'Choose two correct SET operators which would cause the query to return the desired result.',
    answers: [
      {
        answerText: 'A. UNION',
        isCorrect: true,
      },
      {
        answerText: 'B. MINUS',
        isCorrect: false,
      },
      {
        answerText: 'C. INTERSECT',
        isCorrect: false,
      },
      {
        answerText: 'D. UNION ALL',
        isCorrect: true,
      },
    ],
    answer: 'A, D',
    help: '',
  },
  {
    questionId: '97',
    questionTypeId: 'SC',
    questionText:
      'You must create a SALES table with these column specifications and data types:\n' +
      '(Choose the best answer.)\n' +
      '\n' +
      'SALESID: Number\n' +
      'STOREID: Number\n' +
      'ITEMID:  Number\n' +
      'QTY:     Number, should be set to 1 when no value is specified\n' +
      'SLSDATE: Date, should be set to current date when no value is specified\n' +
      'PAYMENT: Characters up to 30 characters, should be set to CASH when no value is specified\n' +
      '\n' +
      'Which statement would create the table?',
    answers: [
      {
        answerText:
          'A. CREATE TABLE sales(\n' +
          '     salesid NUMBER(4) ,\n' +
          '     storeid NUMBER(4),\n' +
          '     itemid  NUMBER(4),\n' +
          '     qty     NUMBER DEFAULT = 1,\n' +
          '     slsdate DATE DEFAULT SYSDATE,\n' +
          '     payment VARCHAR2(30) DEFAULT = "CASH");',
        isCorrect: false,
      },
      {
        answerText:
          'B. CREATE TABLE sales(\n' +
          '     salesid NUMBER(4),\n' +
          '     storeid NUMBER(4),\n' +
          '     itemid  NUMBER(4),\n' +
          '     qty     NUMBER DEFAULT 1,\n' +
          "     slsdate DATE DEFAULT 'SYSDATE',\n" +
          '     payment VARCHAR2(30) DEFAULT CASH);',
        isCorrect: false,
      },
      {
        answerText:
          'C. CREATE TABLE sales(\n' +
          '     salesid NUMBER(4),\n' +
          '     storeid NUMBER(4),\n' +
          '     itemid  NUMBER(4),\n' +
          '     qty     NUMBER DEFAULT = 1,\n' +
          '     slsdate DATE DEFAULT SYSDATE,\n' +
          '     payment VARCHAR2(30) DEFAULT = "CASH");',
        isCorrect: false,
      },
      {
        answerText:
          'D. CREATE TABLE sales (\n' +
          '     salesid NUMBER(4),\n' +
          '     storeid NUMBER(4),\n' +
          '     itemid  NUMBER(4),\n' +
          '     qty     NUMBER DEFAULT 1,\n' +
          '     sisdate DATE DEFAULT SYSDATE,\n' +
          "     payment VARCHAR2(30) DEFAULT 'CASH');",
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '98',
    questionTypeId: 'MC',
    questionText:
      'View the Exhibit and examine the details of the PRODUCT_INFORMATION table.\n' +
      '\n' +
      'Table PRODUCT_INFORMATION\n' +
      'Name                 Null?     Type\n' +
      '-------------------  --------  --------------\n' +
      'PRODUCT_ID           NOT NULL  NUMBER(6)\n' +
      'PRODUCT_NAME                   VARCHAR2(50)\n' +
      'PRODUCT_DESCRIPTION            VARCHAR2(2000)\n' +
      'CATEGORY_ID                    NUMBER(2)\n' +
      'WEIGHT_CLASS                   NUMBER(1)\n' +
      'WARRANTY_PERIOD                INTERVALYEAR(2)\n' +
      '                               TOMONTH\n' +
      'SUPLIER_ID                     NUMBER(6)\n' +
      'PRODUCT_STATUS                 VARCHAR2(20)\n' +
      'LIST_PRICE                     NUMBER(8,2)\n' +
      'MIN_PRICE                      NUMBER(8,2)\n' +
      'CATALOG_URL                    VARCHAR2(50)\n' +
      '\n' +
      'Evaluate this SQL statement:\n' +
      "SELECT TO_CHAR(list_price, '$9,999')\n" +
      'FROM product_information;\n' +
      '\n' +
      'Which two statements are true regarding the output? (Choose two.)',
    answers: [
      {
        answerText:
          'A. A row whose LIST_PRICE column contains value 11235.90 would be displayed as #######.',
        isCorrect: true,
      },
      {
        answerText:
          'B. A row whose LIST_PRICE column contains value 1123.90 would be displayed as $1,123.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A row whose LIST_PRICE column contains value 1123.90 would be displayed as $1,124.',
        isCorrect: true,
      },
      {
        answerText:
          'D. A row whose LIST_PRICE column contains value 11235.90 would be displayed as $1,123.',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '99',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about SQL query processing in an Oracle database instance?\n' +
      '(Choose the best answer.)',
    answers: [
      {
        answerText:
          'A. During parsing, a SQL statement containing literals in the WHERE clause that has been executed by any session and which is cached in memory, is always reused for the current execution.',
        isCorrect: false,
      },
      {
        answerText:
          'B. During execution, the Oracle server may read data from storage if the required data is not already in memory.',
        isCorrect: true,
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
    help: '',
  },
  {
    questionId: '100',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the ORDERS table: (Choose the best answer.)\n' +
      '\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(12)\n' +
      'ORDER_DATE   NOT NULL  TIMESTAMP\n' +
      'ORDER_STATUS           NUMBER(2)\n' +
      'CUSTOMER_ID  NOT NULL  NUMBER(6)\n' +
      'ORDER_TOTAL            NUMBER(8,2)\n' +
      '\n' +
      'You want to find the total value of all the orders for each year and issue this command:\n' +
      '\n' +
      "SQL> SELECT TO_CHAR(order_date, 'rr'), SUM(order_total) FROM orders\n" +
      "GROUP BY TO_CHAR(order_date, 'yyyy');\n" +
      '\n' +
      'Which statement is true regarding the result?',
    answers: [
      {
        answerText:
          'A. It executes successfully but does not give the correct output.',
        isCorrect: false,
      },
      {
        answerText: 'B. It executes successfully and gives the correct output.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It returns an error because the TO_CHAR function is not valid.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It return an error because the datatype conversion in the SELECT list does not match the data type conversion in the GROUP BY clause.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '101',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the ORDER_ITEMS table. \n' +
      '\n' +
      'ORDER_ITEMS\n' +
      'ORDER_ID  LINE_ITEM_ID  PRODUCT_ID  UNTT_PRICE  QUANTITY\n' +
      '    2355             4        2322          19       188\n' +
      '    2355             5        2323          17       190\n' +
      '    2355             9        2359       226.6       204\n' +
      '    2355             1        2289          46       200\n' +
      '    2356             5        2308          58        47\n' +
      '    2356             6        2311          95        51\n' +
      '    2356             1        2264       199.1        38\n' +
      '    2356             2        2274       148.5        34\n' +
      '    2356             3        2293          98        40\n' +
      '    2356             4        2299          72        44\n' +
      '    2357             2        2245         462        26\n' +
      '    2357             3        2252       788.7        26\n' +
      '    2357             4        2257       371.8        29\n' +
      '    2357             5        2262          95        29\n' +
      '\n' +
      'You must select the ORDER_ID of the order that has the highest total value among all\n' +
      'the orders in the ORDER_ITEMS table.\n' +
      '\n' +
      'Which query would produce the desired result?',
    answers: [
      {
        answerText:
          'A. SELECT order_id FROM order_items\n' +
          '   GROUP BY order_id\n' +
          '   HAVING SUM(unit_price*quantity) =\n' +
          '     (SELECT MAX(SUM(unit_price*quantity)) FROM order_items GROUP BY order_id);',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT order_id FROM order_items\n' +
          '   WHERE (unit_price*quantity) =\n' +
          '     (SELECT MAX(unit_price*quantity) FROM order_items)\n' +
          '   GROUP BY order_id;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT order_id FROM order_items WHERE (unit_price*quantity) = MAX(unit_price*quantity) GROUP BY order_id;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT order_id FROM order_items\n' +
          '   WHERE (unit_price*quantity) =\n' +
          '     (SELECT MAX(unit_price*quantity) FROM order_items\n' +
          '      GROUP BY order_id)',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  //===================================================================================================================
  // Nicht korrigiert==================================================================================================
  //===================================================================================================================
  {
    questionId: '102',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the EMP table which is not partitioned and not an index-organized table. (Choose two.)\n\n' +
      'Evaluate this SQL statement:\n\n' +
      '  EMP\n' +
      '  Name        Null?     Type\n' +
      '  EMPNO       NOT NULL  NUMBER(4)\n' +
      '  FIRST_NAME            VARCHAR2(20)\n' +
      '  LAST_NAME             VARCHAR2\n' +
      '  SALARY                NUMBER(10,2)\n' +
      '  DEPTNO                NUMBER(2)\n\n' +
      'ALTER TABLE emp\n' +
      ' DROP COLUMN first_name;\n\n' +
      'Which two statements are true?',
    answers: [
      {
        answerText:
          'A. The FIRST_NAME column can be dropped even if it is part of a composite PRIMARY KEY provided the CASCADE option is added to the SQL statement.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The FIRST_NAME column would be dropped provided at least one column remains in the table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The FIRST_NAME column would be dropped provided it does not contain any data.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The drop of the FIRST_NAME column can be rolled back provided the SET UNUSED option is added to the SQL statement.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '103',
    questionTypeId: 'MC',
    questionText:
      'View the exhibit and examine the structure and data in the INVOICE table.\n' +
      'INVOICE\n' +
      'Name  Null? Type\n' +
      'INVNO NOT NULL NUMBER (3)\n' +
      'INVDATE   DATE\n' +
      'CUSTID   VARCHAR2 (4)\n' +
      'INV AMT Xg  NUMBER (8,2)\n' +
      'INVNO INVDATE CUSTID INV AMT\n' +
      '1  01-APR-07   A10   1000\n' +
      '2  01-OCT-07   B1R   2000\n' +
      '3  01-FEB-07   3000\n' +
      'Which two SQL statements would execute successfully? (Choose two.)',
    answers: [
      {
        answerText: 'A. SELECT MAX(AVG(SYSDATE -inv_date))\nFROM invoice',
        isCorrect: false,
      },
      { answerText: 'B. SELECT AVG(inv_date)\nFROM invoice', isCorrect: false },
      {
        answerText: 'C. SELECT MAX(inv_date), MIN(cust_id)\nFROM invoice',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT AVG( inv_date -SYSDATE), AVG(inv_amt)\nFROM invoice',
        isCorrect: false,
      },
    ],
    answer: 'C, D',
    help: '',
  },

  {
    questionId: '104',
    questionTypeId: 'MC',
    questionText:
      'Which two statements best describe the benefits of using the WITH clause? (Choose two.)',
    answers: [
      {
        answerText:
          "A. It can improve the performance of a large query by storing the result of a query block having the WITH clause in the session's temporary tablespace.",
        isCorrect: false,
      },
      {
        answerText:
          'B. It enables sessions to reuse the same query block in a SELECT statement, if it occurs more than once in a complex query.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It enables sessions to store a query block permanently in memory and use it to create complex queries.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It enables sessions to store the results of a query permanently.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: '',
  },

  {
    questionId: '105',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding subqueries ? (Choose three.)',
    answers: [
      {
        answerText: 'A. The ORDER BY Clause can be used in a subquery.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A subquery can be used in the FROM clause of a SELECT statement.',
        isCorrect: false,
      },
      {
        answerText:
          'C. If a subquery returns NULL, the main query may still return rows.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A subquery can be placed in a WHERE clause, a GROUP BY clause, or a HAVING clause.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Logical operators, such as AND, OR and NOT, cannot be used in the WHERE clause of a subquery.',
        isCorrect: false,
      },
    ],
    answer: 'A, B, C',
    help: '',
  },
  // Korrigiert
  {
    questionId: '106',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding single row functions? (Choose two.)',
    answers: [
      {
        answerText: 'A. MOD : returns the quotient of a division.',
        isCorrect: false,
      },
      {
        answerText: 'B. TRUNC : can be used with NUMBER and DATE values.',
        isCorrect: true,
      },
      {
        answerText: 'C. CONCAT : can be used to combine any number of values.',
        isCorrect: false,
      },
      {
        answerText:
          'D. SYSDATE : returns the database server current date and time.',
        isCorrect: true,
      },
      {
        answerText:
          'E. INSTR : can be used to find only the first occurrence of a character in a string.',
        isCorrect: false,
      },
      {
        answerText:
          'F. TRIM : can be used to remove all the occurrences of a character from a string.',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '107',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the ORDERS table.\nYou must select ORDER_ID and ORDER_DATE for all orders that were placed after the last order placed by CUSTOMER_ID 101.\nWhich query would give you the desired result?',
    answers: [
      {
        answerText:
          'A. SELECT order_id, order_date FROM orders\nWHERE order_date > ANY (SELECT order_date FROM orders WHERE customer_id = 101);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT order_id, order_date FROM orders\nWHERE order_date > ALL (SELECT MAX(order_date) FROM orders ) AND customer_id = 101;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT order_id, order_date FROM orders\nWHERE order_date > ALL (SELECT order_date FROM orders WHERE customer_id = 101);',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT order_id, order_date FROM orders\nWHERE order_date > IN (SELECT order_date FROM orders WHERE customer_id = 101);',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '108',
    questionTypeId: 'SC',
    questionText:
      "You must display details of all users whose username contains the string 'ch_'. (Choose the best answer.)\nWhich query generates the required output?",
    answers: [
      {
        answerText: "A. SELECT * FROM users\nWhere user_name LIKE '%ch_';",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT * FROM users\nWhere user_name LIKE '%ch_%' ESCAPE '%';",
        isCorrect: true,
      },
      {
        answerText:
          "C. SELECT * FROM users\nWhere user_name LIKE 'ch_%' ESCAPE '_';",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT * FROM users\nWhere user_name LIKE '%ch_%' ESCAPE '';",
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '109',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding the usage of the WITH clause in complex correlated subqueries? (Choose three.)',
    answers: [
      {
        answerText: 'A. It can be used only with the SELECT clause.',
        isCorrect: true,
      },
      {
        answerText: 'B. The WITH clause can hold more than one query.',
        isCorrect: true,
      },
      {
        answerText:
          'C. If the query block name and the table name are the same, then the table name takes precedence.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The query name in the WITH clause is visible to other query blocks in the WITH clause as well as to the main query block',
        isCorrect: true,
      },
    ],
    answer: 'A, B, D',
    help: '',
  },
  {
    questionId: '110',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the data in the PRODUCTS table.\nYou must display product names from the PRODUCTS table that belong to the "Software/other" category with minimum prices as either $2000 or $4000 and with no unit of measure.\nWhich statement is true?',
    answers: [
      {
        answerText: 'A. It executes successfully but returns no result.',
        isCorrect: true,
      },
      {
        answerText:
          'B. It executes successfully and returns the required result.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It generates an error because the condition specified for PROD_UNIT_OF_MEASURE is not valid.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It generates an error because the condition specified for the PROD_CATEGORY column is not valid.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '111',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure of the EMPLOYEES table.\nYou must display the maximum and minimum salaries of employees hired 1 year ago.\nWhich two statements would provide the correct output? (Choose two.)',
    answers: [
      {
        answerText:
          'A. SELECT MIN(Salary) minsal, MAX(salary) maxsal\nFROM employees\nWHERE hire_date < SYSDATE-365\nGROUP BY MIN(salary), MAX(salary);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT minsal, maxsal\nFROM (SELECT MIN(salary) minsal, MAX(salary) maxsal\nFROM employees\nWHERE hire_date < SYSDATE-365);',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT minsal, maxsal\nFROM (SELECT MIN(salary) minsal, MAX(salary) maxsal\nFROM employees\nWHERE hire_date < SYSDATE-365\nGROUP BY MIN(salary), MAX(salary));',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT MIN(Salary), MAX(salary)\nFROM (SELECT salary FROM employees WHERE hire_date < SYSDATE-365);',
        isCorrect: true,
      },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '112',
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
      {
        answerText:
          'E. There is no limit on the number of subquery levels in the WHERE clause of a SELECT statement.',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '113',
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
    answer: 'A, D',
    help: '',
  },
  {
    questionId: '114',
    questionTypeId: 'MC',
    questionText:
      'Which two statement are true regarding table joins available in the Oracle Database server? (Choose two.)',
    answers: [
      {
        answerText:
          'A. You can use the ON clause to specify multiple conditions while joining tables.',
        isCorrect: true,
      },
      {
        answerText:
          'B. You can explicitly provide the join condition with a NATURAL JOIN.',
        isCorrect: false,
      },
      {
        answerText: 'C. You can use the JOIN clause to join only two tables.',
        isCorrect: false,
      },
      {
        answerText:
          'D. You can use the USING clause to join tables on more than one column.',
        isCorrect: true,
      },
    ],
    answer: 'A, D',
    help: '',
  },
  {
    questionId: '115',
    questionTypeId: 'MC',
    questionText:
      'You issued this command:\nSQL > DROP TABLE employees;\nWhich three statements are true? (Choose three.)',
    answers: [
      {
        answerText: 'A. Sequences used in the EMPLOYEES table become invalid.',
        isCorrect: false,
      },
      {
        answerText:
          'B. If there is an uncommitted transaction in the session, it is committed.',
        isCorrect: true,
      },
      {
        answerText:
          'C. All indexes and constraints defined on the table being dropped are also dropped.',
        isCorrect: true,
      },
      {
        answerText:
          'D. The space used by the EMPLOYEES table is always reclaimed immediately.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The EMPLOYEES table can be recovered using the ROLLBACK command.',
        isCorrect: false,
      },
      {
        answerText: 'F. The EMPLOYEES table may be moved to the recycle bin.',
        isCorrect: true,
      },
    ],
    answer: 'B, C, F',
    help: '',
  },
  {
    questionId: '116',
    questionTypeId: 'SC',
    questionText:
      'View the exhibit and examine the data in the PROJ_TASK_DETAILS table. (Choose the best answer.)\nYou must generate a report listing all task IDs, the task ID of any task upon which it depends and the name of the employee in charge of the task upon which it depends.\nWhich query would give the required result?',
    answers: [
      {
        answerText:
          'A. SELECT p.task_id, p.based_on, d.task_in_charge\nFROM proj_task_details p JOIN proj_task_details d\nON (p.task_id = d.task_id);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT p.task_id, p.based_on, d.task_in_charge\nFROM proj_task_details p FULL OUTER JOIN proj_task_details d\nON (p.based_on = d.task_id);',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT p.task_id, p.based_on, d.task_in_charge\nFROM proj_task_details p JOIN proj_task_details d\nON (p.based_on = d.task_id);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT p.task_id, p.based_on, d.task_in_charge\nFROM proj_task_details p LEFT OUTER JOIN proj_task_details d\nON (p.based_on = d.task_id);',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '117',
    questionTypeId: 'MC',
    questionText:
      'View the Exhibit and examine the structure of the SALES and PRODUCTS tables. (Choose two.)\nYou must list each product ID and the number of times it has been sold.\nWhich two JOIN operations can be used to obtain the required output?',
    answers: [
      { answerText: 'A. FULL OUTER JOIN', isCorrect: true },
      { answerText: 'B. JOIN', isCorrect: false },
      { answerText: 'C. LEFT OUTER JOIN', isCorrect: true },
      { answerText: 'D. RIGHT OUTER JOIN', isCorrect: false },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '118',
    questionTypeId: 'MC',
    questionText:
      'View the exhibit and examine the description of the EMPLOYEES table.\nWhich two statements are true regarding the result of the executed SQL statement?',
    answers: [
      {
        answerText:
          'A. The values in the SALARY column would be returned in descending order for all employees having the same value in the DEPARTMENT_ID and FIRST_NAME column.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The values in the FIRST_NAME column would be returned in ascending order for all employees having the same value in the DEPARTMENT_ID column.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The values in the SALARY column would be returned in descending order for all employees having the same value in the DEPARTMENT_ID column.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The values in all columns would be returned in descending order.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The values in the FIRST_NAME column would be returned in descending order for all employees having the same value in the DEPARTMENT_ID column.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: '',
  },
  {
    questionId: '119',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure of the SALES table.\nWhich two statements are true about the SALES1 table created with the given SQL statement? (Choose two.)',
    answers: [
      {
        answerText:
          'A. It will not be created because the column-specified names in the SELECT and CREATE TABLE clauses do not match.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It will have NOT NULL constraints on the selected columns which had those constraints in the SALES table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It will not be created because of the invalid WHERE clause.',
        isCorrect: false,
      },
      { answerText: 'D. It is created with no rows.', isCorrect: true },
      {
        answerText:
          'E. It has PRIMARY KEY and UNIQUE constraints on the selected columns which had those constraints in the SALES table.',
        isCorrect: false,
      },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '120',
    questionTypeId: 'MC',
    questionText:
      'Examine this SELECT statement output.\nWhich two statements are true about the output? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The DELETE_RULE column indicates the desired state of related rows in the child table when the corresponding row is deleted from the parent table.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The R_CONSTRAINT_NAME column contains an alternative name for the constraint.',
        isCorrect: false,
      },
      {
        answerText:
          "C. In the second column, 'c' indicates a check constraint.",
        isCorrect: true,
      },
      {
        answerText:
          'D. The STATUS column indicates whether the table is currently in use.',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '121',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding constraints? (Choose two.)',
    answers: [
      {
        answerText:
          'A. All constraints can be defined at the column level and at the table level.',
        isCorrect: false,
      },
      {
        answerText:
          'B. A constraint can be disabled even if the constraint column contains data.',
        isCorrect: true,
      },
      {
        answerText: 'C. A column with the UNIQUE constraint can contain NULLS.',
        isCorrect: true,
      },
      {
        answerText: 'D. A foreign key column cannot contain NULLS.',
        isCorrect: false,
      },
      {
        answerText: 'E. A constraint is enforced only for INSERT operations.',
        isCorrect: false,
      },
    ],
    answer: 'B, C',
    help: '',
  },
  {
    questionId: '122',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding working with dates? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The RR date format automatically calculates the century from the SYSDATE function but allows the session user to enter the century.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The RR date format automatically calculates the century from the SYSDATE function and does not allow a session user to enter the century.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The default internal storage of dates is in character format.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The default internal storage of dates is in numeric format.',
        isCorrect: true,
      },
    ],
    answer: 'A, D',
    help: '',
  },
  {
    questionId: '123',
    questionTypeId: 'SC',
    questionText:
      'You executed an UPDATE statement using a subquery.\nWhich statement is true regarding the execution?',
    answers: [
      {
        answerText:
          'A. It would not execute because a subquery cannot be used in the WHERE clause of an UPDATE statement.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It would not execute because two tables cannot be referenced in a single UPDATE statement.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It would execute and restrict modifications to the columns specified in the SELECT statement.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It would not execute because a SELECT statement cannot be used in place of a table name.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '124',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the PRODUCTS table.\nYou must display the category with the maximum number of items.\nWhich statement is true?',
    answers: [
      {
        answerText:
          'A. It generates an error because = is not valid and should be replaced by the IN operator.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It executes successfully but does not give the correct output.',
        isCorrect: false,
      },
      {
        answerText: 'C. It executes successfully and gives the correct output.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It generates an error because the subquery does not have a GROUP BY clause.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '125',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the MEMBERS table.\nYou executed the SQL statement to order cities and last names.\nWhat would be the result execution?',
    answers: [
      {
        answerText:
          'A. It displays all cities in descending order, within which the last names are further sorted in descending order.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It fails because a column alias cannot be used in the ORDER BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It fails because a column number and a column alias cannot be used together in the ORDER BY clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It displays all cities in ascending order, within which the last names are further sorted in descending order.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '126',
    questionTypeId: 'MC',
    questionText:
      'View and Exhibit and examine the structure and data in the INVOICE table.\nWhich two statements are true regarding data type conversion in query expressions? (Choose two.)',
    answers: [
      {
        answerText:
          "A. inv_date = '15-february-2008' :uses implicit conversion",
        isCorrect: true,
      },
      {
        answerText: "B. inv_amt = '0255982' : requires explicit conversion",
        isCorrect: false,
      },
      {
        answerText: "C. inv_date > '01-02-2008' : uses implicit conversion",
        isCorrect: false,
      },
      {
        answerText:
          'D. CONCAT(inv_amt, inv_date) : requires explicit conversion',
        isCorrect: false,
      },
      {
        answerText:
          "E. inv_no BETWEEN '101' AND '110' : uses implicit conversion",
        isCorrect: true,
      },
    ],
    answer: 'A, E',
    help: '',
  },
  {
    questionId: '127',
    questionTypeId: 'SC',
    questionText:
      'Examine the structure of the EMPLOYEES table.\nYou must display the details of employees who have manager with MANAGER_ID 100, who were hired in the past 6 months and who have salaries greater than 10000.\nWhich query would retrieve the required result?',
    answers: [
      {
        answerText:
          'A. SELECT last_name, hire_date, salary FROM employees WHERE salary > 10000 UNION ALL SELECT last_name, hire_date, salary FROM employees WHERE manager_ID = (SELECT employee_id FROM employees WHERE manager_id = 100) AND hire_date > ADD_MONTHS(SYSDATE,-6);',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT last_name, hire_date, salary FROM employees WHERE salary > 10000 UNION SELECT last_name, hire_date, salary FROM employees WHERE manager_ID = 100 AND hire_date > ADD_MONTHS(SYSDATE,-6);',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT last_name, hire_date, salary FROM employees WHERE salary > 10000 INTERSECT SELECT last_name, hire_date, salary FROM employees WHERE manager_ID = 100 AND hire_date > ADD_MONTHS(SYSDATE,-6);',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT last_name, hire_date, salary FROM employees WHERE salary > 10000 AND manager_ID = 100 AND hire_date > ADD_MONTHS(SYSDATE,-6);',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '128',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding using subqueries in the SELECT list? (Choose two.)',
    answers: [
      {
        answerText:
          'A. A subquery in the SELECT list can retrieve only one row.',
        isCorrect: true,
      },
      {
        answerText: 'B. A subquery in the SELECT list can be correlated.',
        isCorrect: true,
      },
      {
        answerText:
          'C. A subquery in the SELECT list can retrieve multiple rows.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A subquery in the SELECT list cannot reference a column in the main query.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: '',
  },
  {
    questionId: '129',
    questionTypeId: 'SC',
    questionText:
      "View the Exhibit and examine the structure of the CUSTOMERS table.\nYou must generate a report listing each customer's name and the total amount of their orders.\nWhich statement would produce the correct output?",
    answers: [
      {
        answerText:
          'A. SELECT customer_name, SUM(order_amount) FROM customers, orders WHERE customers.customer_id = orders.customer_id GROUP BY customer_name;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT customer_name, SUM(order_amount) FROM customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT customer_name, SUM(order_amount) FROM customers, orders GROUP BY customer_name;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT customer_name, SUM(order_amount) FROM orders GROUP BY customer_name;',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '130',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the usage of GROUP BY clause? (Choose two.)',
    answers: [
      {
        answerText:
          'A. All columns in the SELECT list that are not in aggregate functions must be included in the GROUP BY clause.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The GROUP BY clause can be used without aggregate functions.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The GROUP BY clause can be used only with numeric columns.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The ORDER BY clause must always follow the GROUP BY clause.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help: '',
  },
  {
    questionId: '131',
    questionTypeId: 'MC',
    questionText:
      'Which two are the minimal requirements for a self-join? (Choose two.)',
    answers: [
      {
        answerText: 'A. Only equijoin conditions may be used in the query.',
        isCorrect: false,
      },
      {
        answerText: 'B. Outer joins must not be used in the query.',
        isCorrect: false,
      },
      {
        answerText:
          'C. There must be a condition on which the self-join is performed.',
        isCorrect: true,
      },
      {
        answerText:
          'D. No other condition except the self-join may be specified.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The table used for the self-join must have two different alias names in the query.',
        isCorrect: true,
      },
    ],
    answer: 'C, E',
    help: '',
  },
  {
    questionId: '132',
    questionTypeId: 'SC',
    questionText:
      'Examine the SQL statement used to create the TRANSACTION table. Which SQL statement successfully inserts a row into the table with the default value for START_DATE?',
    answers: [
      {
        answerText:
          "A. INSERT INTO transaction VALUES ('A1', DEFAULT, TO_DATE(DEFAULT+10))",
        isCorrect: false,
      },
      {
        answerText:
          "B. INSERT INTO transaction VALUES ('A1', DEFAULT, TO_DATE('SYSDATE+10'))",
        isCorrect: false,
      },
      {
        answerText:
          "C. INSERT INTO transaction (trn_id, end_date) VALUES ('A1', '10-DEC-2014')",
        isCorrect: true,
      },
      {
        answerText:
          "D. INSERT INTO transaction (trn_id, start_date, end_date) VALUES ('A1', , '10-DEC-2014')",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '133',
    questionTypeId: 'MC',
    questionText:
      'Which three SQL statements would display the value 1890.55 as $1,890.55? (Choose three.)',
    answers: [
      {
        answerText: "A. SELECT TO_CHAR (1890.55, '$99G999D00') FROM DUAL",
        isCorrect: true,
      },
      {
        answerText: "B. SELECT TO_CHAR (1890.55, '$9,999V99') FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText: "C. SELECT TO_CHAR (1890.55, '$0G000D00') FROM DUAL;",
        isCorrect: true,
      },
      {
        answerText: "D. SELECT TO_CHAR (1890.55, '$99,999D99') FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText: "E. SELECT TO_CHAR (1890.55, '$99G999D99') FROM DUAL",
        isCorrect: true,
      },
    ],
    answer: 'A, C, E',
    help: '',
  },
  {
    questionId: '134',
    questionTypeId: 'SC',
    questionText: 'A subquery is called a single-row subquery when:',
    answers: [
      {
        answerText:
          'A. There is only one subquery in the outer query and the inner query returns one or more values',
        isCorrect: false,
      },
      {
        answerText:
          'B. The inner query returns a single value to the outer query.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The inner query uses an aggregating function and returns one or more values.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The inner query returns one or more values and the outer query returns a single value.',
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
      'You must write a query that prompts users for column names and conditions every time it is executed. The user must be prompted only once for the table name. Which statement achieves those objectives?',
    answers: [
      {
        answerText:
          "A. SELECT &col1, '&col2' FROM &table WHERE &&condition = '&cond';",
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT &col1, &col2 FROM "&table" WHERE &condition = &cond;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT &col1, &col2 FROM &&table WHERE &condition = &cond;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT &col1, &col2 FROM &&table WHERE &condition = &&cond',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '136',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding single-row functions? (Choose three.)',
    answers: [
      {
        answerText:
          'A. The data type returned, can be different from the data type of the argument that is referenced.',
        isCorrect: true,
      },
      {
        answerText:
          'B. They can return multiple values of more than one data type.',
        isCorrect: false,
      },
      { answerText: 'C. They can accept only one argument.', isCorrect: false },
      {
        answerText: 'D. They can be nested up to only two levels.',
        isCorrect: false,
      },
      {
        answerText:
          'E. They can be used in SELECT, WHERE, and ORDER BY clauses.',
        isCorrect: true,
      },
      {
        answerText:
          'F. They can accept column names, expressions, variable names, or a user-supplied constants as arguments.',
        isCorrect: true,
      },
    ],
    answer: 'A, E, F',
    help: '',
  },
  {
    questionId: '137',
    questionTypeId: 'MC',
    questionText:
      'Which two ORDER BY clauses can be used to sort the output of the given SQL statement?',
    answers: [
      { answerText: 'A. ORDER BY DEPT_NAME;', isCorrect: false },
      { answerText: 'B. ORDER BY DEPT_ID;', isCorrect: true },
      { answerText: "C. ORDER BY 'b';", isCorrect: false },
      { answerText: 'D. ORDER BY 3;', isCorrect: true },
    ],
    answer: 'B, D',
    help: '',
  },
  {
    questionId: '138',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding the WHERE and HAVING clauses in a SELECT statement? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The WHERE and HAVING clauses can be used in the same statement only if they are applied to different columns in the table.',
        isCorrect: false,
      },
      {
        answerText:
          'B. The aggregate functions and columns used in the HAVING clause must be specified in the SELECT list of the query.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The WHERE clause can be used to exclude rows after dividing them into groups.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The HAVING clause can be used with aggregate functions in subqueries.',
        isCorrect: true,
      },
      {
        answerText:
          'E. The WHERE clause can be used to exclude rows before dividing them into groups.',
        isCorrect: true,
      },
    ],
    answer: 'D, E',
    help: '',
  },
  {
    questionId: '139',
    questionTypeId: 'MC',
    questionText:
      'You must create a table EMPLOYEES in which the values in the columns EMPLOYEES_ID and LOGIN_ID must be unique and not null. Which two SQL statements would create the required table? (Choose two.)',
    answers: [
      {
        answerText:
          'A. CREATE TABLE employees (employee_id NUMBER, login_id NUMBER, employee_name VARCHAR2(100), hire_date DATE, CONSTRAINT emp_id_uk UNIQUE (employee_id, login_id));',
        isCorrect: false,
      },
      {
        answerText:
          'B. CREATE TABLE employees (employee_id NUMBER, login_id NUMBER, employee_name VARCHAR2(25), hire_date DATE, CONSTRAINT emp_id_pk PRIMARY KEY (employee_id, login_id));',
        isCorrect: true,
      },
      {
        answerText:
          'C. CREATE TABLE employees (employee_id NUMBER CONSTRAINT emp_id_pk PRIMARY KEY, login_id NUMBER UNIQUE, employee_name VARCHAR2(25), hire_date DATE);',
        isCorrect: false,
      },
      {
        answerText:
          'D. CREATE TABLE employees (employee_id NUMBER, login_id NUMBER, employee_name VARCHAR2(100), hire_date DATE, CONSTRAINT emp_id_uk UNIQUE (employee_id, login_id); CONSTRAINT emp_id_nn NOT NULL (employee_id, login_id));',
        isCorrect: false,
      },
      {
        answerText:
          'E. CREATE TABLE employees (employee_id NUMBER CONSTRAINT emp_id_nn NOT NULL, login_id NUMBER CONSTRAINT login_id_nn NOT NULL, employee_name VARCHAR2(100), hire_date DATE, CONSTRAINT emp_num_id_uk UNIQUE (employee_id, login_id));',
        isCorrect: true,
      },
    ],
    answer: 'B, E',
    help: '',
  },
  {
    questionId: '140',
    questionTypeId: 'SC',
    questionText: 'Which query would use the UPPER_NAME_IDX index?',
    answers: [
      {
        answerText:
          "A. SELECT product_id, UPPER(product_name) FROM product_information WHERE UPPER(product_name) = 'LASERPRO' OR list_price > 1000;",
        isCorrect: false,
      },
      {
        answerText: 'B. SELECT UPPER(product_name) FROM product_information;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT UPPER(product_name) FROM product_information WHERE product_id = 2254;',
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT product_id FROM product_information WHERE UPPER(product_name) IN ('LASERPRO', 'CABLE');",
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '141',
    questionTypeId: 'SC',
    questionText: 'Which option indicates correctly matched relationships?',
    answers: [
      { answerText: 'A. 1-d, 2-b, 3-a, and 4-c', isCorrect: false },
      { answerText: 'B. 1-c, 2-d, 3-a, and 4-b', isCorrect: false },
      { answerText: 'C. 1-a, 2-b, 3-c, and 4-d', isCorrect: true },
      { answerText: 'D. 1-c, 2-a, 3-b, and 4-d', isCorrect: false },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '142',
    questionTypeId: 'SC',
    questionText: 'A non-correlated subquery can be defined as:',
    answers: [
      {
        answerText:
          'A. A set of one or more sequential queries in which generally the result of the inner query is used as the search value in the outer query.',
        isCorrect: true,
      },
      {
        answerText:
          'B. A set of sequential queries, all of which must return values from the same table.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A set of sequential queries, all of which must always return a single value.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A SELECT statement that can be embedded in a clause of another SELECT statement only.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '143',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true regarding subqueries? (Choose three.)',
    answers: [
      {
        answerText: 'A. A main query can have many subqueries.',
        isCorrect: true,
      },
      {
        answerText: 'B. A subquery can have more than one main query.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The subquery and main query must retrieve data from the same table.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The subquery and main query can retrieve data from different tables.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Only one column or expression can be compared between the subquery and main query.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Multiple columns or expressions can be compared between the subquery and main query.',
        isCorrect: true,
      },
    ],
    answer: 'A, D, F',
    help: '',
  },
  {
    questionId: '144',
    questionTypeId: 'SC',
    questionText:
      'What would be the outcome of the CASE expression query on PROMOTIONS table?',
    answers: [
      {
        answerText:
          'A. It generates an error because multiple conditions cannot be specified for the WHEN clause.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It executes successfully and gives the required result.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It generates an error because CASE cannot be used with group functions.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It generates an error because NULL cannot be specified as a return value.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: 'CASE expressions can be used with multiple conditions and group functions.',
  },
  {
    questionId: '145',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding multiple-row subqueries? (Choose two.)',
    answers: [
      { answerText: 'A. They can contain group functions.', isCorrect: true },
      {
        answerText: 'B. They always contain a subquery within a subquery.',
        isCorrect: false,
      },
      {
        answerText:
          'C. They use the < ALL operator to imply less than the maximum.',
        isCorrect: false,
      },
      {
        answerText:
          'D. They can be used to retrieve multiple rows from a single table only.',
        isCorrect: false,
      },
      {
        answerText:
          'E. They should not be used with the NOT IN operator in the main query if NULL is likely to be a part of the result of the subquery.',
        isCorrect: true,
      },
    ],
    answer: 'A, E',
    help: '',
  },
  {
    questionId: '146',
    questionTypeId: 'SC',
    questionText:
      'Which SET operator would you use to find customers who have never changed their address?',
    answers: [
      { answerText: 'A. INTERSECT', isCorrect: false },
      { answerText: 'B. UNION ALL', isCorrect: false },
      { answerText: 'C. MINUS', isCorrect: true },
      { answerText: 'D. UNION', isCorrect: false },
    ],
    answer: 'C',
    help: '',
  },
  {
    questionId: '147',
    questionTypeId: 'SC',
    questionText:
      'What would happen when the RIGHT OUTER JOIN query on PRODUCTS and ORDER_ITEMS is executed?',
    answers: [
      {
        answerText:
          'A. The statement would execute successfully to produce the required output.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The statement would not execute because inline views and outer joins cannot be used together.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement would not execute because the ITEM_CNT alias cannot be displayed in the outer query.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The statement would not execute because the GROUP BY clause cannot be used in the inline.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '148',
    questionTypeId: 'SC',
    questionText: 'Which statement is true regarding the UNION operator?',
    answers: [
      {
        answerText: 'A. By default, the output is not sorted.',
        isCorrect: false,
      },
      {
        answerText: 'B. Null values are not ignored during duplicate checking.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Names of all columns must be identical across all select statements.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The number of columns selected in all select statements need not be the same.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '149',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true after issuing DROP TABLE employees?',
    answers: [
      {
        answerText: 'A. All uncommitted transactions are committed.',
        isCorrect: true,
      },
      {
        answerText:
          'B. All indexes and constraints defined on the table being dropped are also dropped.',
        isCorrect: true,
      },
      {
        answerText: 'C. Sequences used in the employees table become invalid.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The space used by the employees table is reclaimed immediately.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The employees table can be recovered using the rollback command.',
        isCorrect: false,
      },
      {
        answerText: 'F. The employees table is moved to the recycle bin',
        isCorrect: true,
      },
    ],
    answer: 'A, B, F',
    help: '',
  },
  {
    questionId: '150',
    questionTypeId: 'MC',
    questionText:
      'Which three options ensure DELETE from STORES table executes successfully despite FOREIGN KEY constraints?',
    answers: [
      {
        answerText: 'A. Disable the primary key in the STORES table.',
        isCorrect: false,
      },
      {
        answerText: 'B. Use CASCADE keyword with DELETE statement',
        isCorrect: false,
      },
      {
        answerText:
          'C. DELETE the rows with STORE_ID = 900 from the SALES table and then delete rows from STORES table.',
        isCorrect: true,
      },
      {
        answerText:
          'D. Disable the FOREIGN KEY in SALES table and then delete the rows.',
        isCorrect: true,
      },
      {
        answerText:
          'E. Create the foreign key in the SALES table on SALES_ID column with on DELETE CASCADE option.',
        isCorrect: true,
      },
    ],
    answer: 'C, D, E',
    help: '',
  },
  {
    questionId: '151',
    questionTypeId: 'SC',
    questionText:
      'What would be the outcome of the INITCAP/SUBSTR query on customers table?',
    answers: [
      { answerText: 'A. Abigail PA', isCorrect: false },
      { answerText: 'B. Abigail Pa', isCorrect: true },
      { answerText: 'C. Abigail IS', isCorrect: false },
      { answerText: 'D. An error message', isCorrect: false },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '152',
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
    questionId: '153',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding SQL*Loader command for EMPLOYEES table?',
    answers: [
      {
        answerText:
          'A. It succeeds with default settings if the EMPLOYEES table belonging to HR is already defined in the database.',
        isCorrect: true,
      },
      {
        answerText:
          'B. It fails because no SQL*Loader data file location is specified.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It fails if the HR user does not have the CREATE ANY DIRECTORY privilege.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It fails because no SQL*Loader control file location is specified.',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help: '',
  },
  {
    questionId: '154',
    questionTypeId: 'SC',
    questionText:
      'Which method or feature should you use to identify which change caused a performance difference?',
    answers: [
      { answerText: 'A. Compare Period ADDM report.', isCorrect: false },
      { answerText: 'B. AWR Compare Period report.', isCorrect: true },
      {
        answerText: 'C. Active Session History (ASH) report.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Taking a new snapshot and comparing it with a preserved snapshot.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help: '',
  },
  {
    questionId: '155',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about Enterprise Manager (EM) express in Oracle Database 12c?',
    answers: [
      {
        answerText:
          'A. By default, EM express is available for a database after database creation.',
        isCorrect: true,
      },
      {
        answerText:
          'B. You can use EM express to manage multiple databases running on the same server.',
        isCorrect: false,
      },
      {
        answerText:
          'C. You can perform basic administrative tasks for pluggable databases by using the EM express interface.',
        isCorrect: false,
      },
      {
        answerText:
          'D. You cannot start up or shut down a database Instance by using EM express.',
        isCorrect: false,
      },
      {
        answerText:
          'E. You can create and configure pluggable databases by using EM express.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '156',
    questionTypeId: 'MC',
    questionText:
      'Which two partitioned table maintenance operations support asynchronous Global Index Maintenance in Oracle database 12c?',
    answers: [
      { answerText: 'A. ALTER TABLE SPLIT PARTITION', isCorrect: false },
      { answerText: 'B. ALTER TABLE MERGE PARTITION', isCorrect: false },
      { answerText: 'C. ALTER TABLE TRUNCATE PARTITION', isCorrect: true },
      { answerText: 'D. ALTER TABLE ADD PARTITION', isCorrect: false },
      { answerText: 'E. ALTER TABLE DROP PARTITION', isCorrect: true },
      { answerText: 'F. ALTER TABLE MOVE PARTITION', isCorrect: false },
    ],
    answer: 'C, E',
    help: '',
  },
  {
    questionId: '157',
    questionTypeId: 'SC',
    questionText:
      'What happens when the RIGHT OUTER JOIN query on PRODUCTS and SALES is executed?',
    answers: [
      {
        answerText:
          'A. The statement executes successfully and produces the required output.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The statement produces an error because a subquery in the FROM clause and outer-joins cannot be used together.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The statement produces an error because the GROUP BY clause cannot be used in a subquery in the FROM clause.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The statement produces an error because ITEM_CNT cannot be displayed in the outer query.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '158',
    questionTypeId: 'SC',
    questionText:
      'Which statement is true about the outcome of the books_transactions query?',
    answers: [
      {
        answerText:
          'A. It displays details only for members who have borrowed before today with RM as TRANSACTION_TYPE.',
        isCorrect: false,
      },
      {
        answerText:
          "B. It displays details for members who have borrowed before today's date with either RM as TRANSACTION_TYPE or MEMBER_ID as A101 and A102.",
        isCorrect: false,
      },
      {
        answerText:
          'C. It displays details for only members A101 and A102 who have borrowed before today with RM TRANSACTION_TYPE.',
        isCorrect: false,
      },
      {
        answerText:
          'D. It displays details for members who have borrowed before today with RM as TRANSACTION_TYPE and the details for members A101 or A102.',
        isCorrect: true,
      },
    ],
    answer: 'D',
    help: '',
  },
  {
    questionId: '159',
    questionTypeId: 'SC',
    questionText:
      'What is the outcome of the total compensation query on EMPLOYEES table?',
    answers: [
      {
        answerText:
          'A. It executes successfully but does not give the correct output.',
        isCorrect: true,
      },
      {
        answerText:
          'B. It generates an error because the concatenation operator can be used to combine only two items.',
        isCorrect: false,
      },
      {
        answerText:
          'C. It generates an error because the usage of the ROUND function in the expression is not valid.',
        isCorrect: false,
      },
      {
        answerText: 'D. It generates an error because the alias is not valid.',
        isCorrect: false,
      },
      {
        answerText: 'E. It executes successfully and gives the correct output.',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help: '',
  },
  {
    questionId: '160',
    questionTypeId: 'SC',
    questionText:
      'Evaluate the following query\n' +
      '\n' +
      "SELECT INTERVAL '300' MONTH,\n" +
      "       INTERVAL '54-2' YEAR TO MONTH,\n" +
      "       INTERVAL '11:12:10.1234567' HOUR TO SECOND\n" +
      '  FROM dual;\n' +
      '\n' +
      'What is the correct output of the above query?',
    answers: [
      {
        answerText: 'A. +00-300, +00-650, +00 11:12:10.123457',
        isCorrect: false,
      },
      { answerText: 'B. +25-00, +54-02, +00 11:12:10.123457', isCorrect: true },
      {
        answerText: 'C. +00-300, +54-02, +00 11:12:10.123457',
        isCorrect: false,
      },
      {
        answerText: 'D. +25-00, +00-650, +00 11:12:10.123457',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help:
      'Explanation:\n' +
      "INTERVAL '300' MONTH = 25 years (300 months = 25*12).\n" +
      "INTERVAL '54-2' YEAR TO MONTH = 54 years and 2 months.\n" +
      "INTERVAL '11:12:10.1234567' HOUR TO SECOND rounds the fractional seconds to 6 digits (11:12:10.123457).",
  },
  {
    questionId: '161',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true regarding savepoints? (Choose two.)',
    answers: [
      { answerText: 'A. Savepoints may be used to ROLLBACK.', isCorrect: true },
      {
        answerText: 'B. Savepoints can be used for only DML statements.',
        isCorrect: true,
      },
      {
        answerText: 'C. Savepoints are effective only for COMMIT.',
        isCorrect: false,
      },
      {
        answerText: 'D. Savepoints are effective for both COMMIT and ROLLBACK.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Savepoints can be used for both DML and DDL statements.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help:
      'Explanation:\n' +
      '- Savepoints mark points within a transaction that you can roll back to.\n' +
      '- They apply only to DML operations (INSERT, UPDATE, DELETE).\n' +
      '- DDL statements cause implicit commits, invalidating savepoints.',
  },
  {
    questionId: '162',
    questionTypeId: 'SC',
    questionText:
      'Examine the commands used to create DEPARTMENT_DETAILS and COURSE_DETAILS tables:\n\n' +
      'SQL> CREATE TABLE DEPARTMENT_DETAILS (\n' +
      '       DEPARTMENT_ID    NUMBER PRIMARY KEY,\n' +
      '       DEPARTMENT_NAME  VARCHAR2(50),\n' +
      '       HOD              VARCHAR2(50));\n\n' +
      'SQL> CREATE TABLE COURSE_DETAILS (\n' +
      '       COURSE_ID      NUMBER PRIMARY KEY,\n' +
      '       COURSE_NAME    VARCHAR2(50),\n' +
      '       DEPARTMENT_ID  NUMBER\n' +
      '         REFERENCES DEPARTMENT_DETAILS (DEPARTMENT_ID));\n\n' +
      'You want to generate a list of all department IDs that do not exist in the COURSE_DETAILS table.\n\n' +
      'SQL> SELECT d.department_id FROM course_details c\n' +
      '      INNER JOIN department_details d\n' +
      '         ON c.department_id<>d.department_id;\n\n' +
      'You execute the SQL statement:\n' +
      'What is the outcome?',
    answers: [
      {
        answerText: 'A. It fails because the join type used is incorrect.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It executes successfully and displays the required list.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It executes successfully but displays an incorrect list.',
        isCorrect: false,
      },
      {
        answerText: 'D. It fails because the ON clause condition is not valid.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help:
      'Explanation:\n' +
      "The query executes successfully because the syntax is valid. However, using the '<>' condition in the JOIN " +
      'ensures that all rows are compared and returns department IDs not matching those in COURSE_DETAILS.',
  },
  {
    questionId: '163',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the details of the PRODUCT_INFORMATION table. Exhibit\n\n' +
      'PRODUCT_NAME        CATEGORY_ID  SUPPLIER_ID\n' +
      'Inkjet C/8/HQ       12           102094\n' +
      'Inkjet C/4          12           102090\n' +
      'LaserPro 600/6/BW   12           102087\n' +
      'LaserPro 1200/8/BW  12           102099\n' +
      'Inkjet B/6          12           102096\n' +
      'Industrial 700/HD   12           102086\n' +
      'Industrial 600/DQ   12           102088\n' +
      'Compact 400/LQ      12           102087\n' +
      'Compact 400/DQ      12           102088\n' +
      'HD 12GB /R          13           102090\n' +
      'HD 10GB /I          13           102071\n' +
      'HD 12GB @7200/SE    13           102057\n' +
      'HD 18.2GB @10000/E  13           102078\n' +
      'HD 18 2GB @10000/I  13           102050\n' +
      'HD 18GB /SE         13           102083\n' +
      'HD 6GB /I           13           102072\n' +
      'HD 8.2GB @5400      13           102093\n\n' +
      'You must display PRODUCT_NAME from the table where the CATEGORY_ID column has values 12 or 13,\n' +
      'and the SUPPLIER_ID column has the value 102088.\n\n' +
      'You executed this SQL statement:\n\n' +
      'SELECT product_name\n' +
      '  FROM product_infontation\n' +
      ' WHERE (category_id = 12 AND category_id = 13)\n' +
      '   AND supplier_id = 102088;\n\n' +
      'Which statement is true regarding the execution?',
    answers: [
      {
        answerText:
          'A. It would not execute because the entire WHERE clause is not enclosed within parentheses.',
        isCorrect: false,
      },
      {
        answerText: 'B. It would execute but would return no rows.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It would not execute because the same column has been used twice with the AND logical operator.',
        isCorrect: false,
      },
      {
        answerText: 'D. It would execute and return the desired result.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help:
      'Explanation:\n' +
      'The WHERE clause `(category_id = 12 AND category_id = 13)` can never be true, since a single row cannot have two values for the same column.\n' +
      'Therefore, the query executes successfully but returns no rows.\n' +
      'The correct condition should use `OR` instead of `AND`.',
  },
  {
    questionId: '164',
    questionTypeId: 'SC',
    questionText:
      'You need to produce a report where each customer’s credit limit has been incremented by $1000.\n' +
      'In the output, the customer’s last name should have the heading Name and the incremented credit\n' +
      'limit should be labeled New Credit Limit. The column headings should have only the first letter of\n' +
      'each word in uppercase. Which statement would accomplish this requirement?',
    answers: [
      {
        answerText:
          'A. SELECT cust_last_name AS "Name", cust_credit_limit + 1000 AS "New Credit Limit" FROM customers;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT cust_last_name AS Name, cust_credit_limit + 1000 AS New Credit Limit FROM customers;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT cust_last_name AS Name, cust_credit_limit + 1000 "New Credit Limit" FROM customers;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT INITCAP(cust_last_name) "Name", cust_credit_limit + 1000 INITCAP("NEW CREDIT LIMIT") FROM customers;',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'Explanation:\n' +
      'To preserve capitalization and include spaces in column headings, double quotes must be used.\n' +
      'Using AS with quoted identifiers ("Name", "New Credit Limit") produces the exact required output.\n' +
      'Options B and C are invalid because identifiers with spaces need quotes; D misuses INITCAP on alias names.',
  },
  {
    questionId: '165',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the ORDERS table.\n\n' +
      'Table ORDERS\n' +
      'Name         Null?     Type\n' +
      '-----------  --------  -----------\n' +
      'ORDER_ID     NOT NULL  NUMBER(4)\n' +
      'ORDER_DATE   NOT NULL  TIMESTAMP(6) WITH LOCAL TIME ZONE\n' +
      'ORDER_MODE             VARCHAR2(8)\n' +
      'CUSTOMER_ID  NOT NULL  NUMBER(6)\n' +
      'ORDER_TOTAL            NUMBER(7,2)\n' +
      'SALES_REP_ID           NUMBER(6)\n' +
      'PROMOTION_ID           NUMBER(6)\n\n' +
      'Which UPDATE statement is valid?',
    answers: [
      {
        answerText:
          "A. UPDATE orders SET order_date = '12-mar-2007', order_total IS NULL WHERE order_id = 2455;",
        isCorrect: false,
      },
      {
        answerText:
          "B. UPDATE orders SET order_date = '12-mar-2007', AND order_total = TO_NUMBER(NULL) WHERE order_id = 2455;",
        isCorrect: false,
      },
      {
        answerText:
          "C. UPDATE orders SET order_date = '12-mar-2007', order_total = NULL WHERE order_id = 2455;",
        isCorrect: true,
      },
      {
        answerText:
          "D. UPDATE orders SET order_date = TO_DATE('12-mar-2007','dd-mon-yyyy'), SET order_total = TO_NUMBER(NULL) WHERE order_id = 2455;",
        isCorrect: false,
      },
    ],
    answer: 'C',
    help:
      'Explanation:\n' +
      "- To assign a NULL value to a column, use the assignment operator '=' with NULL.\n" +
      "- 'IS NULL' is used only in WHERE conditions, not in the SET clause.\n" +
      '- Only one SET keyword should appear in an UPDATE statement.',
  },
  {
    questionId: '166',
    questionTypeId: 'SC',
    questionText:
      'SCOTT is a user in the database.\\n\\n' +
      'Evaluate the commands issued by the DBA:\\n\\n' +
      '1 - CREATE ROLE mgr;\\n' +
      '2 - GRANT CREATE TABLE, SELECT ON oe.orders TO mgr;\\n' +
      '3 - GRANT mgr, create table to SCOTT;\\n\\n' +
      'Which statement is true regarding the execution of the above commands?',
    answers: [
      {
        answerText:
          'A. Statement 1 would not execute because the WITH GRANT option is missing.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Statement 2 would not execute because system privileges and object privileges cannot be granted together in a single GRANT command.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Statement 3 would not execute because role and system privileges cannot be granted together in a single GRANT statement.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Statement 1 would not execute because the IDENTIFIED BY <password> clause is missing.',
        isCorrect: false,
      },
    ],
    answer: 'B',
    help:
      'Explanation:\\n' +
      '- System privileges (like CREATE TABLE) and object privileges (like SELECT ON table) cannot be combined in the same GRANT command.\\n' +
      '- Statement 2 fails for this reason.\\n' +
      '- Statement 1 is valid; CREATE ROLE does not require a password.\\n' +
      '- Statement 3 is syntactically valid but depends on Statement 2 succeeding.',
  },
  {
    questionId: '167',
    questionTypeId: 'MC',
    questionText:
      'View the Exhibit and examine the data in the PRODUCT_INFORMATION table.\\n\\n' +
      'PRODUCT_INFORMATION\\n' +
      'PDT_ID  SUP_ID  PDT_STATUS         LIST_PRICE  MIN_PRICE\\n' +
      '1797    102094  orderable          349         288\\n' +
      '2254    102071  obsolete           453         371\\n' +
      '2382    102050  under development  850         731\\n' +
      '2459    102099  under development  699         568\\n' +
      '3127    102087  orderable          498         444\\n' +
      '3353    102071  obsolete           489         413\\n' +
      '3354    102066  orderable          543         478\\n\\n' +
      'Which two tasks would require subqueries? (Choose two.)',
    answers: [
      {
        answerText:
          'A. displaying all the products whose minimum list prices are more than average list price of products having the status orderable',
        isCorrect: true,
      },
      {
        answerText:
          'B. displaying the total number of products supplied by supplier 102071 and having product status OBSOLETE',
        isCorrect: false,
      },
      {
        answerText:
          'C. displaying the number of products whose list prices are more than the average list price',
        isCorrect: true,
      },
      {
        answerText:
          'D. displaying all supplier IDs whose average list price is more than 500',
        isCorrect: false,
      },
      {
        answerText:
          'E. displaying the minimum list price for each product status',
        isCorrect: false,
      },
    ],
    answer: 'A, C',
    help:
      'Explanation:\\n' +
      '- Subqueries are used when a query depends on the result of another query.\\n' +
      "- (A) requires comparing each product’s MIN_PRICE to the average LIST_PRICE of products with status 'orderable' — a subquery is needed for the average.\\n" +
      '- (C) requires comparing each LIST_PRICE to the overall average LIST_PRICE — again requiring a subquery.\\n' +
      '- (B), (D), and (E) can be achieved using GROUP BY or simple WHERE clauses without subqueries.',
  },
  {
    questionId: '168',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the description of the EMPLOYEES table.\\n\\n' +
      'Table EMPLOYEES\\n' +
      'Name           Null?     Type\\n' +
      '-------------  --------  ------------\\n' +
      'EMPLOYEE_ID    NOT NULL  NUMBER(6)\\n' +
      'FIRST_NAME               VARCHAR2(20)\\n' +
      'LAST_NAME      NOT NULL  VARCHAR2(25)\\n' +
      'EMAIL          NOT NULL  VARCHAR2(25)\\n' +
      'PHONE_NUMBER             VARCHAR2(20)\\n' +
      'HIRE_DATE      NOT NULL  DATE\\n' +
      'JOB_ID         NOT NULL  VARCHAR2(10)\\n' +
      'SALARY                   NUMBER(10,2)\\n' +
      'COMMISSION_PCT           NUMBER(6,2)\\n' +
      'MANAGER_ID               NUMBER(6)\\n' +
      'DEPARTMENT_ID            NUMBER(4)\\n\\n' +
      'You want to calculate the total remuneration for each employee.\\n' +
      'Total remuneration is the sum of the annual salary and the percentage commission earned for a year.\\n' +
      'Only a few employees earn commission.\\n\\n' +
      'Which SQL statement would you execute to get the desired output?',
    answers: [
      {
        answerText:
          'A. SELECT first_name, salary, salary*12+(salary*NVL2(commission_pct, salary, salary+commission_pct)) “Total” FROM EMPLOYEES;',
        isCorrect: true,
      },
      {
        answerText:
          'B. SELECT first_name, salary, salary*12+salary*commission_pct “Total” FROM EMPLOYEES;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT first_name, salary (salary + NVL (commission_pct, 0)*salary)*12 “Total” FROM EMPLOYEES;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT first_name, salary, salary*12 + NVL(salary,0)*commission_pct, “Total” FROM EMPLOYEES;',
        isCorrect: false,
      },
    ],
    answer: 'A',
    help:
      'Explanation:\\n' +
      '- NVL2(expr1, expr2, expr3) returns expr2 if expr1 is not NULL, otherwise expr3.\\n' +
      '- This allows handling employees with and without commission correctly.\\n' +
      '- The query calculates annual salary and adds commission only when applicable.',
  },
  {
    questionId: '169',
    questionTypeId: 'SC',
    questionText:
      'View the Exhibit and examine the structure of the PROMOTIONS table.\\n\\n' +
      'Table PROMOTIONS\\n' +
      'Name                  Null?     Type\\n' +
      'PROMO_ID              NOT NULL  NUMBER(6)\\n' +
      'PROMO_NAME            NOT NULL  VARCHAR2(30)\\n' +
      'PROMO_SUBCATEGORY     NOT NULL  VARCHAR2(30)\\n' +
      'PROMO_SUBCATEGORY_ID  NOT NULL  NUMBER\\n' +
      'PROMO_CATEGORY        NOT NULL  VARCHAR2(30)\\n' +
      'PROMO_CATEGORY_ID     NOT NULL  NUMBER\\n' +
      'PROMO_COST            NOT NULL  NUMBER(10,2)\\n' +
      'PROMO_BEGIN_DATE      NOT NULL  DATE\\n' +
      'PROMO_END_DATE        NOT NULL  DATE\\n\\n' +
      'Evaluate the following SQL statement:\\n\\n' +
      'SQL> SELECT promo_name,\\n' +
      '            CASE\\n' +
      '              WHEN promo_cost>=(SELECT AVG(promo_cost)\\n' +
      '                                  FROM promotions\\n' +
      "                                 WHERE promo_category='TV')\\n" +
      "              THEN 'HIGH'\\n" +
      "              ELSE 'LOW'\\n" +
      '            END COST_REMARK\\n' +
      '       FROM promotions;\\n\\n' +
      'Which statement is true regarding the outcome of the above query?',
    answers: [
      {
        answerText:
          'A. It produces an error because subqueries cannot be used with the CASE expression.',
        isCorrect: false,
      },
      {
        answerText:
          'B. It shows COST_REMARK for all the promos in the promo category ‘TV’.',
        isCorrect: false,
      },
      {
        answerText: 'C. It shows COST_REMARK for all the promos in the table.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It produces an error because the subquery gives an error.',
        isCorrect: false,
      },
    ],
    answer: 'C',
    help:
      'Explanation:\\n' +
      "- The subquery `(SELECT AVG(promo_cost) FROM promotions WHERE promo_category='TV')` returns a single value.\\n" +
      '- The CASE expression is evaluated for each row in the promotions table.\\n' +
      "- Therefore, COST_REMARK is shown for all rows, not just those in category 'TV'.",
  },
  {
    questionId: '170',
    questionTypeId: 'MC',
    questionText:
      'Which statement is true regarding the USING clause in table joins? (Choose two.)',
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
          'D. It can be used to restrict the number of columns used in a NATURAL join.',
        isCorrect: true,
      },
    ],
    answer: 'C, D',
    help:
      'Explanation:\n' +
      '- The USING clause allows you to specify a column (or columns) to join on when the columns have the same name in both tables.\n' +
      '- It can be used to restrict columns in a NATURAL join by specifying only certain columns for the join.',
  },
  {
    questionId: '171',
    questionTypeId: 'MC',
    questionText:
      'Examine the structure proposed for the TRANSACTIONS table:\n' +
      '\n' +
      'Table TRANSACTIONS\n' +
      'Name               Null?     Type\n' +
      '-----------------  --------  ----------------------\n' +
      'TRANS_ID           NOT NULL  NUMBER(6)\n' +
      'CUST_NAME          NOT NULL  VARCHAR2(20)\n' +
      'CUST_STATUS        NOT NULL  VARCHAR2\n' +
      'TRANS_DATE         NOT NULL  DATE\n' +
      'TRANS_VALIDITY               INTERVAL DAY OF SECOND\n' +
      'CUST_CREDIT_VALUE            NUMBER(10)\n' +
      '\n' +
      'Which two statements are true regarding the storage of data in the above table structure? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The CUST_CREDIT_VALUE column would allow storage of positive and negative integers.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The TRANS_VALIDITY column would allow storage of a time interval in days, hours, minutes, and seconds.',
        isCorrect: true,
      },
      {
        answerText:
          'C. The CUST_STATUS column would allow storage of data up to the maximum VARCHAR2 size of 4,000 characters.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The TRANS_DATE column would allow storage of dates only in the dd-mon-yyyy format.',
        isCorrect: false,
      },
    ],
    answer: 'A, B',
    help:
      'Explanation:\n' +
      '- CUST_CREDIT_VALUE is a NUMBER column and can store positive and negative values.\n' +
      '- TRANS_VALIDITY is an INTERVAL DAY TO SECOND column, which stores days, hours, minutes, and seconds.\n' +
      '- CUST_STATUS column size is not specified with a maximum; VARCHAR2 can store up to 4000 bytes depending on settings.\n' +
      '- TRANS_DATE stores DATE values, not limited to a specific format internally.',
  },
];
