//JavaScript Arithmetic Operators
//Arithmetic operators perform arithmetic on numbers (literals or variables).

//Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

//The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

Take the following snippet:
let a = 1;
b = 5 + ++a;

This is exactly equivalent to:
let a = 1;
a = a + 1;
b = 5 + a;

Whereas the alternative:
let a = 1;
b = 5 + a++;

Is exactly equivalent to:
let a = 1;
b = 5 + a;
a = a + 1;

The difference is the order of events. Do you want to increment before or after the current operation? Simple.