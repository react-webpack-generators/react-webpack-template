var testsContext = require.context('.', true, /(Test\.js$)|(Helper\.js$)/);
testsContext.keys().forEach(testsContext);
