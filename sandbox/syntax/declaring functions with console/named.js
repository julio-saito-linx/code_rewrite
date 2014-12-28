{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "f1"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "arg1"
        },
        {
          "type": "Identifier",
          "name": "arg2"
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
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "name": "log"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "f1:",
                  "raw": "'f1:'"
                },
                {
                  "type": "Identifier",
                  "name": "arguments"
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "arg1"
              },
              "right": {
                "type": "Identifier",
                "name": "arg2"
              }
            }
          }
        ]
      },
      "rest": null,
      "generator": false,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "f1"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Literal",
            "value": 6,
            "raw": "6"
          }
        ]
      }
    }
  ]
}