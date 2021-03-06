// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.toUpperCase()
 *
 * @path ch15/15.5/15.5.4/15.5.4.18/S15.5.4.18_A1_T3.js
 * @description Checking by using eval
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (eval("\"bj\"").toUpperCase() !== "BJ") {
  $ERROR('#1: eval("\\"bj\\"").toUpperCase() === "BJ". Actual: '+eval("\"bj\"").toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

