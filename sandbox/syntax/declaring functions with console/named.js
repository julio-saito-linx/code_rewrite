{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "f1",
        "range": [
          9,
          11
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "name": "arg1",
          "range": [
            12,
            16
          ]
        },
        {
          "type": "Identifier",
          "name": "arg2",
          "range": [
            18,
            22
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
                    27,
                    34
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "log",
                  "range": [
                    35,
                    38
                  ]
                },
                "range": [
                  27,
                  38
                ]
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "f1:",
                  "raw": "'f1:'",
                  "range": [
                    39,
                    44
                  ]
                },
                {
                  "type": "Identifier",
                  "name": "arguments",
                  "range": [
                    46,
                    55
                  ]
                }
              ],
              "range": [
                27,
                56
              ]
            },
            "range": [
              27,
              57
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
                  66,
                  70
                ]
              },
              "right": {
                "type": "Identifier",
                "name": "arg2",
                "range": [
                  73,
                  77
                ]
              },
              "range": [
                66,
                77
              ]
            },
            "range": [
              59,
              78
            ]
          }
        ],
        "range": [
          24,
          80
        ]
      },
      "rest": null,
      "generator": false,
      "expression": false,
      "range": [
        0,
        80
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
            82,
            84
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "range": [
              85,
              86
            ]
          },
          {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "range": [
              87,
              88
            ]
          }
        ],
        "range": [
          82,
          89
        ]
      },
      "range": [
        82,
        90
      ]
    }
  ],
  "range": [
    0,
    90
  ],
  "comments": [],
  "tokens": [
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        0,
        8
      ]
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        9,
        11
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        11,
        12
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        12,
        16
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        16,
        17
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        18,
        22
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        22,
        23
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        24,
        25
      ]
    },
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        27,
        34
      ]
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        34,
        35
      ]
    },
    {
      "type": "Identifier",
      "value": "log",
      "range": [
        35,
        38
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        38,
        39
      ]
    },
    {
      "type": "String",
      "value": "'f1:'",
      "range": [
        39,
        44
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        44,
        45
      ]
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        46,
        55
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        55,
        56
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        56,
        57
      ]
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        59,
        65
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        66,
        70
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        71,
        72
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        73,
        77
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        77,
        78
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        79,
        80
      ]
    },
    {
      "type": "Identifier",
      "value": "f1",
      "range": [
        82,
        84
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        84,
        85
      ]
    },
    {
      "type": "Numeric",
      "value": "5",
      "range": [
        85,
        86
      ]
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        86,
        87
      ]
    },
    {
      "type": "Numeric",
      "value": "6",
      "range": [
        87,
        88
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
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
    }
  ]
}