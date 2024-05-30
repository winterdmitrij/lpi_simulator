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
    "questionId": "3",
    "questionTypeId": "MC",
    "questionText": "What is true about non-equijoin statement performance? (Choose two.)",
    "answers": [
        {
            "answerText": "A. The BETWEEN condition always performs less well than using the >= and <= conditions. ",
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
            "answerText": "D. Table aliases can improve performance. ",
            "isCorrect": true
        },
        {
            "answerText": "E. The join syntax used makes no difference to performance.",
            "isCorrect": true
        }
    ],
    "help": "DE: 50%, CD: 50%"
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
            "answerText": "F. LAST_DAY returns the date of the last day of the previous month only. ",
            "isCorrect": false
        }
    ],
    "help": "AE: 92% - Reference: " +
            "https://docs.oracle.com/database/121/SQLRF/functions025.htm " +
            "https://docs.oracle.com/cd/B28359_01/server.111/b28286/functions004.htm "
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
            "answerText": "C. A SEQUENCE can have a synonym. ",
            "isCorrect": true
        },
        {
            "answerText": "D. Any user can drop a PUBLIC synonym.",
            "isCorrect": false
        },
        {
            "answerText": "E. A synonym created by one user can refer to an object belonging to another user.",
            "isCorrect": true
        }
    ],
    "help": ""
},
{
    "questionId": "6",
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
    "questionId": "7",
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
    "questionId": "8",
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
    "questionId": "9",
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
    "questionId": "10",
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