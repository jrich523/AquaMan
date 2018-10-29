# Device Plugins

These devices will follow a few simple rules

1. Case Matters (yeah i think im sticking with that)
1. Return an object with two properties, Create which is the function to build a new one, and API which returns an object with Actions and State.
1. It will be assumed (in the State/Action) that you have at least a Name and a Data