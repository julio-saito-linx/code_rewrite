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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "arg1",
                "range": [
                  34,
                  38
                ]
              },
              "right": {
                "type": "Identifier",
                "name": "arg2",
                "range": [
                  41,
                  45
                ]
              },
              "range": [
                34,
                45
              ]
            },
            "range": [
              27,
              46
            ]
          }
        ],
        "range": [
          24,
          48
        ]
      },
      "rest": null,
      "generator": false,
      "expression": false,
      "range": [
        0,
        48
      ]
    }
  ],
  "range": [
    0,
    48
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
      "type": "Keyword",
      "value": "return",
      "range": [
        27,
        33
      ]
    },
    {
      "type": "Identifier",
      "value": "arg1",
      "range": [
        34,
        38
      ]
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        39,
        40
      ]
    },
    {
      "type": "Identifier",
      "value": "arg2",
      "range": [
        41,
        45
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        45,
        46
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        47,
        48
      ]
    }
  ]
}