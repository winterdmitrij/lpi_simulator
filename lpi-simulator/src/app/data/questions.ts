import { Question } from "../models/definitions";

export const questions: Question[] = [
{
    "questionId": "1",
    "questionTypeId": "MC",
    "questionText": "Examine the description of the PROMOTIONS table:" + 
                    "Name           Null?       Type" +
                    "-------------- ----------- --------------" +
                    "PROMO_ID       NOT NULL    NUMBER(6)" +
                    "PROMO_NAME     NOT NULL    VARCHAR2(30)" +
                    "PROMO_CATEGORY NOT NULL    VARCHAR2(30)" +
                    "PROMO_COST     NOT NULL    NUMBER(10,2)" +
                    "You want to display the unique promotion costs in each promotion category." +
                    "Which two queries can be used? (Choose two.)",
    "answers": [
        {
            "answerText": "A. SELECT DISTINCT promo_category || ' has ' || promo_cost AS COSTS FROM promotions ORDER BY 1;",
            "isCorrect": true
        },
        {
            "answerText": "B. SELECT DISTINCT promo_cost || ' in ' || DISTINCT promo_category FROM promotions ORDER BY 1;",
            "isCorrect": false
        },
        {
            "answerText": "C. SELECT DISTINCT promo_category, promo_cost FROM promotions ORDER BY 1;",
            "isCorrect": true
        },
        {
            "answerText": "D. SELECT promo_category DISTINCT promo_cost, FROM promotions ORDER BY 2;",
            "isCorrect": false
        },
        {
            "answerText": "E. SELECT promo_cost, promo_category FROM promotions ORDER BY 1; ",
            "isCorrect": false
        }
    ],
    "help": ""
},
{
    "questionId": "2",
    "questionTypeId": "MC",
    "questionText": "Examine the description of the PRODUCTS table: \n Name            Null?       Type\n --------------- ----------- ------------\nPRODUCT_ID      NOT NULL    NUMBER(2)\nPRODUCT_NAME                VARCHAR2(10)\nUNIT PRICE                  NUMBER(3)\nSURCHARGE                   VARCHAR2(2)\nEXPIRY_DATE                 DATE\nDELIVERY_DATE               DATE\nWhich three queries use valid expressions? (Choose three.)",
    "answers": [
        {
            "answerText": "A. SELECT product_id, unit_price, S \"Discount\", unit_price-+ surcharge- discount FROM products;",
            "isCorrect": false
        },
        {
            "answerText": "B. SELECT product_id, (unit_price * 0.15 / (4.75 + 552.25)) FROM products;",
            "isCorrect": true
        },
        {
            "answerText": "C. SELECT product_id, (expiry_date - delivery_date) * 2 FROM products;",
            "isCorrect": true
        },
        {
            "answerText": "D. SELECT product_id, unit_price ll 5 \"Discount\", unit_price + surcharge-discount FROM products;",
            "isCorrect": false
        },
        {
            "answerText": "E. SELECT product_id, expiry_date * 2 FROM products;",
            "isCorrect": false
        },
        {
            "answerText": "F. SELECT product_id, unit_price, unit_price + surcharge FROM products;",
            "isCorrect": true
        }
    ],
    "help": "Community vote distribution: BCF (100%)"
},
{
    "questionId": "3",
    "questionTypeId": "MC",
    "questionText": "What is true about non-equijoin statement performance? (Choose two.)",
    "answers": [
        {
            "answerText": "A. The BETWEEN condition always performs less well than using the >= and <= conditions",
            "isCorrect": false
        },
        {
            "answerText": "B. The BETWEEN condition always performs better than using the >= and <= conditions.",
            "isCorrect": false
        },
        {
            "answerText": "C. The Oracle join syntax performs better than the SQL:1999 compliant ANSI join syntax.",
            "isCorrect": false
        },
        {
            "answerText": "D. Table aliases can improve performance.",
            "isCorrect": true
        },
        {
            "answerText": "E. The join syntax used makes no difference to performance.",
            "isCorrect": true
        }
    ],
    "help": "Community vote distribution: DE (50%), CD (42%)"
},
{
    "questionId": "4",
    "questionTypeId": "MC",
    "questionText": "Which two are true? (Choose two.)",
    "answers": [
        {
            "answerText": "A. ADD_MONTHS adds a number of calendar months to a date.",
            "isCorrect": true
        },
        {
            "answerText": "B. CEIL requires an argument which is a numeric data type.",
            "isCorrect": false
        },
        {
            "answerText": "C. CEIL returns the largest integer less than or equal to a specified number.",
            "isCorrect": true
        },
        {
            "answerText": "D. LAST_DAY returns the date of the last day of the current month only.",
            "isCorrect": false
        },
        {
            "answerText": "E. LAST_DAY returns the date of the last day of the month for the date argument passed to the function.",
            "isCorrect": false
        },
        {
            "answerText": "F. LAST_DAY returns the date of the last day of the previous month only.",
            "isCorrect": false
        }
    ],
    "help": "Community vote distribution: AE (92%) \n References: \n\t https://docs.oracle.com/database/121/SQLRF/functions025.htm \n\t https://docs.oracle.com/cd/B28359_01/server.111/b28286/functions004.htm"
},
{
    "questionId": "5",
    "questionTypeId": "MC",
    "questionText": "Which three statements are true about Oracle synonyms? (Choose three.)",
    "answers": [
        {
            "answerText": "A. A synonym cannot be created for a PL/SQL package.",
            "isCorrect": false
        },
        {
            "answerText": "B. A synonym can be available to all users.",
            "isCorrect": true
        },
        {
            "answerText": "C. A SEQUENCE can have a synonym.",
            "isCorrect": true
        },
        {
            "answerText": "D. Any user can drop a PUBLIC synonym",
            "isCorrect": false
        },
        {
            "answerText": "E. A synonym created by one user can refer to an object belonging to another user.",
            "isCorrect": true
        }
    ],
    "help": "Community vote distribution: BCE (100%)"
},
{
    "questionId": "6",
    "questionTypeId": "MC",
    "questionText": "Which two are true? (Choose two.)",
    "answers": [
        {
            "answerText": "A. CONCAT joins two character strings together.",
            "isCorrect": true
        },
        {
            "answerText": "B. CONCAT joins two or more character strings together.",
            "isCorrect": false
        },
        {
            "answerText": "C. FLOOR returns the largest positive integer less than or equal to a specified number.",
            "isCorrect": false
        },
        {
            "answerText": "D. INSTR finds the offset within a character string, starting from position 0.",
            "isCorrect": false
        },
        {
            "answerText": "E. INSTR finds the offset within a string of a single character only.",
            "isCorrect": false
        },
        {
            "answerText": "F. FLOOR returns the largest integer less than or equal to a specified number.",
            "isCorrect": true
        }
    ],
    "help": "Community vote distribution: AF (100%)"
  },
  {
    "questionId": "7",
    "questionTypeId": "MC",
    "questionText": "Examine these SQL statements which execute successfully:\nCREATE TABLE emp (emp_no NUMBER(2) CONSTRAINT emp_emp_no_pk PRIMARY KEY,\n                  ename  VARCHAR2(15),\n                  salary NUMBER(8,2),\n                  mgr_no NUMBER (2));\n\nALTER TABLE emp \nADD CONSTRAINT emp_mgr_fk FOREIGN KEY (mgr_no)\n    REFERENCES emp (emp_no) ON DELETE SET NULL;\n\nALTER TABLE emp DISABLE CONSTRAINT emp_emp_no_pk CASCADE;\n\nALTER TABLE emp ENABLE CONSTRAINT emp_emp_no_pk;\n\nWhich two statements are true after execution? (Choose two.)",
    "answers": [
        {
            "answerText": "A. The primary key constraint will be enabled and IMMEDIATE.",
            "isCorrect": true
        },
        {
            "answerText": "B. The foreign key constraint willbe enabled and DEFERRED.",
            "isCorrect": false
        },
        {
            "answerText": "C. The primary key constraint will be enabled and DEFERRED.",
            "isCorrect": false
        },
        {
            "answerText": "D. The foreign key constraint will be disabled.",
            "isCorrect": true
        },
        {
            "answerText": "E. The foreign key constraint will be enabled and IMMEDIATE.",
            "isCorrect": false
        }
    ],
    "help": "Community vote distribution: AD (100%)"
  },
  {
    "questionId": "8",
    "questionTypeId": "MC",
    "questionText": "Examine this SQL statement:\nUPDATE orders o\n   SET customer_name = \n(SELECT cust_last_name\n FROM customers\n WHERE customer_id = o.customer_id)\nWhich two are true? (Choose two.)",
    "answers": [
        {
            "answerText": "A. All existing rows in the ORDERS table are updated.",
            "isCorrect": true
        },
        {
            "answerText": "B. The subquery is executed before the UPDATE statement is executed.",
            "isCorrect": true
        },
        {
            "answerText": "C. The subquery is not a correlated subquery.",
            "isCorrect": false
        },
        {
            "answerText": "D. The subquery is executed for every updated row in the ORDERS table.",
            "isCorrect": false
        },
        {
            "answerText": "E. The UPDATE statement executes successfully even if the subquery selects multiple rows.",
            "isCorrect": false
        }
    ],
    "help": "Community vote distribution: AB (69%), AE (31%)"
  },
  {
    "questionId": "9",
    "questionTypeId": "MC",
    "questionText": "Which two statements are true about TRUNCATE and DELETE? (Choose two.)",
    "answers": [
        {
            "answerText": "A. DELETE can use a WHERE clause to determine which row(s) should be removed.",
            "isCorrect": true
        },
        {
            "answerText": "B. TRUNCATE can use a WHERE clause to determine which row(s) should be removed.",
            "isCorrect": false
        },
        {
            "answerText": "C. TRUNCATE leaves any indexes on the table in an UNUSABLE state.",
            "isCorrect": false
        },
        {
            "answerText": "D. The result of a TRUNCATE can be undone by issuing a ROLLBACK.",
            "isCorrect": false
        },
        {
            "answerText": "E. The result of a DELETE can be undone by issuing a ROLLBACK.",
            "isCorrect": true
        }
    ],
    "help": "Community vote distribution: AE (100%)"
  },
  {
    "questionId": "10",
    "questionTypeId": "SC",
    "questionText": "The STORES table has a column START_DATE of data type DATE, containing the date the row was inserted.\nYou only want to display details of rows where START DATE is within the last 25 months.\nWhich WHERE clause can be used?",
    "answers": [
        {
            "answerText": "A. WHERE TOLNUMBER(start_date - SYSDATE) <= 25",
            "isCorrect": false
        },
        {
            "answerText": "B. WHERE MONTHS_BETWEEN(start_date, SYSDATE) <= 25",
            "isCorrect": false
        },
        {
            "answerText": "C. WHERE MONTHS_BETWEEN(SYSDATE, start_date) <= 25",
            "isCorrect": true
        },
        {
            "answerText": "D. WHERE ADD_MONTHS(start_date, 25) <= SYSDATE",
            "isCorrect": false
        }
    ],
    "help": "Community vote distribution: C(100%)"
  },
{
    "questionId": "11",
    "questionTypeId": "MC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "12",
    "questionTypeId": "MC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "13",
    "questionTypeId": "MC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "14",
    "questionTypeId": "MC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "15",
    "questionTypeId": "MC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "16",
    "questionTypeId": "MC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "17",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. true",
            "isCorrect": true
        },
        {
            "answerText": "B. false",
            "isCorrect": false
        },
        {
            "answerText": "C. false",
            "isCorrect": false
        },
        {
            "answerText": "D. false",
            "isCorrect": false
        }
    ],
    "help": "Hilfe"
},
{
    "questionId": "18",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "19",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "20",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "21",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "22",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "23",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "24",
    "questionTypeId": "SC",
    "questionText": "",
    "answers": [
        {
            "answerText": "A. ",
            "isCorrect": true
        },
        {
            "answerText": "B. ",
            "isCorrect": true
        },
        {
            "answerText": "C. ",
            "isCorrect": false
        },
        {
            "answerText": "D. ",
            "isCorrect": true
        },
        {
            "answerText": "E. ",
            "isCorrect": true
        }
    ],
    "help": ""
}
]