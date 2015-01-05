{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "f1",
            "range": [
              4,
              6
            ]
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "arg1",
                "range": [
                  18,
                  22
                ]
              },
              {
                "type": "Identifier",
                "name": "arg2",
                "range": [
                  24,
                  28
                ]
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "console",
                        "range": [
                          33,
                          40
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "log",
                        "range": [
                          41,
                          44
                        ]
                      },
                      "range": [
                        33,
                        44
                      ]
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "f1:",
                        "raw": "'f1:'",
                        "range": [
                          45,
                          50
                        ]
                      },
                      {
                        "type": "Identifier",
                        "name": "arguments",
                        "range": [
                          52,
                          61
                        ]
                      }
                    ],
                    "range": [
                      33,
                      62
                    ]
                  },
                  "range": [
                    33,
                    63
                  ]
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "arg1",
                      "range": [
                        72,
                        76
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "arg2",
                      "range": [
                        79,
                        83
                      ]
                    },
                    "range": [
                      72,
                      83
                    ]
                  },
                  "range": [
                    65,
                    84
                  ]
                }
              ],
              "range": [
                30,
                86
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              9,
              86
            ]
          },
          "range": [
            4,
            86
          ]
        }
      ],
      "kind": "var",
      "range": [
        0,
        87
      ]
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "f1",
          "range": [
            90,
            92
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "range": [
              93,
              94
            ]
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "range": [
              95,
              96
            ]
          }
        ],
        "range": [
          90,
          97
        ]
      },
      "range": [
        90,
        98
      ]
    }
  ],
  "range": [
    0,
    98
  ],
  "comments": [],
  "tokens": [
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        0,
        3
      ]
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        4,
        6
      ]
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        7,
        8
      ]
    },
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        9,
        17
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        17,
        18
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        18,
        22
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        22,
        23
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        24,
        28
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        28,
        29
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        30,
        31
      ]
    },
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        33,
        40
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        40,
        41
      ]
    },
    {
      "type": "Identifier",
      "value": "log",
      "range": [
        41,
        44
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        44,
        45
      ]
    },
    {
      "type": "String",
      "value": "'f1:'",
      "range": [
        45,
        50
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        50,
        51
      ]
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        52,
        61
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        61,
        62
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        62,
        63
      ]
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        65,
        71
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        72,
        76
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        77,
        78
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        79,
        83
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        83,
        84
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        85,
        86
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        86,
        87
      ]
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        90,
        92
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        92,
        93
      ]
    },
    {
      "type": "Numeric",
      "value": "1",
      "range": [
        93,
        94
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        94,
        95
      ]
    },
    {
      "type": "Numeric",
      "value": "2",
      "range": [
        95,
        96
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        96,
        97
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        97,
        98
      ]
    }
  ]
}