import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MapComponent {
  map!: Map;

  constructor() {}

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      view: new View({
        projection: 'EPSG:4326',
        center: [0, 0],
        zoom: 2,
        maxZoom: 18,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });
  }
}
