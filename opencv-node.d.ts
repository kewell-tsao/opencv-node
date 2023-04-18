import cv, {
  Mat,
  Size,
  Point,
  Range,
  Scalar,
  Rect,
  Vertex,
  QuadEdge,
  Subdiv2D,
  BackgroundSubtractor,
  BackgroundSubtractorMOG2,
  TermCriteria,
  MatVector,
  RotatedRect,
  BorderTypes,
} from 'opencv-ts';
export { Mat, Size, Point, Range, Scalar, Rect, Vertex, QuadEdge, Subdiv2D, BackgroundSubtractor, BackgroundSubtractorMOG2, TermCriteria, MatVector, RotatedRect, BorderTypes };

export function loadOpenCV(): Promise<{ cv: typeof cv }>;
