<script type="text/x-mathjax-config">
// bm"something" get bold-italics
MathJax.Hub.Register.StartupHook("AsciiMath Jax Config", function () {
  var AM = MathJax.InputJax.AsciiMath.AM;
  AM.symbols.push({
	input:"bm",
	tag:"mstyle",
	atname:"mathvariant",
	atval:"bold-italic",
    output:"bm",
	tex:null,
	ttype:AM.TOKEN.UNARY
  });
});
</script>

