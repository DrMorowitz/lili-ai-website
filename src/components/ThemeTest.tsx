import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";

const ThemeTest = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-4">
            Prueba del Sistema de Temas
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-2xl mx-auto">
            Verifica que todos los componentes se adapten correctamente a los temas claro y oscuro
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Color Palette Test */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Paleta de Colores</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Todos los colores del sistema de diseño
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-geist text-sm font-medium">Primary</span>
                  </div>
                  <div className="h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground font-geist text-sm font-medium">Secondary</span>
                  </div>
                  <div className="h-12 bg-tertiary rounded-lg flex items-center justify-center">
                    <span className="text-tertiary-foreground font-geist text-sm font-medium">Tertiary</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-geist text-sm font-medium">Accent</span>
                  </div>
                  <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-geist text-sm font-medium">Muted</span>
                  </div>
                  <div className="h-12 bg-destructive rounded-lg flex items-center justify-center">
                    <span className="text-destructive-foreground font-geist text-sm font-medium">Destructive</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shadow System Test */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Sistema de Sombras</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Diferentes niveles de sombra para profundidad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="h-16 bg-card rounded-lg shadow-sm flex items-center justify-center">
                  <span className="font-geist text-card-foreground text-sm">Shadow Small</span>
                </div>
                <div className="h-16 bg-card rounded-lg shadow-md flex items-center justify-center">
                  <span className="font-geist text-card-foreground text-sm">Shadow Medium</span>
                </div>
                <div className="h-16 bg-card rounded-lg shadow-lg flex items-center justify-center">
                  <span className="font-geist text-card-foreground text-sm">Shadow Large</span>
                </div>
                <div className="h-16 bg-card rounded-lg shadow-xl flex items-center justify-center">
                  <span className="font-geist text-card-foreground text-sm">Shadow Extra Large</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chart Colors Test */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Colores de Gráficos</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Paleta optimizada para visualización de datos médicos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--chart-1))' }}>
                  <span className="text-white font-geist text-xs font-medium">Chart 1</span>
                </div>
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--chart-2))' }}>
                  <span className="text-white font-geist text-xs font-medium">Chart 2</span>
                </div>
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--chart-3))' }}>
                  <span className="text-white font-geist text-xs font-medium">Chart 3</span>
                </div>
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--chart-4))' }}>
                  <span className="text-white font-geist text-xs font-medium">Chart 4</span>
                </div>
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--chart-5))' }}>
                  <span className="text-white font-geist text-xs font-medium">Chart 5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Elements Test */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-geist text-primary">Elementos Interactivos</CardTitle>
              <CardDescription className="font-geist text-text-secondary">
                Botones, badges y otros componentes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default" className="font-geist">Default</Button>
                <Button variant="secondary" className="font-geist">Secondary</Button>
                <Button variant="outline" className="font-geist">Outline</Button>
                <Button variant="ghost" className="font-geist">Ghost</Button>
                <Button variant="destructive" className="font-geist">Destructive</Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="font-geist">Default</Badge>
                <Badge variant="secondary" className="font-geist">Secondary</Badge>
                <Badge variant="outline" className="font-geist">Outline</Badge>
                <Badge variant="destructive" className="font-geist">Destructive</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-geist text-sm text-foreground">Progreso del Proyecto</span>
                  <span className="font-geist text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="w-full" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="font-geist text-sm text-foreground">Cambiar Tema:</span>
                <ThemeToggle />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Typography Test */}
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="font-geist text-primary">Tipografía - Fuente Geist</CardTitle>
            <CardDescription className="font-geist text-text-secondary">
              Verificación de la fuente Geist en todos los tamaños
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-geist text-foreground">Heading 1 - 4xl</h1>
              <h2 className="text-3xl font-semibold font-geist text-foreground">Heading 2 - 3xl</h2>
              <h3 className="text-2xl font-medium font-geist text-foreground">Heading 3 - 2xl</h3>
              <h4 className="text-xl font-medium font-geist text-foreground">Heading 4 - xl</h4>
              <p className="text-lg font-geist text-foreground">Paragraph Large - lg</p>
              <p className="text-base font-geist text-foreground">Paragraph Base - base</p>
              <p className="text-sm font-geist text-muted-foreground">Small Text - sm</p>
              <p className="text-xs font-geist text-muted-foreground">Extra Small - xs</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ThemeTest;
