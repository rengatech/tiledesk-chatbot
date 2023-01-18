class MockActions {

  static MessageActions() {
    return [
      {
        type: "message",
        body: {
          message: {
            "attributes": {
              "commands": [{
                "type": "message",
                "message": {
                  "text": "Hello by message directive!",
                  "type": "text"
                }
              }, {
                "type": "wait",
                "time": 500
              }, {
                "type": "message",
                "message": {
                  "text": "Ciao",
                  "type": "text",
                  "attributes": {
                    "attachment": {
                      "type": "template",
                      "buttons": [{
                        "type": "text",
                        "value": "/start"
                      }]
                    }
                  }
                }
              }]
            }
          }
        }
      }
    ]
  }

  static Message_plus_Agent() {
    return [
      {
        type: "message",
        body: {
          message: {
            "attributes": {
              "commands": [{
                "type": "message",
                "message": {
                  "text": "Moving you to an agent...",
                  "type": "text"
                }
              }]
            }
          }
        }
      },
      {
        type: "agent"
      }
    ]
  }

  static Message_plus_AgentWhenOnline() {
    return [
      {
        type: "message",
        body: {
          message: {
            "attributes": {
              "commands": [{
                "type": "message",
                "message": {
                  "text": "Looking for an agent online...",
                  "type": "text"
                }
              }]
            }
          }
        }
      },
      {
        type: "whenonlinemovetoagent"
      }
    ]
  }

  static Message_plus_Close() {
    return [
      {
        type: "message",
        body: {
          message: {
            "attributes": {
              "commands": [{
                "type": "message",
                "message": {
                  "text": "Closing...",
                  "type": "text"
                }
              }]
            }
          }
        }
      },
      {
        type: "close"
      }
    ]
  }

  static ChangeDepartment() {
    return [
      {
        type: "department",
        body: {
          depName: "Support"
        }
      },
      {
        type: "message",
        body: {
          message: {
            text: "/start",
            "attributes": {
              "subtype": "info"
            }
          }
        }
      }
    ]
  }

  static Intent() {
    return [
      {
        type: "intent",
        body: {
          intentName: "intentAction"
        }
      }
    ]
  }

}
module.exports = { MockActions };