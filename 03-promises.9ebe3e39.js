document.querySelector(".form").addEventListener("submit",(function(e){var o=function(e,o){setTimeout((function(){var t,n,a;(t=e,n=o,a=Math.random()>.3,new Promise((function(e,o){a?e({position:t,delay:n}):o({position:t,delay:n})}))).then((function(e){var o=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}),o)};e.preventDefault();var t=e.target.elements,n=t.delay,a=t.step,l=t.amount;delayValue=Number(n.value),stepValue=Number(a.value);for(var i=1,u=delayValue;i<=l.value;i+=1,u+=stepValue)o(i,u)}));
//# sourceMappingURL=03-promises.9ebe3e39.js.map