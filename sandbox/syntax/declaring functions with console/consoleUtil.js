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
            "name": "splice",
            "range": [
              4,
              10
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 10
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "Array",
                "range": [
                  13,
                  18
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 18
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "name": "prototype",
                "range": [
                  19,
                  28
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 19
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                }
              },
              "range": [
                13,
                28
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 13
                },
                "end": {
                  "line": 1,
                  "column": 28
                }
              }
            },
            "property": {
              "type": "Identifier",
              "name": "splice",
              "range": [
                29,
                35
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 29
                },
                "end": {
                  "line": 1,
                  "column": 35
                }
              }
            },
            "range": [
              13,
              35
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 13
              },
              "end": {
                "line": 1,
                "column": 35
              }
            }
          },
          "range": [
            4,
            35
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 35
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        0,
        36
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 36
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "debugSource",
            "range": [
              41,
              52
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "splice",
                "range": [
                  55,
                  61
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 18
                  },
                  "end": {
                    "line": 2,
                    "column": 24
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "name": "call",
                "range": [
                  62,
                  66
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 25
                  },
                  "end": {
                    "line": 2,
                    "column": 29
                  }
                }
              },
              "range": [
                55,
                66
              ],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 18
                },
                "end": {
                  "line": 2,
                  "column": 29
                }
              }
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "arguments",
                "range": [
                  67,
                  76
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 30
                  },
                  "end": {
                    "line": 2,
                    "column": 39
                  }
                }
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "range": [
                  78,
                  79
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 41
                  },
                  "end": {
                    "line": 2,
                    "column": 42
                  }
                }
              }
            ],
            "range": [
              55,
              80
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 18
              },
              "end": {
                "line": 2,
                "column": 43
              }
            }
          },
          "range": [
            41,
            80
          ],
          "loc": {
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 2,
              "column": 43
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        37,
        81
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 44
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "util",
            "range": [
              86,
              90
            ],
            "loc": {
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 3,
                "column": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "require",
              "range": [
                93,
                100
              ],
              "loc": {
                "start": {
                  "line": 3,
                  "column": 11
                },
                "end": {
                  "line": 3,
                  "column": 18
                }
              }
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "util",
                "raw": "'util'",
                "range": [
                  101,
                  107
                ],
                "loc": {
                  "start": {
                    "line": 3,
                    "column": 19
                  },
                  "end": {
                    "line": 3,
                    "column": 25
                  }
                }
              }
            ],
            "range": [
              93,
              108
            ],
            "loc": {
              "start": {
                "line": 3,
                "column": 11
              },
              "end": {
                "line": 3,
                "column": 26
              }
            }
          },
          "range": [
            86,
            108
          ],
          "loc": {
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 3,
              "column": 26
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        82,
        109
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 27
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "scrubbed",
            "range": [
              114,
              122
            ],
            "loc": {
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 4,
                "column": 12
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "util",
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 15
                  },
                  "end": {
                    "line": 4,
                    "column": 19
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "name": "inspect",
                "range": [
                  130,
                  137
                ],
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 20
                  },
                  "end": {
                    "line": 4,
                    "column": 27
                  }
                }
              },
              "range": [
                125,
                137
              ],
              "loc": {
                "start": {
                  "line": 4,
                  "column": 15
                },
                "end": {
                  "line": 4,
                  "column": 27
                }
              }
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "debugSource",
                "range": [
                  138,
                  149
                ],
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 28
                  },
                  "end": {
                    "line": 4,
                    "column": 39
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "showHidden",
                      "range": [
                        157,
                        167
                      ],
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 4
                        },
                        "end": {
                          "line": 5,
                          "column": 14
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "range": [
                        169,
                        173
                      ],
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 16
                        },
                        "end": {
                          "line": 5,
                          "column": 20
                        }
                      }
                    },
                    "kind": "init",
                    "range": [
                      157,
                      173
                    ],
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 4
                      },
                      "end": {
                        "line": 5,
                        "column": 20
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "depth",
                      "range": [
                        179,
                        184
                      ],
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 4
                        },
                        "end": {
                          "line": 6,
                          "column": 9
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "range": [
                        186,
                        187
                      ],
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 11
                        },
                        "end": {
                          "line": 6,
                          "column": 12
                        }
                      }
                    },
                    "kind": "init",
                    "range": [
                      179,
                      187
                    ],
                    "loc": {
                      "start": {
                        "line": 6,
                        "column": 4
                      },
                      "end": {
                        "line": 6,
                        "column": 12
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "colors",
                      "range": [
                        193,
                        199
                      ],
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 4
                        },
                        "end": {
                          "line": 7,
                          "column": 10
                        }
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "range": [
                        201,
                        205
                      ],
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 12
                        },
                        "end": {
                          "line": 7,
                          "column": 16
                        }
                      }
                    },
                    "kind": "init",
                    "range": [
                      193,
                      205
                    ],
                    "loc": {
                      "start": {
                        "line": 7,
                        "column": 4
                      },
                      "end": {
                        "line": 7,
                        "column": 16
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  207
                ],
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 41
                  },
                  "end": {
                    "line": 8,
                    "column": 1
                  }
                }
              }
            ],
            "range": [
              125,
              208
            ],
            "loc": {
              "start": {
                "line": 4,
                "column": 15
              },
              "end": {
                "line": 8,
                "column": 2
              }
            }
          },
          "range": [
            114,
            208
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 2
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        110,
        209
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 3
        }
      }
    },
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
              210,
              217
            ],
            "loc": {
              "start": {
                "line": 9,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 7
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "log",
            "range": [
              218,
              221
            ],
            "loc": {
              "start": {
                "line": 9,
                "column": 8
              },
              "end": {
                "line": 9,
                "column": 11
              }
            }
          },
          "range": [
            210,
            221
          ],
          "loc": {
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 11
            }
          }
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "\n>>------------------------------------------------------\n",
                            "raw": "'\\n>>------------------------------------------------------\\n'",
                            "range": [
                              222,
                              284
                            ],
                            "loc": {
                              "start": {
                                "line": 9,
                                "column": 12
                              },
                              "end": {
                                "line": 9,
                                "column": 74
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": "  source: ( ",
                            "raw": "'  source: ( '",
                            "range": [
                              287,
                              301
                            ],
                            "loc": {
                              "start": {
                                "line": 9,
                                "column": 77
                              },
                              "end": {
                                "line": 9,
                                "column": 91
                              }
                            }
                          },
                          "range": [
                            222,
                            301
                          ],
                          "loc": {
                            "start": {
                              "line": 9,
                              "column": 12
                            },
                            "end": {
                              "line": 9,
                              "column": 91
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "__filename",
                          "range": [
                            304,
                            314
                          ],
                          "loc": {
                            "start": {
                              "line": 9,
                              "column": 94
                            },
                            "end": {
                              "line": 9,
                              "column": 104
                            }
                          }
                        },
                        "range": [
                          222,
                          314
                        ],
                        "loc": {
                          "start": {
                            "line": 9,
                            "column": 12
                          },
                          "end": {
                            "line": 9,
                            "column": 104
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": " )",
                        "raw": "' )'",
                        "range": [
                          317,
                          321
                        ],
                        "loc": {
                          "start": {
                            "line": 9,
                            "column": 107
                          },
                          "end": {
                            "line": 9,
                            "column": 111
                          }
                        }
                      },
                      "range": [
                        222,
                        321
                      ],
                      "loc": {
                        "start": {
                          "line": 9,
                          "column": 12
                        },
                        "end": {
                          "line": 9,
                          "column": 111
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "\n  ------------------------------------------------------\n",
                      "raw": "'\\n  ------------------------------------------------------\\n'",
                      "range": [
                        324,
                        386
                      ],
                      "loc": {
                        "start": {
                          "line": 9,
                          "column": 114
                        },
                        "end": {
                          "line": 9,
                          "column": 176
                        }
                      }
                    },
                    "range": [
                      222,
                      386
                    ],
                    "loc": {
                      "start": {
                        "line": 9,
                        "column": 12
                      },
                      "end": {
                        "line": 9,
                        "column": 176
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "    f1()",
                    "raw": "'    f1()'",
                    "range": [
                      389,
                      399
                    ],
                    "loc": {
                      "start": {
                        "line": 9,
                        "column": 179
                      },
                      "end": {
                        "line": 9,
                        "column": 189
                      }
                    }
                  },
                  "range": [
                    222,
                    399
                  ],
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 12
                    },
                    "end": {
                      "line": 9,
                      "column": 189
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "\n    ----------------------------------------------------\n    arguments: ",
                  "raw": "'\\n    ----------------------------------------------------\\n    arguments: '",
                  "range": [
                    402,
                    479
                  ],
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 192
                    },
                    "end": {
                      "line": 9,
                      "column": 269
                    }
                  }
                },
                "range": [
                  222,
                  479
                ],
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 12
                  },
                  "end": {
                    "line": 9,
                    "column": 269
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "name": "scrubbed",
                "range": [
                  482,
                  490
                ],
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 272
                  },
                  "end": {
                    "line": 9,
                    "column": 280
                  }
                }
              },
              "range": [
                222,
                490
              ],
              "loc": {
                "start": {
                  "line": 9,
                  "column": 12
                },
                "end": {
                  "line": 9,
                  "column": 280
                }
              }
            },
            "right": {
              "type": "Literal",
              "value": "\n<<------------------------------------------------------\n",
              "raw": "'\\n<<------------------------------------------------------\\n'",
              "range": [
                493,
                555
              ],
              "loc": {
                "start": {
                  "line": 9,
                  "column": 283
                },
                "end": {
                  "line": 9,
                  "column": 345
                }
              }
            },
            "range": [
              222,
              555
            ],
            "loc": {
              "start": {
                "line": 9,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 345
              }
            }
          }
        ],
        "range": [
          210,
          556
        ],
        "loc": {
          "start": {
            "line": 9,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 346
          }
        }
      },
      "range": [
        210,
        557
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 0
        },
        "end": {
          "line": 9,
          "column": 347
        }
      }
    }
  ],
  "range": [
    0,
    557
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 9,
      "column": 347
    }
  },
  "comments": [],
  "tokens": [
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        0,
        3
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      }
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        4,
        10
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 4
        },
        "end": {
          "line": 1,
          "column": 10
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        11,
        12
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 11
        },
        "end": {
          "line": 1,
          "column": 12
        }
      }
    },
    {
      "type": "Identifier",
      "value": "Array",
      "range": [
        13,
        18
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 13
        },
        "end": {
          "line": 1,
          "column": 18
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        18,
        19
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 18
        },
        "end": {
          "line": 1,
          "column": 19
        }
      }
    },
    {
      "type": "Identifier",
      "value": "prototype",
      "range": [
        19,
        28
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 19
        },
        "end": {
          "line": 1,
          "column": 28
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        28,
        29
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 28
        },
        "end": {
          "line": 1,
          "column": 29
        }
      }
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        29,
        35
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 29
        },
        "end": {
          "line": 1,
          "column": 35
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        35,
        36
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 35
        },
        "end": {
          "line": 1,
          "column": 36
        }
      }
    },
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        37,
        40
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 3
        }
      }
    },
    {
      "type": "Identifier",
      "value": "debugSource",
      "range": [
        41,
        52
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 4
        },
        "end": {
          "line": 2,
          "column": 15
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        53,
        54
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 16
        },
        "end": {
          "line": 2,
          "column": 17
        }
      }
    },
    {
      "type": "Identifier",
      "value": "splice",
      "range": [
        55,
        61
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 18
        },
        "end": {
          "line": 2,
          "column": 24
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        61,
        62
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 24
        },
        "end": {
          "line": 2,
          "column": 25
        }
      }
    },
    {
      "type": "Identifier",
      "value": "call",
      "range": [
        62,
        66
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 25
        },
        "end": {
          "line": 2,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        66,
        67
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 29
        },
        "end": {
          "line": 2,
          "column": 30
        }
      }
    },
    {
      "type": "Identifier",
      "value": "arguments",
      "range": [
        67,
        76
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 30
        },
        "end": {
          "line": 2,
          "column": 39
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        76,
        77
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 39
        },
        "end": {
          "line": 2,
          "column": 40
        }
      }
    },
    {
      "type": "Numeric",
      "value": "0",
      "range": [
        78,
        79
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 41
        },
        "end": {
          "line": 2,
          "column": 42
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        79,
        80
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 42
        },
        "end": {
          "line": 2,
          "column": 43
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        80,
        81
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 43
        },
        "end": {
          "line": 2,
          "column": 44
        }
      }
    },
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        82,
        85
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 3
        }
      }
    },
    {
      "type": "Identifier",
      "value": "util",
      "range": [
        86,
        90
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 4
        },
        "end": {
          "line": 3,
          "column": 8
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        91,
        92
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 9
        },
        "end": {
          "line": 3,
          "column": 10
        }
      }
    },
    {
      "type": "Identifier",
      "value": "require",
      "range": [
        93,
        100
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 11
        },
        "end": {
          "line": 3,
          "column": 18
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        100,
        101
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 18
        },
        "end": {
          "line": 3,
          "column": 19
        }
      }
    },
    {
      "type": "String",
      "value": "'util'",
      "range": [
        101,
        107
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 19
        },
        "end": {
          "line": 3,
          "column": 25
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        107,
        108
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 25
        },
        "end": {
          "line": 3,
          "column": 26
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        108,
        109
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 26
        },
        "end": {
          "line": 3,
          "column": 27
        }
      }
    },
    {
      "type": "Keyword",
      "value": "var",
      "range": [
        110,
        113
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 3
        }
      }
    },
    {
      "type": "Identifier",
      "value": "scrubbed",
      "range": [
        114,
        122
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 4
        },
        "end": {
          "line": 4,
          "column": 12
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "=",
      "range": [
        123,
        124
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 13
        },
        "end": {
          "line": 4,
          "column": 14
        }
      }
    },
    {
      "type": "Identifier",
      "value": "util",
      "range": [
        125,
        129
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 15
        },
        "end": {
          "line": 4,
          "column": 19
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        129,
        130
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 19
        },
        "end": {
          "line": 4,
          "column": 20
        }
      }
    },
    {
      "type": "Identifier",
      "value": "inspect",
      "range": [
        130,
        137
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 20
        },
        "end": {
          "line": 4,
          "column": 27
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        137,
        138
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 27
        },
        "end": {
          "line": 4,
          "column": 28
        }
      }
    },
    {
      "type": "Identifier",
      "value": "debugSource",
      "range": [
        138,
        149
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 28
        },
        "end": {
          "line": 4,
          "column": 39
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        149,
        150
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 39
        },
        "end": {
          "line": 4,
          "column": 40
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "{",
      "range": [
        151,
        152
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 41
        },
        "end": {
          "line": 4,
          "column": 42
        }
      }
    },
    {
      "type": "Identifier",
      "value": "showHidden",
      "range": [
        157,
        167
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 4
        },
        "end": {
          "line": 5,
          "column": 14
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        167,
        168
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 14
        },
        "end": {
          "line": 5,
          "column": 15
        }
      }
    },
    {
      "type": "Boolean",
      "value": "true",
      "range": [
        169,
        173
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 16
        },
        "end": {
          "line": 5,
          "column": 20
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        173,
        174
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 20
        },
        "end": {
          "line": 5,
          "column": 21
        }
      }
    },
    {
      "type": "Identifier",
      "value": "depth",
      "range": [
        179,
        184
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 4
        },
        "end": {
          "line": 6,
          "column": 9
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        184,
        185
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 9
        },
        "end": {
          "line": 6,
          "column": 10
        }
      }
    },
    {
      "type": "Numeric",
      "value": "3",
      "range": [
        186,
        187
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 11
        },
        "end": {
          "line": 6,
          "column": 12
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        187,
        188
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 12
        },
        "end": {
          "line": 6,
          "column": 13
        }
      }
    },
    {
      "type": "Identifier",
      "value": "colors",
      "range": [
        193,
        199
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 4
        },
        "end": {
          "line": 7,
          "column": 10
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ":",
      "range": [
        199,
        200
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 10
        },
        "end": {
          "line": 7,
          "column": 11
        }
      }
    },
    {
      "type": "Boolean",
      "value": "true",
      "range": [
        201,
        205
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 12
        },
        "end": {
          "line": 7,
          "column": 16
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "}",
      "range": [
        206,
        207
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 1
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        207,
        208
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 1
        },
        "end": {
          "line": 8,
          "column": 2
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        208,
        209
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 2
        },
        "end": {
          "line": 8,
          "column": 3
        }
      }
    },
    {
      "type": "Identifier",
      "value": "console",
      "range": [
        210,
        217
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 0
        },
        "end": {
          "line": 9,
          "column": 7
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        217,
        218
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 7
        },
        "end": {
          "line": 9,
          "column": 8
        }
      }
    },
    {
      "type": "Identifier",
      "value": "log",
      "range": [
        218,
        221
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 8
        },
        "end": {
          "line": 9,
          "column": 11
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        221,
        222
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 11
        },
        "end": {
          "line": 9,
          "column": 12
        }
      }
    },
    {
      "type": "String",
      "value": "'\\n>>------------------------------------------------------\\n'",
      "range": [
        222,
        284
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 12
        },
        "end": {
          "line": 9,
          "column": 74
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        285,
        286
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 75
        },
        "end": {
          "line": 9,
          "column": 76
        }
      }
    },
    {
      "type": "String",
      "value": "'  source: ( '",
      "range": [
        287,
        301
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 77
        },
        "end": {
          "line": 9,
          "column": 91
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        302,
        303
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 92
        },
        "end": {
          "line": 9,
          "column": 93
        }
      }
    },
    {
      "type": "Identifier",
      "value": "__filename",
      "range": [
        304,
        314
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 94
        },
        "end": {
          "line": 9,
          "column": 104
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        315,
        316
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 105
        },
        "end": {
          "line": 9,
          "column": 106
        }
      }
    },
    {
      "type": "String",
      "value": "' )'",
      "range": [
        317,
        321
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 107
        },
        "end": {
          "line": 9,
          "column": 111
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        322,
        323
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 112
        },
        "end": {
          "line": 9,
          "column": 113
        }
      }
    },
    {
      "type": "String",
      "value": "'\\n  ------------------------------------------------------\\n'",
      "range": [
        324,
        386
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 114
        },
        "end": {
          "line": 9,
          "column": 176
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        387,
        388
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 177
        },
        "end": {
          "line": 9,
          "column": 178
        }
      }
    },
    {
      "type": "String",
      "value": "'    f1()'",
      "range": [
        389,
        399
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 179
        },
        "end": {
          "line": 9,
          "column": 189
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        400,
        401
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 190
        },
        "end": {
          "line": 9,
          "column": 191
        }
      }
    },
    {
      "type": "String",
      "value": "'\\n    ----------------------------------------------------\\n    arguments: '",
      "range": [
        402,
        479
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 192
        },
        "end": {
          "line": 9,
          "column": 269
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        480,
        481
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 270
        },
        "end": {
          "line": 9,
          "column": 271
        }
      }
    },
    {
      "type": "Identifier",
      "value": "scrubbed",
      "range": [
        482,
        490
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 272
        },
        "end": {
          "line": 9,
          "column": 280
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "+",
      "range": [
        491,
        492
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 281
        },
        "end": {
          "line": 9,
          "column": 282
        }
      }
    },
    {
      "type": "String",
      "value": "'\\n<<------------------------------------------------------\\n'",
      "range": [
        493,
        555
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 283
        },
        "end": {
          "line": 9,
          "column": 345
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        555,
        556
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 345
        },
        "end": {
          "line": 9,
          "column": 346
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        556,
        557
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 346
        },
        "end": {
          "line": 9,
          "column": 347
        }
      }
    }
  ]
}