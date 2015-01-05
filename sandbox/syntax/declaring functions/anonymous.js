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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "arg1",
                      "range": [
                        40,
                        44
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "arg2",
                      "range": [
                        47,
                        51
                      ]
                    },
                    "range": [
                      40,
                      51
                    ]
                  },
                  "range": [
                    33,
                    52
                  ]
                }
              ],
              "range": [
                30,
                54
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              9,
              54
            ]
          },
          "range": [
            4,
            54
          ]
        }
      ],
      "kind": "var",
      "range": [
        0,
        55
      ]
    }
  ],
  "range": [
    0,
    55
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
      "type": "Keyword",
      "value": "return",
      "range": [
        33,
        39
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        40,
        44
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        45,
        46
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        47,
        51
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        51,
        52
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        53,
        54
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        54,
        55
      ]
    }
  ]
}