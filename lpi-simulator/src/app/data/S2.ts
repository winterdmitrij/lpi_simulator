import { Type } from '@angular/core';
import { Question } from '../models/definitions';

export const questions: Question[] = [





QUESTION: 172
Examine the structure of the MARKS table:

NUMBER(3)
NUMBER(3)
NUMBER(3)
Which two statements would execute successfully? (Choose two.)
A. SELECT SUM(DISTINCT NVL(subject1,0)), MAX(subject1) FROM marks
WHERE subject1 > subject2;
    B. SELECT student_name subject1 FROM marks
WHERE subject1 > AVG(subject1);
    C. SELECT SUM(subject1+subject2+subject3) FROM marks
WHERE student_name IS NULL;
    D. SELECT student_name,SUM(subject1)
FROM marks
WHERE student_name LIKE ‘R%’;
Answer(s): A, C

QUESTION: 173
Examine the data in the CUSTOMERS table:
CUSTNO
CUSTNAME
CITY
1
KING
SEATTLE
2
GREEN
BOSTON
3
KOCHAR
SEATTLE
4
SMITH
NEW YORK

You want to list all cities that have more than one customer along with the customer details.
Evaluate the following query:
SQL>SELECT cl.custname, cl.city
FROM Customers cl Customers c2
ON (cl.city=c2.city AND cl.custname<>c2.custname);
Which two JOIN options can be used in the blank in the above query to give the correct output? (Choose two.)
    A. LEFT OUTER JOIN
    B. JOIN
    C. NATURAL JOIN
    D. RIGHT OUTER JOIN
    E. FULL OUTER JOIN
Answer(s): B, D
QUESTION: 174
Examine the structure proposed for the TRANSACTIONS table:
Name
Null? '%
Type
TRANS ID
NOT NULL
NUMBER(6)
CUST_NAME
NOT NULL
VARCHAR2(20)
CUST_STATUS
NOT NULL
CHAR
TRANS_DATE
NOT NULL
DATE
TRANS VALIDITY

VARCHAR2
CUST CREDIT LIMIT

NUMBER

Which two statements are true regarding the creation and storage of data in the above table structure? (Choose two.)
    A. The CUST_STATUS column would store exactly one character.
    B. The TRANS_VALIDITY column would have a maximum size of one character.
    C. The CUST_CREDIT_LIMIT column would be able to store decimal values.
    D. The CUST_STATUS column would give an error.
    E. The TRANS_DATE column would be able to store day, month, century, year, hour, minutes, seconds, and fractions of seconds.
    F. The TRANS_VALIDITY column would give an error.
Answer(s): A, F
QUESTION: 175
View the Exhibit and examine the structure of the PRODUCT_INFORMATION and INVENTORIES
tables.

You have a requirement from the supplies department to give a list containing PRODUCT_ID, SUPPLIER_ID, and QUANTITY_ON_HAND for all the products wherein QUANTITY_ON_HAND is less than five.
Which two SQL statements can accomplish the task? (Choose two.)
    A. SELECT i.product_id, i.quantity_on_hand, pi.supplier_id
FROM product_information pi JOIN inventories i
ON (pi.product_id=i.product_id)
WHERE quantity_on_hand < 5;
    B. SELECT product_id, quantity_on_hand, supplier_id
FROM product_information
NATURAL JOIN inventories AND quantity_on_hand < 5;
    C. SELECT i.product_id, i.quantity_on_hand, pi.supplier_id
FROM product_information pi JOIN inventories i
ON (pi.product_id=i.product_id) AND quantity_on_hand < 5;
    D. SELECT i.product_id, i.quantity_on_hand, pi.supplier_id
FROM product_information pi JOIN inventories i
USING (product_id) AND quantity_on_hand < 5;
Answer(s): A, C
QUESTION: 176
In the EMPLOYEES table there are 1000 rows and employees are working in the company for more than 10 years.
Evaluate the following SQL statement:
ISQL> UPDATE employees
SET salary = NVL(salary,0) + NVL (comm,0),comm - NVL (comm, 0)
WHERE hire_date < SYSDATE - 600;
What would be the result?
    A. It executes successfully but no rows updated.
    B. It executes successfully and updates the records of those employees who have been working in the company for more than 600 days.
    C. It gives an error because multiple NVL functions are used in an expression.
    D. It gives an error because NVL function cannot be used with UPDATE.
Answer(s): B
QUESTION: 177
Which statement adds a column called SALARY to the EMPLOYEES table having 100 rows, which cannot contain null?
    A. ALTER TABLE EMPLOYEES
ADD SALARY NUMBER(8,2) DEFAULT 0 NOT NULL;
    B. ALTER TABLE EMPLOYEES
ADD SALARY NUMBER(8,2) DEFAULT CONSTRAINT p_nn NOT NULL;
    C. ALTER TABLE EMPLOYEES
ADD SALARY NUMBER(8,2) DEFAULT NOT NULL;
    D. ALTER TABLE EMPLOYEES
ADD SALARY NUMBER(8,2) NOT NULL;
Answer(s): A
QUESTION: 178
View the Exhibit and examine the data in the PROMOTIONS table.


PROMO_BEGIN_DATE is stored in the default date format, dd-mon-rr.
You need to produce a report that provides the name, cost, and start date of all promos in the POST category that were launched before January 1, 2000.
Which SQL statement would you use?
    A. SELECT promo_name, promo_cost, promo_begin_date
FROM promotions
WHERE promo_category = 'post' AND promo_begin_date < '01-01-00';
    B. SELECT promo_name, promo_cost, promo_begin_date
FROM promotions
WHERE promo_category LIKE 'P%' AND promo_begin_date < '1-JANUARY-00';
    C. SELECT promo_name, promo_cost, promo_begin_date
FROM promotions
WHERE promo_cost LIKE 'post%' AND promo_begin_date < '01-01-2000';
    D. SELECT promo_name, promo_cost, promo_begin_date
FROM promotions
WHERE promo_category LIKE '%post%' AND promo_begin_date < '1-JAN-00';
Answer(s): D
QUESTION: 179
Which two statements are true regarding views? (Choose two.)
    A. The WITH CHECK OPTION constraint can be used in a view definition to restrict the columns displayed through the view.
    B. The OR REPLACE option is used to change the definition of an existing view without dropping and re-creating it.
    C. Rows cannot be deleted through a view if the view definition contains the DISTINCT keyword.
    D. Rows added through a view are deleted from the table automatically when the view is dropped.
    E. A simple view in which column aliases have been used cannot be updated.
    F. A subquery used in a complex view definition cannot contain group functions or joins.
Answer(s): B, C
QUESTION: 180
View the Exhibit and examine the structure of CUSTOMERS table.
Table CUSTOMERS
Name
Null?
Type
CUST ID
<NOT NULL
NUMBER
CUST_FIRST_NAME
NOT NULL
VARCHAR2 (20)
CUST.LAST.NAME
NOT NULL
VARCHAR2 (40)
CUST_GLNDER
NOT NULL
CHAR (1)
CUSTYLAROFbIRTH
NOT NULL
NUMBER (4)
CUST MARITIAL_STATUS

VARCHAR2 (20)
CUST_STREET_AD DRESS
NOT NULL
VARCHAR2 (40)
CUSTPOSTALCODE
NOT NULL
VARCHAR2 (10)
CUST-CITY
NOT NULL
VARCHAR2 (30)
CUST STATE PROVINCE
NOT NULL
VARCHAR2 (40)
COUNTRY!©
NOT NULL
NUMBER
CUSTINCOMELEVEL

VARCHAR2 (30)
CUST CREDIT LIMIT

NUMBER
CUST-EMAIL

VARCHAR2 (30)
Evaluate the following query:

SQL>SELECT cust_id, cust_city
FROM customers
WHERE cust_first_name NOT LIKE ’A_%g_%' AND cust_credit_limit BETWEEN 5000 AND 15000 AND cust_credit_limit NOT IN (7000, 11000) AND cust_city NOT BETWEEN ’A' AND 'B*;
Which statement is true regarding the above query?
    A. It produces an error because the condition on the CUST_CITY column is not valid.
    B. It produces an error because the condition on the CUST_FIRST_NAME column is not valid. C. It produces an error because conditions on the CUST_CREDIT_LIMIT column are not valid. D. It executes successfully.
Answer(s): D
QUESTION: 181
Evaluate the following CREATE SEQUENCE statement:
CREATE SEQUENCE seq1
START WITH 100
INCREMENT BY 10
MAXVALUE 200
CYCLE
NOCACHE;
The sequence SEQ1 has generated numbers up to the maximum limit of 200. You issue the following SQL statement:
SELECT seq1.nextval FROM dual;
What is displayed by the SELECT statement?
    A. 100
    B. an error
    C. 10
    D. 1
Answer(s): D
QUESTION: 182
Which statement is true regarding the SESSION_PRIVS dictionary view?
    A. It contains the object privileges granted to other users by the current user session.
    B. It contains the system privileges granted to other users by the current user session.
    C. It contains the current object privileges available in the user session.
    D. It contains the current system privileges available in the user session.
Answer(s): D
QUESTION: 183
Which three statements indicate the end of a transaction? (Choose three.)
    A. after a CREATE statement is issued
    B. after a SAVEPOINT is issued
    C. after a SELECT statement is issued
    D. after a ROLLBACK is issued
    E. after a COMMIT is issued
Answer(s): A, D, E
QUESTION: 184
Examine the structure of the BOOKS_TRANSACTIONS table.
Name	Null?'\ Type
TRANSACTION-ID	NOT NULL VARCHAR2(6)
BORROWED-DATE	DATE
DUE_DATE	DATE
BOOK_ID	VARCHAR2(8)
MEMBER_ID	%	" VARCHAR2(6)
You want to update this table such that BOOK_ID is set to 'INVALID' for all rows where no MEMBER_ID has been entered.
Examine this partial SQL statement:
SQL> UPDATE books_transactions
SET book_id = 'INVALID'
WHERE 	
Which condition must be used in the WHERE clause to perform the required update?
    A. MEMBER_ID = '';
    B. MEMBER_ID = NULL;
    C. MEMBER_ID IS NULL;
    D. MEMBER_ID = "";
Answer(s): C
QUESTION: 185
Evaluate the following SQL commands:
SQL>CREATE SEQUENCE ord_seq
INCREMENT BY 10
START WITH 120
MAXVALUE 9999 fe.	‘’k.
NOCYCLE;	:
SQLXREATE TABLE ord_items
(ord_no NUMBER(4)DEFAULT ord_seq.NEXTVAL NOT NULL,
item_no NUMBER(3),
qty NUMBER(3) CHECK (qty BETWEEN 100 AND 200), expiry_date date CHECK (expiry_date > SYSDATE), CONSTRAINT it_pk PRIMARY KEY (ord_no,item_no), CONSTRAINT ord_fk FOREIGN KEY(ord_no) REFERENCES orders(ord_no))
The command to create a table fails. Identify the reason for the SQL statement failure.
    A. You cannot use ORD_NO and ITEM_NO columns as a composite primary key because ORD_NO is also the FOREIGN KEY.
    B. You cannot use the BETWEEN clause in the condition of a CHECK constraint.
    C. You cannot use the NEXTVAL sequence value as a DEFAULT value for a column.
    D. You cannot use SYSDATE in the condition of a CHECK constraint.
Answer(s): D
QUESTION: 186
Evaluate the following query:
I SQL> SELECT promo_name II q'{’s start date was \}' II promo_begin_date AS "Promotion Launches"
FROM promotions;	\ x
What would be the outcome of the above query?
    A. It produces an error because the data types are not matching.
    B. It executes successfully and displays the literal " {'s start date was \> " for each row in the output.
    C. It executes successfully and introduces an 's at the end of each promo_name in the output.
    D. It produces an error because flower braces have been used.
Answer(s): C
QUESTION: 187
View the exhibit and examine the description for the SALES and CHANNELS tables.

You issued this SQL statement:
INSERT INTO sales VALUES (23, 2300, SYSDATE,
(SELECT channel_id
FROM channels
WHERE channel—desc='Direct Sales’), 12, 1, 500);
Whichstatement is true regarding the result?
    A. The statement will fail because the subquery in the VALUES clause is not enclosed within single quotation marks.
    B. The statement will fail because a subquery cannot be used in a VALUES clause.
    C. The statement will fail because the VALUES clause is not required with a subquery.
    D. The statement will execute and a new row will be inserted in the SALES table.
Answer(s): D
QUESTION: 188
View the Exhibit and examine the structure of the CUSTOMERS table.
Table CUSTOMERS
Name
NuD?
Type
CUSTID
NOT NULL
NUMBER
CUST_FIRST_NAME
NOT_NULL
VARCHAR2(20)
CUST_LAST_NAME
NOT_NULL
VARCHAR2(20)
CUSTGENDER
NOTNULL
CHAR(l)
CUST_YEAR_OF_BIRTH
NOTNULL
NUMBER(4)
CUST_MARITAL_STATUS

VARCHAR2(20)
CUST_STREET_ADDRESS
NOT_NULL
VARCHAR2(40)
CUST_POSTAL_CODE
NOT_NLLL
VARCHAR2(10)
CUST-CITY
NOT_NULL
\ARCHAR2(30)
CUSTSTATEPROVINCE
NOT_NULL
VARCHAR2(40)
COUNTRY_ID
NOTNULL
NUMBER
CUST_INCOME_LEVEL

VARCHAR2(30)
CUST-CREDITLIMIT

NUMBER
CUSTEMAIL

VARCHAR2(30)
Evaluate the following SQL statement:

SQL> SELECT cu3t_city, COUNT(cu3t_la3t_name)
FROM customers
WHERE cust_credxr_limxt > 1000
GROUP 3Y cust_city
HAVING AVG(cu3t_credxt_lxnu.t) BETWEEN 5000 AND 6000;
Which statement is true regarding the outcome of the above query?
    A. It returns an error because the BETWEEN operator cannot be used in the HAVING clause.
    B. It returns an error because WHERE and HAVING clauses cannot be used in the same SELECT statement.
    C. It returns an error because WHERE and HAVING clauses cannot be used to apply conditions on the same column.
    D. It executes successfully.
Answer(s): D
QUESTION: 189
View the Exhibit and examine the details of the ORDER_ITEMS table.

Evaluate the following SQL statements:

Statement 1:
SELECT MAX(unit_price*quantity) “Maximum Order”
FROM order_items;
Statement 2:
SELECT MAX(unit_price*quantity) “Maximum Order”
FROM order_items
GROUP BY order_id;
Which statements are true regarding the output of these SQL statements? (Choose all that apply.)
    A. Statement 2 would return multiple rows of output.
    B. Both statements would ignore NULL values for the UNIT_PRICE and QUANTITY columns.
    C. Statement 1 would not return give the same output.
    D. Both the statements would give the same output.
    E. Statement 1 would return only one row of output.
Answer(s): A, B, E
QUESTION: 190
Which two statements are true regarding subqueries? (Choose two.)
    A. Only two subqueries can be placed at one level.
    B. A subquery in the WHERE clause of a SELECT statement can be nested up to three levels only.
    C. A subquery can be used to access data from one or more tables or views.
    D. The columns in a subquery must always be qualified with the name or alias of the table used.
    E. If the subquery returns 0 rows, then the value returned by the subquery expression is NULL.
Answer(s): C, E
QUESTION: 191
Examine the description of the EMP_DETAILS table given below:
NAME
NULL
TYPE
EMP_ID
NOT NULL
NUMBER
EMP_NAME
NOT NULL
VARCHAR2 (40)
EMP IMAGE

LONG

Which two statements are true regarding SQL statements that can be executed on the EMP_DETAIL TABLE?
    A. An EMP_IMAGE column cannot be included in the ORDER BY clause.
    B. You can alter the table to include the NOT NULL constraint on the EMP_IMAGE column.
    C. You cannot add a new column to the table with LONG as the data type.
    D. An EMP_IMAGE column can be included in the GROUP BY clause.
Answer(s): A, C
QUESTION: 192
View the Exhibit and examine the structure of ORDER_ITEMS and ORDERS tables.

You need to remove from the ORDER_ITEMS table those rows that have an order status of 0 or 1 in the ORDERS table.
Which two DELETE statements are valid? (Choose two.)
    A. DELETE *
FROM order_items
WHERE order_id IN (SELECT order_id) FROM orders
WHERE order_statU3 IN (Ü,l));
    B. DELETE	>' >
FROM (SELECT * FRÖM prder_items I,orders o -
WHERE i.order_id = q.order_id AND order_status IN (0,1));
c. DELETE FROM order_items ,i
WHERE order_id = (SELECT order_id FROM orders o
WHERE i.order_id = o.order_id AND order_status IN (0,1)) D. DELETE
FROM order_items
WHERE order id IN (SELECT order id FROM orders
WHERE orders_status in (0,1));
A. Option A B. Option B C. Option C D. Option D
Answer(s): B, D
QUESTION: 193
The PRODUCTS table has the following structure.
Name
Null?
Type
PROD_ID
PROD_NAME
PROD EXPIRY DATE
NOT NULL
NUMBER(4) VARCHAR2(25) DATE
Evaluate the following two SQL statements:

SQL>SELECT prod_id, NVL2 (prod_expiry_date, prod_expiry_date + 15, ‘ ‘) FROM products;
SQL>SELECT prod_id, NVL (prod_expiry_date, prod_expiry_date + 15) FROM products;
Which statement is true regarding the outcome?
    A. Both the statements execute and give different results
    B. Only the second SQL statement executes successfully
    C. Both the statements execute and give the same result
    D. Only the first SQL statement executes successfully
Answer(s):A
Explanation:
Using the NVL2 Function
The NVL2 function examines the first expression. If the first expression is not null, the NVL2 function returns the second expression. If the first expression is null, the third expression is returned. Syntax
NVL2(expr1, expr2, expr3)
In the syntax:
Expr1 is the source value or expression that may contain a null
Expr2 is the value that is returned if expr1 is not null
Expr3 is the value that is returned if expr1 is null
QUESTION: 194
You executed the following CREATE TABLE statement that resulted in an error:
SQL> CREATE TABLE employees(emp_id NUMBER(10) PRIMARY KEY, ename VARCHAR2(20), email NUMBER(3) UNIQUE, address VARCHAR2(500), phone VARCHAR2(20), resume LONG, hire_date DATE, remarks LONG, dept_id NUMBER(3) CONSTRAINT emp_dept_id_fk REFERENCES departments (dept_id), CONSTRAINT ename_nn NOY NULL(ename));
Identify two reasons for the error.
    A. The NOT NULL constraint on the ENAME column must be defined as the column level
    B. FOREIGN KEY defined on the DEPT_ID column must be at the table level only
    C. Only one LONG column can be used per table
    D. The FOREIGN KEY keyword is missing in the constraint definition
    E. The PRIMARY KEY constraint in the EMP_ID column must have a name and must be defined at the table level only
Answer(s): A, C
QUESTION: 195
View the Exhibit and examine the structure of the CUSTOMERS table.

You want to generate a report showing the last names and credit limits of all customers whose last names start with A, B, or C, and credit limit is below 10,000.
Evaluate the following two queries:
SQL> SELECT cust_last_name, cust_credit_limit FROM customers
WHERE (UPPER(cust_last_name) LIKE ‘A%’ OR
UPPER (cust_last_name) LIKE ‘B%’ OR UPPER (cust_last_name) LIKE ‘C%’)
AND cust_credit_limit < 10000;
SQL>SELECT cust_last_name, cust_credit_limit FROM customers
WHERE UPPER (cust_last_name) BETWEEN ‘A’ AND ‘C’
AND cust_credit_limit < 10000;
Which statement is true regarding the execution of the above queries?
    A. Only the second query gives the correct result
    B. Both execute successfully but do not give the required result
    C. Only the first query gives the correct result
    D. Both execute successfully and give the same result
Answer(s): C
QUESTION: 196
Evaluate the following CREATE TABLE commands:
CREATE_TABLE orders
(ord_no NUMBER (2) CONSTRAINT ord_pk PRIMARY KEY,
ord_date DATE,
cust_id NUMBER (4));
CREATE TABLE ord_items
(ord _no NUMBER (2),
item_no NUMBER(3),
qty NUMBER (3) CHECK (qty BETWEEEN 100 AND 200),
expiry_date date CHECK (expiry_date> SYSDATE),
CONSTRAINT it_pk PRIMARY KEY (ord_no, item_no),
CONSTARAINT ord_fk FOREIGN KEY (ord_no) REFERENCES orders (ord_no) );
Why would the ORD_ITEMS table not get created?
    A. SYSDATE cannot be used with the CHECK constraint.
    B. The BETWEEN clause cannot be used twice for the same table.
    C. The CHECK constraint cannot be placed on columns having the DATE data type.
    D. ORD_NO and ITEM_NO cannot be used as a composite primary key because ORD_NO is also the FOREIGN KEY.
Answer(s): A
QUESTION: 197
View the Exhibit and examine the structure of the PRODUCT table.
Table PRODUCTS
Name
Null?
Type
PRODJD
NOT NULL
NUMBER(6)
PROD.NAME
NOT NULL
VARCHAR2(50)
PROD-DESC
NOT NULL
VA R CHA R2(4000)
PROD_CATEGORY
NOT NULL
VARCHAR2(50)
P ROD-CATEGORY JD
NOT NULL
NUMBER
PROD-UNIT-OF-MEASURE

VARCHAR2(20)
SUPPLIERJD
NOT NULL
NUMBERS)
PROD_STATUS
NOT NULL
VARCHAR2(20)
PROD_LIST_PRICE
NOT NULL
NUMBER(8,2)
PROD-MIN-PRICE
NOT NULL
NUMBER(8,2)
Which two tasks would require subqueries? (Choose two.)
    A. display all products whose minimum list price is more than the average list price of products having the status ‘orderable’
    B. display the total number of products supplied by supplier 102 and have product status as ‘OBSOLETE’
    C. display the number of products whose list prices are more than the average list price
    D. display all suppliers whose list price is more than 1000
    E. display the minimum list price for each product status
Answer(s): A, C
QUESTION: 198
Examine the structure of the EMPLOYEES table:
Name
Null?
Type
EMPLOYEE ID
NOT NULL
NUMBER (6)
FIRST NAME

VARCHAR2 (20)
LAST NAME
NOT NULL
VARCHAR2 (25)
EMAIL
NOT NULL
VARCHAR2 (25)
PHONE NUMBER

VARCHAR2 (20)
HIRE DATE
NOT NULL
DATE
JOB ID
NOT NULL
VARCHAR2 (10)
SALARY

NUMBER (8,2)
COMISSION_PCT

NUMBER (2,2)
MANAGER ID

NUMBER (6)
DEPARTMENT ID

NUMBER (4)

There is a parent/child relationship between EMPLOYEE_ID and MANAGER_ID.
You want to display the name, joining date, and manager for all employees. Newly hired employees are yet to be assigned a department or a manager. For them, ‘No Manager’ should be displayed in the MANAGER column.
Which SQL query gets the required output?
    A. SELECT e.last_name, e.hire_date, NVL(m.last_name, ‘No Manager’) Manager
FROM employees e JOIN employees m
ON (e.manager_id = m.employee_id);
    B. SELECT e.last_name, e.hire_date, NVL(m.last_name, ‘No Manager’) Manager
FROM employees e LEFT OUTER JOIN employees m
ON (e.manager_id = m.employee_id);
    C. SELECT e.last_name, e.hire_date, NVL(m.last_name, ‘No Manager’) Manager
FROM employees e RIGHT OUTER JOIN employees m
ON (e.manager_id = m.employee_id);
D. SELECT e.last_name, e.hire_date, NVL(m.last_name, ‘No Manager’) Manager FROM employees e NATURAL JOIN employees m
ON (e.manager_id = m.employee_id).
Answer(s): B
QUESTION: 199
View the Exhibit and examine the structure of ORDERS and CUSTOMERS tables.


There is only one customer with the cust_last_name column having value Roberts. Which INSERT statement should be used to add a row into the ORDERS table for the customer whose CUST_LAST_NAME is Roberts and CREDIT_LIMIT is 600?
    A. Insert into orders VALUES(1, '10—mar-2007', 'direct', (SELECT customer_id FROM customers WHERE cust_last_name='Roberts' AND credit_limit=600), 1000);
    B. INSERT INTO orders (order_id, order_data, order_mode, (SELECT customer_id
FROM customers
WHERE cust_iast_name='Roberts' AND
credit_limit=§OQ) , order_total)
VALUES (1, ' 10—mar-2007' , 'direct', &&customer_id, 100.0);
    C. INSERT INTO(SELECT o.order_id, o.order_date, o.order_mode, c.customer_id, o.order_total FROM orders o, customers c WHERE o.customer_id = c.pustomer_id
AND c.cust_last_name='Roberts' AND c.credit_limit=600 )
VALUES (1, ' 10—mar-2007', 'direct', (SELECT cus.tomer_id FROM customers WHERE cust last_name='Roberts' AND . credit_limit=600) , 1000);
    D. INSERT INTO orders (order_id, order data, order_mode, (SELECT customer_id t
FROM customers
WHERE cust_last_name='Roberts' AND credit_limit=600), order_totai)
VALUES (1, '10-mar-2007', 'direct', &customer_id, 1000).
    A. Option A
    B. Option B
    C. Option C D. Option D
Answer(s): A
QUESTION: 200
View the Exhibit and examine the data in EMP and DEPT tables.
DEPT
DEPTNO
DEPTNAME
10
IT
20
HR

EMP
EMPNO
ENAME
DEPTNO
1
KING
10
2
HARI
20

In the DEPT table, DEPTNO is the PRIMARY KEY.
In the EMP table, EMPNO is the PRIMARY KEY and DEPTNO is the FOREIGN KEY referencing the DEPTNO column in the DEPT table.
What would be the outcome of the following statements executed in the given sequence?
DROP TABLE emp;
FLASHBACK TABLE emp TO BEFORE DROP;
INSERT INTO emp VALUES (2, ‘SCOTT’, 10);
INSERT INTO emp VALUES (3, ‘KING’, 55);
    A. Both the INSERT statements would fail because the constraints are automatically retrieved when the table is flashed back.
    B. Both the INSERT statements would succeed because none of the constraints on the table are automatically retrieved when the table is flashed back.
    C. Only the first INSERT statement would succeed because all constraints except the primary key constraint are automatically retrieved after a table is flashed back.
    D. Only the SECOND INSERT statement would succeed because all the constraints except referential integrity constraints that reference other tables are retrieved automatically after the table is flashed back.
Answer(s): D
QUESTION: 201
Which three tasks can be performed by DDL statements?
    A. providing an alternative name for a table
    B. modifying a table to prevent data that violate certain conditions from being entered in a column
    C. preventing any data modification to a table
    D. preventing data retrieval from a table outside of office hours
    E. creating multiple savepoints to enable partial rollback of a transaction
Answer(s): A, B, C
QUESTION: 202
View the Exhibit and examine the structure of the ORDER_ITEMS and ORDERS tables.

You are asked to retrieve the ORDER_ID, product_ID, and total price (UNIT_PRICE multiplied by QUANTITY), where the total price is greater than 50,000.

You executed the following SQL statement:
SELECT prder_id, product_id, unit_price*quantity “Total Price”
FROM order_items
WHERE unit_price*quantity > 50000
NATURAL JOIN orders;
Which statement is true regarding the execution of the statement?
    A. The statement would execute and provide the desired result.
    B. The statement would not execute because the ON keyword is missing in the NATURAL JOIN clause.
    C. The statement would not execute because the WHERE clause is before the NATURAL JOIN clause.
    D. The statement would not execute because the USING keyword is missing in the NATURAL JOIN clause.
Answer(s): C
QUESTION: 203
Which two statements are true regarding operators used with subqueries? (Choose two.)
    A. The NOT IN operator is equivalent to IS NULL.
    B. The <ANY operator means less than the maximum.
    C. =ANY and =ALL operators have the same functionality.
    D. The IN operator cannot be used in single-row subqueries.
    E. The NOT operator can be used with IN, ANY and ALL operators.
Answer(s): B, E
QUESTION: 204
Examine the structure of the SHIPMENTS table:
Name

Hull?
Type

PO ID

^■NOT NULL
NUMBER
(3)
PO DATE

NOT NULL ■
DATE

SHIPMENT
DATE
NOT NULL
DATE

SHIPMENT
SHIPMENT
MODE
_COST
X %
VARCHAR2 (30)
NUMBER (8,2)

You want to generate a report that displays the SHIPMENT_DATE is later than one month from Evaluate the following two queries:
SQL> SELECT poid, CASE
WHEN MONTHS BETWEEN (shipment_date,po_date)>1 THEN
TO_CHAR ((shipment_date - po_date) * 20) ELSE 'No Penalty' END PENALTY FROM shipments;
SQL>SELECT po_id, DECODE (MONTHS_BETWEEN (po_date, shipment—date)>1, TO—CHAR ((shipment—date - po_date}, * 20) 'No Penalty' PENALTY FROM shipments;
PO_ID and the penalty amount to be paid if the the PO_DATE. The penalty is $20 per day. Which statement is true regarding the above commands?
    A. Both execute successfully and give correct results.
    B. Only the first query executes successfully but gives a wrong result.
    C. Only the first query executes successfully and gives the correct result.
    D. Only the second query executes successfully but gives a wrong result.
    E. Only the second query executes successfully and gives the correct result.
Answer(s): C
QUESTION: 205
Examine the structure and data in the PRICE_LIST table:
Name
Null?
Type
PROD
ID	NOT NULL
NUMBER (3)
PROD_
PRICE
VARCHAR2 (10)
PROD
ID	PROD PRICE

100
$234.55

101
$6,509.75

102
$1,234


You plan to give a discount of 25% on the product price and need to display the discount amount in the same format as the PROD_PRICE.
Which SQL statement would give the required result?
A. SELECT TO_CHAR (prod_price* .25, ‘$99,999.99’)
FROM PRICE_LIST
B. SELECT TO_CHAR (TO_NUMBER(prod_price) * .25, ‘$99,999.00’)
FROM PRICE_LIST
C. SELECT TO_CHAR (TO_NUMBER(prod_price, ‘$99,999.99’) * . 25, ‘$99,999.00’)
FROM PRICE_LIST
D. SELECT TO_NUMBER (TO_NUMBER(prod_price, ‘$99,999.99’) * . 25, ‘$99,999.00’)
FROM PRICE_LIST
Answer(s): C
QUESTION: 206
View the Exhibit and examine the data in the PRODUCTS table.
PRODUCTS
PRODUCT ID
PRODUCT NAME
3054
Plasma Monitor
1782
Compact 400/DQ
1791
Industrial 700/HD
2302
Inkjet B/6
2459
LaserPro 1200/8/BW

Which statement would add a column called PRICE, which cannot contain NULL?
    A. ALTER TABLE products
ADD price NUMBER(8,2) NOT NULL;
    B. ALTER TABLE products
ADD price NUMBER(8,2) DEFAULT NOT NULL;
    C. ALTER TABLE products
ADD price NUMBER(8,2) DEFAULT 0 NOT NULL;
    D. ALTER TABLE products
ADD price NUMBER(8,2) DEFAULT CONSTRAINT p_nn NOT NULL.
Answer(s): C
QUESTION: 207
The customers table has the following structure:
Name
Null?
Type
CUST ID
NOT NULL
NUMBER
CUST FIRST NAME
NOT NULL
VARCHAR2(20)
CUST LAST NAME
NOT NULL
VARCHAR2 (30)
CUST INCOME LEVEL

VARCHAR2(30)
CUST_CREDIT_LIMIT

NUMBER
You need to write a query that does the following tasks:
1. Display the first name and tax amount of the customers. Tax is 5% of their credit limit.
2. Only those customers whose income level has a value should be considered.
3. Customers whose tax amount is null should not be considered.

Which statement accomplishes all the required tasks?
    A. SELECT cust_first_name, cust_credit_limit * .05 AS TAX_AMOUNT FROM customers
WHERE cust_income_level IS NOT NULL AND tax_amount IS NOT NULL;
    B. SELECT cust_first_name, cust_credit_limit * .05 AS TAX_AMOUNT FROM customers ■
WHERE cust_income_level IS NOT NULL AND cust_credit_limit IS NOT NULL;
    C. SELECT cust_first_name, cust_credit_limit * .05 AS TAX_AMOUNT FROM customers
WHERE cust_income_level <> NULL AND tax_amount <> NULL;
    D. SELECT cust_first_name, cust_credit_limit * .05 AS TAX_AMOUNT FROM customers
WHERE (cust_income_level, tax_amount) IS NOT NULL;|
A. Option A B. Option B C. Option C D. Option D
Answer(s): B
QUESTION: 208
View the Exhibit and examine the structure of the SALES table.
Table SALES
Name
Null?
Type
PROD-ID
NOTNULL
NUMBER
CUST J D
NOTNULL
NUMBER
TIMEJD
NOT NULL
DATE
CHANNELJD
NOTNULL
NUMBER
PROMOJD
NOT NULL
NUMBER
QUANTITY-SOLD
NOT NULL
NUMBER(10,2)

The following query is written to retrieve all those product IDs from the SALES table that have more than 55000 sold and have been ordered more than 10 items.
SQL> SELECT prod_id
FROM sales
WHERE quantity_sold > 55000 AND COUNT(*)>10
GROUP BY prod_id
HAVING COUNT(*)>10;
Which statement is true regarding this SQL statement?
    A. It executes successfully and generates the required result.
    B. It produces an error because COUNT (*) should be specified in the SELECT clause also.
    C. It produces an error because COUNT (*) should be only in the HAVING clause and not in the WHERE clause.
    D. It executes successfully but produces no result because COUNT (prod_id) should be used instead of COUNT (*).
Answer(s): C
QUESTION: 209
View the Exhibit and examine the description for the PRODUCTS and SALES table.

PROD_ID is a primary key in the PRODUCTS table and foreign key in the SALES table with ON DELETE CASCADE option. The SALES table contains data for the last three years. You want to remove all the rows from the PRODUCTS table for which no sale was done for the last three years.
Which is the valid DELETE statement?
h. DELETE
FROM products
WHERE prod_id = (SELECT prod_id
FROM sales
WHERE time_id - 3*365 = SYSDATE );
    B. DELETE
FROM products
WHERE prod_id = (SELECT prod_id FROM sales
WHERE SYSDATE >= time_id - 3*365 )
    C. DELETE
FROM products
WHERE prod_id IN (SELECT prod_id FROM sales
WHERE SYSDATE - 3*365 >= time_id);
    D. DELETE
FROM products
WHERE prod_id IN (SELECT prod_id FROM sales
WHERE time_id >= SYSDATE - 3*365 )
    A. Option A
    B. Option B
    C. Option C
    D. Option D
Answer(s): C
QUESTION: 210
Examine the data in the CUST_NAME column of the CUSTOMERS table.
CUST NAME
Lex De Haan
Renske Ladwig
Jose Manuel Urman
Jason Mallin
You want to extract only those customer names that have three names and display the * symbol in place of the first name as follows:
CUST NAME *** De Haan
*** Manuel Urman
Which two queries give the required output?
A. SELECT LPAD(SUBSTR(cust_name, INSTR(cust_name, ' ')),LENGTH(cust_name),'*') “CUST NAME”
FROM customers
WHERE INSTR(cust_name, ' ',1,2)<>0;
B. SELECT LPAD(SUBSTR(cust_name, INSTR(cust_name, ' ')),LENGTH(cust_name),'*') “CUST NAME”
FROM customers
WHERE INSTR(cust_name, ' ',-1,2)<>0;
C. SELECT LPAD(SUBSTR(cust_name, INSTR (cust_name ' ')),LENGTH(cust_name) -
INSTR(cust_name, ' '), '*') “CUST NAME”
FROM customers
WHERE INSTR(cust_name, ' ',1,-2)<>0;
D. SELECT LPAD(SUBSTR(cust_name, INSTR (cust_name ' ')),LENGTH(cust_name) -
INSTR(cust_name, ' '), '*') “CUST NAME”
FROM customers
WHERE INSTR(cust_name, ' ',1,2)<>0;
Answer(s): A, B
QUESTION: 211
View the Exhibit and examine the structure of the BOOKS table.
SQL> DESC books
Name	; Null? Type
Book_ID	NOT NULL CHAR(6)
TITLE	NOT NULL VARCHAR2 (100)
PUBLISHER	VARCHAR2 (4)
AUTHOR_ID	VARCHAR2 (50)
The BOOKS table contains details of 100 books.
Examine the commands executed and their outcome:
SQL>INSERT INTO books VALUES ('ADV112', 'Adventures of Tom Sawyer7, null, null); 1 row created.
SQL> SAVEPOINT A;
Savepoint created.
SQL>DELETE FROM books; 101 row's deleted.
SQL>ROLLBACK TO SAVEPOINT A;
Rollback complete.
SQL>ROLLBACK;
Rollback complete.
Which statement is true?
    A. Both ROLLBACK commands restore the 101 rows that were deleted.
    B. Both ROLLBACK commands restore the 100 rows that were deleted.
    C. The first rollback restores the 101 rows that were deleted and the second rollback causes the row was inserted to be deleted and commits the changes.
    D. The first rollback restores the 100 rows that were deleted and the second rollback commits only the changes.
Answer(s): C
QUESTION: 212
Which statement is true about the Oracle SQL, DELETE and TRUNCATE statements?
    A. DELTE and TRUNCATE statements can have a rollback done to restore data into a table.
    B. DELETE and TRUNCATE statements remove all indexes for the tables on which they are performed.
    C. DELETE but not TRUNCATE statement can be used to remove data from selective columns and rows of a table.
    D. DELETE but not TRUNCATE statement can be used to selectively remove rows from a table.
Answer(s): D
QUESTION: 213
View the Exhibit and examine the description of the EMPLOYEES table.

Evaluate the following SQL statement:
SELECT first_name, employee_id, NEXT_DAY(ADD_MONTHS(hire_date, 6), 1) “Review” FROM employees;
The query was written to retrieve the FIRST_NAME, EMPLOYEE_ID, and review date for employees. The review date is the firsts Monday after the completion of six months of the hiring. The NLS_TERRITORY parameter is set to AMERICA in the session.
Which statement is true regarding this query
    A. The query would execute to give the desired output.
    B. The query would not execute because date functions cannot be nested.
    C. The query would execute but the output would give review dates that are Sundays.
    D. The query would not execute because the NEXT_DAY function accepts a string as argument.
Answer(s): C
QUESTION: 214
View the Exhibit and examine the structure of the CUSTOMERS table.
CUSTOMERS
Name
Null?
Type
CUSTOMER_ID
NOT NULL
NUMBER(6)
CUST_NAME

VARCHAR2(20)
CUST_EMAIL
-v
VARCHAR2(30)
INCOME_LEVEL

VARCHAR2(20)

CUSTOMER_VU is a view based on CUSTOMERS_BR1 table which has the same structure as CUSTOMERS table.
MERGE INTO customers c
USING customer_vu	cv
ON (c.customer id = cv.customer id) WHEN MATCHED THEN UPDATE SET c.customer_id = c.cust_name = c c.cust_email = c.income_level = cv.incdme_level WHEN NOT MATCHED THEN
INSERT VALUES(cv.customer_id,cv.cust_name,cv.cust WHERE cv.income level >100000; •
CUSTOMERS need to be updated to reflect the latest information about the customers. What is the error in the following MERGE statement?
    A. The CUSTOMER_ID column cannot be updated.
    B. The INTO clause is misplaced in the command.
    C. The WHERE clause cannot be used with INSERT.
    D. CUSTOMER_VU cannot be used as a data source.
Answer(s): A
QUESTION: 215
Evaluate the following SQL statement:
SQL> SELECT promo_id, promo_category
FROM promotionsd
WHERE promo_category = 'Internet' ORDER BY 2 DESC
UNION
SELECT promo_id, promo_category
FROM promotions
WHERE promo_category = 'TV'
UNION
SELECT promo_id, promo_category
FROM promotions
WHERE promo_category ='Radio';
Which statement is true regarding the outcome of the above query?
    A. It executes successfully and displays rows in the descending order of PROMO_CATEGORY.
    B. It produces an error because positional notation cannot be used in the ORDER BY clause with SET operators.
    C. It executes successfully but ignores the ORDER BY clause because it is not located at the end of the compound statement.
    D. It produces an error because the ORDER BY clause should appear only at the end of a compound query-that is, with the last SELECT statement.
Answer(s): D
QUESTION: 216
View the Exhibit and examine the structure of the ORDERS table. The columns ORDER_MODE and ORDER_TOTAL have the default values ‘direct’ and 0 respectively.
ORDERS
Name
Null?
Type
ORDER_ID
NOT NULL
NUMBER(12)
ORDER_DATE
NOT NULL
TIMESTAMP (6)
ORDER_MODE

VARCHAR2(8)
CUSTOMER_ID
NOT NULL
NUMBER(6)
ORDER_TOTAL

NUMBER(8,2)

Which two INSERT statements are valid? (Choose two.)
    A. INSERT INTO orders
VALUES (1,'09-mar-2007', 'online','', 1000);
    B. INSERT INTO orders
(order_id,order_date,order_mode, (customer_id,order_total)
VALUES (1,TO_DATE(NULL), 'online', 1Q1, NULL);
    C. INSERT INTO
(SELECT order_id,order_date,customer_id FROM orders)
VALUES (1,'09-mar-2007', 101);
    D. insert into orders
VALUES (1,'09-mar-2007', DEFAULT, 101, DEFAULT);
    E. INSERT INTO orders
(order_id,order_date,order_mode,order_total)
VALUES (1,'10-mar-2007', 'online',1000);
    A. Option A
    B. Option B
    C. Option C
    D. Option D
    E. Option E
Answer(s): C, D
QUESTION: 217
Which two statements are true? (Choose two.)
    A. The USER_SYNONYMS view can provide information about private synonyms.
    B. The user SYSTEM owns all the base tables and user-accessible views of the data dictionary.
    C. All the dynamic performance views prefixed with v$ are accessible to all the database users.
    D. The USER_OBJECTS view can provide information about the tables and views created by the user who queries the view.
    E. DICTIONARY is a view that contains the names of all the data dictionary views that the user can access.
Answer(s): A, D
QUESTION: 218
What is the primary difference between the relational database (RDB) and object-oriented database (OODB) models?
    A. OODB supports multiple objects in the same database, whereas RDB supports only tables.
    B. RDB supports only E.F. Codd’s rules, whereas OODB does not support them.
    C. OODB incorporates methods with data structure definition, whereas RDB does not allow this.
    D. RDB allows the definition of relationships between different tables, whereas OODB does not allow this.
Answer(s): C
QUESTION: 219
Examine the command to create the BOOKS table.
SQL>CREATE TABLE books
(book id	CHAR(6) PRIMARY KEY,
title	VARCHAR2 (100) NOT NULL,
publisher_id VARCHAR2(4), author_id	VARCHAR2(50));
The BOOK_ID value 101 does not exist in the table.
Examine the SQL statement:
ISQL> INSERT INTO books (BOOK_ID, TITLE, AUTHOR_ID) VALUES ('101*, 'LEARNING SQL*, 'Tim Jones');
Which statement is true?
    A. It executes successfully and the row is inserted with a rule PUBLISHER_ID.
    B. It executes successfully only if NULL is explicitly specified in the INSERT statement.
    C. It executes successfully only if the PUBLISHER_ID column name is added to the columns list in the INSERT statement.
    D. It executes successfully only if the PUBLISHER_ID column name is added to the columns list and NULL is explicitly specified in the INSERT statement.
Answer(s): A
QUESTION: 220
You need to list the employees in DEPARTMENT_ID 20 days in a single row, ordered by HIRE_DATE.
Examine the sample output:
Emp_list	. \	Earliest
Raphaely; Khoo; Tobias; Baida; 07-DEC-02 Himuro; Colmenares
Which query will provide the required output?
    A. SELECT LISTAGG(last_name)
WITHIN GROUP ORDER BY (hire_date) "Emp_list", MIN(hire_date) "Earliest" FROM employees
WHERE department_id = 30;
    B. SELECT LISTAGG(last_name, ')
WITHIN GROUP ORDER BY (hire_date) "Emp_list", MIN(hire_date) "Earliest" FROM employees
WHERE department_id = 30;
C. SELECT LISTAGG(last_name, '; ') "Emp_list", MIN(hire_date) "Earliest" FROM employees
WHERE department_id = 30;
WITHIN GROUP ORDER BY (hire_date);
D. SELECT LISTAGG(last_name, '; ') "Emp_list", MIN(hire_date) "Earliest" FROM employees
WHERE department_id = 30;
ORDER BY (hire_date);
    A. Option A
    B. Option B
    C. Option C
    D. Option D
Answer(s): B
QUESTION: 221
Examine the structure of the DEPARTMENTS table.
Name
Null?
Type
DEPARTMENT_ID
NOT NULL
NUMBER(4)
DE PARTMENT_NAME
NOT NULL
VARCHAR2(30)
MANAGER_ID

NUMBER(6)
LOCATION_ID

NUMBER(4)
COUNTRY

VARCHAR2(20)

You execute the following command:
ISQL> ALTER TABLE departments
SET UNUSED (country);
Which two statements are true?
    A. Synonyms existing of the DEPARTMENTS table would have to be re-created.
    B. Unique key constraints defined on the COUNTRY column are removed.
    C. Views created in the DEPARTMENTS table that include the COUNTRY column are automatically modified and remain valid.
    D. Indexes created on the COUNTRY column exist until the DROP UNUSED COLUMNS command is executed.
    E. A new column, COUNTRY, can be added to the DEPARTMENTS table after executing the command.
Answer(s): B, E
QUESTION: 222
View the exhibit and examine the description of SALES and PROMOTIONS tables.


You want to delete rows from the SALES table, where the PROMO_NAME column in the PROMOTIONS table has either blowout sale or everyday low price as values.
Which three DELETE statements are valid? (Choose three.)
    A. DELETE
FROM sales
WHERE promo_id = (SELECT promo_id
FROM promo_name = 'blowout sale')
AND promo_id = (SELECT promo_id
FROM promotions
WHERE promo_name = 'everyday low price') FROM promotions-	>
WHERE promo_najne = 'everyday low pride' )i?
    B. DELETE
FROM sales	vS1-
WHERE promo_id = (SELECT promo_id
FROM promotions 1\,
WHERE promo_name = 'blowout sale')
OR promo_id = (SELECT promovid ■\	- S
FROM promotions
WHERE promo_name = 'everyday low price')
    C. DELETE	(/
FROM sales
WHERE promo_id = (SELECT promo_id
FROM promotiotfs<	, t
WHERE promo_name/ ■= 'blowout sale') OR promo_name = 'everyday low price');
    D. DELETE
FROM sales	Ay',
WHERE promo_id IN (SELECT promo_id
FROM promotions
WHERE promo_name IN = 'blowout sale','everyday low price'))
    A. Option A
    B. Option B
    C. Option C
    D. Option D
Answer(s): B, C, D
QUESTION: 223
You need to display the first names of all customers from the CUSTOMERS table that contain the character ‘e’ and have the character ‘a’ in the second last position.
Which query would give the required output?
    A. SELECT cust_first_name
FROM customers
WHERE INSTR(cust_first_name, 'e')<>0 AND SUBSTR(cust_first_name, -2, l)='a';
    B. SELECT cust first name — ■ /
FROM customers
WHERE INSTR(cust first name, 'e')<>" AND
SUBSTR(cust_first_name, -2, l)='a';
    C. SELECT cust_first_name
FROM customers
WHERE INSTR(cust_first_name, 'e')JS NOT NULL AND SUBSTR(cust_first_name, 1, -2)='a';
    D. SELECT cust_first_hame
FROM customers
WHERE INSTR(cust_first_name, 'e')<>0 AND SUBSTR(cust_first_name, LENGTH(cust_first_name), -2)='a'
    A. Option A
    B. Option B
    C. Option C
    D. Option D
Answer(s): A
QUESTION: 224
Examine the data in the ORD_ITEMS table:
ORD_ID
ITEN_NO
QTY
1
111
10
1
222
20
1
333
30
2
333
30
2
444
40
3
111
40

Evaluate this query:
SQL>SELECT item_no, AVG(qty)
FROM ord_items
HAVING AVG(qty) > MIN(qty) * 2 GROUP BY item_no;
Which statement is true regarding the result?
    A. It returns an error because the HAVING clause should be specified after the GROUP BY clause.
    B. It returns an error because all the aggregate functions used in the HAVING clause must be specified in the SELECT list.
    C. It displays the item nos with their average quantity where the average quantity is more than double the minimum quantity of that item in the table.
    D. It displays the item nos with their average quantity where the average quantity is more than double the overall minimum quantity of all the items in the table.
Answer(s): C
QUESTION: 225
Which two statements are true regarding the DELETE and TRUNCATE commands?
    A. DELETE can be used to remove rows from only one table in one statement.
    B. DELETE can be used to remove rows from multiple tables in one statement.
    C. DELETE can be used to remove rows only for tables that are parents for a child table that has a referential integrity constraint referring to the parent.
    D. DELETE can be used to remove data from specific columns as well as complete rows.
    E. DELETE and TRUNCATE can be used for tables that are parents for a child table that has a referential integrity constraint having an ON DELETE rule.
Answer(s): A, E
QUESTION: 226
The SQL statements executed in a user session are as follows:
SQL>
CREATE TABLE product

(pcode NUMBER(2),

pname VARCHAR(10));
SQL>
INSERT INTO product VALUES (1, 'pen');
SQL>
SQL>
INSERT INTO product VALUES (2, 'pencil');
SAVEPOINT a/?’	’•
SQL>
SQL>
UPDATE product SET pcode =10 WHERE pcode = 1 SAVEPOINT b;
SQL>
SQL>
DELETE FROM product WHERE pcode = 2 COMMIT;
SQL>
SQL>
DELETE FROM product WHERE pcode=10; ROLLBACK TO SAVEPOINT a;

Which two statements describe the consequences of issuing the ROLLBACK TO SAVE POINT a command in the session? (Choose two.)
    A. The rollback generates an error.
    B. No SQL statements are rolled back.
    C. Only the DELETE statements are rolled back.
    D. Only the second DELETE statement is rolled back.
    E. Both the DELETE statements and the UPDATE statement are rolled back.
Answer(s): A, B
QUESTION: 227
View the Exhibit and examine the structure of the PRODUCT_INFORMATION table.


You want to see the product names and the date of expiration of warranty for all the products, if the product is purchased today. The products that have no warranty should be displayed at the top and the products with maximum warranty period should be displayed at the bottom.
Which SQL statement would you execute to fulfill this requirement?
    A. SELECT product_name, SYSDATE+warranty_period AS "Warranty expire date" FROM product_information
ORDER BY SYSDATE-warranty_period
    B. SELECT product_name, SYSDATE+warranty_period AS "Warranty expire date" FROM product_information >
ORDER BY SYSDATE+warranty_p£riod
    C. SELECT product_name, SYSDATE+warranty_period AS "Warranty expire date" FROM product_information
ORDER BY SYSDATE
    D. SELECT product_name, SYSDATE+warranty_petiod AS "Warranty expire date" FROM product_information
WHERE warranty_period > SYSDATE
    A. Option A
    B. Option B
    C. Option C D. Option D
Answer(s): B
QUESTION: 228
Examine the description of the CUSTOMERS table:
Name
Null^
Type
CUST ID
NOT NULL
NUMBER
CUST FIRST NAME
NOT NULL
VARCHAR2(20)
CUST LAST NAME
NOT NULL
VARCHAR2 (30)
CUST INCOME LEVEL

VARCHAR2(30)
CUST_CREDIT_LIMIT

NUMBER
For customers whose income level has a value, you want to display the first name and due amount as 5% of their credit limit. Customers whose due amount is null should not be displayed.

Which query should be used?
A	A
SELECT cust_first_name, cust_credit_limit * .05 AS DUE_AMOUNT FROM customers
WHERE cust_income_level IS NOT NULL AND cust_credit_limit IS NOT NULL;
SELECT cust_first_name, cust_credit_limit * .05 AS DUE_AMOUNT FROM customers
WHERE cust_income_level ! = NULL -y; •	Ä
AND due_amount != NULL;	'■
C SELECT cust_first_name, cust_credit_limit * .05 AS DUE_AMOUNT FROM customers
WHERE cust_income_level IS NOT NULL
AND due_amount IS NOT NULL;
D SELECT cust_first_name, cust_credit_lrmit * .05 AS DUE_AMOUNT FROM customers
WHERE cust_income_level != NULL
AND cust_credit_level != NULL;
E SELECT cust_first_name, cust_credit_l±mit * .05 AS DUE_AMOUNT
FROM customers	<&
WHERE cust_income_level <> NULL
AND due amount <> NULL;
A. Option A B. Option B C. Option C
    D. Option D E. Option E
Answer(s): A
QUESTION: 229
Examine the description of the PRODUCT_DETAILS table:
PRODUCT_ID PRODUCT NAME PRODUCT_PRICE EXPIRY DATE
Which two statements are true?
    A. PRODUCT_PRICE contains the value zero by default if no value is assigned to it.
    B. PRODUCT_PRICE can be used in an arithmetic expression even if it has no value stored in it.
    C. EXPIRY_DATE cannot be used in arithmetic expressions.
    D. PRODUCT_ID can be assigned the PRIMARY KEY constraint.
    E. EXPIRY_DATE contains the SYSDATE by default if no date is assigned to it.
    F. PRODUCT_NAME cannot contain duplicate values.
Answer(s): C, F
QUESTION: 230
Which two are true about the data dictionary?
    A. The SYS user owns all base tables and user-accessible views in the data dictionary.
    B. All users have permissions to access all information in the data dictionary by default.
    C. The data dictionary is constantly updated to reflect changes to database objects, permissions, and data.
    D. All user actions are recorded in the data dictionary.
    E. Base tables in the data dictionary have the prefix DBA_.
Answer(s): A, E
Reference:
https://docs.oracle.com/cd/B28359_01/server.111/b28318/datadict.htm#CNCPT1215
QUESTION: 231
Which three statements are true about views in an Oracle Database?
    A. Views can join tables only if they belong to the same schema.
    B. A view can be created that refers to a non-existent table in its defining query.
    C. Views have no object number.
    D. Views have no segment.
    E. Rows inserted into a table using a view are retained in the table if the view is dropped.
    F. A SELECT statement cannot contain a WHERE clause when querying a view containing a
WHERE clause in its defining query.
Answer(s): A, B, C
Reference:
https://docs.oracle.com/cd/B28359_01/server.111/b28286/statements_8004.htm#SQLRF01504
https://community.oracle.com/thread/2178948
QUESTION: 232
Examine the description of the CUSTOMERS table:
Name	Null? V Type
CUST_ID	NOT NULL VARCHAR2(2)
CUST_LAST_NAME	’■	VARCHAR2(30)
CITY	\	. VARCHAR2(10)
CUST_CREDIT_LIMIT	NUMBER(6,2)
You need todisplaylast namesand credit limits of all customers whoselast name starts with A or B in lower or upper case, and whose credit limit is below 1000.
Examine this partial query:
SELECT cust_last_name, cust_credit_limit FROM customers
Which two WHERE conditions give the required result?
WHERE (INITCAP(cu3t_last_name) LIKE 'A%' OR INITCAP(cust_la3t_name) LIKE 'B%') AND cust_credit_limit < 1000;
B WHERE UPPER(cust_last_name) BETWEEN UPPER(*A%’ AND 'B%‘) AND ROUND(cust_credit_limit) < 1000;
c WHERE UPPER(cust_last_name) IN ('A%', 'B%')
AND cust credit limit < 1000;
D WHERE (UPPER(cust_last_name) LIKE 'AV OR UPPER(cust_last_name) LIKE 'BV) AND ROUND (cust_credit_liinit) < 1000;
E WHERE (UPPER(cust_last_name) LIKE INITCAP«'A') OR UPPER(cust_last_name) LIKE INITCAP('B'))
AND ROUND(cust_credit_limit) < ROUND(IOOO);
A. Option A B. Option B C. Option C D. Option D E. Option E
Answer(s): A, E
QUESTION: 233
Examine the data in the CUST_NAME column of the CUSTOMERS table:
CUST_NAME
Renske Ladwig
Jason Mallin
Samuel McCain
Allan MCEwen
Irene Mikkilineni
Julia Nayer
You want to display the CUST_NAME values where the last name starts with Mc or MC.
Which two WHERE clauses give the required result?
    A. WHERE SUBSTR (cust_name, INSTR (cust_name, ‘’) +1) LIKE ‘Mc%’
    B. WHERE INITCAP (SUBSTR (cust_name, INSTR(cust_name, ‘’)+1)) IN (‘MC%’, ‘Mc%)
    C. WHERE UPPER (SUBSTR (cust_name, INSTR(cust_name, ‘’)+1)) LIKE UPPER (‘MC%’)
    D. WHERE SUBSTR (cust_name, INSTR (cust_name, ‘’) +1) LIKE ‘Mc%’ OR ‘MC%’
    E. WHERE INITCAP (SUBSTR (cust_name, INSTR(cust_name, ‘’)+1)) LIKE ‘Mc%’
Answer(s): A, D
QUESTION: 234
Which three are true about the MERGE statement?
    A. It can combine rows from multiple tables conditionally to insert into a single table.
    B. It can merge rows only from tables.
    C. It can use subqueries to produce source rows.
    D. It can update, insert, or delete rows conditionally in multiple tables.
    E. It can update the same row of the target table multiple times.
    F. It can use views to produce source rows.
Answer(s): C, D, F
Reference:
https://www.oracletutorial.com/oracle-basics/oracle-merge/
QUESTION: 235
Which three actions can you perform only with system privileges?
    A. Query any table in a database.
    B. Log in to a database.
    C. Access flat files via a database, which are stored in an operating system directory.
    D. Truncate a table in another schema.
    E. Execute a procedure in another schema.
    F. Use the WITH GRANT OPTION clause.
Answer(s): A, B, F
QUESTION: 236
Which three are true about multitable INSERT statements?
    A. They can be performed on external tables using SQL* Loader.
    B. They can be performed on relational tables.
    C. They can be performed only by using a subquery.
    D. They can insert each computed row into more than one table.
    E. They can be performed on views.
    F. They can be performed on remote tables.
Answer(s): A, B, C
Reference:
https://www.akadia.com/services/ora_multitable_insert.html
QUESTION: 237
Examine the description of the SALES table:
Name
Null?
Type
PRODUCT ID
NOT NULL
NUMBER(10)
CUSTOMER_ID
NOT NULL
NUMBER(10)
TIME ID
NOT NULL
DATE
CHANNEL_ID
NOT NULL
NUMBER(5)
PROMO_ID
NOT NULL
NUMBER(5)
QUANTITY_SOLD
NOT NULL
NUMBER(10,2)
PRICE	V

NUMBER(10,2)
AMOUNT_SOLD
NOT NULL
NUMBER(10, 2)
The SALES table has 55,000 rows.



Examine this statement:
CREATE TABLE salesl (prod_id, cust_id, quantity_sold, price)
AS
SELECT product_id, customer_id, quantity_sold, price
FROM sales	\
WHERE 1=1;	' \
Which two statements are true?
    A. SALES1 has NOT NULL constraints on any selected columns which had those constraints in the SALES table.
    B. SALES1 is created with 55,000 rows.
    C. SALES1 has PRIMARY KEY and UNIQUE constraints on any selected columns which had those constraints in the SALES table.
    D. SALES1 is created with no rows.
    E. SALES1 is created with 1 row.
Answer(s): A, D
Reference:
https://www.oracle.com/a/ocom/docs/dc/ww-ou-5297-database2019-studyguide-5.pdf
QUESTION: 238
Which three statements are true about GLOBAL TEMPORARY TABLES?
    A. A GLOBAL TEMPORARY TABLE can have multiple indexes.
    B. A GLOBAL TEMPORARY TABLE cannot have a PUBLIC SYNONYM.
    C. A trigger can be created on a GLOBAL TEMPORARY TABLE.
    D. A GLOBAL TEMPORARY TABLE can be referenced in the defining query of a view.
    E. A GLOBAL TEMPORARY TABLE can have only one index.
    F. Data Manipulation Language (DML) on GLOBAL TEMPORARY TABLES generates no REDO.
Answer(s): C, D, F
Reference:
https://books.google.com.pk/books?id=oP88fSdbQJIC&pg=PA11&lpg=PA11&dq=oracle+database +GLOBAL+TEMPORARY+TABLES+Data+Manipulation+Language+(DML)+on+GLOBAL+TEMP ORARY+TABLES+generates+no+REDO&source=bl&ots=F7EL8Y0ST9&sig=ACfU3U1KuLlqyyJF xqAG1LRT4OxprsVZdg&hl=en&sa=X&ved=2ahUKEwi0xdPU94vlAhWp34UKHUYpBtAQ6AEwAH oECAkQAQ#v=onepage&q=oracle%20database%20GLOBAL%20TEMPORARY%20TABLES%2 0Data%20Manipulation%20Language%20(DML)%20on%20GLOBAL%20TEMPORARY%20TABL ES%20generates%20no%20REDO&f=false
QUESTION: 239
Which two statements are true about the results of using the INTERSECT operator in compound queries?
    A. INTERSECT ignores NULLs.
    B. Reversing the order of the intersected tables can sometimes affect the output.
    C. The number of columns in each SELECT in the compound query can be different.
    D. INTERSECT returns rows common to both sides of the compound query.
    E. Column names in each SELECT in the compound query can be different.
Answer(s): A, E
QUESTION: 240
Examine the description of the CUSTOMERS table:
Name	Null? ‘	Type


You must determine if any customers’ details have been entered more than once using a different CUSTNO, by listing all duplicate names.
Which two methods can you use to get the required result?
    A. LEFT OUTER JOIN with self join
    B. self join
    C. RIGHT OUTER JOIN with self join
    D. FULL OUTER JOIN with self join
    E. subquery
Answer(s): B, E
QUESTION: 241
Which CREATE TABLE statement is valid?
A CREATE TABLE ord_details
(ord_no NUMBER(2) PRIMARY KEY, item_no NUMBER(3) PRIMARY KEY, ord_date DATE NOT NULL);
B CREATE TABLE ord_details
(ord_no NUMBER(2) UNIQUE, NOT NULL, item_no NUMBER(3) , ord_date DATE DEFAULT SYSDATE NOT NULL);
C. CREATE TABLE ord_details
(ord_no NUMBER(2) ,
item_no NUMBER(3) ,
ord_date DATE DEFAULT NOT NULL, CONSTRAINT ord_uq UNIQUE (ord_no), CONSTRAINT ord_pk PRIMARY KEY (ord_no));
D CREATE TABLE ord_details
(ord_no NUMBER(2),
item_no NUMBER(3) ,
ord_date DATE DEFAULT SYSDATE NOT NULL, CONSTRAINT ord_pk PRIMARY KEY (ord_no, item_no))
    A. Option A
    B. Option B
    C. Option C
    D. Option D
Answer(s): D
QUESTION: 242
The SALES table has columns PROD_ID and QUANTITY_SOLD of data type NUMBER.
Which two queries execute successfully?
    A. SELECT prod_id FROM sales WHERE quantity_sold > 55000 GROUP BY prod_id HAVING COUNT(*) >10;
    B. SELECT prod_id FROM sales WHERE quantity_sold > 55000 AND COUNT(*) > 10 GROUP BY prod_id HAVING COUNT(*) >10;
    C. SELECT COUNT (prod_id) FROM sales WHERE quantity_sold > 55000 GROUP BY prod_id; D. SELECT prod_id FROM sales WHERE quantity_sold > 55000 AND COUNT(*) > 10 GROUP BY COUNT(*) >10;
E. SELECT COUNT(prod_id) FROM sales GROUP BY prod_id WHERE quantity_sold > 55000;
Answer(s): A, C
QUESTION: 243
Examine these statements executed in a single Oracle session:


Which three statements are true?
    A. The code for pen is 1.
    B. There is no row containing pencil.
    C. The code for fountain pen is 3.
    D. The code for pen is 10.
    E. There is no row containing fountain pen.
    F. There is no row containing pen.
Answer(s): A, B, C
QUESTION: 244
Which two are true about dropping columns from a table?
    A. A column drop is implicitly committed.
    B. A column that is referenced by another column in any other table cannot be dropped.
    C. A column can be removed only if it contains no data.
    D. Multiple columns can be dropped simultaneously using the ALTER TABLE command.
    E. A column must be set as unused before it is dropped from a table.
    F. A primary key column cannot be dropped.
Answer(s): D, F
Reference: https://oracle-base.com/articles/8i/dropping-columns
QUESTION: 245
You issued this command:
DROP TABLE hr.employees;
Which three statements are true?
    A. Views referencing HR.EMPLOYEES are dropped.
    B. All constraints defined on HR.EMPLOYEES are dropped.
    C. Sequences used to populate columns in the HR.EMPLOYEES table are dropped.
    D. The HR.EMPLOYEES table may be moved to the recycle bin.
    E. All indexes defined on HR.EMPLOYEES are dropped.
    F. Synonyms for HR.EMPLOYEES are dropped.
Answer(s): A, B, E
Reference:
https://docs.oracle.com/cd/B28359_01/server.111/b28310/tables010.htm#ADMIN01505
QUESTION: 246
The EMPLOYEES table contains columns EMP_ID of data type NUMBER and HIRE_DATE of data type DATE.
You want to display the date of the first Monday after the completion of six months since hiring.
The NLS_TERRITORY parameter is set to AMERICA in the session and, therefore, Sunday is the first day of the week.
Which query can be used?
    A. SELECT emp_id, NEXT_DAY (MONTHS_BETWEEN (hire_date, SYSDATE), 6) FROM employees;
    B. SELECT emp_id, NEXT_DAY(ADD_MONTHS(hire_date, 6), ‘MONDAY’) FROM employees;
    C. SELECT emp_id, ADD_MONTHS(hire_date, 6), NEXT_DAY(‘MONDAY’) FROM employees;
    D. SELECT emp_id, NEXT_DAY(ADD_MONTHS(hire_date, 6), 1) FROM employees;
Answer(s): B
Reference:
http://www.dba-oracle.com/t_add_months.htm
QUESTION: 247
Which two statements are true about date/time functions in a session where NLS_DATE_FORMAT is set to DD-MON-YYYY HH24:MI:SS?
    A. CURRENT_TIMESTAMP returns the same date as CURRENT_DATE.
    B. CURRENT_TIMESTAMP returns the same date and time as SYSDATE with additional details of fractional seconds.
    C. SYSDATE and CURRENT_DATE return the current date and time set for the operating system of the database server.
    D. SYSDATE can be used in expressions only if the default date format is DD-MON-RR.
    E. SYSDATE can be queried only from the DUAL table.
    F. CURRENT_DATE returns the current date and time as per the session time zone.
Answer(s): E, F
QUESTION: 248
Which three statements are true about the Oracle join and ANSI join syntax?
    A. The Oracle join syntax supports natural joins.
    B. The Oracle join syntax performs less well than the SQL:1999 compliant ANSI join syntax.
    C. The Oracle join syntax supports creation of a Cartesian product of two tables.
    D. The SQL:1999 compliant ANSI join syntax supports natural joins.
    E. The Oracle join syntax performs better than the SQL:1999 compliant ANSI join syntax.
    F. The Oracle join syntax only supports right outer joins.
    G. The SQL:1999 compliant ANSI join syntax supports creation of a Cartesian product of two tables.
Answer(s): A, D, G
Reference:
http://www.dba-oracle.com/oracle_tips_iso99_joins.htm
QUESTION: 249
View the Exhibit and examine the description of the tables.

You execute this SQL statement:
INSERT INTO sales VALUES (
23, 2300, SYSDATE,
(SELECT channel_id FROM channels
WHERE channal_desc = ’Direct Sales') 12, 1, 500);
Which three statements are true?
    A. The statement will execute successfully and a new row will be inserted into the SALES table.
    B. A product can have a different unit price at different times.
    C. The statement will fail because a subquery may not be contained in a VALUES clause.
    D. The statement will fail if a row already exists in the SALES table for product 23.
    E. A customer can exist in many countries.
    F. The SALES table has five foreign keys.
Answer(s): A, E, F
QUESTION: 250
Examine the description of the PRODUCT_STATUS table:
Name
Null?	Type
PROD_ID
STATUS
NOT NULL	NUMBER(2)
NOT NULL	VARCHAR2(15)

The STATUS column contains the values ‘IN STOCK’ or ‘OUT OF STOCK’ for each row.
Which two queries will execute successfully?
A SELECT prod_id "CURRENT AVAILABILITY" |J q'('s not available)’ FROM product_status WHERE status = 'OUT OF STQCK';
B SELECT prod_id II q'('s not available)' "CURRENT AVAILABILITY" FROM product_status WHERE status « 'OUT OF STOCK'»
    C. SELECT pxod_id I I q’ ('s not available)' FROM product_status WHERE status = 'OUT OF STOCK';
    D. SELECT prod_id I I q"'s not available" FROM product_status WHERE status = 'OUT OF STOCK';
E SELECT prod_id II q'(’s not available)' 'CURRENT AVAILABILITY' FROM product_status WHERE status = 'OUT OF STOCK';
    F. SELECT prod_id q's not available” FROM product_status WHERE status = 'OUT OF STOCK';
A. Option A B. Option B C. Option C
D. Option D E. Option E
F. Option F
Answer(s): B, E
QUESTION: 251
Examine the description of the CUSTOMERS table:
Null? Type
NOT NULL VARCHAR2I6)
VARCHAR2(50)
NOT NULL VARCHAR2(50)
VARCHAR2(50)
VARCHAR2(25)
You want to display details of all customers who reside in cities starting with the letter D followed by at least two characters. Which query can be used?
    A. SELECT * FROM customers WHERE city = ‘D_%’;
    B. SELECT * FROM customers WHERE city LIKE ‘D_’;
    C. SELECT * FROM customers WHERE city LIKE ‘D_%’;
    D. SELECT * FROM customers WHERE city = ‘%D_’;
Answer(s): C
QUESTION: 252
Examine this SQL statement:
DELETE FROM employees e WHERE EXISTS
(SELECT 'dummy' FROM emp_history
WHERE employee_id = e.employee_id);
Which two are true?
    A. The subquery is not a correlated subquery.
    B. The subquery is executed before the DELETE statement is executed.
    C. The DELETE statement executes successfully even if the subquery selects multiple rows.
    D. The subquery is executed for every row in the EMPLOYEES table.
    E. All existing rows in the EMPLOYEES table are deleted.
Answer(s): B, D
QUESTION: 253
What is true about non-equijoin statement performance?
    A. The BETWEEN condition always performs less well than using the >= and <= conditions.
    B. The join syntax used makes no difference to performance.
    C. Table aliases can improve performance.
    D. The BETWEEN condition always performs better than using the >= and <= conditions.
    E. The Oracle join syntax performs better than the SQL:1999 compliant ANSI join syntax.
Answer(s): C
Reference:
https://www.academia.edu/17342225/SQL_notes
QUESTION: 254
Which three statements are true about multiple row subqueries?
    A. They can contain GROUP BY clauses.
    B. They can return multiple columns.
    C. Two or more values are always returned from the subquery.
    D. They can contain HAVING clauses.
    E. They cannot contain a subquery.
Answer(s): A, B, C
Reference:
https://www.w3resource.com/sql/subqueries/multiplee-row-column-subqueries.php
QUESTION: 255
Examine this description of the PRODUCTS table:
Name
Null?
Type
PROD ID
NOT NULL
NUMBER(2)
QTY

NUMBER(5,2)
COST

NUMBER(8,2)

You successfully execute this command:
Which two statements execute without errors?
A.
MERGE INTO new_prices n
USING (SELECT * FROM products WHERE cost > 150) p
ON (n.prod_id = p.prod_id) WHEN MATCHED THEN
UPDATE SET n.price = p.cost*.01
DELETE WHERE (p.cost < 2 00);
B.
MERGE INTO new_prices n
USING products p
ON (p.prod_id = n.prod_id)
WHEN NOT MATCHED THEN
INSERT (n.prod_id, n.price) VALUES (p.prod_id, cost*.01) WHERE (p.cost < 200);
C.
MERGE INTO new_prices n
USING (SELECT * FROM products WHERE cost > 150) p
ON (n.prod_id = p.prod_id)	'■
WHEN MATCHED THEN
DELETE WHERE (p.cost < 200)
WHEN NOT MATCHED THEN
INSERT (n.prod_id, n.price) VALUES (p.prod_id, p.cost*.01);
D.
MERGE INTO new_prices n
USING (SELECT * FROM products) p
WHEN MATCHED THEN
UPDATE SET n.price — p.cost*.01
WHEN NOT MATCHED THEN
INSERT (n.prod_id, n.price) VALUES (p.prod_id, cost*.01)
WHERE (p.cost < 200);
Answer(s): B
QUESTION: 256
In which three situations does a new transaction always start?
    A. when issuing a TRUNCATE statement after a SELECT statement was issued in the same session
    B. when issuing a CREATE INDEX statement after a CREATE TABLE statement completed successfully in the same session
    C. when issuing a CREATE TABLE statement after a SELECT statement was issued in the same session
    D. when issuing the first Data Manipulation Language (DML) statement after a COMMIT or ROLLBACK statement was issued in the same session
    E. when issuing a DML statement after a DML statement failed in the same session
    F. when issuing a SELECT FOR UPDATE statement after a CREATE TABLE AS SELECT statement was issued in the same session
Answer(s): D, E, F
Reference:
https://docs.oracle.com/cd/B19306_01/server.102/b14220/transact.htm
QUESTION: 257
View the Exhibit and examine the structure of the PRODUCT table.
Table PRODUCTS
Name
Null?
Type
PRODJD
NOT NULL
NUMBER(6)
PROD_NAME
NOTNULL
VARCHAR2(50)
PROD_DESC
NOTNULL
VARCHAR2(4000)
PROD_CATEGORY
NOTNULL
VARCHAR2(50)
P ROD_CATEGORY_ID
NOTNULL
NUMBER
PRODUNIT—OFMEASURE

VARCHAR2(20)
SUPPLIERJD
NOT NULL
NUMBER(6)
PROD_STATUS
NOTNULL
VARCHAR2(20)
PROD_LIST_PRICE
NOT NULL
NUMBER(8,2)
PROD-MIN-PRICE
NOTNULL
NUMBER(8,2)

Which two tasks would require subqueries? (Choose two.)
    A. display all products whose PROD_MIN_PRICE is more than the average PROD_LIST_PRICE of all products, and whose status is orderable
    B. display the total number of products supplied by supplier 102 and have product status as ‘OBSOLETE’
    C. display the number of products whose PROD_LIST_PRICE is more than the average PROD_LIST_PRICE.
    D. display suppliers whose PROD_LIST_PRICE is less than 1000
    E. display the minimum PROD_LIST_PRICE for each product status
Answer(s): A, C
QUESTION: 258
Which two statements are true regarding the COUNT function? (Choose two.)
    A. A SELECT statement using the COUNT function with a DISTINCT keyword cannot have a WHERE clause.
    B. COUNT(DISTINCT inv_amt) returns the number of rows excluding rows containing duplicates and NULLs in the INV_AMT column.
    C. COUNT(inv_amt) returns the number of rows in a table including rows with NULL in the INV_AMT column.
    D. COUNT(*) returns the number of rows including duplicate rows and rows containing NULL value in any column.
    E. It can only be used for NUMBER data types.
Answer(s): B, D
QUESTION: 259
Examine this statement:
SELECT 1 AS id, 'John' AS first_name
FROM dual
UNION
SELECT 1, ’John* AS name
FROM dual "
ORDER BY 1;	\
What is returned upon execution?
    A. 0 rows
    B. an error
    C. 1 row
    D. 2 rows
Answer(s): D
QUESTION: 260
Examine the description of the PRODUCT_INFORMATION table:
Name	Null? XType
PROD_ID	NOT NULL NUMBER(2)
PROD_NAME	'.	%. VARCHAR2(10)
LIST_PRICE	’ \ NUMBER(6,2)
Which query retrieves the number of products with a null list price?
    A. SELECT COUNT (DISTINCT list_price) FROM product_information WHERE list_price IS NULL;
    B. SELECT COUNT (list_price) FROM product_information WHERE list_price IS NULL;
    C. SELECT COUNT (list_price) FROM product_information WHERE list_price = NULL;
    D. SELECT COUNT(NVL(list_price, 0)) FROM product_information WHERE list_price IS NULL;
Answer(s): D
Reference:
https://www.oracletutorial.com/oracle-aggregate-functions/oracle-avg/
QUESTION: 261
Which statement is true about aggregate functions?
    A. The AVG function implicitly converts NULLS to zero.
    B. Aggregate functions can be nested to any number of levels.
    C. The MAX and MIN functions can be used on columns with character data types.
    D. Aggregate functions can be used in any clause of a SELECT statement.
Answer(s): B
Reference:
https://docs.oracle.com/database/121/SQLRF/functions003.htm
QUESTION: 262
Which three statements are true about time zones, date data types, and timestamp data types in an Oracle database?
    A. The DBTIMEZONE function can return an offset from Universal Coordinated Time (UTC).
    B. A TIMESTAMP data type column contains information about year, month, and day.
    C. The CURRENT_TIMESTAMP function returns data without time zone information.
    D. A TIMESTAMP WITH LOCAL TIMEZONE data type column is stored in the database using the time zone of the session that inserted the row.
    E. The SESSIONTIMEZONE function can return an offset from Universal Coordinated Time (UTC).
Answer(s): A, C, E
Reference: https://docs.oracle.com/database/121/NLSPG/ch4datetime.htm
QUESTION: 263
Which two commands execute successfully?
    • MANAGER is an existing role with no privileges or roles.
    • EMP is an existing role containing the CREATE TABLE privilege.
    • EMPLOYEES is an existing table in the HR schema.
    A. GRANT CREATE SEQUENCE TO manager, emp;
    B. GRANT CREATE ANY SESSION, CREATE ANY TABLE TO manager;
    C. GRANT SELECT, INSERT ON hr.employees TO manager WITH GRANT OPTION;
    D. GRANT CREATETABLE, emp TP manager;
    E. GRANT CREATE TABLE, SELECT ON hr.employees TO manager;
Answer(s): A, C
QUESTION: 264
Which statement is true about the INTERSECT operator used in compound queries?
    A. INTERSECT is of lower precedence than UNION or UNION ALL.
    B. Multiple INTERSECT operators are not possible in the same SQL statement.
    C. It ignores NULLs.
    D. It processes NULLs in the selected columns.
Answer(s): D
QUESTION: 265
Which statement is true regarding the default behavior of the ORDER BY clause?
    A. In a character sort, the values are case-sensitive.
    B. NULLs are not included in the sort operation.
    C. Only columns that are specified in the SELECT list can be used in the ORDER BY clause.
    D. Numeric values are displayed in descending order if they have decimal positions.
    E. Column aliases can be used in the ORDER BY clause.
Answer(s): A
Explanation:
The ORDER BY clause performs case sensitive sorting with character values.
QUESTION: 266
You execute this query:
SELECT TO_CHAR(NEXT_DAY(LAST_DAY(SYSDATE)/-'MON'), 'dd "Monday for" fnMonth rrrr’)
FROM DUAL; ”	~
What is the result?
    A. It returns the date for the first Monday of the next month.
    B. It returns the date for the last Monday of the current month.
    C. It executes successfully but does not return any result.
    D. It generates an error.
Answer(s): A
QUESTION: 267
Which two are true about granting privileges on objects?
    A. An object privilege can be granted to other users only by the owner of that object.
    B. An object privilege can be granted to a role only by the owner of that object.
    C. A table owner must grant the REFERENCES privilege to allow other users to create FOREIGN KEY constraints using that table.
    D. The owner of an object acquires all object privileges on that object by default.
    E. The WITH GRANT OPTION clause can be used only by DBA users.
Answer(s): C, D
Reference:
https://docs.oracle.com/cd/B19306_01/network.102/b14266/authoriz.htm#i1008214
QUESTION: 268
Which statement is true about TRUNCATE and DELETE?
    A. You can never TRUNCATE a table if foreign key constraints will be violated.
    B. For large tables TRUNCATE is faster than DELETE.
    C. For tables with multiple indexes and triggers DELETE is faster than TRUNCATE.
    D. You can never DELETE rows from a table if foreign key constraints will be violated.
Answer(s): B
Reference:
https://www.sqlservercentral.com/articles/difference-between-truncate-and-delete
QUESTION: 269
In the PROMOTIONS table, the PROMO_BEGIN_DATE column is of data type DATE and the default date format is DD-MON-RR.
Which two statements are true about expressions using PROMO_BEGIN_DATE contained a query?
    A. PROMO_BEGIN_DATE - 5 will return a date.
    B. PROMO_BEGIN_DATE - SYSDATE will return a number.
    C. TO_NUMBER(PROMO_BEGIN_DATE) - 5 will return a number.
    D. TO_DATE(PROMO_BEGIN_DATE * 5) will return a date.
    E. PROMO_BEGIN_DATE - SYSDATE will return an error.
Answer(s): B, D
QUESTION: 270
Which two statements are true about Oracle synonyms?
    A. A synonym can have a synonym.
    B. All private synonym names must be unique in the database.
    C. Any user can create a PUBLIC synonym.
    D. A synonym can be created on an object in a package.
    E. A synonym has an object number.
Answer(s): B, D
Reference:
https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_7001.htm
QUESTION: 271
Examine the description of the SALES1 table:
Name
Null
Type
SALES ID
NOT NULL
NUMBER
STORE_ID
NOT NULL
NUMBER
ITEMS ID

NUMBER
QUANTITY

NUMBER
SALES_DATE

\ DATE

SALES2 is a table with the same description as SALES1.
Some sales data is duplicated in both tables.
You want to display the rows from the SALES1 table which are not present in the SALES2 table.
Which set operator generates the required output?
    A. SUBTRACT
    B. INTERSECT
    C. UNION ALL
    D. UNION
    E. MINUS
Answer(s): E
QUESTION: 272
Examine this query:
SELECT 2 FROM dual d1 CROSS JOIN dual d2 CROSS JOIN dual d3;
What is returned upon execution?
    A. 8 rows
    B. 1 row
    C. 6 rows
    D. 3 rows
    E. 0 rows
    F. an error
Answer(s): B
QUESTION: 273
The PRODUCT_INFORMATION table has a UNIT_PRICE column of data type NUMBER (8, 2).
Evaluate this SQL statement:
SELECT TO_CHAR(unit_price, ‘$9,999’) FROM product_information;
Which two statements are true about the output?
    A. A row whose UNIT_PRICE column contains the value 1023.99 will be displayed as $1,024.
    B. A row whose UNIT_PRICE column contains the value 10235.99 will be displayed as $1,0236.
    C. A row whose UNIT_PRICE column contains the value 10235.99 will be displayed as #######.
    D. A row whose UNIT_PRICE column contains the value 10235.99 will be displayed as $1,023.
    E. A row whose UNIT_PRICE column contains the value 1023.99 will be displayed as $1,023.
Answer(s): C, E
QUESTION: 274
Examine the description of the BOOKS_TRANSACTIONS table:
Name	Null? Type
TRANSACTION_ID	NOT NULL VARCHAR2(6)
TRANSACTION-TYPE	%.	% VARCHAR2(3)
BORROWED_DATE	"%,	DATE
BOOK_ID	\	VARCHAR2(6)
MEMBER_ID	\	VARCHAR2(6)
Examine this partial SQL statement:
SELECT * FROM books_transactions
Which two WHERE conditions give the same result?
    A. WHERE borrowed_date = SYSDATE AND (transaction_type = ‘RM’ OR member_id IN (‘A101’, ‘A102’));
    B. WHERE (borrowed_date = SYSDATE AND transaction_type = ‘RM’) OR member_id IN (‘A101’, ‘A102’);
    C. WHERE borrowed_date = SYSDATE AND (transaction_type = ‘RM’ AND (member_id = A101’ OR member_id = ‘A102’));
    D. WHERE borrowed_date = SYSDATE AND transaction_type = ‘RM’ OR member_id IN (‘A101’, ‘A102’);
    E. WHERE borrowed_date = SYSDATE AND (transaction_type = ‘RM’ AND member_id = ‘A101’ OR member_id = ‘A102’);
Answer(s): B, C
QUESTION: 275
Which two statements are true about a self-join?
    A. It can be a left outer join.
    B. It must be a full outer join.
    C. It can be an inner join.
    D. It must be an equijoin.
    E. The join key column must have an index.
Answer(s): C, E
Reference:
https://www.oracletutorial.com/oracle-basics/oracle-self-join/
QUESTION: 276
You create a table by using this command:
CREATE TABLE rate_list (rate NUMBER(6,2));
Which two are true about executing statements?
    A. INSERT INTO rate_list VALUES (-10) produces an error.
    B. INSERT INTO rate_list VALUES (87654.556) inserts the value as 87654.6.
    C. INSERT INTO rate_list VALUES (0.551) inserts the value as .55.
    D. INSERT INTO rate_list VALUES (-99.99) inserts the value as 99.99.
    E. INSERT INTO rate_list VALUES (0.999) produces an error.
    F. INSERT INTO rate_list VALUES (-.9) inserts the value as -.9.
Answer(s): C, D
QUESTION: 277
Examine these SQL statements which execute successfully:
CREATE TABLE emp
(emp_no NUMBER(2) CONSTRAINT emp_emp_no_pk PRIMARY KEY, ename VARCHAR2(15), salary NUMBER(S,2), mgr_no NUMBKR(2));
ALTER TABLE emp ADD CONSTRAINT enrmgrfk
FOREIGN KEY (mgr^’h)
REFERENCES emp (emp	vX
ON DELFtrE SET NULL;
ALTER TABLE emp	X >1
DISABLE CONSTRAINT emp_emp_no_pkLv _ CASCADE;
ALTER TABLE emp
ENABLE CONSTRAINT emp_emp_no_pk;
Which two statements are true after execution?
    A. The foreign key constraint will be disabled.
    B. The primary key constraint will be enabled and DEFERRED.
    C. The foreign key constraint will be enabled and DEFERRED.
    D. The foreign key constraint will be enabled and IMMEDIATE.
    E. The primary key constraint will be enabled and IMMEDIATE.
Answer(s): B, D
QUESTION: 278
Which two statements are true about conditional INSERT ALL?
    A. Each WHEN condition is tested for each row returned by the subquery.
    B. The total number of rows inserted is always equal to the number of rows returned by the subquery.
    C. A single WHEN condition can be used for multiple INTO clauses.
    D. It cannot have an ELSE clause.
    E. Each row returned by the subquery can be inserted into only a single target table.
Answer(s): C, D
QUESTION: 279
Examine the description of the EMPLOYEES table:
VARCHAR2(40) NUMBER(2) NUMBER(8,2) DATE
Which query is valid?
    A. SELECT dept_id, MAX(AVG(salary)) FROM employees GROUP BY dept_id;
    B. SELECT dept_id, AVG(MAX(salary)) FROM employees GROUP BY dept_id;
    C. SELECT dept_id, join_date, SUM(salary) FROM employees GROUP BY dept_id, join_date;
    D. SELECT dept_id, join_date, SUM(salary) FROM employees GROUP BY dept_id;
Answer(s): D
QUESTION: 280
Which three statements are true about performing Data Manipulation Language (DML) operations on a view in an Oracle Database?
    A. Views cannot be used to add or modify rows in an underlying table if the defining query of the view contains the DISTINCT keyword.
    B. Views cannot be used to query rows from an underlying table if the table has a PRIMARY KEY and the PRIMARY KEY columns are not referenced in the defining query of the view.
    C. Views cannot be used to add rows to an underlying table if the table has columns with NOT NULL constraints lacking default values which are not referenced in the defining query of the view. D. The WITH CHECK clause has no effect when deleting rows from the underlying table through the view.
    E. Insert statements can always be done on a table through a view.
    F. Views cannot be used to add or modify rows in an underlying table if the defining query of the view contains aggregating functions.
Answer(s): B, C, F
QUESTION: 281
Which two statements are true about the ORDER BY clause when used with a SQL statement containing a SET operator such as UNION?
    A. Each SELECT statement in the compound query must have its own ORDER BY clause.
    B. Each SELECT statement in the compound query can have its own ORDER BY clause.
    C. Column positions must be used in the ORDER BY clause.
    D. The first column in the first SELECT of the compound query with the UNION operator is used by default to sort output in the absence of an ORDER BY clause.
    E. Only column names from the first SELECT statement in the compound query are recognized.
Answer(s): B, E
QUESTION: 282
Which three statements are true about Data Manipulation Language (DML)?
    A. UPDATE statements can have different subqueries to specify the values for each updated column.
    B. INSERT statements can insert NULLS explicitly into a column.
    C. DELETE statements can remove multiple rows based on multiple conditions.
    D. DML statements require a primary key be defined on a table.
    E. INSERT INTO.. .SELECT.. .FROM statements automatically commit.
Answer(s): A, C, E
QUESTION: 283
Examine the description of the BOOKS table:
Name	Null? Type
TRANSACTION_ID	NOT NULL VARCHAR2(6)
TRANSACTION_DATE	DATE
AMOUNT	NUMBER(10,2)
CUSTOMER_ID	\ VARCHAR2(6)
The table has 100 rows.
Examine this sequence of statements issued in a new session: INSERT INTO books VALUES ('ADV112’, ’Adventures of Tom Sawyer’, NULL, NULL);
SAVEPOINT a;	•	% . %
DELETE FROM books;	:-
ROLLBACK TO SAVEPOINT a;	\	„
ROLLBACK; Which two statements are true?
    A. The first ROLLBACK command restores the 101 rows that were deleted, leaving the inserted row still to be committed.
    B. The second ROLLBACK command replays the delete.
    C. The first ROLLBACK command restores the 101 rows that were deleted and commits the inserted row.
    D. The second ROLLBACK command undoes the insert.
    E. The second ROLLBACK command does nothing.
Answer(s): C, D
QUESTION: 284
Which three are true about privileges and roles?
    A. A role is owned by the user who created it.
    B. A role can contain a combination of several privileges and roles.
    C. System privileges always set privileges for an entire database.
    D. A user has all object privileges for every object in their schema by default.
    E. All roles are owned by the SYS schema.
    F. PUBLIC can be revoked from a user.
    G. PUBLIC acts as a default role granted to every user in a database.
Answer(s): B, D, G
Reference:
https://docs.oracle.com/cd/B19306_01/network.102/b14266/authoriz.htm#i1010570
QUESTION: 285
Examine this query:
SELECT employee_id, first_name, salary
FROM employees
WHERE hire_date > '&1' ;
Which two methods should you use to prevent prompting for a hire date value when this query is executed?
    A. Replace ‘&1’ with ‘&&1’ in the query.
    B. Use the DEFINE command before executing the query.
    C. Use the UNDEFINE command before executing the query.
    D. Execute the SET VERIFY ON command before executing the query.
    E. Store the query in a script and pass the substitution value to the script when executing it.
    F. Execute the SET VERIFY OFF command before executing the query.
Answer(s): D, E
QUESTION: 286
Which two statements are true about a full outer join?
    A. It includes rows that are returned by an inner join.
    B. It returns only unmatched rows from both tables being joined.
    C. It includes rows that are returned by a Cartesian product.
    D. It returns matched and unmatched rows from both tables being joined.
    E. The Oracle join operator (+) must be used on both sides of the join condition in the WHERE clause.
Answer(s): A, D
Reference:
https://www.w3resource.com/oracle/joins/oracle-full-outer-join.php
QUESTION: 287
Which three statements are true about defining relations between tables in a relational database?
    A. Primary key columns allow null values.
    B. Every primary or unique key value must refer to a matching foreign key value.
    C. Foreign key columns allow null values.
    D. Every foreign key value must refer to a matching primary or unique key value.
    E. Unique key columns allow null values.
Answer(s): A, D
QUESTION: 288
You execute this command:
TRUNCATE TABLE depts;
Which two are true?
    A. It drops any triggers defined on the table.
    B. It always retains the space used by the removed rows.
    C. A ROLLBACK statement can be used to retrieve the deleted data.
    D. It retains the integrity constraints defined on the table.
    E. It retains the indexes defined on the table.
    F. A FLASHBACK TABLE statement can be used to retrieve the deleted data.
Answer(s): D, E
Reference:
https://docs.oracle.com/html/E25494_01/general003.htm
QUESTION: 289
Which two are true about a SQL statement using SET operators such as UNION?
    A. The number, but not names, of columns must be identical for all SELECT statements in the query.
    B. The data type of each column returned by the second query must be implicitly convertible to the data type of the corresponding column returned by the first query.
    C. The data type group of each column returned by the second query must match the data type group of the corresponding column returned by the first query.
    D. The names and number of columns must be identical for all SELECT statements in the query. E. The data type of each column returned by the second query must exactly match the data type of the corresponding column returned by the first query.
Answer(s): C, E
QUESTION: 290
Which three statements are true about Structured Query Language (SQL)?
    A. It best supports relational databases.
    B. It is used to define encapsulation and polymorphism for a relational table.
    C. It is the only language that can be used for both relational and object-oriented databases.
    D. It guarantees atomicity, consistency, isolation, and durability (ACID) features.
    E. It provides independence for logical data structures being manipulated from the underlying physical data storage
    F. It requires that data be contained in hierarchical data storage.
Answer(s): D, E, F
Reference:
https://docs.microsoft.com/en-us/sql/relational-databases/hierarchical-data-sql-server?view=sql- server-2017
QUESTION: 291
Evaluate these commands which execute successfully:
CREATE SEQUENCE ord_seq	•tif
INCREMENT BY 1
START WITH 1	%.
MAXVALUE 100000	Xk.
CYCLE	'<•>„■>
CACHE 5000;
CREATE TABLE ord_items (
ord_no	NUMBER(4) DEFAULT ord_seq.NEXTVAL NOT NULL,
item_no	NUMBER(3>>
qty	NUMBER(3),
expiry_date DATE,
CONSTRAINT it_pk PRIMARY KEY (Ord_no, item_no),
CONSTRAINT ord_fk FOREIGN KEY (ord_no) REFERENCES orders (ord_no))
Which two statements are true about the ORD_ITEMS table and the ORD_SEQ sequence?
    A. Sequence ORD_SEQ cycles back to 1 after every 5000 numbers and can cycle 20 times.
    B. Any user inserting rows into table ORD_ITEMS must have been granted access to sequence ORD_SEQ.
    C. Column ORD_NO gets the next number from sequence ORD_SEQ whenever a row is inserted into ORD_ITEMS and no explicit value is given for ORD_NO.
    D. If sequence ORD_SEQ is dropped then the default value for column ORD_NO will be NULL for rows inserted into ORD_ITEMS.
    E. Sequence ORD_SEQ is guaranteed not to generate duplicate numbers.
Answer(s): B, E
QUESTION: 292
Which two statements are true about INTERVAL data types?
    A. The YEAR field in an INTERVAL YEAR TO MONTH column must be a positive value.
    B. INTERVAL DAY TO SECOND columns support fractions of seconds.
    C. INTERVAL YEAR TO MONTH columns only support monthly intervals within a single year.
    D. INTERVAL YEAR TO MONTH columns support yearly intervals.
    E. INTERVAL YEAR TO MONTH columns only support monthly intervals within a range of years.
    F. The value in an INTERVAL DAY TO SECOND column can be copied into an INTERVAL YEAR TO MONTH column.
Answer(s): B, E
Reference: https://www.oracletutorial.com/oracle-basics/oracle-interval/
QUESTION: 293
Which two statements are true about the DUAL table?
    A. It can display multiple rows but only a single column.
    B. It can be accessed by any user who has the SELECT privilege in any schema.
    C. It can display multiple rows and columns.
    D. It consists of a single row and single column of VARCHAR2 data type.
    E. It can be used to display only constants or pseudo columns.
    F. It can be accessed only by the SYS user.
Answer(s): B, D
QUESTION: 294
The CUSTOMERS table has a CUST_CREDIT_LIMIT column of data type NUMBER.
Which two queries execute successfully?
    A. SELECT NVL (cust_credit_limit * .15, ‘Not Available’) FROM customers;
    B. SELECT TO_CHAR(NVL(cust_credit_limit * .15, ‘Not Available’)) FROM customers;
    C. SELECT NVL(TO_CHAR(cust_credit_limit * .15), ‘Not Available’) FROM customers;
    D. SELECT NVL2(cust_credit_limit, TO_CHAR(cust_credit_limit * .15), ‘Not Available’) FROM customers;
    E. SELECT NVL2 (cust_credit_limit * .15, ‘Not Available’) FROM customers;
Answer(s): C, E
QUESTION: 295
Which two are true about the WITH GRANT OPTION clause?
    A. The grantee must have the GRANT ANY OBJECT PRIVILEGE system privilege to use this option.
    B. It can be used when granting privileges to roles.
    C. It cannot be used to pass on privileges to PUBLIC by the grantee.
    D. It can be used for system and object privileges.
    E. It can be used to pass on privileges to other users by the grantee.
    F. The grantee can grant the object privilege to any user in the database, with or without including this option.
Answer(s): D, E
Reference:
https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_9013.htm
QUESTION: 296
Examine the description of the EMPLOYEES table:
Name	Null?
Type
EMP_ID	NOT NULL
EMP_NAME
DEPT_ID
SALARY JOIN DATE
NUMBER
VARCHAR2(10)
NUMBER(2)
NUMBER(8,2)
DATE

NLS_DATE_FORMAT IS Set to DD-MON-YY.
Which query requires explicit data type conversion?
A. SELECT join_date FROM employees WHERE join_date > '10-02-2018
    B. SELECT salary + '120.50' FROM employees;
    C. SELECT SUBSTR(join_date, 1, 2) - 10 FROM employees;
    D. SELECT join_date + '20' FROM employees;
    E. SELECT join_date I I ' ' I| salary FROM employees;
A. Option A B. Option B
C. Option C D. Option D
E. Option E
Answer(s): A
QUESTION: 297
Examine this partial command:
CREATE TABLE Clist (
cust_id NUMBER(2), credit_iimit NUMBER(10)
) v " 'X
ORGANIZATION EXTERNAL
Which two clauses are required for this command to execute successfully?
    A. the LOCATION clause
    B. the access driver TYPE clause
    C. the REJECT LIMIT clause
    D. the DEFAULT DIRECTORY clause
    E. the ACCESS PARAMETERS clause
Answer(s): A, B
QUESTION: 298
Which three statements are true about GLOBAL TEMPORARY TABLES?
    A. GLOBAL TEMPORARY TABLE rows inserted by a session are available to any other session whose user has been granted select on the table.
    B. GLOBAL TEMPORARY TABLE space allocation occurs at session start.
    C. A DELETE command on a GLOBAL TEMPORARY TABLE cannot be rolled back.
    D. A GLOBAL TEMPORARY TABLE’s definition is available to multiple sessions.
    E. Any GLOBAL TEMPORARY TABLE rows existing at session termination will be deleted.
    F. A TRUNCATE command issued in a session causes all rows in a GLOBAL TEMPORARY TABLE for the issuing session to be deleted.
Answer(s): A, B, C
QUESTION: 299
Examine the description of the TRANSACTIONS table:
Name	NU|1? Type
TRANSACTION_ID	' - NOT NULL VARCHAR2(6)
TRANSACTION_DATE	%	DATE
AMOUNT	%	...	NUMBER (10,2)
CUSTOMER ID	'l \	VARCHAR2(6)
Which two SQL statements execute successfully?
    A. SELECT customer_id AS “CUSTOMER-ID”, transaction_date AS DATE, amount + 100 “DUES” FROM transactions;
    B. SELECT customer_id AS CUSTOMER-ID, transaction_date AS TRANS_DATE, amount + 100 “DUES AMOUNT” FROM transactions;
    C. SELECT customer_id CUSTID, transaction_date TRANS_DATE, amount +100 DUES FROM transactions;
    D. SELECT customer_id AS “CUSTOMER-ID”, transaction_date AS “DATE”, amount + 100 DUES FROM transactions;
    E. SELECT customer_id AS ‘CUSTOMER-ID’, transaction_date AS DATE, amount + 100 ‘DUES’ FROM transactions;
Answer(s): C, D
QUESTION: 300
Which three statements are true about indexes and their administration in an Oracle database?
    A. An index can be created as part of a CREATE TABLE statement.
    B. A DROP INDEX statement always prevents updates to the table during the drop operation.
    C. A UNIQUE and non-unique index can be created on the same table column.
    D. A descending index is a type of function-based index.
    E. If a query filters on an indexed column then it will always be used during execution of the query. F. An INVISIBLE index is not maintained when Data Manipulation Language (DML) is performed on its underlying table.
Answer(s): A, D, F
QUESTION: 301
Examine this description of the PRODUCTS table:


VARCHAR2(6) NUMBER(8,2) NUMBER(10,2) DATE
Rows exist in this table with data in all the columns. You put the PRODUCTS table in read-only mode.
Which three commands execute successfully on PRODUCTS?
    A. DROP TABLE products;
    B. ALTER TABLE products DROP COLUMN expiry_date;
    C. ALTER TABLE products SET UNUSED (expiry_date);
    D. ALTER TABLE products DROP UNUSED COLUMNS;
    E. CREATE INDEX price_idx ON products (price);
    F. TRUNCATE TABLE products;
Answer(s): A, E, F
QUESTION: 302
Which two statements are true about transactions in the Oracle Database server?
    A. If a session has an uncommitted transaction, then a DDL statement issues a COMMIT before starting a new transaction.
    B. An uncommitted transaction commits automatically if the user exists SQL*Plus.
    C. Data Manipulation Language (DML) statements always start a new transaction.
    D. A user can always see uncommitted updates made by the same user in a different session.
    E. A Data Definition Language (DDL) statement does a COMMIT automatically only for the data dictionary updates caused by the DDL.
    F. A session can always see uncommitted updates made by itself.
Answer(s): C, F
QUESTION: 303
You want to write a query that prompts for two column names and the WHERE condition each time it is executed in a session but only prompts for the table name the first time it is executed.
The variables used in your query are never undefined in your session?
Which query can be used?
A SELECT ((coll, ((CO12 FROM (table	%
WHERE ((condition - ((cönd;
B SELECT (coll, (col2
FROM ((tabledv WHERE (condition/	j
c se:.?'"t (coli, (col2
FROM "(table" WHERE (condition.;
D SELECT ((coll, ((0012 FROM (table
WHERE ((condition;
E SELECT ’((coll’, '((coll*
FROM (table WHERE '((condition* = '(cond
A. Option A B. Option B
C. Option C D. Option D
E. Option E
Answer(s): D
QUESTION: 304
Examine the structure of the two tables.
products:

Which two queries execute successfully? (Choose two.) A
SELECT prod_id, exp_date FROM products UNION ALL
SELECT prod_id, NULL FROM new_products;
B SELECT * FROM product«
UNION
SELECT • jpROM new_products;
C	11
SELECT prod_xd FROM products
UNION ALL
SELECT prod_id, prod_name FROM newjproducts D SELECT prodid, prod_nam® FROM products
INTERSECT
SELECT 1QD, prod_name FROM new_products;
E SELECT * FROM products
MINUS	'
SELECT prod_id FROM newjproducts;
    A. Option A
    B. Option B
    C. Option C
    D. Option D
    E. Option E
Answer(s): C, D
QUESTION: 305
Table EMPLOYEES contains columns including EMPLOYEE_ID, JOB_ID and SALARY.
Only the EMPLOYEE_ID column is indexed.
Rows exist for employees 100 and 200.
Examine this statement:
UPDATE employees v
SET (job_id, salary) =
(SELECT job_id, salary
FROM employees
WHERE employee_id = 200)
WHERE employee_id = 100;
Which two statements are true? (Choose two.)
    A. Employees 100 and 200 will have the same JOB_ID as before the update command
    B. Employees 100 will have JOB_ID set to the same value as the JOB_ID of employee 200
    C. Employees 100 and 200 will have the same SALARY as before the update command
    D. Employee 200 will have SALARY set to the same value as the SALARY of employee 100
    E. Employee 100 will have SALARY set to the same value as the SALARY of employee 200
    F. Employee 200 will have JOB_ID set to the same value as the JOB_ID of employee 100
Answer(s): B, E
QUESTION: 306
Which two statements are true regarding the UNION and UNION ALL operators? (Choose two.)
    A. The output is sorted by the UNION ALL operator
    B. The names of columns selected in each SELECT statement must be identical
    C. The number of columns selected in each SELECT statement must be identical
    D. Duplicates are eliminated automatically by the UNION ALL operator
    E. NULLS are not ignored during duplicate checking
Answer(s): C, E
QUESTION: 307
Which three actions can you perform on an existing table containing data? (Choose three.)
    A. Add a new NOT NULL column with a DEFAULT value
    B. Change the default value of a column
    C. Change a DATE column containing data to a NUMBER data type
    D. Add a new column as the table’s first column
    E. Define a default value that is automatically inserted into a column containing nulls
    F. Increase the width of a numeric column
Answer(s): B, D
Reference:
https://docs.oracle.com/javadb/10.8.3.0/ref/rrefsqlj24513.html
QUESTION: 308
Which two statements are true about single-row functions? (Choose two.)
    A. CEIL: can be used for positive and negative numbers
    B. FLOOR: returns the smallest integer greater than or equal to a specified number
    C. TRUNC: can be used with NUMBER and DATE values
    D. CONCAT: can be used to combine any number of values
    E. MOD: returns the quotient of a division operation
Answer(s): C, E
Reference:
https://www.folkstalk.com/2012/01/oracle-single-row-functions-examples.html
QUESTION: 309
Which three statements are true about sequences in a single instance Oracle database? (Choose three.)
    A. A sequence can issue duplicate values
    B. A sequence’s unallocated cached value are lost if the instance shuts down
    C. Sequences can always have gaps
    D. Two or more tables cannot have keys generated from the same sequence
    E. A sequence can only be dropped by a DBA
    F. A sequence number that was allocated can be rolled back if a transaction fails
Answer(s): B, E, F
Reference:
https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_6015.htm
QUESTION: 310
Which two statements are true about the SET VERIFY ON command? (Choose two.)
    A. It can be used in SQL Developer and SQL*Plus
    B. It displays values for variables used only in the WHERE clause of a query
    C. It can be used only in SQL*Plus
    D. It displays values for variables prefixed with &&
    E. It displays values for variables created by the DEFINE command
Answer(s): C, E
Reference:
https://blogs.oracle.com/opal/sqlplus-101-substitution-variables#4_1_8
QUESTION: 311
Which two statements are true about the rules of precedence for operators? (Choose two.)
    A. The concatenation operator | | is always evaluated before addition and subtraction in an expression
    B. Multiple parentheses can be used to override the default precedence of operators in an expression
    C. Arithmetic operators with equal precedence area evaluated from left to right within an expression
    D. NULLS influence the precedence of operators in an expression
    E. The + binary operator has the highest precedence in an expression in a SQL statement
Answer(s): B, E
Reference:
https://docs.oracle.com/cd/B19306_01/server.102/b14200/operators001.htm
QUESTION: 312
Examine this statement:
SELECT 1 AS id# ‘John* AS first_name, NULL AS commission FROM dual
INTERSECT	%
SELECT 1, ’John’/ null
FROM dual	\
ORDER BY 3;	' X
What is returned upon execution?
    A. 1 row
    B. an error
    C. 0 rows
    D. 2 rows
Answer(s): A
QUESTION: 313
Which four statements are true regarding primary and foreign key constraints and the effect they can have on table data? (Choose four.)
    A. It is possible for child rows that have a foreign key to remain in the child table at the time the parent row is deleted
    B. Only the primary key can be defined at the column and table level
    C. The foreign key columns and parent table primary key columns must have the same names
    D. A table can have only one primary key and one foreign key
    E. A table can have only one primary key but multiple foreign keys
    F. Primary key and foreign key constraints can be defined at both the column and table level
    G. It is possible for child rows that have a foreign key to be deleted automatically from the child table at the time the parent row is deleted
Answer(s): C, E, F, G
QUESTION: 314
Which three are true about system and object privileges? (Choose three.)
A. WITH GRANT OPTION can be used when granting an object privilege to both users and roles B. Adding a primary key constraint to an existing table in another schema requires a system privilege
    C. Adding a foreign key constraint pointing to a table in another schema requires the REFERENCES object privilege
    D. Revoking a system privilege that was granted with WITH ADMIN OPTION has a cascading effect
    E. Revoking an object privilege that was granted with the WITH GRANT OPTION clause has a cascading effect.
    F. WITH GRANT OPTION cannot be used when granting an object privilege to PUBLIC
Answer(s): A, C, E
Reference:
https://docs.oracle.com/cd/B28359_01/network.111/b28531/authorization.htm#DBSEG004
QUESTION: 315
View the Exhibits and examine the structure of the COSTS and PROMOTIONS tables.
SELECT prod_id
FROM costs	,A_.
WHERE promo__id IN
(SELECT promo_id
FROM promotions
WHERE promo_cost < ALL
(SELECT MAX (ptomo_costj,
FROM promotions
GROUP BY (promo_ehd_date - promo_bogin_date)))
You want to display PROD_IDS whose promotion cost is less than the highest cost PROD_ID in a promotion time interval.
Examine this SQL statement:
What will be the result?
Exhibit 1.
Table COSTS
Name
Null?
Type
PRODJD
NOT NULL
NUMBER
TLME.ED
NOT NULL
DATE
PROMO.ID
NOT NULL
NUMBER
CHANNEL_ID
NOT NULL
NUMBER
UNIT_COST
NOT NULL
NUMBER! 10,2)
UNIT_PRICE
NOT NULL
NUMBER! 10,2)
Exhibit 2.

Table PROMOTIONS
Name
Null?
Type
PROMOJD
NOT NULL
NUMBER(6)
PROMO_NAME
NOTNULL
VARCHAR2(30)
PROMO-SUBCATEGORY
NOT NULL
VARCHAR2(30)
PROMO_SUBCAEGORY_ID
NOTNULL
NUMBER
PROMO.CATEGORY
NOTNULL
VARCHAR2(30)
PROMO_CATEGORY_ID
NOT NULL
NUMBER
PROMO.COST
NOT NULL
NUMBER! 10,2)
PROMO_BEGIN_DATE
NOTNULL
DATE
PROMO_END_DATE
NOTNULL
DATE

A. It gives an error because the GROUP BY clause is not valid B. It executes successfully but does not give the required result C. It executes successfully and gives the required result D. It gives an error because the ALL keyword is not valid
Answer(s): C
QUESTION: 316
Which two statements are true about selecting related rows from two tables based on an Entity Relationship Diagram (ERD)? (Choose two.)
    A. Implementing a relationship between two tables might require joining additional tables
    B. Relating data from a table with data from the same table is implemented with a self join
    C. Rows from unrelated tables cannot be joined
    D. Every relationship between the two tables must be implemented in a join condition
    E. An inner join relates rows within the same table
Answer(s): A, E
QUESTION: 317
Which two statements are true about substitution variables? (Choose two.)
    A. A substitution variable can be used with any clause in a SELECT statement
    B. A substitution variable used to prompt for a column name must be enclosed in a single quotation marks
    C. A substitution variable prefixed with & always prompts only once for a value in a session
    D. A substitution variable can be used only in a SELECT statement
    E. A substitution variable used to prompt for a column name must be enclosed in double quotation marks
    F. A substitution variable prefixed with && prompts only once for a value in a session unless it is set to undefined in the session
Answer(s): B, C
Reference:
https://blogs.oracle.com/opal/sqlplus-101-substitution-variables
QUESTION: 318
Which three statements are true about inner and outer joins? (Choose three.)
    A. A full outer join must use Oracle syntax
    B. An inner join returns matched rows
    C. A left or right outer join returns only unmatched rows
    D. A full outer join returns matched and unmatched rows
    E. Outer joins can only be used between two per query
    F. Outer joins can be used when there are multiple join conditions on two tables
Answer(s): B, C, D
Reference:
https://www.studytonight.com/dbms/joining-in-sql.php
QUESTION: 319
Examine the description of the PRODUCTS table:
Name
Null TV,
Type
PRODUCT_ID PRODUCT_NAME UNIT_PRICE SURCHARGE EXPIRY_DATE DELIVERY—DATE
NOT NULL
NUMBER(2) VARCHAR2(10) NUMBER(3) VARCHAR2(2) DATE DATE

Which three queries use valid expressions? (Choose three.)
    A. SELECT product_id, (expiry_date - delivery_date) * 2 FROM products;
    B. SELECT product_id, unit_price 11 5 “Discount”, unit_price + surcharge - discount FROM products;
    C. SELECT product_id, unit_price, 5 “Discount”, unit_price + surcharge - discount FROM products;
    D. SELECT product_id, unit_price, unit_price + surcharge FROM products;
    E. SELECT product_id, (unit_price * 0.15 / (4.75 + 552.25)) FROM products;
    F. SELECT product_id, expiry_date * 2 FROM products;
Answer(s): C, D, F
QUESTION: 320
Which three statements are true about the DESCRIBE command? (Choose three.)
    A. It can be used to display the structure of an existing view
    B. It can be used only from SQL*Plus
    C. It displays the PRIMARY KEY constraint for any column or columns that have that constraint
    D. It can be used from SQL Developer
    E. It displays all constraints that are defined for each column
    F. It displays the NOT NULL constraint for any columns that have that constraint
Answer(s): A, B, F
QUESTION: 321
The CUSTOMERS table has a CUST_LAST_NAME column of data type VARCHAR2.
The table has two rows whose CUST_LAST_NAME values are Anderson and Ausson.
Which query produces output for CUST_LAST_NAME containing Oder for the first row and Aus for the second?
    A. SELECT REPLACE (TRIM(TRAILING ‘son’ FROM cust_last_name), ‘An’, ‘o’) FROM customers;
    B. SELECT INITCAP (REPLACE(TRIM(‘son’ FROM cust_last_name), ‘An’, ‘o’)) FROM customers;
    C. SELECT REPLACE (SUBSTR(cust_last_name, -3), ‘An’, ‘o’) FROM customers;
    D. SELECT REPLACE (REPLACE(cust_last_name, ‘son’, ‘’), ‘An’, ‘o’) FROM customers;
Answer(s): D
QUESTION: 322
Examine this SQL statement:
UPDATE orders o
SET customer_name =~ %.
(SELECT cust_last_name FROM customers
WHERE customer__id = o.customer_id)
Which two are true?
    A. All existing rows in the ORDERS table are updated
    B. The subquery is executed for every updated row in the ORDERS table
    C. The subquery is executed before the UPDATE statement is executed
    D. The subquery is not a correlated subquery
    E. The UPDATE statement executes successfully even if the subquery selects multiple rows
Answer(s): D
QUESTION: 323
Which three statements are true about performing Data Manipulation Language (DML) operations on a view with no INSTEAD OF triggers defined? (Choose three.)
    A. Insert statements can always be done on a table through a view.
    B. Views cannot be used to add rows to an underlying table if the table has columns with NOT NULL constraints lacking default values which are not referenced in the defining query of the view. C. Views cannot be used to query rows from an underlying table if the table has a PRIMARY KEY and the PRIMARY KEY columns are not referenced in the defining query of the view.
    D. Delete statements can always be done on a table through a view.
    E. The WITH CHECK clause has no effect when deleting rows from the underlying table through the view.
    F. Views cannot be used to add or modify rows in an underlying table if the defining query of the view contains the DISTINCT keyword.
Answer(s): A, C, D
QUESTION: 324
An Oracle database server session has an uncommitted transaction in progress which updated 5000 rows in a table.
In which three situations does the transactions complete thereby committing the updates? (Choose three.)
    A. when a DBA issues a successful SHUTDOWN TRANSACTIONAL statement and the user then issues a
COMMIT
    B. when a CREATE INDEX statement is executed successfully in the same session
    C. when a COMMIT statement is issued by the same user from another session in the same database instance
    D. when the session logs out successfully
    E. when a DBA issues a successful SHUTDOWN IMMEDIATE statement and the user then issues a COMMIT
    F. when a CREATE TABLE AS SELECT statement is executed unsuccessfully in the same session
Answer(s): B, D, E
QUESTION: 325
The INVOICE table has a QTY_SOLD column of data type NUMBER and an INVOICE_DATE column of data type DATE.
NLS_DATE_FORMAT is set to DD-MON-RR.
Which two are true about data type conversions involving these columns in query expressions? (Choose two.)
    A. CONCAT(qty_sold, invoice_date) : requires explicit conversion
    B. invoice_date > ’01-02-2019’ : uses implicit conversion
C. invoice_date = ’15-march-2019’ : uses implicit conversion
D. qty_sold BETWEEN ‘101’ AND ‘110’ : uses implicit conversion
E. qty_sold = ‘0554982’ : requires explicit conversion
Answer(s): C, D
QUESTION: 326
The ORDERS table has a primary key constraint on the ORDER_ID column.
The ORDER_ITEMS table has a foreign key constraint on the ORDER_ID column, referencing the primary key of the ORDERS table.
The constraint is defined with ON DELETE CASCADE.
There are rows in the ORDERS table with an ORDER_TOTAL of less than 1000.
Which three DELETE statements execute successfully?
    A. DELETE order_id FROM orders WHERE order_total < 1000;
    B. DELETE FROM orders WHERE order_total < 1000;
    C. DELETE orders WHERE order_total < 1000;
    D. DELETE * FROM orders WHERE order_total < 1000;
    E. DELETE FROM orders;
Answer(s): A, C
QUESTION: 327
Examine this query:
SELECT TRUNC(ROUND(156.00, -2), -1) FROM DUAL;
What is the result?
    A. 16
    B. 200
    C. 100
    D. 160
    E. 150
Answer(s): E
Reference:
https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions200.htm
QUESTION: 328
Which three statements are true regarding indexes? (Choose three.)
    A. A SELECT statement can access one or more indices without accessing any tables
    B. An update to a table can result in no updates to any of the table’s indexes
    C. A table belonging to one user can have an index that belongs to a different user
    D. A UNIQUE index can be altered to be non-unique
    E. An update to a table can result in updates to any or all of the table’s indexes
    F. When a table is dropped and is moved to the RECYCLE BIN, all indexes built on that table are permanently dropped
Answer(s): A, B, F
QUESTION: 329
Which three are true about the CREATE TABLE command? (Choose three.)
    A. It can include the CREATE..INDEX statement for creating an index to enforce the primary key constraint
    B. It implicitly executes a commit
    C. A user must have the CREATE ANY TABLE privilege to create tables
    D. It implicitly rolls back any pending transactions
    E. The owner of the table should have space quota available on the tablespace where the table is defined
    F. The owner of the table must have the UNLIMITED TABLESPACE system privilege
Answer(s): B, C, F
Reference:
https://docs.oracle.com/html/E25494_01/tables003.htm
QUESTION: 330
You need to calculate the number of days from 1st January 2019 until today.
Dates are stored in the default format of DD-MON-RR.
Which two queries give the required output?
A. SELECT TO_CHAR(SYSDATE, ‘DD-MON-YYYY’) - ’01-JAN-2019’ FROM DUAL;
B. SELECT SYSDATE - TO_DATE(’01-JANUARY-2019’) FROM DUAL;
C. SELECT ROUND(SYSDATE - ’01-JAN-2019’) FROM DUAL;
D. SELECT ROUND(SYSDATE - TO_DATE(‘01/JANUARY/2019’)) FROM DUAL;
E. SELECT TO_DATE(SYSDATE, ‘DD/MONTH/YYYY’) - ‘01/JANUARY/2019’ FROM DUAL;
Answer(s): A
QUESTION: 331
Which three actions can you perform by using the ORACLE_DATAPUMP access driver? (Choose three.)
    A. Read data from an external table and load it into a table in the database
    B. Create a directory object for an external table
    C. Execute DML statements on an external table
    D. Query data from an external table
    E. Read data from a table in the database and insert it into an external table
    F. Create a directory object for a flat file
Answer(s): B, D, E
QUESTION: 332
Which three statements are true about single-row functions? (Choose three.)
    A. They can be nested to any level
    B. The data type returned can be different from the data type of the argument
    C. They can accept only one argument
    D. The argument can be a column name, variable, literal or an expression
    E. They can be used only in the WHERE clause of a SELECT statement
    F. They return a single result row per table
Answer(s): B, D
Reference:
https://www.folkstalk.com/2012/01/oracle-single-row-functions-examples.html
QUESTION: 333
Which two statements are true regarding a SAVEPOINT? (Choose two.)
    A. A SAVEPOINT does not issue a COMMIT
    B. Only one SAVEPOINT may be issued in a transaction
    C. Rolling back to a SAVEPOINT can undo a TRUNCATE statement
    D. Rolling back to a SAVEPOINT can undo a CREATE INDEX statement
    E. Rolling back to a SAVEPOINT can undo a DELETE statement
Answer(s): A, E
QUESTION: 334
Which three privileges can be restricted to a subset of columns in a table? (Choose three.)
    A. ALTER
    B. DELETE
    C. UPDATE
    D. SELECT
    E. INDEX
    F. REFERENCES
    G. INSERT
Answer(s): B, C, D
QUESTION: 335
Examine the description of the MEMBERS table:
Name
Null?
Type

MEMBER ID
NOT NULL^'j
VARCHAR2
(6)
FIRST NAME

VARCHAR2
(50)
LAST NAME
NOT NULL 5,
VARCHAR2
(50)
ADDRESS
x \ \
VARCHAR2
(50)
CITY

VARCHAR2
(25)
Examine the partial query:



SELECT city, last_name LNAME FROM members ...;
You want to display all cities that contain the string AN. The cities must be returned in ascending order, with the last names further sorted in descending order.
Which two clauses must you add to the query? (Choose two.)
    A. ORDER BY last_name DESC, city ASC
    B. WHERE city IN (‘%AN%’)
    C. ORDER BY 1, LNAME DESC
    D. ORDER BY 1, 2
    E. WHERE city = ‘%AN%’
    F. WHERE city LIKE ‘%AN%’
Answer(s): A, C
Reference:
https://www.techonthenet.com/sql/order_by.phphttps://www.studytonight.com/dbms/orderby- clause.php
QUESTION: 336
You execute this command:
ALTER TABLE employees SET UNUSED (department_id)
Which two are true? (Choose two.)
    A. No updates can be made to the data in the DEPARTMENT_ID column.
    B. A new column with the name DEPARTMENT_ID can be added to the EMPLOYEES table.
    C. A query can be display data from the DEPARTMENT_ID column.
    D. The DEPARTMENT_ID column is set to null for all rows in the table.
    E. The DEPARTMENT_ID column can be recovered from the recycle bin.
    F. The storage space occupied by the DEPARTMENT_ID column is released only after a COMMIT is issued.
Answer(s): B, D
Explanation:
If a new column is added to a table, the column is initially NULL
Reference:
https://docs.oracle.com/cd/B28359_01/server.111/b28310/tables006.htm#ADMIN11005
QUESTION: 337
You have been tasked to create a table for a banking application. One of the columns must meet three requirements:
    1) Be stored in a format supporting date arithmetic without using conversion functions
    2) Store a load period of up to 10 years
    3) Be used for calculating interest for the number of days the loan remains unpaid
Which data type should you use?
    A. TIMESTAMP WITH LOCAL TIMEZONE
    B. TIMESTAMP WITH TIMEZONE
    C. INTERVAL DAY TO SECOND
    D. TIMESTAMP
    E. INTERVAL YEAR TO MONTH
Answer(s): C
QUESTION: 338
The ORDERS table has a column ORDER_DATE of data type DATE.
The default display format for a date is DD-MON-RR.
Which two WHERE conditions demonstrate the correct usage of conversion functions? (Choose two.)
    A. WHERE TO_CHAR(order_date, 'MON DD YYYY') = 'JAN 20 2019'
    B. WHERE order_date > TO_DATE('JUL 10 2018', 'MON DD YYYY')
    C. WHERE order_date > TO_CHAR(ADD_MONTHS(SYSDATE,6), 'MON DD YYYY')
    D. WHERE order_date > TO_DATE(ADD_MONTHS(SYSDATE,6), 'MON DD YYYY')
    E. WHERE order_date IN (TO_DATE('OCT 21 2018', 'Mon DD YYYY'), TO_CHAR('Nov 21 2018', 'Mon DD YYYY'))
Answer(s): A, B
Reference:
https://ss64.com/ora/syntax-to_date.html
QUESTION: 339
Examine the description of the PROMOTIONS table:
NAME
NULL?
TYPE
PROMOJD
NOT NULL
NUMBER(6)
PROMONAME
NOT NULL
VARCHAR2(30)
PROMOCATEGORY
NOTNULL
VARCHAR2(30)
PROMOCOST
NOT NULL
NUMBER(10,2)

You want to display the unique promotion costs in each promotion category. Which two queries can be used? (Choose two.)
    A. SELECT DISTINCT promo_category || ‘ has ’ || promo_cost AS COSTS FROM promotions ORDER BY 1;
    B. SELECT DISTINCT promo_category, promo_cost FROM promotions ORDER BY 1;
    C. SELECT promo_category, DISTINCT promo_cost FROM promotions ORDER BY 2;
    D. SELECT DISTINCT promo_cost ||‘ in ’|| DISTINCT promo_category FROM promotions ORDER BY 1;
    E. SELECT promo_cost, promo_category FROM promotions ORDER BY 1;
Answer(s): B, C
QUESTION: 340
Table ORDER_ITEMS contains columns ORDER_TO, UNIT_PRICE and QUANTITY, of data type NUMBER. Examine these SQL statements:
Statement 1:
I SELECT MAX(unit_price * quantity) "Maximum Order"
FROM order_items;
Statement 2:
I SELECT MAX(unit_price * quantity) "Maximum Order"
FROM order_items
GROUP BY order_id;
Which two statements are true? (Choose two.)
    A. Statement 2 may return multiple rows of output.
    B. Both statements will return NULL if either UNIT_PRICE or QUANTITY contains NULL.
    C. Statement 2 returns only one row of output.
    D. Both the statements give the same output.
    E. Statement 1 returns only one row of output.
Answer(s): A, E
Reference:
https://stackoverflow.com/questions/12366390/how-to-select-product-that-have-the-maximum-
price-of-each-category
QUESTION: 341
Examine the description of the EMPLOYEES table:
Name
Null? ■’
Type
EMPLOYEE_ID
NOT NULL
NUMBER(4)
LA3T_NAME
NOT NULL
VARCHAR2(100)
SALARY
NOT NULL
NUMBER (6,2)
DEPARTMENT ID
NOT NULL
NUMBER(4)

Examine this query:
    1 SELECT e.last_name,	.
    2 e.salary,
    3 a. avg_sal	'<!	-%
    4 FROM employees e
    5 WHERE e.salary > (SELECT AVG(a.salary) AS avg_sal
    6 FROM employees a
    7 WHERE a.department_id = e.department_id)
    8 ORDER BY e.last name;
Which line produces an error?
    A. Line 5
    B. Line 8
    C. Line 7
    D. Line 3
Answer(s): D
QUESTION: 342
Which two are true about savepoints? (Choose two.)
    A. After issuing a savepoints, you can roll back to the savepoint name within the current transaction.
    B. A ROLLBACK TO SAVEPOINT command issued before the start of a transaction results in an error.
    C. They make uncommitted updates visible to other sessions owned by the same user.
    D. After issuing a savepoint, you cannot roll back the complete transaction.
    E. You can commit updates done between two savepoints without committing other updates in the current transaction.
    F. They make uncommitted updates visible to sessions owned by other users.
Answer(s): A, E
Reference:
https://www.vertica.com/docs/9.2.x/HTML/Content/Authoring/SQLReferenceManual/Statements/S
AVEPOINT.htm
QUESTION: 343
Examine the data in the EMPLOYEES table.
EMPLOYEE_ID
LAST_NAME
MONTHLY_SALARY
MONTHLY_COfrWISSION_PCT
101
Kochhar
24000
<NULL>
102
Ernst
17000
.5
103
Rajs
21000
.2
104
Lorentz
25000
<NULL>
105
Morris
V 12000
<NULL>

Which statement will compute the total annual compensation for each employee?
    A. SELECT last_name, (monthly_salary * 12) + (monthly_salary * 12 * monthly_commission_pct) AS annual_comp FROM employees;
    B. SELECT last_name, (monthly_salary + monthly_commission_pct) * 12 AS annual_comp FROM employees;
    C. SELECT last_name, (monthly_salary * 12) + (monthly_commission_pct * 12) AS annual_comp FROM employees;
    D. SELECT last_name, (monthly_salary * 12) + (monthly_salary * 12 * NVL (monthly_commission_pct, 0)) AS annual_comp
FROM employees;
Answer(s): A
QUESTION: 344
Examine the description of the ORDER_ITEMS table:
Name
Null?
■X
r!
Type
ORDER ID
-Tj^_
•*J>0	tv
NUMBER (38)
PRODUCT ID


NUMBER(38)
QÜÄNTITY

%
NUMBER (38)
UNI T_ PR ICE


NUMBER(10,2)

Examine this incomplete query:
I SELECT DISTINCT quantity	uni t_p rice total_paid
FROM order_iterns ORDER BY <clause>;
Which two can replace <clause> so the query completes successfully? (Choose two.)
    A. quantity, unit_price
    B. quantity * unit_price
    C. quantity
    D. total_paid
    E. product_id
Answer(s): B, D
Explanation:
Sample
SELECT tr_sub.cur_tt, tr_sub.item, sum(tr.quantity), sum(tr.quantity*tr.unit_price) FROM
(SELECT tr1.transaction_time as cur_tt, max(tr2.transaction_time) as prev_tt, tr1.item as item, IF (tr1.unit_price=tr2.unit_price, tr1.unit_price, tr2.unit_price) as t_p FROM transactions tr1 LEFT JOIN transactions tr2 ON tr1.transaction_time>=tr2.transaction_time AND tr1.item=tr2.item GROUP BY tr1.item, tr1.transaction_time, t_p
Reference:
https://stackoverflow.com/questions/50771172/sql-query-get-total-value-based-on-different-unit- price-quantity-at-different-ti
QUESTION: 345
Examine the data in the PRODUCTS table:
PRODID
PROD_NAME
PROD_LtIST
CATEGORY_ID
101
102
101
101
101
Plate Cup Saucer
Knife
Fork
'■'X
%	-1=5
(y1:.
'^10
20
20
30
30
1
1
1
1
1
Examine these queries:





    1. SELECT prodjiame, prod_list FROM products
WHERE prod_list = ANY^^LO, 2 0) AND category_id = 1;
    2. . SELECT prod_name, prod_list:'.^
FROM products
WHERE prod_list = IN (1Q./ 2 0) AND category_id = 1;
    3. SELECT prod_nairE^, prod_list FROM products
WHERE prod_list = ALL '^207 2 0) AND category_id = 1;
Which queries generate the same output?
    A. 1 and 2
    B. 1 and 3
    C. 1, 2, and 3
    D. 2 and 3
Answer(s): B
Reference:
https://www.dofactory.com/sql/where-any-all (statement 2 syntax in wrong)
QUESTION: 346
Examine the description of the EMPLOYEES table:
Name
Null?
Type
EMPLOYEE_ID
NOT NULL
NUMBER(38)
MANAGER ID
NOT NULL
NUMBER(38)
DEPARTMENT ID

NUMBER(38)

Which two queries return rows for employees whose manager works in a different department? (Choose two.)
A.
SELECT emp.*
FROM employees emp WHERE NOT EXISTS
SELECT NULL
FROM employees mgr
WHERE emp . manager_id ^mgr . employee_id
AND emp.department_id <> mgr.department_id
B.
SELECT emp.*
FROM employees emp
WHERE managerid NOT IN
SELECT mgr.employee_id
FROM employees mgr
WHERE emp.department_id <> j ;
    C. 
SELECT emp.*
FROM employees emp
JOIN employees mgr
ON emp.manager_id = iagr . employee_id
AND emp.department id mgr.department id
X
    D. 
SELECT emp.*
FROM employees emp
LEFT JOIN employees mgr
ON emp.manager_id = mgr.employee_id
AND emp . department_’id <> mgr . department_id
    E. 
SELECT emp.*
FROM employees emp
RIGHT JOIN employees mgr,
ON emp .manage r_id> =; mgr . employee_id
AND emp.department_id <> mgr.department_id WHERE emp . employee_id:i.IS NOT NULL;
Answer(s): A, C
QUESTION: 347
The SYSDATE function displays the current Oracle Server date as: 21-MAY-19
You wish to display the date as:
MONDAY, 21 MAY, 2019
Which statement will do this?
    A. SELECT TO_DATE(SYSDATE, ‘FMDAY, DD MONTH, YYYY’) FROM DUAL;
    B. SELECT TO_CHAR(SYSDATE, ‘FMDD, DAY MONTH, YYYY’) FROM DUAL;
    C. SELECT TO_CHAR(SYSDATE, ‘FMDAY, DDTH MONTH, YYYY’) FROM DUAL;
    D. SELECT TO_CHAR(SYSDATE, ‘FMDAY, DD MONTH, YYYY’) FROM DUAL;
Answer(s): D
Explanation:
SELECT ID, TO_CHAR(Start_Date,'fmDay Month fmDD, YYYY') AS "Start Date" FROM Employee;
Reference:
http://www.java2s.com/Code/Oracle/Data-
Type/TOCHARDatefmDayMonthfmDDYYYYEmbeddedspacescanberemovedbyplacingthefmprefix .htm
QUESTION: 348
Which two are SQL features? (Choose two.)
    A. processing sets of data
    B. providing update capabilities for data in external files
    C. providing graphical capabilities
    D. providing variable definition capabilities
    E. providing database transaction control
Answer(s): A, E
Reference:
https://docs.oracle.com/database/121/TGSQL/tgsql_sqlproc.htm#TGSQL175https://www.tutorialsp
oint.com/sql/sql-transactions.htm
QUESTION: 349
Examine this statement which returns the name of each employee and their manager:
SELECT e.last_name AS emp, m.last_name AS mgr
FROM employees e
■JOIN managers m
ON e .manager_id = mfiemployee_id
ORDER BY emp;
You want to extend the query to include employees with no manager. What must you add before JOIN to do this?
    A. CROSS
    B. RIGHT OUTER
    C. FULL OUTER
    D. LEFT OUTER
Answer(s): A
QUESTION: 350
Examine the data in the COLORS table:
RGB_HEX _VALUE	CÖWRNAME
FFOOOO	red
OOFFOO tl ' Xgreen 000 OFF X blue
Examine the data in the BRICKS table:
B RI CK_ID	COLOR_RGB_H EX_VALUE
1	FF0000
    2 OOFFOO-
    3 FFFFFF %
Which two queries return all the rows from COLORS? (Choose two.)
    A. 
SELECT *
FROM bricks b
RIGHT JOIN colors c
ON b. color_rgb_h.ex_value = c . rgb_hex_value
    B. 
SELECT *
FROM colors c
LEFT JOIN bricks b v
ON b. color_rgb_hex_value = c . rgb_h.ex_value WHERE b.brick id > 0; — \
    C. 
SELECT *
FROM bricks b
FULL JOIN colors c
ON b.color_rgb_hex_value = c.rgb_hex_value
    D. 
SELECT *
FROM colors c
LEFT JOIN bricks b
USING (rgb_hex_value)-;
    E. 
SELECT *
FROM bricks b
JOIN colors c
ON b. color_rgb_hex_value = c . rgb_hex_value
Answer(s): C, E
QUESTION: 351
Examine the description of the ORDERS table:
Name	Null? Type
"'■%.	j,.
ORDERID	NUMBER(38)
ORDERDATE	..	% DATE
Examine the description of the INVOICES table:
Name
Null?
Type
INVOICE ID
%
NUMBER(38)
LNVOICEDATE
x X %
DATE

Which three statements execute successfully? (Choose three.)
    A. 
SELECT order_id invoice_id, order_date FROM orders
MINUS
SELECT invoice_id, invoice_date FROM invoices ORDER BY invoice_id;
    B. 
SELECT * FROM orders ORDER BY order_id
UNION
SELECT * FROM invoices;
    C. 
SELECT * FROM orders ORDER BY order_id
INTERSECT
SELECT * FROM invoices ORDER BY invoice id; ' —
D.
SELECT * orders
MINUS
SELECT * FROM invoices ORDER BY 1
E.
SELECT order_id, orderdate FROM orders
INTERSECT
SELECT invoice_id, invoice_date FROM invoices ORDER BY invoice_id;
F.
(SELECT * FROM orders
UNION ALL
SELECT * FROM invoices) ORDER BY order_id;
G.
SELECT order_id, order_date FROM orders
UNION ALL
SELECT invoice_id, invoice_date FROM invoices ORDER BY order_id;
Answer(s): B, C, D
QUESTION: 352
Which two are true about scalar subquery expressions? (Choose two.)
    A. They can return at most one row.
    B. You can use them as a default value for a column.
    C. You cannot correlate them with a table in the parent statement.
    D. You must enclose them in parentheses.
    E. They can return two columns.
Answer(s): A, D
QUESTION: 353
Examine this partial statement:
I select *
FROM employees
WHERE salary = (< sub quer y>) ;
Which is true?
    A. Both the query and the subquery can select any number of rows.
    B. The query can select only zero rows or one row, but the subquery can select any number of rows.
    C. Both the query and the subquery can select only zero rows or one row.
    D. The query can select any number of rows, but the subquery can select only zero rows or one row.
Answer(s): B
Reference:
http://dcx.sybase.com/1200/en/dbusage/ug-subquery-s-4318996.html
QUESTION: 354
You have the privileges to create any type of synonym.
Which statement will create a synonym called EMP for the HCM.EMPLOYEE_RECORDS table that is accessible to all users?
    A. CREATE PUBLIC SYNONIM emp FOR hcm.employee_records;
    B. CREATE GLOBAL SYNONIM emp FOR hcm.employee_records;
    C. CREATE SYNONIM emp FOR hcm.employee_records;
    D. CREATE SYNONIM PUBLIC.emp FOR hcm.employee_records;
    E. CREATE SYNONIM SYS.emp FOR hcm.employee_records;
Answer(s): A
Explanation:
CREATE PUBLIC SYNONYM emp_table
Reference:
https://docs.oracle.com/database/121/SQLRF/statements_7001.htm#SQLRF01401
QUESTION: 355
Examine this data in the EMPLOYEES table:
ID
LAST_NAME
SALARY
DEPT_ID
1
2
Smith.
■Jones
% 1000 2 000
10
10
3
Markham
\	1500
20
4
Black
1300
% <
20
Which statement will execute successfully?

    A. SELECT dept_id, INSTR(last_name, ‘A’), SUM(salary) FROM employees GROUP BY dept_id;
    B. SELECT dept_id, STDDEV(last_name), SUM(salary) FROM employees GROUP BY dept_id;
    C. SELECT dept_id, MAX(last_name), SUM(salary) FROM employees GROUP BY dept_id;
    D. SELECT dept_id, LENGTH(last_name), SUM(salary) FROM employees GROUP BY dept_id;
Answer(s): A
QUESTION: 356
Examine the description of the EMPLOYEES table:
Name
Null?
Type
EMPLOYEE_ID
NOT NULL
NUMBER(6)
EMPLOYEE_NAME
NOT NULL
VARCHAR2 (2 0)
SALARY
NOT NULL
NUMBER
DEPARTMENT ID
NOT NULL
NUMBER(4)

Which two queries return all the rows for employees whose salary is greater than the average salary in their department? (Choose two.)
A.
SELECT *
FROM employees WHERE salary >
SELECT AVG(salary)
FROM employees
GROUP BY departme
Answer(s): B, E
QUESTION: 357
Examine the description of the EMPLOYEES table:
Name	Null?	V Type
EMPLOYEE_ID	NOT NULL ' NUMBER (3)
FIRST_NAME	%	VARCHAR2 (15)
LAST_NAME	NOT NULL VARCHAR2 (15)
SALARY	\	% NUMBER (6,2)
Which two statements will run successfully? (Choose two.)
A. SELECT ‘The first_name is ‘’ || first_name || ‘’ FROM employees; B. SELECT ‘The first_name is ‘ || first_name || ‘’ FROM employees; C. SELECT ‘The first_name is ‘’’ || first_name || ‘’’ FROM employees; D. SELECT ‘The first_name is \‘’ || first_name || ‘\‘’ FROM employees; E. SELECT ‘The first_name is ‘’’ || first_name || ‘‘’’ FROM employees;
Answer(s): B
QUESTION: 358
A session’s NLS_DATE_FORMAT is set to DD Mon YYYY. Which two queries return the value 1 Jan 2019?
A. SELECT TO_DATE(‘2019-01-01’) FROM DUAL;
B. SELECT DATE ‘2019-01-01’ FROM DUAL;
C. SELECT ‘2019-01-01’ FROM DUAL;
D. SELECT TO_CHAR(‘2019-01-01’) FROM DUAL;
E. SELECT TO_DATE(‘2019-01-01’, ‘YYYY-MM-DD’) FROM DUAL;
Answer(s): B, E
Explanation:
select date'2015-01-10' d from dual union
SELECT to_date( '01-01-2007' , 'DD-MM-YYYY') Tarih FROM dual;
Reference:
https://livesql.oracle.com/apex/livesql/file/content_BFKOA5UQHDV1MV7HRUDDUEPM4.html
https://www.baskent.edu.tr/~tkaracay/etudio/ders/dbase/sql/pdfSQL/DateConversions.pdf
QUESTION: 359
No-user-defined locks are used in your database.
Which three are true about Transaction Control Language (TCL)?
    A. COMMIT erases all the transaction’s savepoints and releases its locks.
    B. ROLLBACK TO SAVEPOINT undoes the transaction’s changes made since the named savepoint and then ends the transaction.
    C. COMMIT ends the transaction and makes all its changes permanent.
    D. ROLLBACK without the TO SAVEPOINT clause undoes all the transaction’s changes but does not erase its savepoints.
    E. ROLLBACK without the TO SAVEPOINT clause undoes all the transaction’s changes but does not release its locks.
    F. ROLLBACK without the TO SAVEPOINT clause undoes all the transaction’s changes, releases its locks and erases its savepoints.
Answer(s): A, C, F
Reference:
https://docs.oracle.com/cd/A58617_01/server.804/a58233/trans.htm
https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_9021.htm
QUESTION: 360
Examine the description of the ORDERS table:
ORDER_ID ORDER_DATE
    1 <null>
    2 <null>
3	01-JAN-2019
4	01-FEB-2019
5	01—MAR—2019
Examine the description of the INVOICES table:
INVOICE_ID ORDER_ID	ORDER_DATE
1	1	<null>
2	2	01-JAN-2019
3	3	<null>
4	4	01-FEB-2019
5	5	<null>
Examine this query:
SELECT order_id, order_date FROM orders MINUS
SELECT order_id, order_date FROM invoices
Which three rows will it return? (Choose three.)
A. 5 01-MAR-2019
    B. 3 <null>
    C. 1 <null>
    D. 4 01-FEB-2019
    E. 2 <null>
    F. 5 <null>
G. 3 01-JAN-2019
Answer(s): A, E, G
QUESTION: 361
Which three are key components of an Entity Relationship Model? (Choose three.)
    A. an activity
    B. a table
    C. a relationship
    D. an attribute
    E. a unique identifier
    F. an entity
Answer(s): C, D, F
Explanation:
The three main components of the ER Model are entities, attributes and relationships.
Reference:
https://www.dlsweb.rmit.edu.au/Toolbox/knowmang/content/data_concepts/e_r_model.htm
];
