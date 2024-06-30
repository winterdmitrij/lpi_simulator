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
  {
    questionId: '32',
    questionTypeId: 'MC',
    questionText:
      'ToDo: Die Frage fehlt',
    answers: [
      {
        answerText: 'A. ',
        isCorrect: true,
      },
      {
        answerText: 'B. ',
        isCorrect: false,
      },
      {
        answerText: 'C. ',
        isCorrect: true,
      },
      {
        answerText: 'D. ',
        isCorrect: true,
      },
      {
        answerText: 'E. ',
        isCorrect: false,
      },
      {
        answerText: 'F. ',
        isCorrect: false,
      },
    ],
    answer: '',
    help: '',
  },
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
      'Which three statements are true about the ALTER TABLE DROP COLUMN  command?',
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
];
