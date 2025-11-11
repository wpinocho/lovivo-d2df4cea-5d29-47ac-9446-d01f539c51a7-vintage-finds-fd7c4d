import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm bg-gradient-to-br from-primary/10 to-secondary/10">
              <Sparkles className="h-12 w-12 text-primary/30" />
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-1 text-foreground">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-medium">
                Featured
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onViewProducts(collection.id);
            }}
          >
            View Collection
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
