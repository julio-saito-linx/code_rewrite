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
            "id": {
              "type": "Identifier",
              "name": "f1",
              "range": [
                18,
                20
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "name": "arg1",
                "range": [
                  21,
                  25
                ]
              },
              {
                "type": "Identifier",
                "name": "arg2",
                "range": [
                  27,
                  31
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
                          36,
                          43
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "log",
                        "range": [
                          44,
                          47
                        ]
                      },
                      "range": [
                        36,
                        47
                      ]
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "f1:",
                        "raw": "'f1:'",
                        "range": [
                          48,
                          53
                        ]
                      },
                      {
                        "type": "Identifier",
                        "name": "arguments",
                        "range": [
                          55,
                          64
                        ]
                      }
                    ],
                    "range": [
                      36,
                      65
                    ]
                  },
                  "range": [
                    36,
                    66
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
                        75,
                        79
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "arg2",
                      "range": [
                        82,
                        86
                      ]
                    },
                    "range": [
                      75,
                      86
                    ]
                  },
                  "range": [
                    68,
                    87
                  ]
                }
              ],
              "range": [
                33,
                89
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              9,
              89
            ]
          },
          "range": [
            4,
            89
          ]
        }
      ],
      "kind": "var",
      "range": [
        0,
        90
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
            93,
            95
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "range": [
              96,
              97
            ]
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "range": [
              98,
              99
            ]
          }
        ],
        "range": [
          93,
          100
        ]
      },
      "range": [
        93,
        101
      ]
    }
  ],
  "range": [
    0,
    101
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
      "type": "Identifier",
      "value": "f1",
      "range": [
        18,
        20
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        20,
        21
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        21,
        25
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        25,
        26
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        27,
        31
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        31,
        32
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        33,
        34
      ]
    },
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        36,
        43
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        43,
        44
      ]
    },
    {
      "type": "Identifier",
      "value": "log",
      "range": [
        44,
        47
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        47,
        48
      ]
    },
    {
      "type": "String",
      "value": "'f1:'",
      "range": [
        48,
        53
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        53,
        54
      ]
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        55,
        64
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        64,
        65
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        65,
        66
      ]
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        68,
        74
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        75,
        79
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        80,
        81
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        82,
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
      "type": "Punctuator",
      "value": "}",
      "range": [
        88,
        89
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        89,
        90
      ]
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        93,
        95
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        95,
        96
      ]
    },
    {
      "type": "Numeric",
      "value": "3",
      "range": [
        96,
        97
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        97,
        98
      ]
    },
    {
      "type": "Numeric",
      "value": "4",
      "range": [
        98,
        99
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        99,
        100
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        100,
        101
      ]
    }
  ]
}