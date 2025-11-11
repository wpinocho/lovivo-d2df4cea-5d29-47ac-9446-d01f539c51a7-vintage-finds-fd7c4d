import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { useState } from 'react';

/**
 * EDITABLE UI COMPONENT - FilterSection
 * 
 * Brand and condition filter buttons for vintage store.
 */

interface FilterSectionProps {
  onFilterChange?: (filters: { brands: string[]; conditions: string[] }) => void;
}

export const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const brands = ['Levi\'s', 'Ralph Lauren', 'Chanel', 'Gucci', 'Burberry', 'Tommy Hilfiger'];
  const conditions = ['Excellent', 'Good', 'Fair'];

  const toggleBrand = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
    onFilterChange?.({ brands: newBrands, conditions: selectedConditions });
  };

  const toggleCondition = (condition: string) => {
    const newConditions = selectedConditions.includes(condition)
      ? selectedConditions.filter(c => c !== condition)
      : [...selectedConditions, condition];
    setSelectedConditions(newConditions);
    onFilterChange?.({ brands: selectedBrands, conditions: newConditions });
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedConditions([]);
    onFilterChange?.({ brands: [], conditions: [] });
  };

  const hasActiveFilters = selectedBrands.length > 0 || selectedConditions.length > 0;

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Filter By
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Brand Filters */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">
            Brand
          </h4>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => {
              const isSelected = selectedBrands.includes(brand);
              return (
                <Badge
                  key={brand}
                  variant={isSelected ? 'default' : 'outline'}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleBrand(brand)}
                >
                  {brand}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Condition Filters */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">
            Condition
          </h4>
          <div className="flex flex-wrap gap-2">
            {conditions.map((condition) => {
              const isSelected = selectedConditions.includes(condition);
              return (
                <Badge
                  key={condition}
                  variant={isSelected ? 'default' : 'outline'}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleCondition(condition)}
                >
                  {condition}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-2">
            Active filters ({selectedBrands.length + selectedConditions.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedBrands.map((brand) => (
              <Badge key={brand} variant="secondary" className="gap-1">
                {brand}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => toggleBrand(brand)}
                />
              </Badge>
            ))}
            {selectedConditions.map((condition) => (
              <Badge key={condition} variant="secondary" className="gap-1">
                {condition}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => toggleCondition(condition)}
                />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
