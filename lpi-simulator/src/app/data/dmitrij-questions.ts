import { Question } from '../models/definitions';

export const questions: Question[] = [
  {
    questionId: '1',
    questionTypeId: 'MC',
    questionText:
      'Examine the description of the PROMOTIONS table:\n\n' +
      'Name            Null      Type\n' +
      '--------------  --------  ------------\n' +
      'PROMO_ID        NOT NULL  NUMBER(6)\n' +
      'PROMO_NAME      NOT NULL  VARCHAR2(30)\n' +
      'PROMO_CATEGORY  NOT NULL  VARCHAR2(30)\n' +
      'PROMO_COST      NOT NULL  NUMBER(10,2)\n\n' +
      'You want to display the unique promotion costs in each promotion category.\n' +
      'Which two queries can be used? (Choose two.)',
    answers: [
      {
        answerText:
          "A. SELECT DISTINCT promo_category || ' has ' || promo_cost AS COSTS FROM promotions ORDER BY 1;",
        isCorrect: true,
      },
      {
        answerText:
          "B. SELECT DISTINCT promo_cost || ' in ' || DISTINCT promo_category FROM promotions ORDER BY 1;",
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT DISTINCT promo_category, promo_cost FROM promotions ORDER BY 1;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT promo_category DISTINCT promo_cost, FROM promotions ORDER BY 2;',
        isCorrect: false,
      },
      {
        answerText:
          'E. SELECT promo_cost, promo_category FROM promotions ORDER BY 1; ',
        isCorrect: false,
      },
    ],
    help: '',
  },
  {
    questionId: '2',
    questionTypeId: 'MC',
    questionText:
      'Examine the description of the PRODUCTS table:\n\n' +
      'Name           Null?     Type\n' +
      '-------------  --------  ------------\n' +
      'PRODUCT_ID     NOT NULL  NUMBER(2)\n' +
      'PRODUCT_NAME             VARCHAR2(10)\n' +
      'UNIT PRICE               NUMBER(3)\n' +
      'SURCHARGE                VARCHAR2(2)\n' +
      'EXPIRY_DATE              DATE\n' +
      'DELIVERY_DATE            DATE\n\n' +
      'Which three queries use valid expressions? (Choose three.)',
    answers: [
      {
        answerText:
          'A. SELECT product_id, unit_price, S "Discount", unit_price-+ surcharge- discount FROM products;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT product_id, (unit_price * 0.15 / (4.75 + 552.25)) FROM products;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT product_id, (expiry_date - delivery_date) * 2 FROM products;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT product_id, unit_price ll 5 "Discount", unit_price + surcharge-discount FROM products;',
        isCorrect: false,
      },
      {
        answerText: 'E. SELECT product_id, expiry_date * 2 FROM products;',
        isCorrect: false,
      },
      {
        answerText:
          'F. SELECT product_id, unit_price, unit_price + surcharge FROM products;',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: BCF (100%)',
  },
  {
    questionId: '3',
    questionTypeId: 'MC',
    questionText:
      'What is true about non-equijoin statement performance? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The BETWEEN condition always performs less well than using the >= and <= conditions',
        isCorrect: false,
      },
      {
        answerText:
          'B. The BETWEEN condition always performs better than using the >= and <= conditions.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The Oracle join syntax performs better than the SQL:1999 compliant ANSI join syntax.',
        isCorrect: false,
      },
      {
        answerText: 'D. Table aliases can improve performance.',
        isCorrect: true,
      },
      {
        answerText:
          'E. The join syntax used makes no difference to performance.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: DE (50%), CD (42%)',
  },
  {
    questionId: '4',
    questionTypeId: 'MC',
    questionText: 'Which two are true? (Choose two.)',
    answers: [
      {
        answerText: 'A. ADD_MONTHS adds a number of calendar months to a date.',
        isCorrect: true,
      },
      {
        answerText:
          'B. CEIL requires an argument which is a numeric data type.',
        isCorrect: false,
      },
      {
        answerText:
          'C. CEIL returns the largest integer less than or equal to a specified number.',
        isCorrect: true,
      },
      {
        answerText:
          'D. LAST_DAY returns the date of the last day of the current month only.',
        isCorrect: false,
      },
      {
        answerText:
          'E. LAST_DAY returns the date of the last day of the month for the date argument passed to the function.',
        isCorrect: false,
      },
      {
        answerText:
          'F. LAST_DAY returns the date of the last day of the previous month only.',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: AE (92%) \n References: \n\t https://docs.oracle.com/database/121/SQLRF/functions025.htm \n\t https://docs.oracle.com/cd/B28359_01/server.111/b28286/functions004.htm',
  },
  {
    questionId: '5',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true about Oracle synonyms? (Choose three.)',
    answers: [
      {
        answerText: 'A. A synonym cannot be created for a PL/SQL package.',
        isCorrect: false,
      },
      {
        answerText: 'B. A synonym can be available to all users.',
        isCorrect: true,
      },
      {
        answerText: 'C. A SEQUENCE can have a synonym.',
        isCorrect: true,
      },
      {
        answerText: 'D. Any user can drop a PUBLIC synonym',
        isCorrect: false,
      },
      {
        answerText:
          'E. A synonym created by one user can refer to an object belonging to another user.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: BCE (100%)',
  },
  {
    questionId: '6',
    questionTypeId: 'MC',
    questionText: 'Which two are true? (Choose two.)',
    answers: [
      {
        answerText: 'A. CONCAT joins two character strings together.',
        isCorrect: true,
      },
      {
        answerText: 'B. CONCAT joins two or more character strings together.',
        isCorrect: false,
      },
      {
        answerText:
          'C. FLOOR returns the largest positive integer less than or equal to a specified number.',
        isCorrect: false,
      },
      {
        answerText:
          'D. INSTR finds the offset within a character string, starting from position 0.',
        isCorrect: false,
      },
      {
        answerText:
          'E. INSTR finds the offset within a string of a single character only.',
        isCorrect: false,
      },
      {
        answerText:
          'F. FLOOR returns the largest integer less than or equal to a specified number.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: AF (100%)',
  },
  {
    questionId: '7',
    questionTypeId: 'MC',
    questionText:
      'Examine these SQL statements which execute successfully:\n\n' +
      'CREATE TABLE emp (emp_no NUMBER(2) CONSTRAINT emp_emp_no_pk PRIMARY KEY,\n' +
      '                  ename  VARCHAR2(15),\n' +
      '                  salary NUMBER(8,2),\n' +
      '                  mgr_no NUMBER (2));\n\n' +
      'ALTER TABLE emp \n' +
      '  ADD CONSTRAINT emp_mgr_fk FOREIGN KEY (mgr_no)\n' +
      '      REFERENCES emp (emp_no) ON DELETE SET NULL;\n\n' +
      'ALTER TABLE emp DISABLE CONSTRAINT emp_emp_no_pk CASCADE;\n\n' +
      'ALTER TABLE emp ENABLE CONSTRAINT emp_emp_no_pk;\n\n' +
      'Which two statements are true after execution? (Choose two.)',
    answers: [
      {
        answerText:
          'A. The primary key constraint will be enabled and IMMEDIATE.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The foreign key constraint willbe enabled and DEFERRED.',
        isCorrect: false,
      },
      {
        answerText:
          'C. The primary key constraint will be enabled and DEFERRED.',
        isCorrect: false,
      },
      {
        answerText: 'D. The foreign key constraint will be disabled.',
        isCorrect: true,
      },
      {
        answerText:
          'E. The foreign key constraint will be enabled and IMMEDIATE.',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: AD (100%)',
  },
  {
    questionId: '8',
    questionTypeId: 'MC',
    questionText:
      'Examine this SQL statement:\n\n' +
      'UPDATE orders o\n' +
      '   SET customer_name = (SELECT cust_last_name\n' +
      '                          FROM customers\n' +
      '                         WHERE customer_id = o.customer_id)\n\n' +
      'Which two are true? (Choose two.)',
    answers: [
      {
        answerText: 'A. All existing rows in the ORDERS table are updated.',
        isCorrect: true,
      },
      {
        answerText:
          'B. The subquery is executed before the UPDATE statement is executed.',
        isCorrect: true,
      },
      {
        answerText: 'C. The subquery is not a correlated subquery.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The subquery is executed for every updated row in the ORDERS table.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The UPDATE statement executes successfully even if the subquery selects multiple rows.',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: AB (69%), AE (31%)',
  },
  {
    questionId: '9',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about TRUNCATE and DELETE? (Choose two.)',
    answers: [
      {
        answerText:
          'A. DELETE can use a WHERE clause to determine which row(s) should be removed.',
        isCorrect: true,
      },
      {
        answerText:
          'B. TRUNCATE can use a WHERE clause to determine which row(s) should be removed.',
        isCorrect: false,
      },
      {
        answerText:
          'C. TRUNCATE leaves any indexes on the table in an UNUSABLE state.',
        isCorrect: false,
      },
      {
        answerText:
          'D. The result of a TRUNCATE can be undone by issuing a ROLLBACK.',
        isCorrect: false,
      },
      {
        answerText:
          'E. The result of a DELETE can be undone by issuing a ROLLBACK.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: AE (100%)',
  },
  {
    questionId: '10',
    questionTypeId: 'SC',
    questionText:
      'The STORES table has a column START_DATE of data type DATE, containing the date the row was inserted.\nYou only want to display details of rows where START DATE is within the last 25 months.\nWhich WHERE clause can be used?',
    answers: [
      {
        answerText: 'A. WHERE TOLNUMBER(start_date - SYSDATE) <= 25',
        isCorrect: false,
      },
      {
        answerText: 'B. WHERE MONTHS_BETWEEN(start_date, SYSDATE) <= 25',
        isCorrect: false,
      },
      {
        answerText: 'C. WHERE MONTHS_BETWEEN(SYSDATE, start_date) <= 25',
        isCorrect: true,
      },
      {
        answerText: 'D. WHERE ADD_MONTHS(start_date, 25) <= SYSDATE',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: C(100%)',
  },
  {
    questionId: '11',
    questionTypeId: 'MC',
    questionText:
      'Which three are true about scalar subquery expressions? (Choose three.)',
    answers: [
      {
        answerText: 'A. They can be nested.',
        isCorrect: true,
      },
      {
        answerText:
          'B. They cannot be used in the VALUES clause of an INSERT statement.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A scalar subquery expression that returns zero rows evaluates to zero.',
        isCorrect: false,
      },
      {
        answerText:
          'D. They can be used as default values for columns in a CREATE TABLE statement.',
        isCorrect: false,
      },
      {
        answerText:
          'E. A scalar subquery expression that returns zero rows evaluates to NULL.',
        isCorrect: true,
      },
      {
        answerText: 'F. They cannot be used in GROUP BY clauses.',
        isCorrect: true,
      },
    ],
    help: 'Reference: https://docs.oracle.com/cd/B12037_01/server.101/b10759/expressions010.htm\nCommunity vote distribution: AEF (80%)  BEF (20%)',
  },
  {
    questionId: '12',
    questionTypeId: 'MC',
    questionText:
      'Examine this query:\n\n' +
      'SELECT employee id, first name, salary\n' +
      '  FROM employees\n' +
      " WHERE hire date > '&l';\n\n" +
      'Which two methods should you use to prevent prompting for \n' +
      'a hire date value when this query is executed? (Choose two.)',
    answers: [
      {
        answerText: 'A. Use the DEFINE command before executing the query.',
        isCorrect: true,
      },
      {
        answerText: "B. Replace '&1' with '&&1' in the query.",
        isCorrect: false,
      },
      {
        answerText: 'C. Use the UNDEFINE command before executing the query.',
        isCorrect: false,
      },
      {
        answerText:
          'D. Execute the SET VERIFY OFF command before executing the query.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Execute the SET VERIFY ON command before executing the query.',
        isCorrect: false,
      },
      {
        answerText:
          'F. Store the query in a script and pass the substitution value to the script when executing it.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: AF (75%) AB (25%)',
  },
  {
    questionId: '13',
    questionTypeId: 'MC',
    questionText:
      'You need to allow user ANDREW to:\n' +
      '1. Modify the TITLE and ADDRESS columns of your CUSTOMERS table.\n' +
      '2. GRANT that permission to other users\n' +
      'Which statement will do this?',
    answers: [
      {
        answerText:
          'A. GRANT UPDATE ON customers.title, customers.address TO andrew;',
        isCorrect: false,
      },
      {
        answerText: 'B. GRANT UPDATE (title, address) ON customers TO andrew:',
        isCorrect: false,
      },
      {
        answerText:
          'C. GRANT UPDATE (title, address) ON customers TO andrew WITH GRANT OPTION.',
        isCorrect: true,
      },
      {
        answerText:
          'D. GRANT UPDATE ON customers.title, customers.address TO andrew WITH ADMIN OPTION;',
        isCorrect: false,
      },
      {
        answerText:
          'E. GRANT UPDATE ON customers.title, customers.address TO andrew WITH GRANT OPTION;',
        isCorrect: true,
      },
      {
        answerText:
          'F. GRANT UPDATE (title, address) ON customers TO andrew WITH ADMIN OPTION;',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: CE (100%)',
  },
  {
    questionId: '14',
    questionTypeId: 'MC',
    questionText:
      'You own table DEPARTMENTS, referenced by views, indexes, and synonyms.\n' +
      'Examine this command which executes successfully:\n\n' +
      'DROP TABLE departments PURGE;\n\n' +
      'Which three statements are true? (Choose three.)',
    answers: [
      {
        answerText:
          'A. It will remove the DEPARTMENTS table from the database.',
        isCorrect: true,
      },
      {
        answerText: 'B. It will drop all indexes on the DEPARTMENTS table.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It will remove all views that are based on the DEPARTMENTS table.',
        isCorrect: false,
      },
      {
        answerText: 'D. It will remove all synonyms for the DEPARTMENTS table.',
        isCorrect: false,
      },
      {
        answerText:
          'E. Neither can it be rolled back nor can the DEPARTMENTS table be recovered.',
        isCorrect: true,
      },
      {
        answerText:
          'F. It will delete all rows from the DEPARTMENTS table, but retain the empty table.',
        isCorrect: false,
      },
    ],
    help: 'Reference: https://docs.oracle.com/cd/B28359_01/server.111/b28310/tables010.htm#ADMIN01505\nCommunity vote distribution: ABE (86%)',
  },
  {
    questionId: '15',
    questionTypeId: 'MC',
    questionText:
      'Which three statements are true about Structured Query Language (SQL)? (Choose three.)',
    answers: [
      {
        answerText:
          'A. It requires that data be contained in hierarchical data storage.',
        isCorrect: false,
      },
      {
        answerText: 'B. It best supports relational databases.',
        isCorrect: true,
      },
      {
        answerText:
          'C. It provides independence for logical data structures being manipulated from the underlying physical data storage.',
        isCorrect: true,
      },
      {
        answerText:
          'D. It is the only language that can be used for both relational and object-oriented databases.',
        isCorrect: false,
      },
      {
        answerText:
          'E. It guarantees atomicity, consistency, isolation, and durability (ACD) features.',
        isCorrect: true,
      },
      {
        answerText:
          'F. It is used to define encapsulation and polymorphism for a relational table.',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: BCE (100%)',
  },
  {
    questionId: '16',
    questionTypeId: 'MC',
    questionText:
      'Which two statements are true about Oracle synonyms? (Choose two.)',
    answers: [
      {
        answerText: 'A. Any user can create a PUBLIC synonym.',
        isCorrect: false,
      },
      {
        answerText: 'B. A synonym has an object number.',
        isCorrect: true,
      },
      {
        answerText:
          'C. All private synonym names must be unique in the database.',
        isCorrect: false,
      },
      {
        answerText: 'D. A synonym can be created on an object in a package.',
        isCorrect: false,
      },
      {
        answerText: 'E. A synonym can have a synonym.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: DE (56%) BE (44%)',
  },
  {
    questionId: '17',
    questionTypeId: 'SC',
    questionText: 'Which is true about the ROUND, TRUNC and MOD functions?',
    answers: [
      {
        answerText: 'A. TRUNC(MOD(25,3),-1) is invalid.',
        isCorrect: false,
      },
      {
        answerText: 'B. ROUND(MOD(25,3),-1) is invalid.',
        isCorrect: false,
      },
      {
        answerText:
          'C. ROUND(MOD(25,3),-1) and TRUNC(MOD(25,3),-1) are both valid and give the same result.',
        isCorrect: true,
      },
      {
        answerText:
          'D. ROUND(MOD(25,3),-1) and TRUNC(MOD(25,3),-1) are both valid but give different results.',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: C (100%)',
  },
  {
    questionId: '18',
    questionTypeId: 'MC',
    questionText:
      'Which two are true about transactions in the Oracle Database? (Choose two.)',
    answers: [
      {
        answerText: 'A. DML statements always start new transactions.',
        isCorrect: false,
      },
      {
        answerText:
          'B. DDL statements automatically commit only data dictionary updates caused by executing the DDL.',
        isCorrect: false,
      },
      {
        answerText:
          'C. A session can see uncommitted updates made by the same user in a different session.',
        isCorrect: false,
      },
      {
        answerText:
          'D. A DDL statement issued by a session with an uncommitted transaction automatically commits that transaction.',
        isCorrect: true,
      },
      {
        answerText:
          'E. An uncommitted transaction is automatically committed when the user exits SQL*Plus.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: DE (67%) BD (3%)',
  },
  {
    questionId: '19',
    questionTypeId: 'MC',
    questionText:
      'Examine the description of the MEMBERS table:\n\n' +
      'Name        Null?     Type\n' +
      '----------  --------  ------------\n' +
      'MEMBER_ID   NOT NULL  VARCHAR2(6)\n' +
      'FIRST_NAME            VARCHAR2(50)\n' +
      'LAST_NAME   NOT NULL  VARCHAR2(50)\n' +
      'CITY                  VARCHAR2(25)\n\n' +
      'Examine the partial query:\n\n' +
      'SELECT city, last_name AS Iname FROM members ...\n\n' +
      'You want to display all cities that contain the string AN.\n' +
      'The cities must be returned in ascending order, with the last names further sorted in descending order.\n' +
      'Which two clauses must you add to the query? (Choose two.)',
    answers: [
      {
        answerText: 'A. ORDER BY 1,2',
        isCorrect: false,
      },
      {
        answerText: 'B. ORDER BY 1, Iname DESC',
        isCorrect: true,
      },
      {
        answerText: "C. WHERE city IN ('%AN%')",
        isCorrect: false,
      },
      {
        answerText: "D. WHERE city = '%AN%'",
        isCorrect: false,
      },
      {
        answerText: "E. WHERE city LIKE '%AN%'",
        isCorrect: true,
      },
      {
        answerText: 'F. ORDER BY last_name DESC, City ASC',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: BE (82%)',
  },
  {
    questionId: '20',
    questionTypeId: 'MC',
    questionText:
      'Examine this partial command:\n\n' +
      'CREATE TABLE cust(\n' +
      '  cust_id      NUMBER(2),\n' +
      '  credit_limit NUMBER(10)\n' +
      ') ORGANIZATION EXTERNAL\n\n' +
      'Which two clauses are required for this command to execute successfully? (Choose two.)',
    answers: [
      {
        answerText: 'A. the access driver TYPE clause',
        isCorrect: false,
      },
      {
        answerText: 'B. the DEFAULT DIRECTORY clause',
        isCorrect: true,
      },
      {
        answerText: 'C. the REJECT LIMIT clause',
        isCorrect: false,
      },
      {
        answerText: 'D. the LOCATION clause',
        isCorrect: true,
      },
      {
        answerText: 'E. the ACCESS PARAMETERS clause',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: BD (100%)',
  },
  {
    questionId: '21',
    questionTypeId: 'MC',
    questionText: 'Which two are true about unused columns? (Choose two.)',
    answers: [
      {
        answerText:
          'A. A query can return data from unused columns, but no DML is possible on those columns.',
        isCorrect: false,
      },
      {
        answerText:
          'B. Unused columns retain their data until they are dropped.',
        isCorrect: true,
      },
      {
        answerText:
          'C. Once a column has been set to unused, a new column with the same name can be added to the table.',
        isCorrect: true,
      },
      {
        answerText: 'D. The DESCRIBE command displays unused columns.',
        isCorrect: false,
      },
      {
        answerText: 'E. A primary key column cannot be set to unused.',
        isCorrect: false,
      },
      {
        answerText: 'F. A foreign key column cannot be set to unused.',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: BC (100%)',
  },
  {
    questionId: '22',
    questionTypeId: 'MC',
    questionText:
      'Which two are true about the precedence of operators and conditions? (Choose two.)',
    answers: [
      {
        answerText: 'A. || has a higher order of precedence than + (addition).',
        isCorrect: false,
      },
      {
        answerText:
          'B. + (addition) has a higher order of precedence than * (multiplication).',
        isCorrect: false,
      },
      {
        answerText:
          'C. NOT has a higher order of precedence than AND and OR in a condition.',
        isCorrect: true,
      },
      {
        answerText:
          'D. AND and OR have the same order of precedence in a condition.',
        isCorrect: false,
      },
      {
        answerText: 'E. Operators are evaluated before conditions.',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: CE (100%)',
  },
  {
    questionId: '23',
    questionTypeId: 'SC',
    questionText:
      'In your session, the NLS_DATE_FORMAT is DD-MM-YYYY.\n' +
      'There are 86400 seconds in a day.\n' +
      'Examine this result:\n\n' +
      'DATE-\n' +
      '-------\n' +
      '02-JAN-2020\n\n' +
      'Which statement returns this?',
    answers: [
      {
        answerText:
          "A. SELECT TO_CHAR(TO_DATE('29-10-2019') + INTERVAL '2' MONTH + INTERVAL '4' DAY - INTERVAL '120' SECOND, 'DD-MON-YYYY') AS \"date\" FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText:
          "B. SELECT TO_CHAR(TO_DATE('29-10-2019') + INTERVAL '3' MONTH + INTERVAL '7' DAY - INTERVAL '360' SECOND, 'DD-MON-YYYY') AS \"date\" FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText:
          "C. SELECT TO_CHAR(TO_DATE('29-10-2019') + INTERVAL '2' MONTH + INTERVAL '5' DAY - INTERVAL '120' SECOND, 'DD-MON-YYYY') AS \"date\" FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText:
          "D. SELECT TO_CHAR(TO_DATE('29-10-2019') + INTERVAL '2' MONTH + INTERVAL '5' DAY - INTERVAL '86410' SECOND, 'DD-MON-YYYY') AS \"date\" FROM DUAL;",
        isCorrect: false,
      },
      {
        answerText:
          "E. SELECT TO_CHAR(TO_DATE('29-10-2019') + INTERVAL '2' MONTH + INTERVAL '6' DAY - INTERVAL '120' SECOND, 'DD-MON-YYYY') AS \"date\" FROM DUAL;",
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: E (100%)',
  },
  {
    questionId: '24',
    questionTypeId: 'SC',
    questionText:
      'Examine the data in the INVOICES table:\n\n' +
      'INVOICE_ID  CURRENCY_CODE  RAISED_DATE\n' +
      '----------  -------------  -----------\n' +
      '         1  EUR            01-JAN-2019\n' +
      '         2  USD            01-FEB-2019\n' +
      '         3  JPY            01-MAR-2019\n\n' +
      'Examine the data in the CURRENCIES table:\n\n' +
      'CURRENCY_CODE\n' +
      '-------------\n' +
      'JPY\n' +
      'GPB\n' +
      'CAD\n' +
      'EUR\n' +
      'USD\n\n' +
      'Which query returns the currencies in CURRENCIES that are not present in INVOICES?',
    answers: [
      {
        answerText:
          'A. SELECT * FROM currencies\n    WHERE NOT EXISTS (SELECT NULL FROM invoices \n   	                   WHERE currency_code);',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT * FROM currencies\n   MINUS\n   SELECT * FROM invoices;',
        isCorrect: false,
      },
      {
        answerText:
          'C. SELECT currency_code FROM currencies\n   MINUS\n   SELECT currency_code FROM invoices;',
        isCorrect: true,
      },
      {
        answerText:
          'D. SELECT currency_code FROM currencies\n   INTERSECT\n   SELECT currency_code FROM invoices;',
        isCorrect: false,
      },
    ],
    help: 'Community vote distribution: C (100%)',
  },
  {
    questionId: '25',
    questionTypeId: 'MC',
    questionText:
      'The SALES table has columns PROD_ID and QUANTITY_SOLD of data type NUMBER.\n' +
      'Which two queries execute successfully? (Choose two.)',
    answers: [
      {
        answerText:
          'A. SELECT prod_id FROM sales WHERE quantity_sold > 55000 AND COUNT(*) > 10 GROUP BY COUNT(*) > 10;',
        isCorrect: false,
      },
      {
        answerText:
          'B. SELECT prod_id FROM sales WHERE quantity_sold > 55000 GROUP BY prod_id HAVING COUNT(*) > 10;',
        isCorrect: true,
      },
      {
        answerText:
          'C. SELECT COUNT(prod_id) FROM sales GROUP BY prod_id WHERE quantity_sold > 55000;',
        isCorrect: false,
      },
      {
        answerText:
          'D. SELECT prod_id FROM sales WHERE quantity_sold > 55000 AND COUNT (*) > 10 GROUP BY prod_id HAVING COUNT(*) > 10;',
        isCorrect: false,
      },
      {
        answerText:
          'E. SELECT COUNT(prod_id) FROM sales WHERE quantity_sold > 5000 GROUP BY prod_id;',
        isCorrect: true,
      },
    ],
    help: 'Community vote distribution: BE (100%)',
  },
];
