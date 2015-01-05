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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "arg1",
                      "range": [
                        43,
                        47
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "arg2",
                      "range": [
                        50,
                        54
                      ]
                    },
                    "range": [
                      43,
                      54
                    ]
                  },
                  "range": [
                    36,
                    55
                  ]
                }
              ],
              "range": [
                33,
                57
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              9,
              57
            ]
          },
          "range": [
            4,
            57
          ]
        }
      ],
      "kind": "var",
      "range": [
        0,
        58
      ]
    }
  ],
  "range": [
    0,
    58
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
      "type": "Keyword",
      "value": "return",
      "range": [
        36,
        42
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        43,
        47
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        48,
        49
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        50,
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
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        56,
        57
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        57,
        58
      ]
    }
  ]
}