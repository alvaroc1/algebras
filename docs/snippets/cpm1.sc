
case class CPM private (value: BigDecimal) extends Ordered[CPM] {
  import CPM._

  def +(that: CPM): CPM = CPM(this.value + that.value)
  def -(that: CPM): CPM = CPM(this.value - that.value)
  def *[N : Numeric](n: N): CPM = CPM(this.value * implicitly[Numeric[N]].toDouble(n))
  def /[N : Numeric](n: N): CPM = n match {
    case bd: BigDecimal => CPM(this.value / withDefaultContext(bd))
    case _              => CPM(this.value / implicitly[Numeric[N]].toDouble(n))
  }
}

object CPM {
  def apply(value: Double): CPM = new CPM(BigDecimal.decimal(value, PricingModel.mathContext))

  def apply(value: BigDecimal): CPM =
    new CPM(withDefaultContext(value))

  private def withDefaultContext(value: BigDecimal): BigDecimal =
    BigDecimal.decimal(value.bigDecimal, PricingModel.mathContext)

}