import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const AnalyticsDemo = () => {
  // Sample data for medical practice analytics
  const appointmentData = [
    { month: "Ene", scheduled: 45, completed: 42, cancelled: 3 },
    { month: "Feb", scheduled: 52, completed: 48, cancelled: 4 },
    { month: "Mar", scheduled: 38, completed: 35, cancelled: 3 },
    { month: "Abr", scheduled: 61, completed: 58, cancelled: 3 },
    { month: "May", scheduled: 55, completed: 52, cancelled: 3 },
    { month: "Jun", scheduled: 67, completed: 64, cancelled: 3 },
  ];

  const patientSources = [
    { name: "WhatsApp", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Llamadas", value: 30, color: "hsl(var(--chart-2))" },
    { name: "Referidos", value: 15, color: "hsl(var(--chart-3))" },
    { name: "Web", value: 10, color: "hsl(var(--chart-4))" },
  ];

  const revenueData = [
    { month: "Ene", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 11000 },
    { month: "Abr", revenue: 18000 },
    { month: "May", revenue: 16000 },
    { month: "Jun", revenue: 20000 },
  ];

  const chartConfig = {
    scheduled: {
      label: "Programadas",
      color: "hsl(var(--chart-1))",
    },
    completed: {
      label: "Completadas",
      color: "hsl(var(--chart-2))",
    },
    cancelled: {
      label: "Canceladas",
      color: "hsl(var(--chart-3))",
    },
    revenue: {
      label: "Ingresos",
      color: "hsl(var(--chart-4))",
    },
  };

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-4">
            Analytics de Tu Práctica Médica
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-2xl mx-auto">
            Visualiza el rendimiento de tu consulta con datos en tiempo real
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Appointments Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Citas por Mes</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Seguimiento de citas programadas, completadas y canceladas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={appointmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="scheduled" fill="var(--color-scheduled)" />
                  <Bar dataKey="completed" fill="var(--color-completed)" />
                  <Bar dataKey="cancelled" fill="var(--color-cancelled)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Patient Sources Pie Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Fuentes de Pacientes</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Distribución de nuevos pacientes por canal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={patientSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {patientSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Revenue Line Chart */}
          <Card className="shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Ingresos Mensuales</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Tendencias de ingresos de tu práctica médica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--color-revenue)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDemo;
