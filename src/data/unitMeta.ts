import { UnitMeta } from '@/types/course';
import { UNIT1_TOPICS } from './unit1';
import { UNIT2_TOPICS } from './unit2';
import { UNIT3_TOPICS } from './unit3';
import { UNIT4_TOPICS } from './unit4';
import { UNIT5_TOPICS } from './unit5';

export const UNIT_META: UnitMeta[] = [
  {
    id: 'unit1',
    shortLabel: 'Unit I',
    roman: 'I',
    title: 'Introduction and Data Foundation',
    subtitle:
      'Basics, relationship with other fields, the visualization process & pipelines, pseudo-code conventions, the scatter plot, types of data, structure within/between records, preprocessing and data sets.',
    topicCount: UNIT1_TOPICS.length,
    colorVar: '--v-teal',
  },
  {
    id: 'unit2',
    shortLabel: 'Unit II',
    roman: 'II',
    title: 'Foundations for Visualization',
    subtitle:
      'Visualization stages, semiology of graphical symbols, the eight visual variables, historical perspective, taxonomies, experimental semiotics, Gibson’s affordance theory and the perceptual processing model.',
    topicCount: UNIT2_TOPICS.length,
    colorVar: '--v-blue',
  },
  {
    id: 'unit3',
    shortLabel: 'Unit III',
    roman: 'III',
    title: 'Visualization Techniques & Visualizing Spatial Data',
    subtitle:
      'Spatial data (1D, 2D, 3D, dynamic, combined techniques) and geospatial data (point, line and area data, map projections, cartograms, generalization and labeling).',
    topicCount: UNIT3_TOPICS.length,
    colorVar: '--v-teal',
  },
  {
    id: 'unit4',
    shortLabel: 'Unit IV',
    roman: 'IV',
    title: 'Multivariate Data & Text/Document Visualization',
    subtitle:
      'Point, line, region-based and combined techniques, trees and networks; text representation levels, the vector space model (tf-idf, Zipf), single-document, collection and extended text visualizations.',
    topicCount: UNIT4_TOPICS.length,
    colorVar: '--v-amber',
  },
  {
    id: 'unit5',
    shortLabel: 'Unit V',
    roman: 'V',
    title: 'Interaction Concepts & Research Directions',
    subtitle:
      'Interaction operators, operands & spaces, the unified framework, techniques per space, animation and control; designing effective visualizations, common problems and research issues.',
    topicCount: UNIT5_TOPICS.length,
    colorVar: '--v-violet',
  },
];
