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
  ]
}