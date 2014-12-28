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
            "name": "f1"
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
          }
        }
      ],
      "kind": "var"
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          }
        ]
      }
    }
  ]
}