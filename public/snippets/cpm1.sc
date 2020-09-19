
case class CPM private (value: BigDecimal) extends Ordered[CPM] {
  def + (that: CPM): CPM = CPM(this.value + that.value)
  def - (that: CPM): CPM = CPM(this.value - that.value)
  def * [N: Numeric](n: N): CPM = CPM(this.value * implicitly[Numeric[N]].toDouble(n))
  def / [N: Numeric](n: N): CPM = CPM(this.value / implicitly[Numeric[N]].toDouble(n))
}
object CPM {
  def apply[N: Numeric](value: N): CPM = new CPM(BigDecimal(value))
}

case class VideoCPM private (private value: BigDecimal) extends Ordered[VideoCPM] {
  def scaleByRenderRate (renderRate: Double): CPM = CPM.ofDollars(value * renderRate)
}
