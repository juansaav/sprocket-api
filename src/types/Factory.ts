import { PerformanceValue } from './PerformanceValue';

export interface Factory {
  id: number;
  name: string;
  performanceValues: PerformanceValue[];
}

