import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Droplets, Wind, ShieldCheck } from 'lucide-react';
import careGuideImg from '@/assets/care-guide.jpg';

/**
 * EDITABLE UI COMPONENT - VintageCareGuide
 * 
 * Care tips section for vintage fashion items.
 */

export const VintageCareGuide = () => {
  const careTips = [
    {
      icon: Droplets,
      title: 'Gentle Washing',
      description: 'Hand wash or use delicate cycle with cold water. Vintage fabrics need extra care.',
    },
    {
      icon: Wind,
      title: 'Air Dry',
      description: 'Hang or lay flat to dry. Avoid dryers which can damage delicate vintage materials.',
    },
    {
      icon: Sparkles,
      title: 'Proper Storage',
      description: 'Store in a cool, dry place. Use padded hangers for structured pieces.',
    },
    {
      icon: ShieldCheck,
      title: 'Professional Care',
      description: 'For luxury items, consider professional cleaning specialized in vintage garments.',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Vintage Care Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your vintage finds looking their best with proper care and maintenance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careTips.map((tip, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <tip.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={careGuideImg}
                alt="Vintage care essentials"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
