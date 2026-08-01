import type {
    IExecuteFunctions,
    INodeExecutionData,
    IDisplayOptions,
    INodeProperties,
} from 'n8n-workflow';
import { execute as executefilerhourlyGet, description as descriptionfilerhourlyGet } from './dedicatedCloud/filerhourlyget.operation';
import { execute as executefilermonthlyGet, description as descriptionfilermonthlyGet } from './dedicatedCloud/filermonthlyget.operation';
import { execute as executehosthourlyGet, description as descriptionhosthourlyGet } from './dedicatedCloud/hosthourlyget.operation';
import { execute as executehostmonthlyGet, description as descriptionhostmonthlyGet } from './dedicatedCloud/hostmonthlyget.operation';
import { execute as executefilerhourlyGet1, description as descriptionfilerhourlyGet1 } from './dedicatedCloud/filerhourlyget1.operation';
import { execute as executefilermonthlyGet1, description as descriptionfilermonthlyGet1 } from './dedicatedCloud/filermonthlyget1.operation';
import { execute as executehosthourlyGet1, description as descriptionhosthourlyGet1 } from './dedicatedCloud/hosthourlyget1.operation';
import { execute as executehostmonthlyGet1, description as descriptionhostmonthlyGet1 } from './dedicatedCloud/hostmonthlyget1.operation';
import { execute as executefilerhourlyGet2, description as descriptionfilerhourlyGet2 } from './dedicatedCloud/filerhourlyget2.operation';
import { execute as executefilermonthlyGet2, description as descriptionfilermonthlyGet2 } from './dedicatedCloud/filermonthlyget2.operation';
import { execute as executehosthourlyGet2, description as descriptionhosthourlyGet2 } from './dedicatedCloud/hosthourlyget2.operation';
import { execute as executehostmonthlyGet2, description as descriptionhostmonthlyGet2 } from './dedicatedCloud/hostmonthlyget2.operation';
import { execute as executefilerhourlyGet3, description as descriptionfilerhourlyGet3 } from './dedicatedCloud/filerhourlyget3.operation';
import { execute as executefilermonthlyGet3, description as descriptionfilermonthlyGet3 } from './dedicatedCloud/filermonthlyget3.operation';
import { execute as executehosthourlyGet3, description as descriptionhosthourlyGet3 } from './dedicatedCloud/hosthourlyget3.operation';
import { execute as executehostmonthlyGet3, description as descriptionhostmonthlyGet3 } from './dedicatedCloud/hostmonthlyget3.operation';
import { execute as executefilerhourlyGet4, description as descriptionfilerhourlyGet4 } from './dedicatedCloud/filerhourlyget4.operation';
import { execute as executefilermonthlyGet4, description as descriptionfilermonthlyGet4 } from './dedicatedCloud/filermonthlyget4.operation';
import { execute as executehosthourlyGet4, description as descriptionhosthourlyGet4 } from './dedicatedCloud/hosthourlyget4.operation';
import { execute as executehostmonthlyGet4, description as descriptionhostmonthlyGet4 } from './dedicatedCloud/hostmonthlyget4.operation';
import { execute as executefilerhourlyGet5, description as descriptionfilerhourlyGet5 } from './dedicatedCloud/filerhourlyget5.operation';
import { execute as executefilermonthlyGet5, description as descriptionfilermonthlyGet5 } from './dedicatedCloud/filermonthlyget5.operation';
import { execute as executehosthourlyGet5, description as descriptionhosthourlyGet5 } from './dedicatedCloud/hosthourlyget5.operation';
import { execute as executehostmonthlyGet5, description as descriptionhostmonthlyGet5 } from './dedicatedCloud/hostmonthlyget5.operation';
import { execute as executefilerhourlyGet6, description as descriptionfilerhourlyGet6 } from './dedicatedCloud/filerhourlyget6.operation';
import { execute as executefilermonthlyGet6, description as descriptionfilermonthlyGet6 } from './dedicatedCloud/filermonthlyget6.operation';
import { execute as executehosthourlyGet6, description as descriptionhosthourlyGet6 } from './dedicatedCloud/hosthourlyget6.operation';
import { execute as executehostmonthlyGet6, description as descriptionhostmonthlyGet6 } from './dedicatedCloud/hostmonthlyget6.operation';
import { execute as executefilerhourlyGet7, description as descriptionfilerhourlyGet7 } from './dedicatedCloud/filerhourlyget7.operation';
import { execute as executefilermonthlyGet7, description as descriptionfilermonthlyGet7 } from './dedicatedCloud/filermonthlyget7.operation';
import { execute as executehosthourlyGet7, description as descriptionhosthourlyGet7 } from './dedicatedCloud/hosthourlyget7.operation';
import { execute as executehostmonthlyGet7, description as descriptionhostmonthlyGet7 } from './dedicatedCloud/hostmonthlyget7.operation';
import { execute as executefilerhourlyGet8, description as descriptionfilerhourlyGet8 } from './dedicatedCloud/filerhourlyget8.operation';
import { execute as executefilermonthlyGet8, description as descriptionfilermonthlyGet8 } from './dedicatedCloud/filermonthlyget8.operation';
import { execute as executehosthourlyGet8, description as descriptionhosthourlyGet8 } from './dedicatedCloud/hosthourlyget8.operation';
import { execute as executehostmonthlyGet8, description as descriptionhostmonthlyGet8 } from './dedicatedCloud/hostmonthlyget8.operation';
import { execute as executefilerhourlyGet9, description as descriptionfilerhourlyGet9 } from './dedicatedCloud/filerhourlyget9.operation';
import { execute as executefilermonthlyGet9, description as descriptionfilermonthlyGet9 } from './dedicatedCloud/filermonthlyget9.operation';
import { execute as executehosthourlyGet9, description as descriptionhosthourlyGet9 } from './dedicatedCloud/hosthourlyget9.operation';
import { execute as executehostmonthlyGet9, description as descriptionhostmonthlyGet9 } from './dedicatedCloud/hostmonthlyget9.operation';
import { execute as executefilerhourlyGet10, description as descriptionfilerhourlyGet10 } from './dedicatedCloud/filerhourlyget10.operation';
import { execute as executefilermonthlyGet10, description as descriptionfilermonthlyGet10 } from './dedicatedCloud/filermonthlyget10.operation';
import { execute as executehosthourlyGet10, description as descriptionhosthourlyGet10 } from './dedicatedCloud/hosthourlyget10.operation';
import { execute as executehostmonthlyGet10, description as descriptionhostmonthlyGet10 } from './dedicatedCloud/hostmonthlyget10.operation';
import { execute as executefilerhourlyGet11, description as descriptionfilerhourlyGet11 } from './dedicatedCloud/filerhourlyget11.operation';
import { execute as executefilermonthlyGet11, description as descriptionfilermonthlyGet11 } from './dedicatedCloud/filermonthlyget11.operation';
import { execute as executehosthourlyGet11, description as descriptionhosthourlyGet11 } from './dedicatedCloud/hosthourlyget11.operation';
import { execute as executehostmonthlyGet11, description as descriptionhostmonthlyGet11 } from './dedicatedCloud/hostmonthlyget11.operation';
import { execute as executefilerhourlyGet12, description as descriptionfilerhourlyGet12 } from './dedicatedCloud/filerhourlyget12.operation';
import { execute as executefilermonthlyGet12, description as descriptionfilermonthlyGet12 } from './dedicatedCloud/filermonthlyget12.operation';
import { execute as executehosthourlyGet12, description as descriptionhosthourlyGet12 } from './dedicatedCloud/hosthourlyget12.operation';
import { execute as executehostmonthlyGet12, description as descriptionhostmonthlyGet12 } from './dedicatedCloud/hostmonthlyget12.operation';
import { execute as executefilerhourlyGet13, description as descriptionfilerhourlyGet13 } from './dedicatedCloud/filerhourlyget13.operation';
import { execute as executefilermonthlyGet13, description as descriptionfilermonthlyGet13 } from './dedicatedCloud/filermonthlyget13.operation';
import { execute as executehosthourlyGet13, description as descriptionhosthourlyGet13 } from './dedicatedCloud/hosthourlyget13.operation';
import { execute as executehostmonthlyGet13, description as descriptionhostmonthlyGet13 } from './dedicatedCloud/hostmonthlyget13.operation';
import { execute as executefilerhourlyGet14, description as descriptionfilerhourlyGet14 } from './dedicatedCloud/filerhourlyget14.operation';
import { execute as executefilermonthlyGet14, description as descriptionfilermonthlyGet14 } from './dedicatedCloud/filermonthlyget14.operation';
import { execute as executehosthourlyGet14, description as descriptionhosthourlyGet14 } from './dedicatedCloud/hosthourlyget14.operation';
import { execute as executehostmonthlyGet14, description as descriptionhostmonthlyGet14 } from './dedicatedCloud/hostmonthlyget14.operation';
import { execute as executefilerhourlyGet15, description as descriptionfilerhourlyGet15 } from './dedicatedCloud/filerhourlyget15.operation';
import { execute as executefilermonthlyGet15, description as descriptionfilermonthlyGet15 } from './dedicatedCloud/filermonthlyget15.operation';
import { execute as executehosthourlyGet15, description as descriptionhosthourlyGet15 } from './dedicatedCloud/hosthourlyget15.operation';
import { execute as executehostmonthlyGet15, description as descriptionhostmonthlyGet15 } from './dedicatedCloud/hostmonthlyget15.operation';
import { execute as executefilerhourlyGet16, description as descriptionfilerhourlyGet16 } from './dedicatedCloud/filerhourlyget16.operation';
import { execute as executefilermonthlyGet16, description as descriptionfilermonthlyGet16 } from './dedicatedCloud/filermonthlyget16.operation';
import { execute as executehosthourlyGet16, description as descriptionhosthourlyGet16 } from './dedicatedCloud/hosthourlyget16.operation';
import { execute as executehostmonthlyGet16, description as descriptionhostmonthlyGet16 } from './dedicatedCloud/hostmonthlyget16.operation';
import { execute as executefilerhourlyGet17, description as descriptionfilerhourlyGet17 } from './dedicatedCloud/filerhourlyget17.operation';
import { execute as executefilermonthlyGet17, description as descriptionfilermonthlyGet17 } from './dedicatedCloud/filermonthlyget17.operation';
import { execute as executehosthourlyGet17, description as descriptionhosthourlyGet17 } from './dedicatedCloud/hosthourlyget17.operation';
import { execute as executehostmonthlyGet17, description as descriptionhostmonthlyGet17 } from './dedicatedCloud/hostmonthlyget17.operation';
import { execute as executefilerhourlyGet18, description as descriptionfilerhourlyGet18 } from './dedicatedCloud/filerhourlyget18.operation';
import { execute as executefilermonthlyGet18, description as descriptionfilermonthlyGet18 } from './dedicatedCloud/filermonthlyget18.operation';
import { execute as executehosthourlyGet18, description as descriptionhosthourlyGet18 } from './dedicatedCloud/hosthourlyget18.operation';
import { execute as executehostmonthlyGet18, description as descriptionhostmonthlyGet18 } from './dedicatedCloud/hostmonthlyget18.operation';
import { execute as executefilerhourlyGet19, description as descriptionfilerhourlyGet19 } from './dedicatedCloud/filerhourlyget19.operation';
import { execute as executefilermonthlyGet19, description as descriptionfilermonthlyGet19 } from './dedicatedCloud/filermonthlyget19.operation';
import { execute as executehosthourlyGet19, description as descriptionhosthourlyGet19 } from './dedicatedCloud/hosthourlyget19.operation';
import { execute as executehostmonthlyGet19, description as descriptionhostmonthlyGet19 } from './dedicatedCloud/hostmonthlyget19.operation';
import { execute as executefilerhourlyGet20, description as descriptionfilerhourlyGet20 } from './dedicatedCloud/filerhourlyget20.operation';
import { execute as executefilermonthlyGet20, description as descriptionfilermonthlyGet20 } from './dedicatedCloud/filermonthlyget20.operation';
import { execute as executehosthourlyGet20, description as descriptionhosthourlyGet20 } from './dedicatedCloud/hosthourlyget20.operation';
import { execute as executehostmonthlyGet20, description as descriptionhostmonthlyGet20 } from './dedicatedCloud/hostmonthlyget20.operation';
import { execute as executefilerhourlyGet21, description as descriptionfilerhourlyGet21 } from './dedicatedCloud/filerhourlyget21.operation';
import { execute as executefilermonthlyGet21, description as descriptionfilermonthlyGet21 } from './dedicatedCloud/filermonthlyget21.operation';
import { execute as executehosthourlyGet21, description as descriptionhosthourlyGet21 } from './dedicatedCloud/hosthourlyget21.operation';
import { execute as executehostmonthlyGet21, description as descriptionhostmonthlyGet21 } from './dedicatedCloud/hostmonthlyget21.operation';
import { execute as executefilerhourlyGet22, description as descriptionfilerhourlyGet22 } from './dedicatedCloud/filerhourlyget22.operation';
import { execute as executefilermonthlyGet22, description as descriptionfilermonthlyGet22 } from './dedicatedCloud/filermonthlyget22.operation';
import { execute as executehosthourlyGet22, description as descriptionhosthourlyGet22 } from './dedicatedCloud/hosthourlyget22.operation';
import { execute as executehostmonthlyGet22, description as descriptionhostmonthlyGet22 } from './dedicatedCloud/hostmonthlyget22.operation';
import { execute as executefilerhourlyGet23, description as descriptionfilerhourlyGet23 } from './dedicatedCloud/filerhourlyget23.operation';
import { execute as executefilermonthlyGet23, description as descriptionfilermonthlyGet23 } from './dedicatedCloud/filermonthlyget23.operation';
import { execute as executehosthourlyGet23, description as descriptionhosthourlyGet23 } from './dedicatedCloud/hosthourlyget23.operation';
import { execute as executehostmonthlyGet23, description as descriptionhostmonthlyGet23 } from './dedicatedCloud/hostmonthlyget23.operation';
import { execute as executefilerhourlyGet24, description as descriptionfilerhourlyGet24 } from './dedicatedCloud/filerhourlyget24.operation';
import { execute as executefilermonthlyGet24, description as descriptionfilermonthlyGet24 } from './dedicatedCloud/filermonthlyget24.operation';
import { execute as executehosthourlyGet24, description as descriptionhosthourlyGet24 } from './dedicatedCloud/hosthourlyget24.operation';
import { execute as executehostmonthlyGet24, description as descriptionhostmonthlyGet24 } from './dedicatedCloud/hostmonthlyget24.operation';
import { execute as executefilerhourlyGet25, description as descriptionfilerhourlyGet25 } from './dedicatedCloud/filerhourlyget25.operation';
import { execute as executefilermonthlyGet25, description as descriptionfilermonthlyGet25 } from './dedicatedCloud/filermonthlyget25.operation';
import { execute as executehosthourlyGet25, description as descriptionhosthourlyGet25 } from './dedicatedCloud/hosthourlyget25.operation';
import { execute as executehostmonthlyGet25, description as descriptionhostmonthlyGet25 } from './dedicatedCloud/hostmonthlyget25.operation';
import { execute as executefilerhourlyGet26, description as descriptionfilerhourlyGet26 } from './dedicatedCloud/filerhourlyget26.operation';
import { execute as executefilermonthlyGet26, description as descriptionfilermonthlyGet26 } from './dedicatedCloud/filermonthlyget26.operation';
import { execute as executehosthourlyGet26, description as descriptionhosthourlyGet26 } from './dedicatedCloud/hosthourlyget26.operation';
import { execute as executehostmonthlyGet26, description as descriptionhostmonthlyGet26 } from './dedicatedCloud/hostmonthlyget26.operation';
import { execute as executefilerhourlyGet27, description as descriptionfilerhourlyGet27 } from './dedicatedCloud/filerhourlyget27.operation';
import { execute as executefilermonthlyGet27, description as descriptionfilermonthlyGet27 } from './dedicatedCloud/filermonthlyget27.operation';
import { execute as executehosthourlyGet27, description as descriptionhosthourlyGet27 } from './dedicatedCloud/hosthourlyget27.operation';
import { execute as executehostmonthlyGet27, description as descriptionhostmonthlyGet27 } from './dedicatedCloud/hostmonthlyget27.operation';
import { execute as executefilerhourlyGet28, description as descriptionfilerhourlyGet28 } from './dedicatedCloud/filerhourlyget28.operation';
import { execute as executefilermonthlyGet28, description as descriptionfilermonthlyGet28 } from './dedicatedCloud/filermonthlyget28.operation';
import { execute as executehosthourlyGet28, description as descriptionhosthourlyGet28 } from './dedicatedCloud/hosthourlyget28.operation';
import { execute as executehostmonthlyGet28, description as descriptionhostmonthlyGet28 } from './dedicatedCloud/hostmonthlyget28.operation';
import { execute as executefilerhourlyGet29, description as descriptionfilerhourlyGet29 } from './dedicatedCloud/filerhourlyget29.operation';
import { execute as executefilermonthlyGet29, description as descriptionfilermonthlyGet29 } from './dedicatedCloud/filermonthlyget29.operation';
import { execute as executehosthourlyGet29, description as descriptionhosthourlyGet29 } from './dedicatedCloud/hosthourlyget29.operation';
import { execute as executehostmonthlyGet29, description as descriptionhostmonthlyGet29 } from './dedicatedCloud/hostmonthlyget29.operation';
import { execute as executefilerhourlyGet30, description as descriptionfilerhourlyGet30 } from './dedicatedCloud/filerhourlyget30.operation';
import { execute as executefilermonthlyGet30, description as descriptionfilermonthlyGet30 } from './dedicatedCloud/filermonthlyget30.operation';
import { execute as executehosthourlyGet30, description as descriptionhosthourlyGet30 } from './dedicatedCloud/hosthourlyget30.operation';
import { execute as executehostmonthlyGet30, description as descriptionhostmonthlyGet30 } from './dedicatedCloud/hostmonthlyget30.operation';
import { execute as executefilerhourlyGet31, description as descriptionfilerhourlyGet31 } from './dedicatedCloud/filerhourlyget31.operation';
import { execute as executefilermonthlyGet31, description as descriptionfilermonthlyGet31 } from './dedicatedCloud/filermonthlyget31.operation';
import { execute as executehosthourlyGet31, description as descriptionhosthourlyGet31 } from './dedicatedCloud/hosthourlyget31.operation';
import { execute as executehostmonthlyGet31, description as descriptionhostmonthlyGet31 } from './dedicatedCloud/hostmonthlyget31.operation';
import { execute as executefilerhourlyGet32, description as descriptionfilerhourlyGet32 } from './dedicatedCloud/filerhourlyget32.operation';
import { execute as executefilermonthlyGet32, description as descriptionfilermonthlyGet32 } from './dedicatedCloud/filermonthlyget32.operation';
import { execute as executehosthourlyGet32, description as descriptionhosthourlyGet32 } from './dedicatedCloud/hosthourlyget32.operation';
import { execute as executehostmonthlyGet32, description as descriptionhostmonthlyGet32 } from './dedicatedCloud/hostmonthlyget32.operation';
import { execute as executefilerhourlyGet33, description as descriptionfilerhourlyGet33 } from './dedicatedCloud/filerhourlyget33.operation';
import { execute as executefilermonthlyGet33, description as descriptionfilermonthlyGet33 } from './dedicatedCloud/filermonthlyget33.operation';
import { execute as executehosthourlyGet33, description as descriptionhosthourlyGet33 } from './dedicatedCloud/hosthourlyget33.operation';
import { execute as executehostmonthlyGet33, description as descriptionhostmonthlyGet33 } from './dedicatedCloud/hostmonthlyget33.operation';
import { execute as executefilerhourlyGet34, description as descriptionfilerhourlyGet34 } from './dedicatedCloud/filerhourlyget34.operation';
import { execute as executefilermonthlyGet34, description as descriptionfilermonthlyGet34 } from './dedicatedCloud/filermonthlyget34.operation';
import { execute as executehosthourlyGet34, description as descriptionhosthourlyGet34 } from './dedicatedCloud/hosthourlyget34.operation';
import { execute as executehostmonthlyGet34, description as descriptionhostmonthlyGet34 } from './dedicatedCloud/hostmonthlyget34.operation';
import { execute as executefilerhourlyGet35, description as descriptionfilerhourlyGet35 } from './dedicatedCloud/filerhourlyget35.operation';
import { execute as executefilermonthlyGet35, description as descriptionfilermonthlyGet35 } from './dedicatedCloud/filermonthlyget35.operation';
import { execute as executehosthourlyGet35, description as descriptionhosthourlyGet35 } from './dedicatedCloud/hosthourlyget35.operation';
import { execute as executehostmonthlyGet35, description as descriptionhostmonthlyGet35 } from './dedicatedCloud/hostmonthlyget35.operation';
import { execute as executefilerhourlyGet36, description as descriptionfilerhourlyGet36 } from './dedicatedCloud/filerhourlyget36.operation';
import { execute as executefilermonthlyGet36, description as descriptionfilermonthlyGet36 } from './dedicatedCloud/filermonthlyget36.operation';
import { execute as executehosthourlyGet36, description as descriptionhosthourlyGet36 } from './dedicatedCloud/hosthourlyget36.operation';
import { execute as executehostmonthlyGet36, description as descriptionhostmonthlyGet36 } from './dedicatedCloud/hostmonthlyget36.operation';
import { execute as executefilerhourlyGet37, description as descriptionfilerhourlyGet37 } from './dedicatedCloud/filerhourlyget37.operation';
import { execute as executefilermonthlyGet37, description as descriptionfilermonthlyGet37 } from './dedicatedCloud/filermonthlyget37.operation';
import { execute as executehosthourlyGet37, description as descriptionhosthourlyGet37 } from './dedicatedCloud/hosthourlyget37.operation';
import { execute as executehostmonthlyGet37, description as descriptionhostmonthlyGet37 } from './dedicatedCloud/hostmonthlyget37.operation';
import { execute as executefilerhourlyGet38, description as descriptionfilerhourlyGet38 } from './dedicatedCloud/filerhourlyget38.operation';
import { execute as executefilermonthlyGet38, description as descriptionfilermonthlyGet38 } from './dedicatedCloud/filermonthlyget38.operation';
import { execute as executehosthourlyGet38, description as descriptionhosthourlyGet38 } from './dedicatedCloud/hosthourlyget38.operation';
import { execute as executehostmonthlyGet38, description as descriptionhostmonthlyGet38 } from './dedicatedCloud/hostmonthlyget38.operation';
import { execute as executefilerhourlyGet39, description as descriptionfilerhourlyGet39 } from './dedicatedCloud/filerhourlyget39.operation';
import { execute as executefilermonthlyGet39, description as descriptionfilermonthlyGet39 } from './dedicatedCloud/filermonthlyget39.operation';
import { execute as executehosthourlyGet39, description as descriptionhosthourlyGet39 } from './dedicatedCloud/hosthourlyget39.operation';
import { execute as executehostmonthlyGet39, description as descriptionhostmonthlyGet39 } from './dedicatedCloud/hostmonthlyget39.operation';
import { execute as executefilerhourlyGet40, description as descriptionfilerhourlyGet40 } from './dedicatedCloud/filerhourlyget40.operation';
import { execute as executefilermonthlyGet40, description as descriptionfilermonthlyGet40 } from './dedicatedCloud/filermonthlyget40.operation';
import { execute as executehosthourlyGet40, description as descriptionhosthourlyGet40 } from './dedicatedCloud/hosthourlyget40.operation';
import { execute as executehostmonthlyGet40, description as descriptionhostmonthlyGet40 } from './dedicatedCloud/hostmonthlyget40.operation';
import { execute as executefilerhourlyGet41, description as descriptionfilerhourlyGet41 } from './dedicatedCloud/filerhourlyget41.operation';
import { execute as executefilermonthlyGet41, description as descriptionfilermonthlyGet41 } from './dedicatedCloud/filermonthlyget41.operation';
import { execute as executehosthourlyGet41, description as descriptionhosthourlyGet41 } from './dedicatedCloud/hosthourlyget41.operation';
import { execute as executehostmonthlyGet41, description as descriptionhostmonthlyGet41 } from './dedicatedCloud/hostmonthlyget41.operation';
import { execute as executefilerhourlyGet42, description as descriptionfilerhourlyGet42 } from './dedicatedCloud/filerhourlyget42.operation';
import { execute as executefilermonthlyGet42, description as descriptionfilermonthlyGet42 } from './dedicatedCloud/filermonthlyget42.operation';
import { execute as executehosthourlyGet42, description as descriptionhosthourlyGet42 } from './dedicatedCloud/hosthourlyget42.operation';
import { execute as executehostmonthlyGet42, description as descriptionhostmonthlyGet42 } from './dedicatedCloud/hostmonthlyget42.operation';
import { execute as executefilerhourlyGet43, description as descriptionfilerhourlyGet43 } from './dedicatedCloud/filerhourlyget43.operation';
import { execute as executefilermonthlyGet43, description as descriptionfilermonthlyGet43 } from './dedicatedCloud/filermonthlyget43.operation';
import { execute as executehosthourlyGet43, description as descriptionhosthourlyGet43 } from './dedicatedCloud/hosthourlyget43.operation';
import { execute as executehostmonthlyGet43, description as descriptionhostmonthlyGet43 } from './dedicatedCloud/hostmonthlyget43.operation';
import { execute as executefilerhourlyGet44, description as descriptionfilerhourlyGet44 } from './dedicatedCloud/filerhourlyget44.operation';
import { execute as executefilermonthlyGet44, description as descriptionfilermonthlyGet44 } from './dedicatedCloud/filermonthlyget44.operation';
import { execute as executehosthourlyGet44, description as descriptionhosthourlyGet44 } from './dedicatedCloud/hosthourlyget44.operation';
import { execute as executehostmonthlyGet44, description as descriptionhostmonthlyGet44 } from './dedicatedCloud/hostmonthlyget44.operation';
import { execute as executefilerhourlyGet45, description as descriptionfilerhourlyGet45 } from './dedicatedCloud/filerhourlyget45.operation';
import { execute as executefilermonthlyGet45, description as descriptionfilermonthlyGet45 } from './dedicatedCloud/filermonthlyget45.operation';
import { execute as executehosthourlyGet45, description as descriptionhosthourlyGet45 } from './dedicatedCloud/hosthourlyget45.operation';
import { execute as executehostmonthlyGet45, description as descriptionhostmonthlyGet45 } from './dedicatedCloud/hostmonthlyget45.operation';
import { execute as executefilerhourlyGet46, description as descriptionfilerhourlyGet46 } from './dedicatedCloud/filerhourlyget46.operation';
import { execute as executefilermonthlyGet46, description as descriptionfilermonthlyGet46 } from './dedicatedCloud/filermonthlyget46.operation';
import { execute as executehosthourlyGet46, description as descriptionhosthourlyGet46 } from './dedicatedCloud/hosthourlyget46.operation';
import { execute as executehostmonthlyGet46, description as descriptionhostmonthlyGet46 } from './dedicatedCloud/hostmonthlyget46.operation';
import { execute as executefilerhourlyGet47, description as descriptionfilerhourlyGet47 } from './dedicatedCloud/filerhourlyget47.operation';
import { execute as executefilermonthlyGet47, description as descriptionfilermonthlyGet47 } from './dedicatedCloud/filermonthlyget47.operation';
import { execute as executehosthourlyGet47, description as descriptionhosthourlyGet47 } from './dedicatedCloud/hosthourlyget47.operation';
import { execute as executehostmonthlyGet47, description as descriptionhostmonthlyGet47 } from './dedicatedCloud/hostmonthlyget47.operation';
import { execute as executefilerhourlyGet48, description as descriptionfilerhourlyGet48 } from './dedicatedCloud/filerhourlyget48.operation';
import { execute as executefilermonthlyGet48, description as descriptionfilermonthlyGet48 } from './dedicatedCloud/filermonthlyget48.operation';
import { execute as executehosthourlyGet48, description as descriptionhosthourlyGet48 } from './dedicatedCloud/hosthourlyget48.operation';
import { execute as executehostmonthlyGet48, description as descriptionhostmonthlyGet48 } from './dedicatedCloud/hostmonthlyget48.operation';
import { execute as executefilerhourlyGet49, description as descriptionfilerhourlyGet49 } from './dedicatedCloud/filerhourlyget49.operation';
import { execute as executefilermonthlyGet49, description as descriptionfilermonthlyGet49 } from './dedicatedCloud/filermonthlyget49.operation';
import { execute as executehosthourlyGet49, description as descriptionhosthourlyGet49 } from './dedicatedCloud/hosthourlyget49.operation';
import { execute as executehostmonthlyGet49, description as descriptionhostmonthlyGet49 } from './dedicatedCloud/hostmonthlyget49.operation';
import { execute as executefilerhourlyGet50, description as descriptionfilerhourlyGet50 } from './dedicatedCloud/filerhourlyget50.operation';
import { execute as executefilermonthlyGet50, description as descriptionfilermonthlyGet50 } from './dedicatedCloud/filermonthlyget50.operation';
import { execute as executehosthourlyGet50, description as descriptionhosthourlyGet50 } from './dedicatedCloud/hosthourlyget50.operation';
import { execute as executehostmonthlyGet50, description as descriptionhostmonthlyGet50 } from './dedicatedCloud/hostmonthlyget50.operation';
import { execute as executefilerhourlyGet51, description as descriptionfilerhourlyGet51 } from './dedicatedCloud/filerhourlyget51.operation';
import { execute as executefilermonthlyGet51, description as descriptionfilermonthlyGet51 } from './dedicatedCloud/filermonthlyget51.operation';
import { execute as executehosthourlyGet51, description as descriptionhosthourlyGet51 } from './dedicatedCloud/hosthourlyget51.operation';
import { execute as executehostmonthlyGet51, description as descriptionhostmonthlyGet51 } from './dedicatedCloud/hostmonthlyget51.operation';
import { execute as executefilerhourlyGet52, description as descriptionfilerhourlyGet52 } from './dedicatedCloud/filerhourlyget52.operation';
import { execute as executefilermonthlyGet52, description as descriptionfilermonthlyGet52 } from './dedicatedCloud/filermonthlyget52.operation';
import { execute as executehosthourlyGet52, description as descriptionhosthourlyGet52 } from './dedicatedCloud/hosthourlyget52.operation';
import { execute as executehostmonthlyGet52, description as descriptionhostmonthlyGet52 } from './dedicatedCloud/hostmonthlyget52.operation';
import { execute as executefilerhourlyGet53, description as descriptionfilerhourlyGet53 } from './dedicatedCloud/filerhourlyget53.operation';
import { execute as executefilermonthlyGet53, description as descriptionfilermonthlyGet53 } from './dedicatedCloud/filermonthlyget53.operation';
import { execute as executehosthourlyGet53, description as descriptionhosthourlyGet53 } from './dedicatedCloud/hosthourlyget53.operation';
import { execute as executehostmonthlyGet53, description as descriptionhostmonthlyGet53 } from './dedicatedCloud/hostmonthlyget53.operation';
import { execute as executefilerhourlyGet54, description as descriptionfilerhourlyGet54 } from './dedicatedCloud/filerhourlyget54.operation';
import { execute as executefilermonthlyGet54, description as descriptionfilermonthlyGet54 } from './dedicatedCloud/filermonthlyget54.operation';
import { execute as executehosthourlyGet54, description as descriptionhosthourlyGet54 } from './dedicatedCloud/hosthourlyget54.operation';
import { execute as executehostmonthlyGet54, description as descriptionhostmonthlyGet54 } from './dedicatedCloud/hostmonthlyget54.operation';
import { execute as executefilerhourlyGet55, description as descriptionfilerhourlyGet55 } from './dedicatedCloud/filerhourlyget55.operation';
import { execute as executefilermonthlyGet55, description as descriptionfilermonthlyGet55 } from './dedicatedCloud/filermonthlyget55.operation';
import { execute as executehosthourlyGet55, description as descriptionhosthourlyGet55 } from './dedicatedCloud/hosthourlyget55.operation';
import { execute as executehostmonthlyGet55, description as descriptionhostmonthlyGet55 } from './dedicatedCloud/hostmonthlyget55.operation';
import { execute as executefilerhourlyGet56, description as descriptionfilerhourlyGet56 } from './dedicatedCloud/filerhourlyget56.operation';
import { execute as executefilermonthlyGet56, description as descriptionfilermonthlyGet56 } from './dedicatedCloud/filermonthlyget56.operation';
import { execute as executehosthourlyGet56, description as descriptionhosthourlyGet56 } from './dedicatedCloud/hosthourlyget56.operation';
import { execute as executehostmonthlyGet56, description as descriptionhostmonthlyGet56 } from './dedicatedCloud/hostmonthlyget56.operation';
import { execute as executefilerhourlyGet57, description as descriptionfilerhourlyGet57 } from './dedicatedCloud/filerhourlyget57.operation';
import { execute as executefilermonthlyGet57, description as descriptionfilermonthlyGet57 } from './dedicatedCloud/filermonthlyget57.operation';
import { execute as executehosthourlyGet57, description as descriptionhosthourlyGet57 } from './dedicatedCloud/hosthourlyget57.operation';
import { execute as executehostmonthlyGet57, description as descriptionhostmonthlyGet57 } from './dedicatedCloud/hostmonthlyget57.operation';
import { execute as executefilerhourlyGet58, description as descriptionfilerhourlyGet58 } from './dedicatedCloud/filerhourlyget58.operation';
import { execute as executefilermonthlyGet58, description as descriptionfilermonthlyGet58 } from './dedicatedCloud/filermonthlyget58.operation';
import { execute as executehosthourlyGet58, description as descriptionhosthourlyGet58 } from './dedicatedCloud/hosthourlyget58.operation';
import { execute as executehostmonthlyGet58, description as descriptionhostmonthlyGet58 } from './dedicatedCloud/hostmonthlyget58.operation';
import { execute as executefilerhourlyGet59, description as descriptionfilerhourlyGet59 } from './dedicatedCloud/filerhourlyget59.operation';
import { execute as executefilermonthlyGet59, description as descriptionfilermonthlyGet59 } from './dedicatedCloud/filermonthlyget59.operation';
import { execute as executehosthourlyGet59, description as descriptionhosthourlyGet59 } from './dedicatedCloud/hosthourlyget59.operation';
import { execute as executehostmonthlyGet59, description as descriptionhostmonthlyGet59 } from './dedicatedCloud/hostmonthlyget59.operation';
import { execute as executefilerhourlyGet60, description as descriptionfilerhourlyGet60 } from './dedicatedCloud/filerhourlyget60.operation';
import { execute as executefilermonthlyGet60, description as descriptionfilermonthlyGet60 } from './dedicatedCloud/filermonthlyget60.operation';
import { execute as executehosthourlyGet60, description as descriptionhosthourlyGet60 } from './dedicatedCloud/hosthourlyget60.operation';
import { execute as executehostmonthlyGet60, description as descriptionhostmonthlyGet60 } from './dedicatedCloud/hostmonthlyget60.operation';
import { execute as executefilerhourlyGet61, description as descriptionfilerhourlyGet61 } from './dedicatedCloud/filerhourlyget61.operation';
import { execute as executefilermonthlyGet61, description as descriptionfilermonthlyGet61 } from './dedicatedCloud/filermonthlyget61.operation';
import { execute as executehosthourlyGet61, description as descriptionhosthourlyGet61 } from './dedicatedCloud/hosthourlyget61.operation';
import { execute as executehostmonthlyGet61, description as descriptionhostmonthlyGet61 } from './dedicatedCloud/hostmonthlyget61.operation';
import { execute as executefilerhourlyGet62, description as descriptionfilerhourlyGet62 } from './dedicatedCloud/filerhourlyget62.operation';
import { execute as executefilermonthlyGet62, description as descriptionfilermonthlyGet62 } from './dedicatedCloud/filermonthlyget62.operation';
import { execute as executehosthourlyGet62, description as descriptionhosthourlyGet62 } from './dedicatedCloud/hosthourlyget62.operation';
import { execute as executehostmonthlyGet62, description as descriptionhostmonthlyGet62 } from './dedicatedCloud/hostmonthlyget62.operation';
import { execute as executefilerhourlyGet63, description as descriptionfilerhourlyGet63 } from './dedicatedCloud/filerhourlyget63.operation';
import { execute as executefilermonthlyGet63, description as descriptionfilermonthlyGet63 } from './dedicatedCloud/filermonthlyget63.operation';
import { execute as executehosthourlyGet63, description as descriptionhosthourlyGet63 } from './dedicatedCloud/hosthourlyget63.operation';
import { execute as executehostmonthlyGet63, description as descriptionhostmonthlyGet63 } from './dedicatedCloud/hostmonthlyget63.operation';
import { execute as executefilerhourlyGet64, description as descriptionfilerhourlyGet64 } from './dedicatedCloud/filerhourlyget64.operation';
import { execute as executefilermonthlyGet64, description as descriptionfilermonthlyGet64 } from './dedicatedCloud/filermonthlyget64.operation';
import { execute as executehosthourlyGet64, description as descriptionhosthourlyGet64 } from './dedicatedCloud/hosthourlyget64.operation';
import { execute as executehostmonthlyGet64, description as descriptionhostmonthlyGet64 } from './dedicatedCloud/hostmonthlyget64.operation';
import { execute as executefilerhourlyGet65, description as descriptionfilerhourlyGet65 } from './dedicatedCloud/filerhourlyget65.operation';
import { execute as executefilermonthlyGet65, description as descriptionfilermonthlyGet65 } from './dedicatedCloud/filermonthlyget65.operation';
import { execute as executehosthourlyGet65, description as descriptionhosthourlyGet65 } from './dedicatedCloud/hosthourlyget65.operation';
import { execute as executehostmonthlyGet65, description as descriptionhostmonthlyGet65 } from './dedicatedCloud/hostmonthlyget65.operation';
import { execute as executefilerhourlyGet66, description as descriptionfilerhourlyGet66 } from './dedicatedCloud/filerhourlyget66.operation';
import { execute as executefilermonthlyGet66, description as descriptionfilermonthlyGet66 } from './dedicatedCloud/filermonthlyget66.operation';
import { execute as executehosthourlyGet66, description as descriptionhosthourlyGet66 } from './dedicatedCloud/hosthourlyget66.operation';
import { execute as executehostmonthlyGet66, description as descriptionhostmonthlyGet66 } from './dedicatedCloud/hostmonthlyget66.operation';
import { execute as executefilerhourlyGet67, description as descriptionfilerhourlyGet67 } from './dedicatedCloud/filerhourlyget67.operation';
import { execute as executefilermonthlyGet67, description as descriptionfilermonthlyGet67 } from './dedicatedCloud/filermonthlyget67.operation';
import { execute as executehosthourlyGet67, description as descriptionhosthourlyGet67 } from './dedicatedCloud/hosthourlyget67.operation';
import { execute as executehostmonthlyGet67, description as descriptionhostmonthlyGet67 } from './dedicatedCloud/hostmonthlyget67.operation';
import { execute as executefilerhourlyGet68, description as descriptionfilerhourlyGet68 } from './dedicatedCloud/filerhourlyget68.operation';
import { execute as executefilermonthlyGet68, description as descriptionfilermonthlyGet68 } from './dedicatedCloud/filermonthlyget68.operation';
import { execute as executehosthourlyGet68, description as descriptionhosthourlyGet68 } from './dedicatedCloud/hosthourlyget68.operation';
import { execute as executehostmonthlyGet68, description as descriptionhostmonthlyGet68 } from './dedicatedCloud/hostmonthlyget68.operation';
import { execute as executefilerhourlyGet69, description as descriptionfilerhourlyGet69 } from './dedicatedCloud/filerhourlyget69.operation';
import { execute as executefilermonthlyGet69, description as descriptionfilermonthlyGet69 } from './dedicatedCloud/filermonthlyget69.operation';
import { execute as executehosthourlyGet69, description as descriptionhosthourlyGet69 } from './dedicatedCloud/hosthourlyget69.operation';
import { execute as executehostmonthlyGet69, description as descriptionhostmonthlyGet69 } from './dedicatedCloud/hostmonthlyget69.operation';
import { execute as executefilerhourlyGet70, description as descriptionfilerhourlyGet70 } from './dedicatedCloud/filerhourlyget70.operation';
import { execute as executefilermonthlyGet70, description as descriptionfilermonthlyGet70 } from './dedicatedCloud/filermonthlyget70.operation';
import { execute as executehosthourlyGet70, description as descriptionhosthourlyGet70 } from './dedicatedCloud/hosthourlyget70.operation';
import { execute as executehostmonthlyGet70, description as descriptionhostmonthlyGet70 } from './dedicatedCloud/hostmonthlyget70.operation';
import { execute as executefilerhourlyGet71, description as descriptionfilerhourlyGet71 } from './dedicatedCloud/filerhourlyget71.operation';
import { execute as executefilermonthlyGet71, description as descriptionfilermonthlyGet71 } from './dedicatedCloud/filermonthlyget71.operation';
import { execute as executehosthourlyGet71, description as descriptionhosthourlyGet71 } from './dedicatedCloud/hosthourlyget71.operation';
import { execute as executehostmonthlyGet71, description as descriptionhostmonthlyGet71 } from './dedicatedCloud/hostmonthlyget71.operation';
import { execute as executefilerhourlyGet72, description as descriptionfilerhourlyGet72 } from './dedicatedCloud/filerhourlyget72.operation';
import { execute as executefilermonthlyGet72, description as descriptionfilermonthlyGet72 } from './dedicatedCloud/filermonthlyget72.operation';
import { execute as executehosthourlyGet72, description as descriptionhosthourlyGet72 } from './dedicatedCloud/hosthourlyget72.operation';
import { execute as executehostmonthlyGet72, description as descriptionhostmonthlyGet72 } from './dedicatedCloud/hostmonthlyget72.operation';
import { execute as executefilerhourlyGet73, description as descriptionfilerhourlyGet73 } from './dedicatedCloud/filerhourlyget73.operation';
import { execute as executefilermonthlyGet73, description as descriptionfilermonthlyGet73 } from './dedicatedCloud/filermonthlyget73.operation';
import { execute as executehosthourlyGet73, description as descriptionhosthourlyGet73 } from './dedicatedCloud/hosthourlyget73.operation';
import { execute as executehostmonthlyGet73, description as descriptionhostmonthlyGet73 } from './dedicatedCloud/hostmonthlyget73.operation';
import { execute as executefilerhourlyGet74, description as descriptionfilerhourlyGet74 } from './dedicatedCloud/filerhourlyget74.operation';
import { execute as executefilermonthlyGet74, description as descriptionfilermonthlyGet74 } from './dedicatedCloud/filermonthlyget74.operation';
import { execute as executehosthourlyGet74, description as descriptionhosthourlyGet74 } from './dedicatedCloud/hosthourlyget74.operation';
import { execute as executehostmonthlyGet74, description as descriptionhostmonthlyGet74 } from './dedicatedCloud/hostmonthlyget74.operation';
import { execute as executefilerhourlyGet75, description as descriptionfilerhourlyGet75 } from './dedicatedCloud/filerhourlyget75.operation';
import { execute as executefilermonthlyGet75, description as descriptionfilermonthlyGet75 } from './dedicatedCloud/filermonthlyget75.operation';
import { execute as executehosthourlyGet75, description as descriptionhosthourlyGet75 } from './dedicatedCloud/hosthourlyget75.operation';
import { execute as executehostmonthlyGet75, description as descriptionhostmonthlyGet75 } from './dedicatedCloud/hostmonthlyget75.operation';
import { execute as executefilerhourlyGet76, description as descriptionfilerhourlyGet76 } from './dedicatedCloud/filerhourlyget76.operation';
import { execute as executefilermonthlyGet76, description as descriptionfilermonthlyGet76 } from './dedicatedCloud/filermonthlyget76.operation';
import { execute as executehosthourlyGet76, description as descriptionhosthourlyGet76 } from './dedicatedCloud/hosthourlyget76.operation';
import { execute as executehostmonthlyGet76, description as descriptionhostmonthlyGet76 } from './dedicatedCloud/hostmonthlyget76.operation';
import { execute as executefilerhourlyGet77, description as descriptionfilerhourlyGet77 } from './dedicatedCloud/filerhourlyget77.operation';
import { execute as executefilermonthlyGet77, description as descriptionfilermonthlyGet77 } from './dedicatedCloud/filermonthlyget77.operation';
import { execute as executehosthourlyGet77, description as descriptionhosthourlyGet77 } from './dedicatedCloud/hosthourlyget77.operation';
import { execute as executehostmonthlyGet77, description as descriptionhostmonthlyGet77 } from './dedicatedCloud/hostmonthlyget77.operation';
import { execute as executefilerhourlyGet78, description as descriptionfilerhourlyGet78 } from './dedicatedCloud/filerhourlyget78.operation';
import { execute as executefilermonthlyGet78, description as descriptionfilermonthlyGet78 } from './dedicatedCloud/filermonthlyget78.operation';
import { execute as executehosthourlyGet78, description as descriptionhosthourlyGet78 } from './dedicatedCloud/hosthourlyget78.operation';
import { execute as executehostmonthlyGet78, description as descriptionhostmonthlyGet78 } from './dedicatedCloud/hostmonthlyget78.operation';
import { execute as executefilerhourlyGet79, description as descriptionfilerhourlyGet79 } from './dedicatedCloud/filerhourlyget79.operation';
import { execute as executefilermonthlyGet79, description as descriptionfilermonthlyGet79 } from './dedicatedCloud/filermonthlyget79.operation';
import { execute as executehosthourlyGet79, description as descriptionhosthourlyGet79 } from './dedicatedCloud/hosthourlyget79.operation';
import { execute as executehostmonthlyGet79, description as descriptionhostmonthlyGet79 } from './dedicatedCloud/hostmonthlyget79.operation';
import { execute as executefilerhourlyGet80, description as descriptionfilerhourlyGet80 } from './dedicatedCloud/filerhourlyget80.operation';
import { execute as executefilermonthlyGet80, description as descriptionfilermonthlyGet80 } from './dedicatedCloud/filermonthlyget80.operation';
import { execute as executehosthourlyGet80, description as descriptionhosthourlyGet80 } from './dedicatedCloud/hosthourlyget80.operation';
import { execute as executehostmonthlyGet80, description as descriptionhostmonthlyGet80 } from './dedicatedCloud/hostmonthlyget80.operation';
import { execute as executefilerhourlyGet81, description as descriptionfilerhourlyGet81 } from './dedicatedCloud/filerhourlyget81.operation';
import { execute as executefilermonthlyGet81, description as descriptionfilermonthlyGet81 } from './dedicatedCloud/filermonthlyget81.operation';
import { execute as executehosthourlyGet81, description as descriptionhosthourlyGet81 } from './dedicatedCloud/hosthourlyget81.operation';
import { execute as executehostmonthlyGet81, description as descriptionhostmonthlyGet81 } from './dedicatedCloud/hostmonthlyget81.operation';
import { execute as executefilerhourlyGet82, description as descriptionfilerhourlyGet82 } from './dedicatedCloud/filerhourlyget82.operation';
import { execute as executefilermonthlyGet82, description as descriptionfilermonthlyGet82 } from './dedicatedCloud/filermonthlyget82.operation';
import { execute as executehosthourlyGet82, description as descriptionhosthourlyGet82 } from './dedicatedCloud/hosthourlyget82.operation';
import { execute as executehostmonthlyGet82, description as descriptionhostmonthlyGet82 } from './dedicatedCloud/hostmonthlyget82.operation';
import { execute as executefilerhourlyGet83, description as descriptionfilerhourlyGet83 } from './dedicatedCloud/filerhourlyget83.operation';
import { execute as executefilermonthlyGet83, description as descriptionfilermonthlyGet83 } from './dedicatedCloud/filermonthlyget83.operation';
import { execute as executehosthourlyGet83, description as descriptionhosthourlyGet83 } from './dedicatedCloud/hosthourlyget83.operation';
import { execute as executehostmonthlyGet83, description as descriptionhostmonthlyGet83 } from './dedicatedCloud/hostmonthlyget83.operation';
import { execute as executefilerhourlyGet84, description as descriptionfilerhourlyGet84 } from './dedicatedCloud/filerhourlyget84.operation';
import { execute as executefilermonthlyGet84, description as descriptionfilermonthlyGet84 } from './dedicatedCloud/filermonthlyget84.operation';
import { execute as executehosthourlyGet84, description as descriptionhosthourlyGet84 } from './dedicatedCloud/hosthourlyget84.operation';
import { execute as executehostmonthlyGet84, description as descriptionhostmonthlyGet84 } from './dedicatedCloud/hostmonthlyget84.operation';
import { execute as executefilerhourlyGet85, description as descriptionfilerhourlyGet85 } from './dedicatedCloud/filerhourlyget85.operation';
import { execute as executefilermonthlyGet85, description as descriptionfilermonthlyGet85 } from './dedicatedCloud/filermonthlyget85.operation';
import { execute as executehosthourlyGet85, description as descriptionhosthourlyGet85 } from './dedicatedCloud/hosthourlyget85.operation';
import { execute as executehostmonthlyGet85, description as descriptionhostmonthlyGet85 } from './dedicatedCloud/hostmonthlyget85.operation';
import { execute as executefilerhourlyGet86, description as descriptionfilerhourlyGet86 } from './dedicatedCloud/filerhourlyget86.operation';
import { execute as executefilermonthlyGet86, description as descriptionfilermonthlyGet86 } from './dedicatedCloud/filermonthlyget86.operation';
import { execute as executehosthourlyGet86, description as descriptionhosthourlyGet86 } from './dedicatedCloud/hosthourlyget86.operation';
import { execute as executehostmonthlyGet86, description as descriptionhostmonthlyGet86 } from './dedicatedCloud/hostmonthlyget86.operation';
import { execute as executefilerhourlyGet87, description as descriptionfilerhourlyGet87 } from './dedicatedCloud/filerhourlyget87.operation';
import { execute as executefilermonthlyGet87, description as descriptionfilermonthlyGet87 } from './dedicatedCloud/filermonthlyget87.operation';
import { execute as executehosthourlyGet87, description as descriptionhosthourlyGet87 } from './dedicatedCloud/hosthourlyget87.operation';
import { execute as executehostmonthlyGet87, description as descriptionhostmonthlyGet87 } from './dedicatedCloud/hostmonthlyget87.operation';
import { execute as executefilerhourlyGet88, description as descriptionfilerhourlyGet88 } from './dedicatedCloud/filerhourlyget88.operation';
import { execute as executefilermonthlyGet88, description as descriptionfilermonthlyGet88 } from './dedicatedCloud/filermonthlyget88.operation';
import { execute as executehosthourlyGet88, description as descriptionhosthourlyGet88 } from './dedicatedCloud/hosthourlyget88.operation';
import { execute as executehostmonthlyGet88, description as descriptionhostmonthlyGet88 } from './dedicatedCloud/hostmonthlyget88.operation';
import { execute as executefilerhourlyGet89, description as descriptionfilerhourlyGet89 } from './dedicatedCloud/filerhourlyget89.operation';
import { execute as executefilermonthlyGet89, description as descriptionfilermonthlyGet89 } from './dedicatedCloud/filermonthlyget89.operation';
import { execute as executehosthourlyGet89, description as descriptionhosthourlyGet89 } from './dedicatedCloud/hosthourlyget89.operation';
import { execute as executehostmonthlyGet89, description as descriptionhostmonthlyGet89 } from './dedicatedCloud/hostmonthlyget89.operation';
import { execute as executefilerhourlyGet90, description as descriptionfilerhourlyGet90 } from './dedicatedCloud/filerhourlyget90.operation';
import { execute as executefilermonthlyGet90, description as descriptionfilermonthlyGet90 } from './dedicatedCloud/filermonthlyget90.operation';
import { execute as executehosthourlyGet90, description as descriptionhosthourlyGet90 } from './dedicatedCloud/hosthourlyget90.operation';
import { execute as executehostmonthlyGet90, description as descriptionhostmonthlyGet90 } from './dedicatedCloud/hostmonthlyget90.operation';
import { execute as executefilerhourlyGet91, description as descriptionfilerhourlyGet91 } from './dedicatedCloud/filerhourlyget91.operation';
import { execute as executefilermonthlyGet91, description as descriptionfilermonthlyGet91 } from './dedicatedCloud/filermonthlyget91.operation';
import { execute as executehosthourlyGet91, description as descriptionhosthourlyGet91 } from './dedicatedCloud/hosthourlyget91.operation';
import { execute as executehostmonthlyGet91, description as descriptionhostmonthlyGet91 } from './dedicatedCloud/hostmonthlyget91.operation';
import { execute as executefilerhourlyGet92, description as descriptionfilerhourlyGet92 } from './dedicatedCloud/filerhourlyget92.operation';
import { execute as executefilermonthlyGet92, description as descriptionfilermonthlyGet92 } from './dedicatedCloud/filermonthlyget92.operation';
import { execute as executehosthourlyGet92, description as descriptionhosthourlyGet92 } from './dedicatedCloud/hosthourlyget92.operation';
import { execute as executehostmonthlyGet92, description as descriptionhostmonthlyGet92 } from './dedicatedCloud/hostmonthlyget92.operation';
import { execute as executefilerhourlyGet93, description as descriptionfilerhourlyGet93 } from './dedicatedCloud/filerhourlyget93.operation';
import { execute as executefilermonthlyGet93, description as descriptionfilermonthlyGet93 } from './dedicatedCloud/filermonthlyget93.operation';
import { execute as executehosthourlyGet93, description as descriptionhosthourlyGet93 } from './dedicatedCloud/hosthourlyget93.operation';
import { execute as executehostmonthlyGet93, description as descriptionhostmonthlyGet93 } from './dedicatedCloud/hostmonthlyget93.operation';
import { execute as executefilerhourlyGet94, description as descriptionfilerhourlyGet94 } from './dedicatedCloud/filerhourlyget94.operation';
import { execute as executefilermonthlyGet94, description as descriptionfilermonthlyGet94 } from './dedicatedCloud/filermonthlyget94.operation';
import { execute as executehosthourlyGet94, description as descriptionhosthourlyGet94 } from './dedicatedCloud/hosthourlyget94.operation';
import { execute as executehostmonthlyGet94, description as descriptionhostmonthlyGet94 } from './dedicatedCloud/hostmonthlyget94.operation';
import { execute as executefilerhourlyGet95, description as descriptionfilerhourlyGet95 } from './dedicatedCloud/filerhourlyget95.operation';
import { execute as executefilermonthlyGet95, description as descriptionfilermonthlyGet95 } from './dedicatedCloud/filermonthlyget95.operation';
import { execute as executehosthourlyGet95, description as descriptionhosthourlyGet95 } from './dedicatedCloud/hosthourlyget95.operation';
import { execute as executehostmonthlyGet95, description as descriptionhostmonthlyGet95 } from './dedicatedCloud/hostmonthlyget95.operation';
import { execute as executefilerhourlyGet96, description as descriptionfilerhourlyGet96 } from './dedicatedCloud/filerhourlyget96.operation';
import { execute as executefilermonthlyGet96, description as descriptionfilermonthlyGet96 } from './dedicatedCloud/filermonthlyget96.operation';
import { execute as executehosthourlyGet96, description as descriptionhosthourlyGet96 } from './dedicatedCloud/hosthourlyget96.operation';
import { execute as executehostmonthlyGet96, description as descriptionhostmonthlyGet96 } from './dedicatedCloud/hostmonthlyget96.operation';
import { execute as executefilerhourlyGet97, description as descriptionfilerhourlyGet97 } from './dedicatedCloud/filerhourlyget97.operation';
import { execute as executefilermonthlyGet97, description as descriptionfilermonthlyGet97 } from './dedicatedCloud/filermonthlyget97.operation';
import { execute as executehosthourlyGet97, description as descriptionhosthourlyGet97 } from './dedicatedCloud/hosthourlyget97.operation';
import { execute as executehostmonthlyGet97, description as descriptionhostmonthlyGet97 } from './dedicatedCloud/hostmonthlyget97.operation';
import { execute as executefilerhourlyGet98, description as descriptionfilerhourlyGet98 } from './dedicatedCloud/filerhourlyget98.operation';
import { execute as executefilermonthlyGet98, description as descriptionfilermonthlyGet98 } from './dedicatedCloud/filermonthlyget98.operation';
import { execute as executehosthourlyGet98, description as descriptionhosthourlyGet98 } from './dedicatedCloud/hosthourlyget98.operation';
import { execute as executehostmonthlyGet98, description as descriptionhostmonthlyGet98 } from './dedicatedCloud/hostmonthlyget98.operation';
import { execute as executefilerhourlyGet99, description as descriptionfilerhourlyGet99 } from './dedicatedCloud/filerhourlyget99.operation';
import { execute as executefilermonthlyGet99, description as descriptionfilermonthlyGet99 } from './dedicatedCloud/filermonthlyget99.operation';
import { execute as executehosthourlyGet99, description as descriptionhosthourlyGet99 } from './dedicatedCloud/hosthourlyget99.operation';
import { execute as executehostmonthlyGet99, description as descriptionhostmonthlyGet99 } from './dedicatedCloud/hostmonthlyget99.operation';
import { execute as executefilerhourlyGet100, description as descriptionfilerhourlyGet100 } from './dedicatedCloud/filerhourlyget100.operation';
import { execute as executefilermonthlyGet100, description as descriptionfilermonthlyGet100 } from './dedicatedCloud/filermonthlyget100.operation';
import { execute as executehosthourlyGet100, description as descriptionhosthourlyGet100 } from './dedicatedCloud/hosthourlyget100.operation';
import { execute as executehostmonthlyGet100, description as descriptionhostmonthlyGet100 } from './dedicatedCloud/hostmonthlyget100.operation';
import { execute as executefilerhourlyGet101, description as descriptionfilerhourlyGet101 } from './dedicatedCloud/filerhourlyget101.operation';
import { execute as executefilermonthlyGet101, description as descriptionfilermonthlyGet101 } from './dedicatedCloud/filermonthlyget101.operation';
import { execute as executehosthourlyGet101, description as descriptionhosthourlyGet101 } from './dedicatedCloud/hosthourlyget101.operation';
import { execute as executehostmonthlyGet101, description as descriptionhostmonthlyGet101 } from './dedicatedCloud/hostmonthlyget101.operation';
import { execute as executefilerhourlyGet102, description as descriptionfilerhourlyGet102 } from './dedicatedCloud/filerhourlyget102.operation';
import { execute as executefilermonthlyGet102, description as descriptionfilermonthlyGet102 } from './dedicatedCloud/filermonthlyget102.operation';
import { execute as executehosthourlyGet102, description as descriptionhosthourlyGet102 } from './dedicatedCloud/hosthourlyget102.operation';
import { execute as executehostmonthlyGet102, description as descriptionhostmonthlyGet102 } from './dedicatedCloud/hostmonthlyget102.operation';
import { execute as executefilerhourlyGet103, description as descriptionfilerhourlyGet103 } from './dedicatedCloud/filerhourlyget103.operation';
import { execute as executefilermonthlyGet103, description as descriptionfilermonthlyGet103 } from './dedicatedCloud/filermonthlyget103.operation';
import { execute as executehosthourlyGet103, description as descriptionhosthourlyGet103 } from './dedicatedCloud/hosthourlyget103.operation';
import { execute as executehostmonthlyGet103, description as descriptionhostmonthlyGet103 } from './dedicatedCloud/hostmonthlyget103.operation';
import { execute as executefilerhourlyGet104, description as descriptionfilerhourlyGet104 } from './dedicatedCloud/filerhourlyget104.operation';
import { execute as executefilermonthlyGet104, description as descriptionfilermonthlyGet104 } from './dedicatedCloud/filermonthlyget104.operation';
import { execute as executehosthourlyGet104, description as descriptionhosthourlyGet104 } from './dedicatedCloud/hosthourlyget104.operation';
import { execute as executehostmonthlyGet104, description as descriptionhostmonthlyGet104 } from './dedicatedCloud/hostmonthlyget104.operation';
import { execute as executefilerhourlyGet105, description as descriptionfilerhourlyGet105 } from './dedicatedCloud/filerhourlyget105.operation';
import { execute as executefilermonthlyGet105, description as descriptionfilermonthlyGet105 } from './dedicatedCloud/filermonthlyget105.operation';
import { execute as executehosthourlyGet105, description as descriptionhosthourlyGet105 } from './dedicatedCloud/hosthourlyget105.operation';
import { execute as executehostmonthlyGet105, description as descriptionhostmonthlyGet105 } from './dedicatedCloud/hostmonthlyget105.operation';
import { execute as executefilerhourlyGet106, description as descriptionfilerhourlyGet106 } from './dedicatedCloud/filerhourlyget106.operation';
import { execute as executefilermonthlyGet106, description as descriptionfilermonthlyGet106 } from './dedicatedCloud/filermonthlyget106.operation';
import { execute as executehosthourlyGet106, description as descriptionhosthourlyGet106 } from './dedicatedCloud/hosthourlyget106.operation';
import { execute as executehostmonthlyGet106, description as descriptionhostmonthlyGet106 } from './dedicatedCloud/hostmonthlyget106.operation';
import { execute as executefilerhourlyGet107, description as descriptionfilerhourlyGet107 } from './dedicatedCloud/filerhourlyget107.operation';
import { execute as executefilermonthlyGet107, description as descriptionfilermonthlyGet107 } from './dedicatedCloud/filermonthlyget107.operation';
import { execute as executehosthourlyGet107, description as descriptionhosthourlyGet107 } from './dedicatedCloud/hosthourlyget107.operation';
import { execute as executehostmonthlyGet107, description as descriptionhostmonthlyGet107 } from './dedicatedCloud/hostmonthlyget107.operation';
import { execute as executefilerhourlyGet108, description as descriptionfilerhourlyGet108 } from './dedicatedCloud/filerhourlyget108.operation';
import { execute as executefilermonthlyGet108, description as descriptionfilermonthlyGet108 } from './dedicatedCloud/filermonthlyget108.operation';
import { execute as executehosthourlyGet108, description as descriptionhosthourlyGet108 } from './dedicatedCloud/hosthourlyget108.operation';
import { execute as executehostmonthlyGet108, description as descriptionhostmonthlyGet108 } from './dedicatedCloud/hostmonthlyget108.operation';
import { execute as executefilerhourlyGet109, description as descriptionfilerhourlyGet109 } from './dedicatedCloud/filerhourlyget109.operation';
import { execute as executefilermonthlyGet109, description as descriptionfilermonthlyGet109 } from './dedicatedCloud/filermonthlyget109.operation';
import { execute as executehosthourlyGet109, description as descriptionhosthourlyGet109 } from './dedicatedCloud/hosthourlyget109.operation';
import { execute as executehostmonthlyGet109, description as descriptionhostmonthlyGet109 } from './dedicatedCloud/hostmonthlyget109.operation';
import { execute as executefilerhourlyGet110, description as descriptionfilerhourlyGet110 } from './dedicatedCloud/filerhourlyget110.operation';
import { execute as executefilermonthlyGet110, description as descriptionfilermonthlyGet110 } from './dedicatedCloud/filermonthlyget110.operation';
import { execute as executehosthourlyGet110, description as descriptionhosthourlyGet110 } from './dedicatedCloud/hosthourlyget110.operation';
import { execute as executehostmonthlyGet110, description as descriptionhostmonthlyGet110 } from './dedicatedCloud/hostmonthlyget110.operation';
import { execute as executefilerhourlyGet111, description as descriptionfilerhourlyGet111 } from './dedicatedCloud/filerhourlyget111.operation';
import { execute as executefilermonthlyGet111, description as descriptionfilermonthlyGet111 } from './dedicatedCloud/filermonthlyget111.operation';
import { execute as executehosthourlyGet111, description as descriptionhosthourlyGet111 } from './dedicatedCloud/hosthourlyget111.operation';
import { execute as executehostmonthlyGet111, description as descriptionhostmonthlyGet111 } from './dedicatedCloud/hostmonthlyget111.operation';
import { execute as executefilerhourlyGet112, description as descriptionfilerhourlyGet112 } from './dedicatedCloud/filerhourlyget112.operation';
import { execute as executefilermonthlyGet112, description as descriptionfilermonthlyGet112 } from './dedicatedCloud/filermonthlyget112.operation';
import { execute as executehosthourlyGet112, description as descriptionhosthourlyGet112 } from './dedicatedCloud/hosthourlyget112.operation';
import { execute as executehostmonthlyGet112, description as descriptionhostmonthlyGet112 } from './dedicatedCloud/hostmonthlyget112.operation';
import { execute as executefilerhourlyGet113, description as descriptionfilerhourlyGet113 } from './dedicatedCloud/filerhourlyget113.operation';
import { execute as executefilermonthlyGet113, description as descriptionfilermonthlyGet113 } from './dedicatedCloud/filermonthlyget113.operation';
import { execute as executehosthourlyGet113, description as descriptionhosthourlyGet113 } from './dedicatedCloud/hosthourlyget113.operation';
import { execute as executehostmonthlyGet113, description as descriptionhostmonthlyGet113 } from './dedicatedCloud/hostmonthlyget113.operation';
import { execute as executefilerhourlyGet114, description as descriptionfilerhourlyGet114 } from './dedicatedCloud/filerhourlyget114.operation';
import { execute as executefilermonthlyGet114, description as descriptionfilermonthlyGet114 } from './dedicatedCloud/filermonthlyget114.operation';
import { execute as executehosthourlyGet114, description as descriptionhosthourlyGet114 } from './dedicatedCloud/hosthourlyget114.operation';
import { execute as executehostmonthlyGet114, description as descriptionhostmonthlyGet114 } from './dedicatedCloud/hostmonthlyget114.operation';
import { execute as executefilerhourlyGet115, description as descriptionfilerhourlyGet115 } from './dedicatedCloud/filerhourlyget115.operation';
import { execute as executefilermonthlyGet115, description as descriptionfilermonthlyGet115 } from './dedicatedCloud/filermonthlyget115.operation';
import { execute as executehosthourlyGet115, description as descriptionhosthourlyGet115 } from './dedicatedCloud/hosthourlyget115.operation';
import { execute as executehostmonthlyGet115, description as descriptionhostmonthlyGet115 } from './dedicatedCloud/hostmonthlyget115.operation';
import { execute as executefilerhourlyGet116, description as descriptionfilerhourlyGet116 } from './dedicatedCloud/filerhourlyget116.operation';
import { execute as executefilermonthlyGet116, description as descriptionfilermonthlyGet116 } from './dedicatedCloud/filermonthlyget116.operation';
import { execute as executehosthourlyGet116, description as descriptionhosthourlyGet116 } from './dedicatedCloud/hosthourlyget116.operation';
import { execute as executehostmonthlyGet116, description as descriptionhostmonthlyGet116 } from './dedicatedCloud/hostmonthlyget116.operation';
import { execute as executefilerhourlyGet117, description as descriptionfilerhourlyGet117 } from './dedicatedCloud/filerhourlyget117.operation';
import { execute as executefilermonthlyGet117, description as descriptionfilermonthlyGet117 } from './dedicatedCloud/filermonthlyget117.operation';
import { execute as executehosthourlyGet117, description as descriptionhosthourlyGet117 } from './dedicatedCloud/hosthourlyget117.operation';
import { execute as executehostmonthlyGet117, description as descriptionhostmonthlyGet117 } from './dedicatedCloud/hostmonthlyget117.operation';
import { execute as executefilerhourlyGet118, description as descriptionfilerhourlyGet118 } from './dedicatedCloud/filerhourlyget118.operation';
import { execute as executefilermonthlyGet118, description as descriptionfilermonthlyGet118 } from './dedicatedCloud/filermonthlyget118.operation';
import { execute as executehosthourlyGet118, description as descriptionhosthourlyGet118 } from './dedicatedCloud/hosthourlyget118.operation';
import { execute as executehostmonthlyGet118, description as descriptionhostmonthlyGet118 } from './dedicatedCloud/hostmonthlyget118.operation';
import { execute as executefilerhourlyGet119, description as descriptionfilerhourlyGet119 } from './dedicatedCloud/filerhourlyget119.operation';
import { execute as executefilermonthlyGet119, description as descriptionfilermonthlyGet119 } from './dedicatedCloud/filermonthlyget119.operation';
import { execute as executehosthourlyGet119, description as descriptionhosthourlyGet119 } from './dedicatedCloud/hosthourlyget119.operation';
import { execute as executehostmonthlyGet119, description as descriptionhostmonthlyGet119 } from './dedicatedCloud/hostmonthlyget119.operation';
import { execute as executefilerhourlyGet120, description as descriptionfilerhourlyGet120 } from './dedicatedCloud/filerhourlyget120.operation';
import { execute as executefilermonthlyGet120, description as descriptionfilermonthlyGet120 } from './dedicatedCloud/filermonthlyget120.operation';
import { execute as executehosthourlyGet120, description as descriptionhosthourlyGet120 } from './dedicatedCloud/hosthourlyget120.operation';
import { execute as executehostmonthlyGet120, description as descriptionhostmonthlyGet120 } from './dedicatedCloud/hostmonthlyget120.operation';
import { execute as executefilerhourlyGet121, description as descriptionfilerhourlyGet121 } from './dedicatedCloud/filerhourlyget121.operation';
import { execute as executefilermonthlyGet121, description as descriptionfilermonthlyGet121 } from './dedicatedCloud/filermonthlyget121.operation';
import { execute as executehosthourlyGet121, description as descriptionhosthourlyGet121 } from './dedicatedCloud/hosthourlyget121.operation';
import { execute as executehostmonthlyGet121, description as descriptionhostmonthlyGet121 } from './dedicatedCloud/hostmonthlyget121.operation';
import { execute as executefilerhourlyGet122, description as descriptionfilerhourlyGet122 } from './dedicatedCloud/filerhourlyget122.operation';
import { execute as executefilermonthlyGet122, description as descriptionfilermonthlyGet122 } from './dedicatedCloud/filermonthlyget122.operation';
import { execute as executehosthourlyGet122, description as descriptionhosthourlyGet122 } from './dedicatedCloud/hosthourlyget122.operation';
import { execute as executehostmonthlyGet122, description as descriptionhostmonthlyGet122 } from './dedicatedCloud/hostmonthlyget122.operation';
import { execute as executefilerhourlyGet123, description as descriptionfilerhourlyGet123 } from './dedicatedCloud/filerhourlyget123.operation';
import { execute as executefilermonthlyGet123, description as descriptionfilermonthlyGet123 } from './dedicatedCloud/filermonthlyget123.operation';
import { execute as executehosthourlyGet123, description as descriptionhosthourlyGet123 } from './dedicatedCloud/hosthourlyget123.operation';
import { execute as executehostmonthlyGet123, description as descriptionhostmonthlyGet123 } from './dedicatedCloud/hostmonthlyget123.operation';
import { execute as executefilerhourlyGet124, description as descriptionfilerhourlyGet124 } from './dedicatedCloud/filerhourlyget124.operation';
import { execute as executefilermonthlyGet124, description as descriptionfilermonthlyGet124 } from './dedicatedCloud/filermonthlyget124.operation';
import { execute as executehosthourlyGet124, description as descriptionhosthourlyGet124 } from './dedicatedCloud/hosthourlyget124.operation';
import { execute as executehostmonthlyGet124, description as descriptionhostmonthlyGet124 } from './dedicatedCloud/hostmonthlyget124.operation';
import { execute as executefilerhourlyGet125, description as descriptionfilerhourlyGet125 } from './dedicatedCloud/filerhourlyget125.operation';
import { execute as executefilermonthlyGet125, description as descriptionfilermonthlyGet125 } from './dedicatedCloud/filermonthlyget125.operation';
import { execute as executehosthourlyGet125, description as descriptionhosthourlyGet125 } from './dedicatedCloud/hosthourlyget125.operation';
import { execute as executehostmonthlyGet125, description as descriptionhostmonthlyGet125 } from './dedicatedCloud/hostmonthlyget125.operation';
import { execute as executefilerhourlyGet126, description as descriptionfilerhourlyGet126 } from './dedicatedCloud/filerhourlyget126.operation';
import { execute as executefilermonthlyGet126, description as descriptionfilermonthlyGet126 } from './dedicatedCloud/filermonthlyget126.operation';
import { execute as executehosthourlyGet126, description as descriptionhosthourlyGet126 } from './dedicatedCloud/hosthourlyget126.operation';
import { execute as executehostmonthlyGet126, description as descriptionhostmonthlyGet126 } from './dedicatedCloud/hostmonthlyget126.operation';
import { execute as executefilerhourlyGet127, description as descriptionfilerhourlyGet127 } from './dedicatedCloud/filerhourlyget127.operation';
import { execute as executefilermonthlyGet127, description as descriptionfilermonthlyGet127 } from './dedicatedCloud/filermonthlyget127.operation';
import { execute as executehosthourlyGet127, description as descriptionhosthourlyGet127 } from './dedicatedCloud/hosthourlyget127.operation';
import { execute as executehostmonthlyGet127, description as descriptionhostmonthlyGet127 } from './dedicatedCloud/hostmonthlyget127.operation';
import { execute as executefilerhourlyGet128, description as descriptionfilerhourlyGet128 } from './dedicatedCloud/filerhourlyget128.operation';
import { execute as executefilermonthlyGet128, description as descriptionfilermonthlyGet128 } from './dedicatedCloud/filermonthlyget128.operation';
import { execute as executehosthourlyGet128, description as descriptionhosthourlyGet128 } from './dedicatedCloud/hosthourlyget128.operation';
import { execute as executehostmonthlyGet128, description as descriptionhostmonthlyGet128 } from './dedicatedCloud/hostmonthlyget128.operation';
import { execute as executefilerhourlyGet129, description as descriptionfilerhourlyGet129 } from './dedicatedCloud/filerhourlyget129.operation';
import { execute as executefilermonthlyGet129, description as descriptionfilermonthlyGet129 } from './dedicatedCloud/filermonthlyget129.operation';
import { execute as executehosthourlyGet129, description as descriptionhosthourlyGet129 } from './dedicatedCloud/hosthourlyget129.operation';
import { execute as executehostmonthlyGet129, description as descriptionhostmonthlyGet129 } from './dedicatedCloud/hostmonthlyget129.operation';
import { execute as executefilerhourlyGet130, description as descriptionfilerhourlyGet130 } from './dedicatedCloud/filerhourlyget130.operation';
import { execute as executefilermonthlyGet130, description as descriptionfilermonthlyGet130 } from './dedicatedCloud/filermonthlyget130.operation';
import { execute as executehosthourlyGet130, description as descriptionhosthourlyGet130 } from './dedicatedCloud/hosthourlyget130.operation';
import { execute as executehostmonthlyGet130, description as descriptionhostmonthlyGet130 } from './dedicatedCloud/hostmonthlyget130.operation';
import { execute as executeclassicmodelGet, description as descriptionclassicmodelGet } from './vps/classicmodelget.operation';
import { execute as executecloudmodelGet, description as descriptioncloudmodelGet } from './vps/cloudmodelget.operation';
import { execute as executecloudoptionGet, description as descriptioncloudoptionGet } from './vps/cloudoptionget.operation';
import { execute as executelowlatmodelGet, description as descriptionlowlatmodelGet } from './vps/lowlatmodelget.operation';
import { execute as executeclassicmodelGet1, description as descriptionclassicmodelGet1 } from './vps/classicmodelget1.operation';
import { execute as executecloudmodelGet1, description as descriptioncloudmodelGet1 } from './vps/cloudmodelget1.operation';
import { execute as executecloudoptionGet1, description as descriptioncloudoptionGet1 } from './vps/cloudoptionget1.operation';
import { execute as executecloudmodelGet2, description as descriptioncloudmodelGet2 } from './vps/cloudmodelget2.operation';
import { execute as executecloudoptionGet2, description as descriptioncloudoptionGet2 } from './vps/cloudoptionget2.operation';
import { execute as executecloudrammodelGet, description as descriptioncloudrammodelGet } from './vps/cloudrammodelget.operation';
import { execute as executecloudramoptionGet, description as descriptioncloudramoptionGet } from './vps/cloudramoptionget.operation';
import { execute as executessdmodelGet, description as descriptionssdmodelGet } from './vps/ssdmodelget.operation';
import { execute as executessdoptionGet, description as descriptionssdoptionGet } from './vps/ssdoptionget.operation';
import { execute as executessdmodelGet1, description as descriptionssdmodelGet1 } from './vps/ssdmodelget1.operation';
import { execute as executessdoptionGet1, description as descriptionssdoptionGet1 } from './vps/ssdoptionget1.operation';
import { execute as executecloudmodelGet3, description as descriptioncloudmodelGet3 } from './vps/cloudmodelget3.operation';
import { execute as executecloudoptionGet3, description as descriptioncloudoptionGet3 } from './vps/cloudoptionget3.operation';
import { execute as executecloudrammodelGet1, description as descriptioncloudrammodelGet1 } from './vps/cloudrammodelget1.operation';
import { execute as executecloudramoptionGet1, description as descriptioncloudramoptionGet1 } from './vps/cloudramoptionget1.operation';
import { execute as executessdmodelGet2, description as descriptionssdmodelGet2 } from './vps/ssdmodelget2.operation';
import { execute as executessdoptionGet2, description as descriptionssdoptionGet2 } from './vps/ssdoptionget2.operation';
import { execute as executecloudmodelGet4, description as descriptioncloudmodelGet4 } from './vps/cloudmodelget4.operation';
import { execute as executecloudoptionGet4, description as descriptioncloudoptionGet4 } from './vps/cloudoptionget4.operation';
import { execute as executecloudrammodelGet2, description as descriptioncloudrammodelGet2 } from './vps/cloudrammodelget2.operation';
import { execute as executecloudramoptionGet2, description as descriptioncloudramoptionGet2 } from './vps/cloudramoptionget2.operation';
import { execute as executessdmodelGet3, description as descriptionssdmodelGet3 } from './vps/ssdmodelget3.operation';
import { execute as executessdoptionGet3, description as descriptionssdoptionGet3 } from './vps/ssdoptionget3.operation';
import { execute as executecloudmodelGet5, description as descriptioncloudmodelGet5 } from './vps/cloudmodelget5.operation';
import { execute as executecloudoptionGet5, description as descriptioncloudoptionGet5 } from './vps/cloudoptionget5.operation';
import { execute as executecloudrammodelGet3, description as descriptioncloudrammodelGet3 } from './vps/cloudrammodelget3.operation';
import { execute as executecloudramoptionGet3, description as descriptioncloudramoptionGet3 } from './vps/cloudramoptionget3.operation';
import { execute as executessdmodelGet4, description as descriptionssdmodelGet4 } from './vps/ssdmodelget4.operation';
import { execute as executessdoptionGet4, description as descriptionssdoptionGet4 } from './vps/ssdoptionget4.operation';
import { execute as executessdmodelGet5, description as descriptionssdmodelGet5 } from './vps/ssdmodelget5.operation';
import { execute as executessdoptionGet5, description as descriptionssdoptionGet5 } from './vps/ssdoptionget5.operation';
import { execute as executeclassicmodelGet2, description as descriptionclassicmodelGet2 } from './vps/classicmodelget2.operation';
import { execute as executemodelGet, description as descriptionmodelGet } from './vps/modelget.operation';
import { execute as executeoptionGet, description as descriptionoptionGet } from './vps/optionget.operation';
import { execute as executelowlatmodelGet1, description as descriptionlowlatmodelGet1 } from './vps/lowlatmodelget1.operation';
import { execute as executeaddressmovefeeGet, description as descriptionaddressmovefeeGet } from './xdsl/addressmovefeeget.operation';
import { execute as executexdslinstallationGet, description as descriptionxdslinstallationGet } from './xdsl/xdslinstallationget.operation';
import { execute as executexdsloffersGet, description as descriptionxdsloffersGet } from './xdsl/xdsloffersget.operation';
import { execute as executeoptionsinstallationGet, description as descriptionoptionsinstallationGet } from './xdsl/optionsinstallationget.operation';
import { execute as executeoptionsipv4Get, description as descriptionoptionsipv4Get } from './xdsl/optionsipv4get.operation';
import { execute as executeoptionslineGet, description as descriptionoptionslineGet } from './xdsl/optionslineget.operation';
import { execute as executeantiddosproGet, description as descriptionantiddosproGet } from './dedicated/server/antiddosproget.operation';
import { execute as executebackupstorageGet, description as descriptionbackupstorageGet } from './dedicated/server/backupstorageget.operation';
import { execute as executefirewallGet, description as descriptionfirewallGet } from './dedicated/server/firewallget.operation';
import { execute as executeipGet, description as descriptionipGet } from './dedicated/server/ipget.operation';
import { execute as executeprivatedatabaseGet, description as descriptionprivatedatabaseGet } from './hosting/privatedatabaseget.operation';
import { execute as executewebcdnGet, description as descriptionwebcdnGet } from './hosting/webcdnget.operation';
import { execute as executewebextrasqlpersoGet, description as descriptionwebextrasqlpersoGet } from './hosting/webextrasqlpersoget.operation';
import { execute as executewebsslGet, description as descriptionwebsslGet } from './hosting/websslget.operation';
import { execute as executezoneoptionGet, description as descriptionzoneoptionGet } from './domain/zoneoptionget.operation';
import { execute as executeofficeGet, description as descriptionofficeGet } from './license/officeget.operation';
import { execute as executeovertheboxofferGet, description as descriptionovertheboxofferGet } from './overTheBox/overtheboxofferget.operation';
import { execute as executecsp2licenseGet, description as descriptioncsp2licenseGet } from './saas/csp2licenseget.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    const operationProperties: INodeProperties[] = [
        {
            displayName: 'Operation',
            name: 'priceOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                { name: 'Get the Price of Address Move Option Fee', value: 'addressmovefeeget' },
                { name: 'Get Price of Anti-DDos Pro Option', value: 'antiddosproget' },
                { name: 'Get Price of Backup Storage Offer', value: 'backupstorageget' },
                { name: 'Get Price of VPS Cloud 2013', value: 'classicmodelget' },
                { name: 'Get Price of VPS Classic 2014', value: 'classicmodelget1' },
                { name: 'Get Price of VPS Classic', value: 'classicmodelget2' },
                { name: 'Get Price of VPS Classic 2013', value: 'cloudmodelget' },
                { name: 'Get Price of VPS Cloud 2014', value: 'cloudmodelget1' },
                { name: 'Get Price of VPS Cloud 2015', value: 'cloudmodelget2' },
                { name: 'Get Price of VPS Cloud 2017', value: 'cloudmodelget3' },
                { name: 'Get Price of VPS Cloud Options 2013', value: 'cloudoptionget' },
                { name: 'Get Price of VPS Cloud Options 2014', value: 'cloudoptionget1' },
                { name: 'Get Price of VPS Cloud Options 2015/2016', value: 'cloudoptionget2' },
                { name: 'Get Price of VPS Cloud RAM 2016', value: 'cloudrammodelget' },
                { name: 'Get Price of VPS Cloud RAM 2017', value: 'cloudrammodelget1' },
                { name: 'Get Price of VPS Cloud RAM Options 2015/2016', value: 'cloudramoptionget' },
                { name: 'Get the Monthly Price for an Office 365 License', value: 'csp2licenseget' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget36' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget37' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget38' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget39' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget4' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget40' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget41' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget42' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget43' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget44' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget45' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget46' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget47' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget48' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget49' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget5' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget50' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget51' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget52' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget53' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget54' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget55' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget56' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget57' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget58' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget59' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget6' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget60' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget61' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget62' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget63' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget64' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget65' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget66' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget67' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget68' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget69' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget7' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget70' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget71' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget72' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget73' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget74' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget75' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget76' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget77' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget78' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget79' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget8' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget80' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget81' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget82' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget83' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget84' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget85' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget86' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget87' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget88' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget89' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget9' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget90' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget91' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget92' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget93' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget94' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget95' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget96' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget97' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget98' },
                { name: 'Get Price of Dedicated Cloud Hourly Filer Ressources', value: 'filerhourlyget99' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget1' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget10' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget100' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget101' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget102' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget103' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget104' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget105' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget106' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget107' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget108' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget109' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget11' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget110' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget111' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget112' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget113' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget114' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget115' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget116' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget117' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget118' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget119' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget12' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget120' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget121' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget122' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget123' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget124' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget125' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget126' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget127' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget128' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget129' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget13' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget130' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget14' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget15' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget16' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget17' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget18' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget19' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget2' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget20' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget21' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget22' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget23' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget24' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget25' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget26' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget27' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget28' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget29' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget3' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget30' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget31' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget32' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget33' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget34' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget35' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget36' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget37' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget38' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget39' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget4' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget40' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget41' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget42' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget43' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget44' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget45' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget46' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget47' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget48' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget49' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget5' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget50' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget51' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget52' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget53' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget54' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget55' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget56' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget57' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget58' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget59' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget6' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget60' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget61' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget62' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget63' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget64' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget65' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget66' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget67' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget68' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget69' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget7' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget70' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget71' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget72' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget73' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget74' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget75' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget76' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget77' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget78' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget79' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget8' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget80' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget81' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget82' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget83' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget84' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget85' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget86' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget87' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget88' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget89' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget9' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget90' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget91' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget92' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget93' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget94' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget95' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget96' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget97' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget98' },
                { name: 'Get Price of Dedicated Cloud Monthly Filer Ressources', value: 'filermonthlyget99' },
                { name: 'Get Price of Available Firewall Models', value: 'firewallget' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget1' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget10' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget100' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget101' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget102' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget103' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget104' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget105' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget106' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget107' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget108' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget109' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget11' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget110' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget111' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget112' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget113' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget114' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget115' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget116' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget117' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget118' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget119' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget12' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget120' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget121' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget122' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget123' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget124' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget125' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget126' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget127' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget128' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget129' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget13' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget130' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget14' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget15' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget16' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget17' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget18' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget19' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget2' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget20' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget21' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget22' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget23' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget24' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget25' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget26' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget27' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget28' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget29' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget3' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget30' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget31' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget32' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget33' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget34' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget35' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget36' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget37' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget38' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget39' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget4' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget40' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget41' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget42' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget43' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget44' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget45' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget46' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget47' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget48' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget49' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget5' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget50' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget51' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget52' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget53' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget54' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget55' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget56' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget57' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget58' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget59' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget6' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget60' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget61' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget62' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget63' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget64' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget65' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget66' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget67' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget68' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget69' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget7' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget70' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget71' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget72' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget73' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget74' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget75' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget76' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget77' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget78' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget79' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget8' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget80' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget81' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget82' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget83' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget84' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget85' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget86' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget87' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget88' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget89' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget9' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget90' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget91' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget92' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget93' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget94' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget95' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget96' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget97' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget98' },
                { name: 'Get Price of Dedicated Cloud Hourly Host Ressources', value: 'hosthourlyget99' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget1' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget10' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget100' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget101' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget102' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget103' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget104' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget105' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget106' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget107' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget108' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget109' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget11' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget110' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget111' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget112' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget113' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget114' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget115' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget116' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget117' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget118' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget119' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget12' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget120' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget121' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget122' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget123' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget124' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget125' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget126' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget127' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget128' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget129' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget13' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget130' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget14' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget15' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget16' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget17' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget18' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget19' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget2' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget20' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget21' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget22' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget23' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget24' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget25' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget26' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget27' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget28' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget29' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget3' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget30' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget31' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget32' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget33' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget34' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget35' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget36' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget37' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget38' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget39' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget4' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget40' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget41' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget42' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget43' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget44' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget45' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget46' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget47' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget48' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget49' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget5' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget50' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget51' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget52' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget53' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget54' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget55' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget56' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget57' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget58' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget59' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget6' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget60' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget61' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget62' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget63' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget64' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget65' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget66' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget67' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget68' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget69' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget7' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget70' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget71' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget72' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget73' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget74' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget75' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget76' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget77' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget78' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget79' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget8' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget80' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget81' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget82' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget83' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget84' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget85' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget86' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget87' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget88' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget89' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget9' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget90' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget91' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget92' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget93' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget94' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget95' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget96' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget97' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget98' },
                { name: 'Get Price of Dedicated Cloud Monthly Host Ressources', value: 'hostmonthlyget99' },
                { name: 'Get Price of IPs', value: 'ipget' },
                { name: 'Get Price of VPS Low Latency 2013', value: 'lowlatmodelget' },
                { name: 'Get Price of VPS Low Latency', value: 'lowlatmodelget1' },
                { name: 'Get Price of VPS Cloud', value: 'modelget' },
                { name: 'Get the Monthly Price for an Office License', value: 'officeget' },
                { name: 'Get Price of VPS Cloud Options', value: 'optionget' },
                { name: 'Get the Price of Options Installation Fee', value: 'optionsinstallationget' },
                { name: 'Get the Price of IPv4 Options', value: 'optionsipv4get' },
                { name: 'Get the Price of Line Action', value: 'optionslineget' },
                { name: 'Get the Price of overTheBox Offers', value: 'overtheboxofferget' },
                { name: 'Get the Price for a Private Database', value: 'privatedatabaseget' },
                { name: 'Get Price of VPS SSD 2015', value: 'ssdmodelget' },
                { name: 'Get Price of VPS SSD Discovery 2017', value: 'ssdmodelget1' },
                { name: 'Get Price of VPS SSD 2017', value: 'ssdmodelget2' },
                { name: 'Get Price of VPS SSD 2017', value: 'ssdmodelget3' },
                { name: 'Get Price of VPS SSD 2018', value: 'ssdmodelget4' },
                { name: 'Get Price of VPS SSD APAC', value: 'ssdmodelget5' },
                { name: 'Get Price of VPS SSD Options 2015/2016', value: 'ssdoptionget' },
                { name: 'Get Price of VPS SSD Discovery Options 2017', value: 'ssdoptionget1' },
                { name: 'Get Price of VPS SSD Options 2015/2016', value: 'ssdoptionget2' },
                { name: 'Get Price of VPS SSD Options 2015/2016', value: 'ssdoptionget3' },
                { name: 'Get Price of VPS SSD Options 2015/2016', value: 'ssdoptionget4' },
                { name: 'Get Price of VPS SSD APAC Options', value: 'ssdoptionget5' },
                { name: 'Get the Price for Cdn Option', value: 'webcdnget' },
                { name: 'Get the Price for Extra Sql Perso Option', value: 'webextrasqlpersoget' },
                { name: 'Get the Price for Hosted Ssl Option', value: 'websslget' },
                { name: 'Get the Price of Options Installation Fee', value: 'xdslinstallationget' },
                { name: 'Get the Price of Xdsl Offers', value: 'xdsloffersget' },
                { name: 'Get Price of Zone Options', value: 'zoneoptionget' },
            ],
            default: 'addressmovefeeget',
            displayOptions,
        },
    ];

    const properties: INodeProperties[] = [
        ...operationProperties,
        ...(descriptionfilerhourlyGet({ ...displayOptions, show: { priceOperation: ['filerhourlyget'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet({ ...displayOptions, show: { priceOperation: ['filermonthlyget'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet({ ...displayOptions, show: { priceOperation: ['hosthourlyget'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet({ ...displayOptions, show: { priceOperation: ['hostmonthlyget'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet1({ ...displayOptions, show: { priceOperation: ['filerhourlyget1'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet1({ ...displayOptions, show: { priceOperation: ['filermonthlyget1'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet1({ ...displayOptions, show: { priceOperation: ['hosthourlyget1'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet1({ ...displayOptions, show: { priceOperation: ['hostmonthlyget1'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet2({ ...displayOptions, show: { priceOperation: ['filerhourlyget2'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet2({ ...displayOptions, show: { priceOperation: ['filermonthlyget2'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet2({ ...displayOptions, show: { priceOperation: ['hosthourlyget2'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet2({ ...displayOptions, show: { priceOperation: ['hostmonthlyget2'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet3({ ...displayOptions, show: { priceOperation: ['filerhourlyget3'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet3({ ...displayOptions, show: { priceOperation: ['filermonthlyget3'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet3({ ...displayOptions, show: { priceOperation: ['hosthourlyget3'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet3({ ...displayOptions, show: { priceOperation: ['hostmonthlyget3'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet4({ ...displayOptions, show: { priceOperation: ['filerhourlyget4'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet4({ ...displayOptions, show: { priceOperation: ['filermonthlyget4'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet4({ ...displayOptions, show: { priceOperation: ['hosthourlyget4'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet4({ ...displayOptions, show: { priceOperation: ['hostmonthlyget4'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet5({ ...displayOptions, show: { priceOperation: ['filerhourlyget5'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet5({ ...displayOptions, show: { priceOperation: ['filermonthlyget5'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet5({ ...displayOptions, show: { priceOperation: ['hosthourlyget5'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet5({ ...displayOptions, show: { priceOperation: ['hostmonthlyget5'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet6({ ...displayOptions, show: { priceOperation: ['filerhourlyget6'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet6({ ...displayOptions, show: { priceOperation: ['filermonthlyget6'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet6({ ...displayOptions, show: { priceOperation: ['hosthourlyget6'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet6({ ...displayOptions, show: { priceOperation: ['hostmonthlyget6'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet7({ ...displayOptions, show: { priceOperation: ['filerhourlyget7'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet7({ ...displayOptions, show: { priceOperation: ['filermonthlyget7'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet7({ ...displayOptions, show: { priceOperation: ['hosthourlyget7'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet7({ ...displayOptions, show: { priceOperation: ['hostmonthlyget7'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet8({ ...displayOptions, show: { priceOperation: ['filerhourlyget8'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet8({ ...displayOptions, show: { priceOperation: ['filermonthlyget8'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet8({ ...displayOptions, show: { priceOperation: ['hosthourlyget8'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet8({ ...displayOptions, show: { priceOperation: ['hostmonthlyget8'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet9({ ...displayOptions, show: { priceOperation: ['filerhourlyget9'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet9({ ...displayOptions, show: { priceOperation: ['filermonthlyget9'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet9({ ...displayOptions, show: { priceOperation: ['hosthourlyget9'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet9({ ...displayOptions, show: { priceOperation: ['hostmonthlyget9'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet10({ ...displayOptions, show: { priceOperation: ['filerhourlyget10'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet10({ ...displayOptions, show: { priceOperation: ['filermonthlyget10'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet10({ ...displayOptions, show: { priceOperation: ['hosthourlyget10'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet10({ ...displayOptions, show: { priceOperation: ['hostmonthlyget10'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet11({ ...displayOptions, show: { priceOperation: ['filerhourlyget11'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet11({ ...displayOptions, show: { priceOperation: ['filermonthlyget11'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet11({ ...displayOptions, show: { priceOperation: ['hosthourlyget11'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet11({ ...displayOptions, show: { priceOperation: ['hostmonthlyget11'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet12({ ...displayOptions, show: { priceOperation: ['filerhourlyget12'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet12({ ...displayOptions, show: { priceOperation: ['filermonthlyget12'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet12({ ...displayOptions, show: { priceOperation: ['hosthourlyget12'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet12({ ...displayOptions, show: { priceOperation: ['hostmonthlyget12'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet13({ ...displayOptions, show: { priceOperation: ['filerhourlyget13'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet13({ ...displayOptions, show: { priceOperation: ['filermonthlyget13'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet13({ ...displayOptions, show: { priceOperation: ['hosthourlyget13'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet13({ ...displayOptions, show: { priceOperation: ['hostmonthlyget13'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet14({ ...displayOptions, show: { priceOperation: ['filerhourlyget14'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet14({ ...displayOptions, show: { priceOperation: ['filermonthlyget14'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet14({ ...displayOptions, show: { priceOperation: ['hosthourlyget14'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet14({ ...displayOptions, show: { priceOperation: ['hostmonthlyget14'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet15({ ...displayOptions, show: { priceOperation: ['filerhourlyget15'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet15({ ...displayOptions, show: { priceOperation: ['filermonthlyget15'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet15({ ...displayOptions, show: { priceOperation: ['hosthourlyget15'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet15({ ...displayOptions, show: { priceOperation: ['hostmonthlyget15'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet16({ ...displayOptions, show: { priceOperation: ['filerhourlyget16'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet16({ ...displayOptions, show: { priceOperation: ['filermonthlyget16'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet16({ ...displayOptions, show: { priceOperation: ['hosthourlyget16'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet16({ ...displayOptions, show: { priceOperation: ['hostmonthlyget16'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet17({ ...displayOptions, show: { priceOperation: ['filerhourlyget17'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet17({ ...displayOptions, show: { priceOperation: ['filermonthlyget17'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet17({ ...displayOptions, show: { priceOperation: ['hosthourlyget17'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet17({ ...displayOptions, show: { priceOperation: ['hostmonthlyget17'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet18({ ...displayOptions, show: { priceOperation: ['filerhourlyget18'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet18({ ...displayOptions, show: { priceOperation: ['filermonthlyget18'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet18({ ...displayOptions, show: { priceOperation: ['hosthourlyget18'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet18({ ...displayOptions, show: { priceOperation: ['hostmonthlyget18'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet19({ ...displayOptions, show: { priceOperation: ['filerhourlyget19'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet19({ ...displayOptions, show: { priceOperation: ['filermonthlyget19'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet19({ ...displayOptions, show: { priceOperation: ['hosthourlyget19'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet19({ ...displayOptions, show: { priceOperation: ['hostmonthlyget19'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet20({ ...displayOptions, show: { priceOperation: ['filerhourlyget20'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet20({ ...displayOptions, show: { priceOperation: ['filermonthlyget20'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet20({ ...displayOptions, show: { priceOperation: ['hosthourlyget20'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet20({ ...displayOptions, show: { priceOperation: ['hostmonthlyget20'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet21({ ...displayOptions, show: { priceOperation: ['filerhourlyget21'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet21({ ...displayOptions, show: { priceOperation: ['filermonthlyget21'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet21({ ...displayOptions, show: { priceOperation: ['hosthourlyget21'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet21({ ...displayOptions, show: { priceOperation: ['hostmonthlyget21'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet22({ ...displayOptions, show: { priceOperation: ['filerhourlyget22'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet22({ ...displayOptions, show: { priceOperation: ['filermonthlyget22'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet22({ ...displayOptions, show: { priceOperation: ['hosthourlyget22'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet22({ ...displayOptions, show: { priceOperation: ['hostmonthlyget22'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet23({ ...displayOptions, show: { priceOperation: ['filerhourlyget23'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet23({ ...displayOptions, show: { priceOperation: ['filermonthlyget23'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet23({ ...displayOptions, show: { priceOperation: ['hosthourlyget23'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet23({ ...displayOptions, show: { priceOperation: ['hostmonthlyget23'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet24({ ...displayOptions, show: { priceOperation: ['filerhourlyget24'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet24({ ...displayOptions, show: { priceOperation: ['filermonthlyget24'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet24({ ...displayOptions, show: { priceOperation: ['hosthourlyget24'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet24({ ...displayOptions, show: { priceOperation: ['hostmonthlyget24'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet25({ ...displayOptions, show: { priceOperation: ['filerhourlyget25'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet25({ ...displayOptions, show: { priceOperation: ['filermonthlyget25'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet25({ ...displayOptions, show: { priceOperation: ['hosthourlyget25'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet25({ ...displayOptions, show: { priceOperation: ['hostmonthlyget25'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet26({ ...displayOptions, show: { priceOperation: ['filerhourlyget26'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet26({ ...displayOptions, show: { priceOperation: ['filermonthlyget26'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet26({ ...displayOptions, show: { priceOperation: ['hosthourlyget26'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet26({ ...displayOptions, show: { priceOperation: ['hostmonthlyget26'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet27({ ...displayOptions, show: { priceOperation: ['filerhourlyget27'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet27({ ...displayOptions, show: { priceOperation: ['filermonthlyget27'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet27({ ...displayOptions, show: { priceOperation: ['hosthourlyget27'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet27({ ...displayOptions, show: { priceOperation: ['hostmonthlyget27'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet28({ ...displayOptions, show: { priceOperation: ['filerhourlyget28'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet28({ ...displayOptions, show: { priceOperation: ['filermonthlyget28'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet28({ ...displayOptions, show: { priceOperation: ['hosthourlyget28'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet28({ ...displayOptions, show: { priceOperation: ['hostmonthlyget28'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet29({ ...displayOptions, show: { priceOperation: ['filerhourlyget29'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet29({ ...displayOptions, show: { priceOperation: ['filermonthlyget29'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet29({ ...displayOptions, show: { priceOperation: ['hosthourlyget29'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet29({ ...displayOptions, show: { priceOperation: ['hostmonthlyget29'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet30({ ...displayOptions, show: { priceOperation: ['filerhourlyget30'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet30({ ...displayOptions, show: { priceOperation: ['filermonthlyget30'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet30({ ...displayOptions, show: { priceOperation: ['hosthourlyget30'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet30({ ...displayOptions, show: { priceOperation: ['hostmonthlyget30'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet31({ ...displayOptions, show: { priceOperation: ['filerhourlyget31'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet31({ ...displayOptions, show: { priceOperation: ['filermonthlyget31'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet31({ ...displayOptions, show: { priceOperation: ['hosthourlyget31'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet31({ ...displayOptions, show: { priceOperation: ['hostmonthlyget31'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet32({ ...displayOptions, show: { priceOperation: ['filerhourlyget32'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet32({ ...displayOptions, show: { priceOperation: ['filermonthlyget32'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet32({ ...displayOptions, show: { priceOperation: ['hosthourlyget32'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet32({ ...displayOptions, show: { priceOperation: ['hostmonthlyget32'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet33({ ...displayOptions, show: { priceOperation: ['filerhourlyget33'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet33({ ...displayOptions, show: { priceOperation: ['filermonthlyget33'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet33({ ...displayOptions, show: { priceOperation: ['hosthourlyget33'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet33({ ...displayOptions, show: { priceOperation: ['hostmonthlyget33'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet34({ ...displayOptions, show: { priceOperation: ['filerhourlyget34'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet34({ ...displayOptions, show: { priceOperation: ['filermonthlyget34'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet34({ ...displayOptions, show: { priceOperation: ['hosthourlyget34'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet34({ ...displayOptions, show: { priceOperation: ['hostmonthlyget34'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet35({ ...displayOptions, show: { priceOperation: ['filerhourlyget35'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet35({ ...displayOptions, show: { priceOperation: ['filermonthlyget35'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet35({ ...displayOptions, show: { priceOperation: ['hosthourlyget35'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet35({ ...displayOptions, show: { priceOperation: ['hostmonthlyget35'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet36({ ...displayOptions, show: { priceOperation: ['filerhourlyget36'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet36({ ...displayOptions, show: { priceOperation: ['filermonthlyget36'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet36({ ...displayOptions, show: { priceOperation: ['hosthourlyget36'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet36({ ...displayOptions, show: { priceOperation: ['hostmonthlyget36'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet37({ ...displayOptions, show: { priceOperation: ['filerhourlyget37'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet37({ ...displayOptions, show: { priceOperation: ['filermonthlyget37'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet37({ ...displayOptions, show: { priceOperation: ['hosthourlyget37'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet37({ ...displayOptions, show: { priceOperation: ['hostmonthlyget37'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet38({ ...displayOptions, show: { priceOperation: ['filerhourlyget38'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet38({ ...displayOptions, show: { priceOperation: ['filermonthlyget38'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet38({ ...displayOptions, show: { priceOperation: ['hosthourlyget38'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet38({ ...displayOptions, show: { priceOperation: ['hostmonthlyget38'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet39({ ...displayOptions, show: { priceOperation: ['filerhourlyget39'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet39({ ...displayOptions, show: { priceOperation: ['filermonthlyget39'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet39({ ...displayOptions, show: { priceOperation: ['hosthourlyget39'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet39({ ...displayOptions, show: { priceOperation: ['hostmonthlyget39'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet40({ ...displayOptions, show: { priceOperation: ['filerhourlyget40'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet40({ ...displayOptions, show: { priceOperation: ['filermonthlyget40'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet40({ ...displayOptions, show: { priceOperation: ['hosthourlyget40'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet40({ ...displayOptions, show: { priceOperation: ['hostmonthlyget40'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet41({ ...displayOptions, show: { priceOperation: ['filerhourlyget41'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet41({ ...displayOptions, show: { priceOperation: ['filermonthlyget41'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet41({ ...displayOptions, show: { priceOperation: ['hosthourlyget41'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet41({ ...displayOptions, show: { priceOperation: ['hostmonthlyget41'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet42({ ...displayOptions, show: { priceOperation: ['filerhourlyget42'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet42({ ...displayOptions, show: { priceOperation: ['filermonthlyget42'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet42({ ...displayOptions, show: { priceOperation: ['hosthourlyget42'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet42({ ...displayOptions, show: { priceOperation: ['hostmonthlyget42'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet43({ ...displayOptions, show: { priceOperation: ['filerhourlyget43'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet43({ ...displayOptions, show: { priceOperation: ['filermonthlyget43'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet43({ ...displayOptions, show: { priceOperation: ['hosthourlyget43'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet43({ ...displayOptions, show: { priceOperation: ['hostmonthlyget43'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet44({ ...displayOptions, show: { priceOperation: ['filerhourlyget44'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet44({ ...displayOptions, show: { priceOperation: ['filermonthlyget44'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet44({ ...displayOptions, show: { priceOperation: ['hosthourlyget44'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet44({ ...displayOptions, show: { priceOperation: ['hostmonthlyget44'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet45({ ...displayOptions, show: { priceOperation: ['filerhourlyget45'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet45({ ...displayOptions, show: { priceOperation: ['filermonthlyget45'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet45({ ...displayOptions, show: { priceOperation: ['hosthourlyget45'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet45({ ...displayOptions, show: { priceOperation: ['hostmonthlyget45'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet46({ ...displayOptions, show: { priceOperation: ['filerhourlyget46'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet46({ ...displayOptions, show: { priceOperation: ['filermonthlyget46'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet46({ ...displayOptions, show: { priceOperation: ['hosthourlyget46'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet46({ ...displayOptions, show: { priceOperation: ['hostmonthlyget46'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet47({ ...displayOptions, show: { priceOperation: ['filerhourlyget47'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet47({ ...displayOptions, show: { priceOperation: ['filermonthlyget47'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet47({ ...displayOptions, show: { priceOperation: ['hosthourlyget47'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet47({ ...displayOptions, show: { priceOperation: ['hostmonthlyget47'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet48({ ...displayOptions, show: { priceOperation: ['filerhourlyget48'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet48({ ...displayOptions, show: { priceOperation: ['filermonthlyget48'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet48({ ...displayOptions, show: { priceOperation: ['hosthourlyget48'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet48({ ...displayOptions, show: { priceOperation: ['hostmonthlyget48'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet49({ ...displayOptions, show: { priceOperation: ['filerhourlyget49'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet49({ ...displayOptions, show: { priceOperation: ['filermonthlyget49'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet49({ ...displayOptions, show: { priceOperation: ['hosthourlyget49'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet49({ ...displayOptions, show: { priceOperation: ['hostmonthlyget49'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet50({ ...displayOptions, show: { priceOperation: ['filerhourlyget50'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet50({ ...displayOptions, show: { priceOperation: ['filermonthlyget50'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet50({ ...displayOptions, show: { priceOperation: ['hosthourlyget50'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet50({ ...displayOptions, show: { priceOperation: ['hostmonthlyget50'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet51({ ...displayOptions, show: { priceOperation: ['filerhourlyget51'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet51({ ...displayOptions, show: { priceOperation: ['filermonthlyget51'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet51({ ...displayOptions, show: { priceOperation: ['hosthourlyget51'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet51({ ...displayOptions, show: { priceOperation: ['hostmonthlyget51'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet52({ ...displayOptions, show: { priceOperation: ['filerhourlyget52'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet52({ ...displayOptions, show: { priceOperation: ['filermonthlyget52'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet52({ ...displayOptions, show: { priceOperation: ['hosthourlyget52'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet52({ ...displayOptions, show: { priceOperation: ['hostmonthlyget52'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet53({ ...displayOptions, show: { priceOperation: ['filerhourlyget53'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet53({ ...displayOptions, show: { priceOperation: ['filermonthlyget53'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet53({ ...displayOptions, show: { priceOperation: ['hosthourlyget53'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet53({ ...displayOptions, show: { priceOperation: ['hostmonthlyget53'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet54({ ...displayOptions, show: { priceOperation: ['filerhourlyget54'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet54({ ...displayOptions, show: { priceOperation: ['filermonthlyget54'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet54({ ...displayOptions, show: { priceOperation: ['hosthourlyget54'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet54({ ...displayOptions, show: { priceOperation: ['hostmonthlyget54'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet55({ ...displayOptions, show: { priceOperation: ['filerhourlyget55'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet55({ ...displayOptions, show: { priceOperation: ['filermonthlyget55'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet55({ ...displayOptions, show: { priceOperation: ['hosthourlyget55'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet55({ ...displayOptions, show: { priceOperation: ['hostmonthlyget55'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet56({ ...displayOptions, show: { priceOperation: ['filerhourlyget56'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet56({ ...displayOptions, show: { priceOperation: ['filermonthlyget56'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet56({ ...displayOptions, show: { priceOperation: ['hosthourlyget56'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet56({ ...displayOptions, show: { priceOperation: ['hostmonthlyget56'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet57({ ...displayOptions, show: { priceOperation: ['filerhourlyget57'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet57({ ...displayOptions, show: { priceOperation: ['filermonthlyget57'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet57({ ...displayOptions, show: { priceOperation: ['hosthourlyget57'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet57({ ...displayOptions, show: { priceOperation: ['hostmonthlyget57'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet58({ ...displayOptions, show: { priceOperation: ['filerhourlyget58'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet58({ ...displayOptions, show: { priceOperation: ['filermonthlyget58'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet58({ ...displayOptions, show: { priceOperation: ['hosthourlyget58'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet58({ ...displayOptions, show: { priceOperation: ['hostmonthlyget58'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet59({ ...displayOptions, show: { priceOperation: ['filerhourlyget59'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet59({ ...displayOptions, show: { priceOperation: ['filermonthlyget59'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet59({ ...displayOptions, show: { priceOperation: ['hosthourlyget59'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet59({ ...displayOptions, show: { priceOperation: ['hostmonthlyget59'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet60({ ...displayOptions, show: { priceOperation: ['filerhourlyget60'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet60({ ...displayOptions, show: { priceOperation: ['filermonthlyget60'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet60({ ...displayOptions, show: { priceOperation: ['hosthourlyget60'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet60({ ...displayOptions, show: { priceOperation: ['hostmonthlyget60'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet61({ ...displayOptions, show: { priceOperation: ['filerhourlyget61'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet61({ ...displayOptions, show: { priceOperation: ['filermonthlyget61'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet61({ ...displayOptions, show: { priceOperation: ['hosthourlyget61'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet61({ ...displayOptions, show: { priceOperation: ['hostmonthlyget61'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet62({ ...displayOptions, show: { priceOperation: ['filerhourlyget62'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet62({ ...displayOptions, show: { priceOperation: ['filermonthlyget62'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet62({ ...displayOptions, show: { priceOperation: ['hosthourlyget62'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet62({ ...displayOptions, show: { priceOperation: ['hostmonthlyget62'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet63({ ...displayOptions, show: { priceOperation: ['filerhourlyget63'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet63({ ...displayOptions, show: { priceOperation: ['filermonthlyget63'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet63({ ...displayOptions, show: { priceOperation: ['hosthourlyget63'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet63({ ...displayOptions, show: { priceOperation: ['hostmonthlyget63'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet64({ ...displayOptions, show: { priceOperation: ['filerhourlyget64'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet64({ ...displayOptions, show: { priceOperation: ['filermonthlyget64'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet64({ ...displayOptions, show: { priceOperation: ['hosthourlyget64'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet64({ ...displayOptions, show: { priceOperation: ['hostmonthlyget64'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet65({ ...displayOptions, show: { priceOperation: ['filerhourlyget65'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet65({ ...displayOptions, show: { priceOperation: ['filermonthlyget65'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet65({ ...displayOptions, show: { priceOperation: ['hosthourlyget65'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet65({ ...displayOptions, show: { priceOperation: ['hostmonthlyget65'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet66({ ...displayOptions, show: { priceOperation: ['filerhourlyget66'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet66({ ...displayOptions, show: { priceOperation: ['filermonthlyget66'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet66({ ...displayOptions, show: { priceOperation: ['hosthourlyget66'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet66({ ...displayOptions, show: { priceOperation: ['hostmonthlyget66'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet67({ ...displayOptions, show: { priceOperation: ['filerhourlyget67'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet67({ ...displayOptions, show: { priceOperation: ['filermonthlyget67'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet67({ ...displayOptions, show: { priceOperation: ['hosthourlyget67'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet67({ ...displayOptions, show: { priceOperation: ['hostmonthlyget67'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet68({ ...displayOptions, show: { priceOperation: ['filerhourlyget68'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet68({ ...displayOptions, show: { priceOperation: ['filermonthlyget68'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet68({ ...displayOptions, show: { priceOperation: ['hosthourlyget68'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet68({ ...displayOptions, show: { priceOperation: ['hostmonthlyget68'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet69({ ...displayOptions, show: { priceOperation: ['filerhourlyget69'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet69({ ...displayOptions, show: { priceOperation: ['filermonthlyget69'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet69({ ...displayOptions, show: { priceOperation: ['hosthourlyget69'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet69({ ...displayOptions, show: { priceOperation: ['hostmonthlyget69'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet70({ ...displayOptions, show: { priceOperation: ['filerhourlyget70'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet70({ ...displayOptions, show: { priceOperation: ['filermonthlyget70'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet70({ ...displayOptions, show: { priceOperation: ['hosthourlyget70'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet70({ ...displayOptions, show: { priceOperation: ['hostmonthlyget70'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet71({ ...displayOptions, show: { priceOperation: ['filerhourlyget71'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet71({ ...displayOptions, show: { priceOperation: ['filermonthlyget71'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet71({ ...displayOptions, show: { priceOperation: ['hosthourlyget71'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet71({ ...displayOptions, show: { priceOperation: ['hostmonthlyget71'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet72({ ...displayOptions, show: { priceOperation: ['filerhourlyget72'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet72({ ...displayOptions, show: { priceOperation: ['filermonthlyget72'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet72({ ...displayOptions, show: { priceOperation: ['hosthourlyget72'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet72({ ...displayOptions, show: { priceOperation: ['hostmonthlyget72'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet73({ ...displayOptions, show: { priceOperation: ['filerhourlyget73'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet73({ ...displayOptions, show: { priceOperation: ['filermonthlyget73'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet73({ ...displayOptions, show: { priceOperation: ['hosthourlyget73'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet73({ ...displayOptions, show: { priceOperation: ['hostmonthlyget73'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet74({ ...displayOptions, show: { priceOperation: ['filerhourlyget74'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet74({ ...displayOptions, show: { priceOperation: ['filermonthlyget74'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet74({ ...displayOptions, show: { priceOperation: ['hosthourlyget74'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet74({ ...displayOptions, show: { priceOperation: ['hostmonthlyget74'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet75({ ...displayOptions, show: { priceOperation: ['filerhourlyget75'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet75({ ...displayOptions, show: { priceOperation: ['filermonthlyget75'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet75({ ...displayOptions, show: { priceOperation: ['hosthourlyget75'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet75({ ...displayOptions, show: { priceOperation: ['hostmonthlyget75'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet76({ ...displayOptions, show: { priceOperation: ['filerhourlyget76'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet76({ ...displayOptions, show: { priceOperation: ['filermonthlyget76'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet76({ ...displayOptions, show: { priceOperation: ['hosthourlyget76'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet76({ ...displayOptions, show: { priceOperation: ['hostmonthlyget76'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet77({ ...displayOptions, show: { priceOperation: ['filerhourlyget77'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet77({ ...displayOptions, show: { priceOperation: ['filermonthlyget77'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet77({ ...displayOptions, show: { priceOperation: ['hosthourlyget77'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet77({ ...displayOptions, show: { priceOperation: ['hostmonthlyget77'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet78({ ...displayOptions, show: { priceOperation: ['filerhourlyget78'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet78({ ...displayOptions, show: { priceOperation: ['filermonthlyget78'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet78({ ...displayOptions, show: { priceOperation: ['hosthourlyget78'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet78({ ...displayOptions, show: { priceOperation: ['hostmonthlyget78'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet79({ ...displayOptions, show: { priceOperation: ['filerhourlyget79'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet79({ ...displayOptions, show: { priceOperation: ['filermonthlyget79'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet79({ ...displayOptions, show: { priceOperation: ['hosthourlyget79'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet79({ ...displayOptions, show: { priceOperation: ['hostmonthlyget79'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet80({ ...displayOptions, show: { priceOperation: ['filerhourlyget80'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet80({ ...displayOptions, show: { priceOperation: ['filermonthlyget80'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet80({ ...displayOptions, show: { priceOperation: ['hosthourlyget80'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet80({ ...displayOptions, show: { priceOperation: ['hostmonthlyget80'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet81({ ...displayOptions, show: { priceOperation: ['filerhourlyget81'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet81({ ...displayOptions, show: { priceOperation: ['filermonthlyget81'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet81({ ...displayOptions, show: { priceOperation: ['hosthourlyget81'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet81({ ...displayOptions, show: { priceOperation: ['hostmonthlyget81'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet82({ ...displayOptions, show: { priceOperation: ['filerhourlyget82'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet82({ ...displayOptions, show: { priceOperation: ['filermonthlyget82'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet82({ ...displayOptions, show: { priceOperation: ['hosthourlyget82'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet82({ ...displayOptions, show: { priceOperation: ['hostmonthlyget82'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet83({ ...displayOptions, show: { priceOperation: ['filerhourlyget83'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet83({ ...displayOptions, show: { priceOperation: ['filermonthlyget83'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet83({ ...displayOptions, show: { priceOperation: ['hosthourlyget83'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet83({ ...displayOptions, show: { priceOperation: ['hostmonthlyget83'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet84({ ...displayOptions, show: { priceOperation: ['filerhourlyget84'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet84({ ...displayOptions, show: { priceOperation: ['filermonthlyget84'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet84({ ...displayOptions, show: { priceOperation: ['hosthourlyget84'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet84({ ...displayOptions, show: { priceOperation: ['hostmonthlyget84'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet85({ ...displayOptions, show: { priceOperation: ['filerhourlyget85'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet85({ ...displayOptions, show: { priceOperation: ['filermonthlyget85'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet85({ ...displayOptions, show: { priceOperation: ['hosthourlyget85'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet85({ ...displayOptions, show: { priceOperation: ['hostmonthlyget85'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet86({ ...displayOptions, show: { priceOperation: ['filerhourlyget86'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet86({ ...displayOptions, show: { priceOperation: ['filermonthlyget86'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet86({ ...displayOptions, show: { priceOperation: ['hosthourlyget86'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet86({ ...displayOptions, show: { priceOperation: ['hostmonthlyget86'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet87({ ...displayOptions, show: { priceOperation: ['filerhourlyget87'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet87({ ...displayOptions, show: { priceOperation: ['filermonthlyget87'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet87({ ...displayOptions, show: { priceOperation: ['hosthourlyget87'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet87({ ...displayOptions, show: { priceOperation: ['hostmonthlyget87'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet88({ ...displayOptions, show: { priceOperation: ['filerhourlyget88'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet88({ ...displayOptions, show: { priceOperation: ['filermonthlyget88'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet88({ ...displayOptions, show: { priceOperation: ['hosthourlyget88'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet88({ ...displayOptions, show: { priceOperation: ['hostmonthlyget88'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet89({ ...displayOptions, show: { priceOperation: ['filerhourlyget89'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet89({ ...displayOptions, show: { priceOperation: ['filermonthlyget89'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet89({ ...displayOptions, show: { priceOperation: ['hosthourlyget89'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet89({ ...displayOptions, show: { priceOperation: ['hostmonthlyget89'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet90({ ...displayOptions, show: { priceOperation: ['filerhourlyget90'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet90({ ...displayOptions, show: { priceOperation: ['filermonthlyget90'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet90({ ...displayOptions, show: { priceOperation: ['hosthourlyget90'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet90({ ...displayOptions, show: { priceOperation: ['hostmonthlyget90'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet91({ ...displayOptions, show: { priceOperation: ['filerhourlyget91'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet91({ ...displayOptions, show: { priceOperation: ['filermonthlyget91'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet91({ ...displayOptions, show: { priceOperation: ['hosthourlyget91'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet91({ ...displayOptions, show: { priceOperation: ['hostmonthlyget91'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet92({ ...displayOptions, show: { priceOperation: ['filerhourlyget92'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet92({ ...displayOptions, show: { priceOperation: ['filermonthlyget92'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet92({ ...displayOptions, show: { priceOperation: ['hosthourlyget92'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet92({ ...displayOptions, show: { priceOperation: ['hostmonthlyget92'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet93({ ...displayOptions, show: { priceOperation: ['filerhourlyget93'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet93({ ...displayOptions, show: { priceOperation: ['filermonthlyget93'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet93({ ...displayOptions, show: { priceOperation: ['hosthourlyget93'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet93({ ...displayOptions, show: { priceOperation: ['hostmonthlyget93'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet94({ ...displayOptions, show: { priceOperation: ['filerhourlyget94'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet94({ ...displayOptions, show: { priceOperation: ['filermonthlyget94'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet94({ ...displayOptions, show: { priceOperation: ['hosthourlyget94'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet94({ ...displayOptions, show: { priceOperation: ['hostmonthlyget94'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet95({ ...displayOptions, show: { priceOperation: ['filerhourlyget95'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet95({ ...displayOptions, show: { priceOperation: ['filermonthlyget95'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet95({ ...displayOptions, show: { priceOperation: ['hosthourlyget95'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet95({ ...displayOptions, show: { priceOperation: ['hostmonthlyget95'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet96({ ...displayOptions, show: { priceOperation: ['filerhourlyget96'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet96({ ...displayOptions, show: { priceOperation: ['filermonthlyget96'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet96({ ...displayOptions, show: { priceOperation: ['hosthourlyget96'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet96({ ...displayOptions, show: { priceOperation: ['hostmonthlyget96'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet97({ ...displayOptions, show: { priceOperation: ['filerhourlyget97'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet97({ ...displayOptions, show: { priceOperation: ['filermonthlyget97'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet97({ ...displayOptions, show: { priceOperation: ['hosthourlyget97'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet97({ ...displayOptions, show: { priceOperation: ['hostmonthlyget97'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet98({ ...displayOptions, show: { priceOperation: ['filerhourlyget98'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet98({ ...displayOptions, show: { priceOperation: ['filermonthlyget98'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet98({ ...displayOptions, show: { priceOperation: ['hosthourlyget98'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet98({ ...displayOptions, show: { priceOperation: ['hostmonthlyget98'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet99({ ...displayOptions, show: { priceOperation: ['filerhourlyget99'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet99({ ...displayOptions, show: { priceOperation: ['filermonthlyget99'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet99({ ...displayOptions, show: { priceOperation: ['hosthourlyget99'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet99({ ...displayOptions, show: { priceOperation: ['hostmonthlyget99'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet100({ ...displayOptions, show: { priceOperation: ['filerhourlyget100'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet100({ ...displayOptions, show: { priceOperation: ['filermonthlyget100'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet100({ ...displayOptions, show: { priceOperation: ['hosthourlyget100'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet100({ ...displayOptions, show: { priceOperation: ['hostmonthlyget100'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet101({ ...displayOptions, show: { priceOperation: ['filerhourlyget101'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet101({ ...displayOptions, show: { priceOperation: ['filermonthlyget101'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet101({ ...displayOptions, show: { priceOperation: ['hosthourlyget101'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet101({ ...displayOptions, show: { priceOperation: ['hostmonthlyget101'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet102({ ...displayOptions, show: { priceOperation: ['filerhourlyget102'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet102({ ...displayOptions, show: { priceOperation: ['filermonthlyget102'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet102({ ...displayOptions, show: { priceOperation: ['hosthourlyget102'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet102({ ...displayOptions, show: { priceOperation: ['hostmonthlyget102'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet103({ ...displayOptions, show: { priceOperation: ['filerhourlyget103'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet103({ ...displayOptions, show: { priceOperation: ['filermonthlyget103'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet103({ ...displayOptions, show: { priceOperation: ['hosthourlyget103'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet103({ ...displayOptions, show: { priceOperation: ['hostmonthlyget103'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet104({ ...displayOptions, show: { priceOperation: ['filerhourlyget104'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet104({ ...displayOptions, show: { priceOperation: ['filermonthlyget104'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet104({ ...displayOptions, show: { priceOperation: ['hosthourlyget104'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet104({ ...displayOptions, show: { priceOperation: ['hostmonthlyget104'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet105({ ...displayOptions, show: { priceOperation: ['filerhourlyget105'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet105({ ...displayOptions, show: { priceOperation: ['filermonthlyget105'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet105({ ...displayOptions, show: { priceOperation: ['hosthourlyget105'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet105({ ...displayOptions, show: { priceOperation: ['hostmonthlyget105'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet106({ ...displayOptions, show: { priceOperation: ['filerhourlyget106'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet106({ ...displayOptions, show: { priceOperation: ['filermonthlyget106'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet106({ ...displayOptions, show: { priceOperation: ['hosthourlyget106'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet106({ ...displayOptions, show: { priceOperation: ['hostmonthlyget106'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet107({ ...displayOptions, show: { priceOperation: ['filerhourlyget107'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet107({ ...displayOptions, show: { priceOperation: ['filermonthlyget107'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet107({ ...displayOptions, show: { priceOperation: ['hosthourlyget107'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet107({ ...displayOptions, show: { priceOperation: ['hostmonthlyget107'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet108({ ...displayOptions, show: { priceOperation: ['filerhourlyget108'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet108({ ...displayOptions, show: { priceOperation: ['filermonthlyget108'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet108({ ...displayOptions, show: { priceOperation: ['hosthourlyget108'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet108({ ...displayOptions, show: { priceOperation: ['hostmonthlyget108'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet109({ ...displayOptions, show: { priceOperation: ['filerhourlyget109'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet109({ ...displayOptions, show: { priceOperation: ['filermonthlyget109'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet109({ ...displayOptions, show: { priceOperation: ['hosthourlyget109'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet109({ ...displayOptions, show: { priceOperation: ['hostmonthlyget109'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet110({ ...displayOptions, show: { priceOperation: ['filerhourlyget110'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet110({ ...displayOptions, show: { priceOperation: ['filermonthlyget110'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet110({ ...displayOptions, show: { priceOperation: ['hosthourlyget110'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet110({ ...displayOptions, show: { priceOperation: ['hostmonthlyget110'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet111({ ...displayOptions, show: { priceOperation: ['filerhourlyget111'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet111({ ...displayOptions, show: { priceOperation: ['filermonthlyget111'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet111({ ...displayOptions, show: { priceOperation: ['hosthourlyget111'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet111({ ...displayOptions, show: { priceOperation: ['hostmonthlyget111'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet112({ ...displayOptions, show: { priceOperation: ['filerhourlyget112'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet112({ ...displayOptions, show: { priceOperation: ['filermonthlyget112'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet112({ ...displayOptions, show: { priceOperation: ['hosthourlyget112'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet112({ ...displayOptions, show: { priceOperation: ['hostmonthlyget112'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet113({ ...displayOptions, show: { priceOperation: ['filerhourlyget113'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet113({ ...displayOptions, show: { priceOperation: ['filermonthlyget113'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet113({ ...displayOptions, show: { priceOperation: ['hosthourlyget113'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet113({ ...displayOptions, show: { priceOperation: ['hostmonthlyget113'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet114({ ...displayOptions, show: { priceOperation: ['filerhourlyget114'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet114({ ...displayOptions, show: { priceOperation: ['filermonthlyget114'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet114({ ...displayOptions, show: { priceOperation: ['hosthourlyget114'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet114({ ...displayOptions, show: { priceOperation: ['hostmonthlyget114'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet115({ ...displayOptions, show: { priceOperation: ['filerhourlyget115'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet115({ ...displayOptions, show: { priceOperation: ['filermonthlyget115'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet115({ ...displayOptions, show: { priceOperation: ['hosthourlyget115'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet115({ ...displayOptions, show: { priceOperation: ['hostmonthlyget115'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet116({ ...displayOptions, show: { priceOperation: ['filerhourlyget116'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet116({ ...displayOptions, show: { priceOperation: ['filermonthlyget116'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet116({ ...displayOptions, show: { priceOperation: ['hosthourlyget116'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet116({ ...displayOptions, show: { priceOperation: ['hostmonthlyget116'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet117({ ...displayOptions, show: { priceOperation: ['filerhourlyget117'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet117({ ...displayOptions, show: { priceOperation: ['filermonthlyget117'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet117({ ...displayOptions, show: { priceOperation: ['hosthourlyget117'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet117({ ...displayOptions, show: { priceOperation: ['hostmonthlyget117'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet118({ ...displayOptions, show: { priceOperation: ['filerhourlyget118'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet118({ ...displayOptions, show: { priceOperation: ['filermonthlyget118'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet118({ ...displayOptions, show: { priceOperation: ['hosthourlyget118'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet118({ ...displayOptions, show: { priceOperation: ['hostmonthlyget118'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet119({ ...displayOptions, show: { priceOperation: ['filerhourlyget119'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet119({ ...displayOptions, show: { priceOperation: ['filermonthlyget119'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet119({ ...displayOptions, show: { priceOperation: ['hosthourlyget119'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet119({ ...displayOptions, show: { priceOperation: ['hostmonthlyget119'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet120({ ...displayOptions, show: { priceOperation: ['filerhourlyget120'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet120({ ...displayOptions, show: { priceOperation: ['filermonthlyget120'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet120({ ...displayOptions, show: { priceOperation: ['hosthourlyget120'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet120({ ...displayOptions, show: { priceOperation: ['hostmonthlyget120'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet121({ ...displayOptions, show: { priceOperation: ['filerhourlyget121'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet121({ ...displayOptions, show: { priceOperation: ['filermonthlyget121'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet121({ ...displayOptions, show: { priceOperation: ['hosthourlyget121'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet121({ ...displayOptions, show: { priceOperation: ['hostmonthlyget121'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet122({ ...displayOptions, show: { priceOperation: ['filerhourlyget122'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet122({ ...displayOptions, show: { priceOperation: ['filermonthlyget122'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet122({ ...displayOptions, show: { priceOperation: ['hosthourlyget122'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet122({ ...displayOptions, show: { priceOperation: ['hostmonthlyget122'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet123({ ...displayOptions, show: { priceOperation: ['filerhourlyget123'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet123({ ...displayOptions, show: { priceOperation: ['filermonthlyget123'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet123({ ...displayOptions, show: { priceOperation: ['hosthourlyget123'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet123({ ...displayOptions, show: { priceOperation: ['hostmonthlyget123'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet124({ ...displayOptions, show: { priceOperation: ['filerhourlyget124'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet124({ ...displayOptions, show: { priceOperation: ['filermonthlyget124'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet124({ ...displayOptions, show: { priceOperation: ['hosthourlyget124'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet124({ ...displayOptions, show: { priceOperation: ['hostmonthlyget124'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet125({ ...displayOptions, show: { priceOperation: ['filerhourlyget125'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet125({ ...displayOptions, show: { priceOperation: ['filermonthlyget125'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet125({ ...displayOptions, show: { priceOperation: ['hosthourlyget125'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet125({ ...displayOptions, show: { priceOperation: ['hostmonthlyget125'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet126({ ...displayOptions, show: { priceOperation: ['filerhourlyget126'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet126({ ...displayOptions, show: { priceOperation: ['filermonthlyget126'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet126({ ...displayOptions, show: { priceOperation: ['hosthourlyget126'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet126({ ...displayOptions, show: { priceOperation: ['hostmonthlyget126'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet127({ ...displayOptions, show: { priceOperation: ['filerhourlyget127'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet127({ ...displayOptions, show: { priceOperation: ['filermonthlyget127'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet127({ ...displayOptions, show: { priceOperation: ['hosthourlyget127'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet127({ ...displayOptions, show: { priceOperation: ['hostmonthlyget127'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet128({ ...displayOptions, show: { priceOperation: ['filerhourlyget128'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet128({ ...displayOptions, show: { priceOperation: ['filermonthlyget128'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet128({ ...displayOptions, show: { priceOperation: ['hosthourlyget128'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet128({ ...displayOptions, show: { priceOperation: ['hostmonthlyget128'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet129({ ...displayOptions, show: { priceOperation: ['filerhourlyget129'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet129({ ...displayOptions, show: { priceOperation: ['filermonthlyget129'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet129({ ...displayOptions, show: { priceOperation: ['hosthourlyget129'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet129({ ...displayOptions, show: { priceOperation: ['hostmonthlyget129'] } }) as INodeProperties[]),
        ...(descriptionfilerhourlyGet130({ ...displayOptions, show: { priceOperation: ['filerhourlyget130'] } }) as INodeProperties[]),
        ...(descriptionfilermonthlyGet130({ ...displayOptions, show: { priceOperation: ['filermonthlyget130'] } }) as INodeProperties[]),
        ...(descriptionhosthourlyGet130({ ...displayOptions, show: { priceOperation: ['hosthourlyget130'] } }) as INodeProperties[]),
        ...(descriptionhostmonthlyGet130({ ...displayOptions, show: { priceOperation: ['hostmonthlyget130'] } }) as INodeProperties[]),
        ...(descriptionclassicmodelGet({ ...displayOptions, show: { priceOperation: ['classicmodelget'] } }) as INodeProperties[]),
        ...(descriptioncloudmodelGet({ ...displayOptions, show: { priceOperation: ['cloudmodelget'] } }) as INodeProperties[]),
        ...(descriptioncloudoptionGet({ ...displayOptions, show: { priceOperation: ['cloudoptionget'] } }) as INodeProperties[]),
        ...(descriptionlowlatmodelGet({ ...displayOptions, show: { priceOperation: ['lowlatmodelget'] } }) as INodeProperties[]),
        ...(descriptionclassicmodelGet1({ ...displayOptions, show: { priceOperation: ['classicmodelget1'] } }) as INodeProperties[]),
        ...(descriptioncloudmodelGet1({ ...displayOptions, show: { priceOperation: ['cloudmodelget1'] } }) as INodeProperties[]),
        ...(descriptioncloudoptionGet1({ ...displayOptions, show: { priceOperation: ['cloudoptionget1'] } }) as INodeProperties[]),
        ...(descriptioncloudmodelGet2({ ...displayOptions, show: { priceOperation: ['cloudmodelget2'] } }) as INodeProperties[]),
        ...(descriptioncloudoptionGet2({ ...displayOptions, show: { priceOperation: ['cloudoptionget2'] } }) as INodeProperties[]),
        ...(descriptioncloudrammodelGet({ ...displayOptions, show: { priceOperation: ['cloudrammodelget'] } }) as INodeProperties[]),
        ...(descriptioncloudramoptionGet({ ...displayOptions, show: { priceOperation: ['cloudramoptionget'] } }) as INodeProperties[]),
        ...(descriptionssdmodelGet({ ...displayOptions, show: { priceOperation: ['ssdmodelget'] } }) as INodeProperties[]),
        ...(descriptionssdoptionGet({ ...displayOptions, show: { priceOperation: ['ssdoptionget'] } }) as INodeProperties[]),
        ...(descriptionssdmodelGet1({ ...displayOptions, show: { priceOperation: ['ssdmodelget1'] } }) as INodeProperties[]),
        ...(descriptionssdoptionGet1({ ...displayOptions, show: { priceOperation: ['ssdoptionget1'] } }) as INodeProperties[]),
        ...(descriptioncloudmodelGet3({ ...displayOptions, show: { priceOperation: ['cloudmodelget3'] } }) as INodeProperties[]),
        ...(descriptioncloudoptionGet3({ ...displayOptions, show: { priceOperation: ['cloudoptionget3'] } }) as INodeProperties[]),
        ...(descriptioncloudrammodelGet1({ ...displayOptions, show: { priceOperation: ['cloudrammodelget1'] } }) as INodeProperties[]),
        ...(descriptioncloudramoptionGet1({ ...displayOptions, show: { priceOperation: ['cloudramoptionget1'] } }) as INodeProperties[]),
        ...(descriptionssdmodelGet2({ ...displayOptions, show: { priceOperation: ['ssdmodelget2'] } }) as INodeProperties[]),
        ...(descriptionssdoptionGet2({ ...displayOptions, show: { priceOperation: ['ssdoptionget2'] } }) as INodeProperties[]),
        ...(descriptioncloudmodelGet4({ ...displayOptions, show: { priceOperation: ['cloudmodelget4'] } }) as INodeProperties[]),
        ...(descriptioncloudoptionGet4({ ...displayOptions, show: { priceOperation: ['cloudoptionget4'] } }) as INodeProperties[]),
        ...(descriptioncloudrammodelGet2({ ...displayOptions, show: { priceOperation: ['cloudrammodelget2'] } }) as INodeProperties[]),
        ...(descriptioncloudramoptionGet2({ ...displayOptions, show: { priceOperation: ['cloudramoptionget2'] } }) as INodeProperties[]),
        ...(descriptionssdmodelGet3({ ...displayOptions, show: { priceOperation: ['ssdmodelget3'] } }) as INodeProperties[]),
        ...(descriptionssdoptionGet3({ ...displayOptions, show: { priceOperation: ['ssdoptionget3'] } }) as INodeProperties[]),
        ...(descriptioncloudmodelGet5({ ...displayOptions, show: { priceOperation: ['cloudmodelget5'] } }) as INodeProperties[]),
        ...(descriptioncloudoptionGet5({ ...displayOptions, show: { priceOperation: ['cloudoptionget5'] } }) as INodeProperties[]),
        ...(descriptioncloudrammodelGet3({ ...displayOptions, show: { priceOperation: ['cloudrammodelget3'] } }) as INodeProperties[]),
        ...(descriptioncloudramoptionGet3({ ...displayOptions, show: { priceOperation: ['cloudramoptionget3'] } }) as INodeProperties[]),
        ...(descriptionssdmodelGet4({ ...displayOptions, show: { priceOperation: ['ssdmodelget4'] } }) as INodeProperties[]),
        ...(descriptionssdoptionGet4({ ...displayOptions, show: { priceOperation: ['ssdoptionget4'] } }) as INodeProperties[]),
        ...(descriptionssdmodelGet5({ ...displayOptions, show: { priceOperation: ['ssdmodelget5'] } }) as INodeProperties[]),
        ...(descriptionssdoptionGet5({ ...displayOptions, show: { priceOperation: ['ssdoptionget5'] } }) as INodeProperties[]),
        ...(descriptionclassicmodelGet2({ ...displayOptions, show: { priceOperation: ['classicmodelget2'] } }) as INodeProperties[]),
        ...(descriptionmodelGet({ ...displayOptions, show: { priceOperation: ['modelget'] } }) as INodeProperties[]),
        ...(descriptionoptionGet({ ...displayOptions, show: { priceOperation: ['optionget'] } }) as INodeProperties[]),
        ...(descriptionlowlatmodelGet1({ ...displayOptions, show: { priceOperation: ['lowlatmodelget1'] } }) as INodeProperties[]),
        ...(descriptionaddressmovefeeGet({ ...displayOptions, show: { priceOperation: ['addressmovefeeget'] } }) as INodeProperties[]),
        ...(descriptionxdslinstallationGet({ ...displayOptions, show: { priceOperation: ['xdslinstallationget'] } }) as INodeProperties[]),
        ...(descriptionxdsloffersGet({ ...displayOptions, show: { priceOperation: ['xdsloffersget'] } }) as INodeProperties[]),
        ...(descriptionoptionsinstallationGet({ ...displayOptions, show: { priceOperation: ['optionsinstallationget'] } }) as INodeProperties[]),
        ...(descriptionoptionsipv4Get({ ...displayOptions, show: { priceOperation: ['optionsipv4get'] } }) as INodeProperties[]),
        ...(descriptionoptionslineGet({ ...displayOptions, show: { priceOperation: ['optionslineget'] } }) as INodeProperties[]),
        ...(descriptionantiddosproGet({ ...displayOptions, show: { priceOperation: ['antiddosproget'] } }) as INodeProperties[]),
        ...(descriptionbackupstorageGet({ ...displayOptions, show: { priceOperation: ['backupstorageget'] } }) as INodeProperties[]),
        ...(descriptionfirewallGet({ ...displayOptions, show: { priceOperation: ['firewallget'] } }) as INodeProperties[]),
        ...(descriptionipGet({ ...displayOptions, show: { priceOperation: ['ipget'] } }) as INodeProperties[]),
        ...(descriptionprivatedatabaseGet({ ...displayOptions, show: { priceOperation: ['privatedatabaseget'] } }) as INodeProperties[]),
        ...(descriptionwebcdnGet({ ...displayOptions, show: { priceOperation: ['webcdnget'] } }) as INodeProperties[]),
        ...(descriptionwebextrasqlpersoGet({ ...displayOptions, show: { priceOperation: ['webextrasqlpersoget'] } }) as INodeProperties[]),
        ...(descriptionwebsslGet({ ...displayOptions, show: { priceOperation: ['websslget'] } }) as INodeProperties[]),
        ...(descriptionzoneoptionGet({ ...displayOptions, show: { priceOperation: ['zoneoptionget'] } }) as INodeProperties[]),
        ...(descriptionofficeGet({ ...displayOptions, show: { priceOperation: ['officeget'] } }) as INodeProperties[]),
        ...(descriptionovertheboxofferGet({ ...displayOptions, show: { priceOperation: ['overtheboxofferget'] } }) as INodeProperties[]),
        ...(descriptioncsp2licenseGet({ ...displayOptions, show: { priceOperation: ['csp2licenseget'] } }) as INodeProperties[]),
    ];

    return properties;
}

export async function execute(
    this: IExecuteFunctions,
    itemIndex: number,
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('priceOperation', itemIndex, {
        extractValue: true,
    });

    switch (operation) {
        case 'addressmovefeeget':
            return executeaddressmovefeeGet.call(this);
        case 'antiddosproget':
            return executeantiddosproGet.call(this);
        case 'backupstorageget':
            return executebackupstorageGet.call(this);
        case 'classicmodelget':
            return executeclassicmodelGet.call(this);
        case 'classicmodelget1':
            return executeclassicmodelGet1.call(this);
        case 'classicmodelget2':
            return executeclassicmodelGet2.call(this);
        case 'cloudmodelget':
            return executecloudmodelGet.call(this);
        case 'cloudmodelget1':
            return executecloudmodelGet1.call(this);
        case 'cloudmodelget2':
            return executecloudmodelGet2.call(this);
        case 'cloudmodelget3':
            return executecloudmodelGet3.call(this);
        case 'cloudmodelget4':
            return executecloudmodelGet4.call(this);
        case 'cloudmodelget5':
            return executecloudmodelGet5.call(this);
        case 'cloudoptionget':
            return executecloudoptionGet.call(this);
        case 'cloudoptionget1':
            return executecloudoptionGet1.call(this);
        case 'cloudoptionget2':
            return executecloudoptionGet2.call(this);
        case 'cloudoptionget3':
            return executecloudoptionGet3.call(this);
        case 'cloudoptionget4':
            return executecloudoptionGet4.call(this);
        case 'cloudoptionget5':
            return executecloudoptionGet5.call(this);
        case 'cloudrammodelget':
            return executecloudrammodelGet.call(this);
        case 'cloudrammodelget1':
            return executecloudrammodelGet1.call(this);
        case 'cloudrammodelget2':
            return executecloudrammodelGet2.call(this);
        case 'cloudrammodelget3':
            return executecloudrammodelGet3.call(this);
        case 'cloudramoptionget':
            return executecloudramoptionGet.call(this);
        case 'cloudramoptionget1':
            return executecloudramoptionGet1.call(this);
        case 'cloudramoptionget2':
            return executecloudramoptionGet2.call(this);
        case 'cloudramoptionget3':
            return executecloudramoptionGet3.call(this);
        case 'csp2licenseget':
            return executecsp2licenseGet.call(this);
        case 'filerhourlyget':
            return executefilerhourlyGet.call(this);
        case 'filerhourlyget1':
            return executefilerhourlyGet1.call(this);
        case 'filerhourlyget10':
            return executefilerhourlyGet10.call(this);
        case 'filerhourlyget100':
            return executefilerhourlyGet100.call(this);
        case 'filerhourlyget101':
            return executefilerhourlyGet101.call(this);
        case 'filerhourlyget102':
            return executefilerhourlyGet102.call(this);
        case 'filerhourlyget103':
            return executefilerhourlyGet103.call(this);
        case 'filerhourlyget104':
            return executefilerhourlyGet104.call(this);
        case 'filerhourlyget105':
            return executefilerhourlyGet105.call(this);
        case 'filerhourlyget106':
            return executefilerhourlyGet106.call(this);
        case 'filerhourlyget107':
            return executefilerhourlyGet107.call(this);
        case 'filerhourlyget108':
            return executefilerhourlyGet108.call(this);
        case 'filerhourlyget109':
            return executefilerhourlyGet109.call(this);
        case 'filerhourlyget11':
            return executefilerhourlyGet11.call(this);
        case 'filerhourlyget110':
            return executefilerhourlyGet110.call(this);
        case 'filerhourlyget111':
            return executefilerhourlyGet111.call(this);
        case 'filerhourlyget112':
            return executefilerhourlyGet112.call(this);
        case 'filerhourlyget113':
            return executefilerhourlyGet113.call(this);
        case 'filerhourlyget114':
            return executefilerhourlyGet114.call(this);
        case 'filerhourlyget115':
            return executefilerhourlyGet115.call(this);
        case 'filerhourlyget116':
            return executefilerhourlyGet116.call(this);
        case 'filerhourlyget117':
            return executefilerhourlyGet117.call(this);
        case 'filerhourlyget118':
            return executefilerhourlyGet118.call(this);
        case 'filerhourlyget119':
            return executefilerhourlyGet119.call(this);
        case 'filerhourlyget12':
            return executefilerhourlyGet12.call(this);
        case 'filerhourlyget120':
            return executefilerhourlyGet120.call(this);
        case 'filerhourlyget121':
            return executefilerhourlyGet121.call(this);
        case 'filerhourlyget122':
            return executefilerhourlyGet122.call(this);
        case 'filerhourlyget123':
            return executefilerhourlyGet123.call(this);
        case 'filerhourlyget124':
            return executefilerhourlyGet124.call(this);
        case 'filerhourlyget125':
            return executefilerhourlyGet125.call(this);
        case 'filerhourlyget126':
            return executefilerhourlyGet126.call(this);
        case 'filerhourlyget127':
            return executefilerhourlyGet127.call(this);
        case 'filerhourlyget128':
            return executefilerhourlyGet128.call(this);
        case 'filerhourlyget129':
            return executefilerhourlyGet129.call(this);
        case 'filerhourlyget13':
            return executefilerhourlyGet13.call(this);
        case 'filerhourlyget130':
            return executefilerhourlyGet130.call(this);
        case 'filerhourlyget14':
            return executefilerhourlyGet14.call(this);
        case 'filerhourlyget15':
            return executefilerhourlyGet15.call(this);
        case 'filerhourlyget16':
            return executefilerhourlyGet16.call(this);
        case 'filerhourlyget17':
            return executefilerhourlyGet17.call(this);
        case 'filerhourlyget18':
            return executefilerhourlyGet18.call(this);
        case 'filerhourlyget19':
            return executefilerhourlyGet19.call(this);
        case 'filerhourlyget2':
            return executefilerhourlyGet2.call(this);
        case 'filerhourlyget20':
            return executefilerhourlyGet20.call(this);
        case 'filerhourlyget21':
            return executefilerhourlyGet21.call(this);
        case 'filerhourlyget22':
            return executefilerhourlyGet22.call(this);
        case 'filerhourlyget23':
            return executefilerhourlyGet23.call(this);
        case 'filerhourlyget24':
            return executefilerhourlyGet24.call(this);
        case 'filerhourlyget25':
            return executefilerhourlyGet25.call(this);
        case 'filerhourlyget26':
            return executefilerhourlyGet26.call(this);
        case 'filerhourlyget27':
            return executefilerhourlyGet27.call(this);
        case 'filerhourlyget28':
            return executefilerhourlyGet28.call(this);
        case 'filerhourlyget29':
            return executefilerhourlyGet29.call(this);
        case 'filerhourlyget3':
            return executefilerhourlyGet3.call(this);
        case 'filerhourlyget30':
            return executefilerhourlyGet30.call(this);
        case 'filerhourlyget31':
            return executefilerhourlyGet31.call(this);
        case 'filerhourlyget32':
            return executefilerhourlyGet32.call(this);
        case 'filerhourlyget33':
            return executefilerhourlyGet33.call(this);
        case 'filerhourlyget34':
            return executefilerhourlyGet34.call(this);
        case 'filerhourlyget35':
            return executefilerhourlyGet35.call(this);
        case 'filerhourlyget36':
            return executefilerhourlyGet36.call(this);
        case 'filerhourlyget37':
            return executefilerhourlyGet37.call(this);
        case 'filerhourlyget38':
            return executefilerhourlyGet38.call(this);
        case 'filerhourlyget39':
            return executefilerhourlyGet39.call(this);
        case 'filerhourlyget4':
            return executefilerhourlyGet4.call(this);
        case 'filerhourlyget40':
            return executefilerhourlyGet40.call(this);
        case 'filerhourlyget41':
            return executefilerhourlyGet41.call(this);
        case 'filerhourlyget42':
            return executefilerhourlyGet42.call(this);
        case 'filerhourlyget43':
            return executefilerhourlyGet43.call(this);
        case 'filerhourlyget44':
            return executefilerhourlyGet44.call(this);
        case 'filerhourlyget45':
            return executefilerhourlyGet45.call(this);
        case 'filerhourlyget46':
            return executefilerhourlyGet46.call(this);
        case 'filerhourlyget47':
            return executefilerhourlyGet47.call(this);
        case 'filerhourlyget48':
            return executefilerhourlyGet48.call(this);
        case 'filerhourlyget49':
            return executefilerhourlyGet49.call(this);
        case 'filerhourlyget5':
            return executefilerhourlyGet5.call(this);
        case 'filerhourlyget50':
            return executefilerhourlyGet50.call(this);
        case 'filerhourlyget51':
            return executefilerhourlyGet51.call(this);
        case 'filerhourlyget52':
            return executefilerhourlyGet52.call(this);
        case 'filerhourlyget53':
            return executefilerhourlyGet53.call(this);
        case 'filerhourlyget54':
            return executefilerhourlyGet54.call(this);
        case 'filerhourlyget55':
            return executefilerhourlyGet55.call(this);
        case 'filerhourlyget56':
            return executefilerhourlyGet56.call(this);
        case 'filerhourlyget57':
            return executefilerhourlyGet57.call(this);
        case 'filerhourlyget58':
            return executefilerhourlyGet58.call(this);
        case 'filerhourlyget59':
            return executefilerhourlyGet59.call(this);
        case 'filerhourlyget6':
            return executefilerhourlyGet6.call(this);
        case 'filerhourlyget60':
            return executefilerhourlyGet60.call(this);
        case 'filerhourlyget61':
            return executefilerhourlyGet61.call(this);
        case 'filerhourlyget62':
            return executefilerhourlyGet62.call(this);
        case 'filerhourlyget63':
            return executefilerhourlyGet63.call(this);
        case 'filerhourlyget64':
            return executefilerhourlyGet64.call(this);
        case 'filerhourlyget65':
            return executefilerhourlyGet65.call(this);
        case 'filerhourlyget66':
            return executefilerhourlyGet66.call(this);
        case 'filerhourlyget67':
            return executefilerhourlyGet67.call(this);
        case 'filerhourlyget68':
            return executefilerhourlyGet68.call(this);
        case 'filerhourlyget69':
            return executefilerhourlyGet69.call(this);
        case 'filerhourlyget7':
            return executefilerhourlyGet7.call(this);
        case 'filerhourlyget70':
            return executefilerhourlyGet70.call(this);
        case 'filerhourlyget71':
            return executefilerhourlyGet71.call(this);
        case 'filerhourlyget72':
            return executefilerhourlyGet72.call(this);
        case 'filerhourlyget73':
            return executefilerhourlyGet73.call(this);
        case 'filerhourlyget74':
            return executefilerhourlyGet74.call(this);
        case 'filerhourlyget75':
            return executefilerhourlyGet75.call(this);
        case 'filerhourlyget76':
            return executefilerhourlyGet76.call(this);
        case 'filerhourlyget77':
            return executefilerhourlyGet77.call(this);
        case 'filerhourlyget78':
            return executefilerhourlyGet78.call(this);
        case 'filerhourlyget79':
            return executefilerhourlyGet79.call(this);
        case 'filerhourlyget8':
            return executefilerhourlyGet8.call(this);
        case 'filerhourlyget80':
            return executefilerhourlyGet80.call(this);
        case 'filerhourlyget81':
            return executefilerhourlyGet81.call(this);
        case 'filerhourlyget82':
            return executefilerhourlyGet82.call(this);
        case 'filerhourlyget83':
            return executefilerhourlyGet83.call(this);
        case 'filerhourlyget84':
            return executefilerhourlyGet84.call(this);
        case 'filerhourlyget85':
            return executefilerhourlyGet85.call(this);
        case 'filerhourlyget86':
            return executefilerhourlyGet86.call(this);
        case 'filerhourlyget87':
            return executefilerhourlyGet87.call(this);
        case 'filerhourlyget88':
            return executefilerhourlyGet88.call(this);
        case 'filerhourlyget89':
            return executefilerhourlyGet89.call(this);
        case 'filerhourlyget9':
            return executefilerhourlyGet9.call(this);
        case 'filerhourlyget90':
            return executefilerhourlyGet90.call(this);
        case 'filerhourlyget91':
            return executefilerhourlyGet91.call(this);
        case 'filerhourlyget92':
            return executefilerhourlyGet92.call(this);
        case 'filerhourlyget93':
            return executefilerhourlyGet93.call(this);
        case 'filerhourlyget94':
            return executefilerhourlyGet94.call(this);
        case 'filerhourlyget95':
            return executefilerhourlyGet95.call(this);
        case 'filerhourlyget96':
            return executefilerhourlyGet96.call(this);
        case 'filerhourlyget97':
            return executefilerhourlyGet97.call(this);
        case 'filerhourlyget98':
            return executefilerhourlyGet98.call(this);
        case 'filerhourlyget99':
            return executefilerhourlyGet99.call(this);
        case 'filermonthlyget':
            return executefilermonthlyGet.call(this);
        case 'filermonthlyget1':
            return executefilermonthlyGet1.call(this);
        case 'filermonthlyget10':
            return executefilermonthlyGet10.call(this);
        case 'filermonthlyget100':
            return executefilermonthlyGet100.call(this);
        case 'filermonthlyget101':
            return executefilermonthlyGet101.call(this);
        case 'filermonthlyget102':
            return executefilermonthlyGet102.call(this);
        case 'filermonthlyget103':
            return executefilermonthlyGet103.call(this);
        case 'filermonthlyget104':
            return executefilermonthlyGet104.call(this);
        case 'filermonthlyget105':
            return executefilermonthlyGet105.call(this);
        case 'filermonthlyget106':
            return executefilermonthlyGet106.call(this);
        case 'filermonthlyget107':
            return executefilermonthlyGet107.call(this);
        case 'filermonthlyget108':
            return executefilermonthlyGet108.call(this);
        case 'filermonthlyget109':
            return executefilermonthlyGet109.call(this);
        case 'filermonthlyget11':
            return executefilermonthlyGet11.call(this);
        case 'filermonthlyget110':
            return executefilermonthlyGet110.call(this);
        case 'filermonthlyget111':
            return executefilermonthlyGet111.call(this);
        case 'filermonthlyget112':
            return executefilermonthlyGet112.call(this);
        case 'filermonthlyget113':
            return executefilermonthlyGet113.call(this);
        case 'filermonthlyget114':
            return executefilermonthlyGet114.call(this);
        case 'filermonthlyget115':
            return executefilermonthlyGet115.call(this);
        case 'filermonthlyget116':
            return executefilermonthlyGet116.call(this);
        case 'filermonthlyget117':
            return executefilermonthlyGet117.call(this);
        case 'filermonthlyget118':
            return executefilermonthlyGet118.call(this);
        case 'filermonthlyget119':
            return executefilermonthlyGet119.call(this);
        case 'filermonthlyget12':
            return executefilermonthlyGet12.call(this);
        case 'filermonthlyget120':
            return executefilermonthlyGet120.call(this);
        case 'filermonthlyget121':
            return executefilermonthlyGet121.call(this);
        case 'filermonthlyget122':
            return executefilermonthlyGet122.call(this);
        case 'filermonthlyget123':
            return executefilermonthlyGet123.call(this);
        case 'filermonthlyget124':
            return executefilermonthlyGet124.call(this);
        case 'filermonthlyget125':
            return executefilermonthlyGet125.call(this);
        case 'filermonthlyget126':
            return executefilermonthlyGet126.call(this);
        case 'filermonthlyget127':
            return executefilermonthlyGet127.call(this);
        case 'filermonthlyget128':
            return executefilermonthlyGet128.call(this);
        case 'filermonthlyget129':
            return executefilermonthlyGet129.call(this);
        case 'filermonthlyget13':
            return executefilermonthlyGet13.call(this);
        case 'filermonthlyget130':
            return executefilermonthlyGet130.call(this);
        case 'filermonthlyget14':
            return executefilermonthlyGet14.call(this);
        case 'filermonthlyget15':
            return executefilermonthlyGet15.call(this);
        case 'filermonthlyget16':
            return executefilermonthlyGet16.call(this);
        case 'filermonthlyget17':
            return executefilermonthlyGet17.call(this);
        case 'filermonthlyget18':
            return executefilermonthlyGet18.call(this);
        case 'filermonthlyget19':
            return executefilermonthlyGet19.call(this);
        case 'filermonthlyget2':
            return executefilermonthlyGet2.call(this);
        case 'filermonthlyget20':
            return executefilermonthlyGet20.call(this);
        case 'filermonthlyget21':
            return executefilermonthlyGet21.call(this);
        case 'filermonthlyget22':
            return executefilermonthlyGet22.call(this);
        case 'filermonthlyget23':
            return executefilermonthlyGet23.call(this);
        case 'filermonthlyget24':
            return executefilermonthlyGet24.call(this);
        case 'filermonthlyget25':
            return executefilermonthlyGet25.call(this);
        case 'filermonthlyget26':
            return executefilermonthlyGet26.call(this);
        case 'filermonthlyget27':
            return executefilermonthlyGet27.call(this);
        case 'filermonthlyget28':
            return executefilermonthlyGet28.call(this);
        case 'filermonthlyget29':
            return executefilermonthlyGet29.call(this);
        case 'filermonthlyget3':
            return executefilermonthlyGet3.call(this);
        case 'filermonthlyget30':
            return executefilermonthlyGet30.call(this);
        case 'filermonthlyget31':
            return executefilermonthlyGet31.call(this);
        case 'filermonthlyget32':
            return executefilermonthlyGet32.call(this);
        case 'filermonthlyget33':
            return executefilermonthlyGet33.call(this);
        case 'filermonthlyget34':
            return executefilermonthlyGet34.call(this);
        case 'filermonthlyget35':
            return executefilermonthlyGet35.call(this);
        case 'filermonthlyget36':
            return executefilermonthlyGet36.call(this);
        case 'filermonthlyget37':
            return executefilermonthlyGet37.call(this);
        case 'filermonthlyget38':
            return executefilermonthlyGet38.call(this);
        case 'filermonthlyget39':
            return executefilermonthlyGet39.call(this);
        case 'filermonthlyget4':
            return executefilermonthlyGet4.call(this);
        case 'filermonthlyget40':
            return executefilermonthlyGet40.call(this);
        case 'filermonthlyget41':
            return executefilermonthlyGet41.call(this);
        case 'filermonthlyget42':
            return executefilermonthlyGet42.call(this);
        case 'filermonthlyget43':
            return executefilermonthlyGet43.call(this);
        case 'filermonthlyget44':
            return executefilermonthlyGet44.call(this);
        case 'filermonthlyget45':
            return executefilermonthlyGet45.call(this);
        case 'filermonthlyget46':
            return executefilermonthlyGet46.call(this);
        case 'filermonthlyget47':
            return executefilermonthlyGet47.call(this);
        case 'filermonthlyget48':
            return executefilermonthlyGet48.call(this);
        case 'filermonthlyget49':
            return executefilermonthlyGet49.call(this);
        case 'filermonthlyget5':
            return executefilermonthlyGet5.call(this);
        case 'filermonthlyget50':
            return executefilermonthlyGet50.call(this);
        case 'filermonthlyget51':
            return executefilermonthlyGet51.call(this);
        case 'filermonthlyget52':
            return executefilermonthlyGet52.call(this);
        case 'filermonthlyget53':
            return executefilermonthlyGet53.call(this);
        case 'filermonthlyget54':
            return executefilermonthlyGet54.call(this);
        case 'filermonthlyget55':
            return executefilermonthlyGet55.call(this);
        case 'filermonthlyget56':
            return executefilermonthlyGet56.call(this);
        case 'filermonthlyget57':
            return executefilermonthlyGet57.call(this);
        case 'filermonthlyget58':
            return executefilermonthlyGet58.call(this);
        case 'filermonthlyget59':
            return executefilermonthlyGet59.call(this);
        case 'filermonthlyget6':
            return executefilermonthlyGet6.call(this);
        case 'filermonthlyget60':
            return executefilermonthlyGet60.call(this);
        case 'filermonthlyget61':
            return executefilermonthlyGet61.call(this);
        case 'filermonthlyget62':
            return executefilermonthlyGet62.call(this);
        case 'filermonthlyget63':
            return executefilermonthlyGet63.call(this);
        case 'filermonthlyget64':
            return executefilermonthlyGet64.call(this);
        case 'filermonthlyget65':
            return executefilermonthlyGet65.call(this);
        case 'filermonthlyget66':
            return executefilermonthlyGet66.call(this);
        case 'filermonthlyget67':
            return executefilermonthlyGet67.call(this);
        case 'filermonthlyget68':
            return executefilermonthlyGet68.call(this);
        case 'filermonthlyget69':
            return executefilermonthlyGet69.call(this);
        case 'filermonthlyget7':
            return executefilermonthlyGet7.call(this);
        case 'filermonthlyget70':
            return executefilermonthlyGet70.call(this);
        case 'filermonthlyget71':
            return executefilermonthlyGet71.call(this);
        case 'filermonthlyget72':
            return executefilermonthlyGet72.call(this);
        case 'filermonthlyget73':
            return executefilermonthlyGet73.call(this);
        case 'filermonthlyget74':
            return executefilermonthlyGet74.call(this);
        case 'filermonthlyget75':
            return executefilermonthlyGet75.call(this);
        case 'filermonthlyget76':
            return executefilermonthlyGet76.call(this);
        case 'filermonthlyget77':
            return executefilermonthlyGet77.call(this);
        case 'filermonthlyget78':
            return executefilermonthlyGet78.call(this);
        case 'filermonthlyget79':
            return executefilermonthlyGet79.call(this);
        case 'filermonthlyget8':
            return executefilermonthlyGet8.call(this);
        case 'filermonthlyget80':
            return executefilermonthlyGet80.call(this);
        case 'filermonthlyget81':
            return executefilermonthlyGet81.call(this);
        case 'filermonthlyget82':
            return executefilermonthlyGet82.call(this);
        case 'filermonthlyget83':
            return executefilermonthlyGet83.call(this);
        case 'filermonthlyget84':
            return executefilermonthlyGet84.call(this);
        case 'filermonthlyget85':
            return executefilermonthlyGet85.call(this);
        case 'filermonthlyget86':
            return executefilermonthlyGet86.call(this);
        case 'filermonthlyget87':
            return executefilermonthlyGet87.call(this);
        case 'filermonthlyget88':
            return executefilermonthlyGet88.call(this);
        case 'filermonthlyget89':
            return executefilermonthlyGet89.call(this);
        case 'filermonthlyget9':
            return executefilermonthlyGet9.call(this);
        case 'filermonthlyget90':
            return executefilermonthlyGet90.call(this);
        case 'filermonthlyget91':
            return executefilermonthlyGet91.call(this);
        case 'filermonthlyget92':
            return executefilermonthlyGet92.call(this);
        case 'filermonthlyget93':
            return executefilermonthlyGet93.call(this);
        case 'filermonthlyget94':
            return executefilermonthlyGet94.call(this);
        case 'filermonthlyget95':
            return executefilermonthlyGet95.call(this);
        case 'filermonthlyget96':
            return executefilermonthlyGet96.call(this);
        case 'filermonthlyget97':
            return executefilermonthlyGet97.call(this);
        case 'filermonthlyget98':
            return executefilermonthlyGet98.call(this);
        case 'filermonthlyget99':
            return executefilermonthlyGet99.call(this);
        case 'firewallget':
            return executefirewallGet.call(this);
        case 'hosthourlyget':
            return executehosthourlyGet.call(this);
        case 'hosthourlyget1':
            return executehosthourlyGet1.call(this);
        case 'hosthourlyget10':
            return executehosthourlyGet10.call(this);
        case 'hosthourlyget100':
            return executehosthourlyGet100.call(this);
        case 'hosthourlyget101':
            return executehosthourlyGet101.call(this);
        case 'hosthourlyget102':
            return executehosthourlyGet102.call(this);
        case 'hosthourlyget103':
            return executehosthourlyGet103.call(this);
        case 'hosthourlyget104':
            return executehosthourlyGet104.call(this);
        case 'hosthourlyget105':
            return executehosthourlyGet105.call(this);
        case 'hosthourlyget106':
            return executehosthourlyGet106.call(this);
        case 'hosthourlyget107':
            return executehosthourlyGet107.call(this);
        case 'hosthourlyget108':
            return executehosthourlyGet108.call(this);
        case 'hosthourlyget109':
            return executehosthourlyGet109.call(this);
        case 'hosthourlyget11':
            return executehosthourlyGet11.call(this);
        case 'hosthourlyget110':
            return executehosthourlyGet110.call(this);
        case 'hosthourlyget111':
            return executehosthourlyGet111.call(this);
        case 'hosthourlyget112':
            return executehosthourlyGet112.call(this);
        case 'hosthourlyget113':
            return executehosthourlyGet113.call(this);
        case 'hosthourlyget114':
            return executehosthourlyGet114.call(this);
        case 'hosthourlyget115':
            return executehosthourlyGet115.call(this);
        case 'hosthourlyget116':
            return executehosthourlyGet116.call(this);
        case 'hosthourlyget117':
            return executehosthourlyGet117.call(this);
        case 'hosthourlyget118':
            return executehosthourlyGet118.call(this);
        case 'hosthourlyget119':
            return executehosthourlyGet119.call(this);
        case 'hosthourlyget12':
            return executehosthourlyGet12.call(this);
        case 'hosthourlyget120':
            return executehosthourlyGet120.call(this);
        case 'hosthourlyget121':
            return executehosthourlyGet121.call(this);
        case 'hosthourlyget122':
            return executehosthourlyGet122.call(this);
        case 'hosthourlyget123':
            return executehosthourlyGet123.call(this);
        case 'hosthourlyget124':
            return executehosthourlyGet124.call(this);
        case 'hosthourlyget125':
            return executehosthourlyGet125.call(this);
        case 'hosthourlyget126':
            return executehosthourlyGet126.call(this);
        case 'hosthourlyget127':
            return executehosthourlyGet127.call(this);
        case 'hosthourlyget128':
            return executehosthourlyGet128.call(this);
        case 'hosthourlyget129':
            return executehosthourlyGet129.call(this);
        case 'hosthourlyget13':
            return executehosthourlyGet13.call(this);
        case 'hosthourlyget130':
            return executehosthourlyGet130.call(this);
        case 'hosthourlyget14':
            return executehosthourlyGet14.call(this);
        case 'hosthourlyget15':
            return executehosthourlyGet15.call(this);
        case 'hosthourlyget16':
            return executehosthourlyGet16.call(this);
        case 'hosthourlyget17':
            return executehosthourlyGet17.call(this);
        case 'hosthourlyget18':
            return executehosthourlyGet18.call(this);
        case 'hosthourlyget19':
            return executehosthourlyGet19.call(this);
        case 'hosthourlyget2':
            return executehosthourlyGet2.call(this);
        case 'hosthourlyget20':
            return executehosthourlyGet20.call(this);
        case 'hosthourlyget21':
            return executehosthourlyGet21.call(this);
        case 'hosthourlyget22':
            return executehosthourlyGet22.call(this);
        case 'hosthourlyget23':
            return executehosthourlyGet23.call(this);
        case 'hosthourlyget24':
            return executehosthourlyGet24.call(this);
        case 'hosthourlyget25':
            return executehosthourlyGet25.call(this);
        case 'hosthourlyget26':
            return executehosthourlyGet26.call(this);
        case 'hosthourlyget27':
            return executehosthourlyGet27.call(this);
        case 'hosthourlyget28':
            return executehosthourlyGet28.call(this);
        case 'hosthourlyget29':
            return executehosthourlyGet29.call(this);
        case 'hosthourlyget3':
            return executehosthourlyGet3.call(this);
        case 'hosthourlyget30':
            return executehosthourlyGet30.call(this);
        case 'hosthourlyget31':
            return executehosthourlyGet31.call(this);
        case 'hosthourlyget32':
            return executehosthourlyGet32.call(this);
        case 'hosthourlyget33':
            return executehosthourlyGet33.call(this);
        case 'hosthourlyget34':
            return executehosthourlyGet34.call(this);
        case 'hosthourlyget35':
            return executehosthourlyGet35.call(this);
        case 'hosthourlyget36':
            return executehosthourlyGet36.call(this);
        case 'hosthourlyget37':
            return executehosthourlyGet37.call(this);
        case 'hosthourlyget38':
            return executehosthourlyGet38.call(this);
        case 'hosthourlyget39':
            return executehosthourlyGet39.call(this);
        case 'hosthourlyget4':
            return executehosthourlyGet4.call(this);
        case 'hosthourlyget40':
            return executehosthourlyGet40.call(this);
        case 'hosthourlyget41':
            return executehosthourlyGet41.call(this);
        case 'hosthourlyget42':
            return executehosthourlyGet42.call(this);
        case 'hosthourlyget43':
            return executehosthourlyGet43.call(this);
        case 'hosthourlyget44':
            return executehosthourlyGet44.call(this);
        case 'hosthourlyget45':
            return executehosthourlyGet45.call(this);
        case 'hosthourlyget46':
            return executehosthourlyGet46.call(this);
        case 'hosthourlyget47':
            return executehosthourlyGet47.call(this);
        case 'hosthourlyget48':
            return executehosthourlyGet48.call(this);
        case 'hosthourlyget49':
            return executehosthourlyGet49.call(this);
        case 'hosthourlyget5':
            return executehosthourlyGet5.call(this);
        case 'hosthourlyget50':
            return executehosthourlyGet50.call(this);
        case 'hosthourlyget51':
            return executehosthourlyGet51.call(this);
        case 'hosthourlyget52':
            return executehosthourlyGet52.call(this);
        case 'hosthourlyget53':
            return executehosthourlyGet53.call(this);
        case 'hosthourlyget54':
            return executehosthourlyGet54.call(this);
        case 'hosthourlyget55':
            return executehosthourlyGet55.call(this);
        case 'hosthourlyget56':
            return executehosthourlyGet56.call(this);
        case 'hosthourlyget57':
            return executehosthourlyGet57.call(this);
        case 'hosthourlyget58':
            return executehosthourlyGet58.call(this);
        case 'hosthourlyget59':
            return executehosthourlyGet59.call(this);
        case 'hosthourlyget6':
            return executehosthourlyGet6.call(this);
        case 'hosthourlyget60':
            return executehosthourlyGet60.call(this);
        case 'hosthourlyget61':
            return executehosthourlyGet61.call(this);
        case 'hosthourlyget62':
            return executehosthourlyGet62.call(this);
        case 'hosthourlyget63':
            return executehosthourlyGet63.call(this);
        case 'hosthourlyget64':
            return executehosthourlyGet64.call(this);
        case 'hosthourlyget65':
            return executehosthourlyGet65.call(this);
        case 'hosthourlyget66':
            return executehosthourlyGet66.call(this);
        case 'hosthourlyget67':
            return executehosthourlyGet67.call(this);
        case 'hosthourlyget68':
            return executehosthourlyGet68.call(this);
        case 'hosthourlyget69':
            return executehosthourlyGet69.call(this);
        case 'hosthourlyget7':
            return executehosthourlyGet7.call(this);
        case 'hosthourlyget70':
            return executehosthourlyGet70.call(this);
        case 'hosthourlyget71':
            return executehosthourlyGet71.call(this);
        case 'hosthourlyget72':
            return executehosthourlyGet72.call(this);
        case 'hosthourlyget73':
            return executehosthourlyGet73.call(this);
        case 'hosthourlyget74':
            return executehosthourlyGet74.call(this);
        case 'hosthourlyget75':
            return executehosthourlyGet75.call(this);
        case 'hosthourlyget76':
            return executehosthourlyGet76.call(this);
        case 'hosthourlyget77':
            return executehosthourlyGet77.call(this);
        case 'hosthourlyget78':
            return executehosthourlyGet78.call(this);
        case 'hosthourlyget79':
            return executehosthourlyGet79.call(this);
        case 'hosthourlyget8':
            return executehosthourlyGet8.call(this);
        case 'hosthourlyget80':
            return executehosthourlyGet80.call(this);
        case 'hosthourlyget81':
            return executehosthourlyGet81.call(this);
        case 'hosthourlyget82':
            return executehosthourlyGet82.call(this);
        case 'hosthourlyget83':
            return executehosthourlyGet83.call(this);
        case 'hosthourlyget84':
            return executehosthourlyGet84.call(this);
        case 'hosthourlyget85':
            return executehosthourlyGet85.call(this);
        case 'hosthourlyget86':
            return executehosthourlyGet86.call(this);
        case 'hosthourlyget87':
            return executehosthourlyGet87.call(this);
        case 'hosthourlyget88':
            return executehosthourlyGet88.call(this);
        case 'hosthourlyget89':
            return executehosthourlyGet89.call(this);
        case 'hosthourlyget9':
            return executehosthourlyGet9.call(this);
        case 'hosthourlyget90':
            return executehosthourlyGet90.call(this);
        case 'hosthourlyget91':
            return executehosthourlyGet91.call(this);
        case 'hosthourlyget92':
            return executehosthourlyGet92.call(this);
        case 'hosthourlyget93':
            return executehosthourlyGet93.call(this);
        case 'hosthourlyget94':
            return executehosthourlyGet94.call(this);
        case 'hosthourlyget95':
            return executehosthourlyGet95.call(this);
        case 'hosthourlyget96':
            return executehosthourlyGet96.call(this);
        case 'hosthourlyget97':
            return executehosthourlyGet97.call(this);
        case 'hosthourlyget98':
            return executehosthourlyGet98.call(this);
        case 'hosthourlyget99':
            return executehosthourlyGet99.call(this);
        case 'hostmonthlyget':
            return executehostmonthlyGet.call(this);
        case 'hostmonthlyget1':
            return executehostmonthlyGet1.call(this);
        case 'hostmonthlyget10':
            return executehostmonthlyGet10.call(this);
        case 'hostmonthlyget100':
            return executehostmonthlyGet100.call(this);
        case 'hostmonthlyget101':
            return executehostmonthlyGet101.call(this);
        case 'hostmonthlyget102':
            return executehostmonthlyGet102.call(this);
        case 'hostmonthlyget103':
            return executehostmonthlyGet103.call(this);
        case 'hostmonthlyget104':
            return executehostmonthlyGet104.call(this);
        case 'hostmonthlyget105':
            return executehostmonthlyGet105.call(this);
        case 'hostmonthlyget106':
            return executehostmonthlyGet106.call(this);
        case 'hostmonthlyget107':
            return executehostmonthlyGet107.call(this);
        case 'hostmonthlyget108':
            return executehostmonthlyGet108.call(this);
        case 'hostmonthlyget109':
            return executehostmonthlyGet109.call(this);
        case 'hostmonthlyget11':
            return executehostmonthlyGet11.call(this);
        case 'hostmonthlyget110':
            return executehostmonthlyGet110.call(this);
        case 'hostmonthlyget111':
            return executehostmonthlyGet111.call(this);
        case 'hostmonthlyget112':
            return executehostmonthlyGet112.call(this);
        case 'hostmonthlyget113':
            return executehostmonthlyGet113.call(this);
        case 'hostmonthlyget114':
            return executehostmonthlyGet114.call(this);
        case 'hostmonthlyget115':
            return executehostmonthlyGet115.call(this);
        case 'hostmonthlyget116':
            return executehostmonthlyGet116.call(this);
        case 'hostmonthlyget117':
            return executehostmonthlyGet117.call(this);
        case 'hostmonthlyget118':
            return executehostmonthlyGet118.call(this);
        case 'hostmonthlyget119':
            return executehostmonthlyGet119.call(this);
        case 'hostmonthlyget12':
            return executehostmonthlyGet12.call(this);
        case 'hostmonthlyget120':
            return executehostmonthlyGet120.call(this);
        case 'hostmonthlyget121':
            return executehostmonthlyGet121.call(this);
        case 'hostmonthlyget122':
            return executehostmonthlyGet122.call(this);
        case 'hostmonthlyget123':
            return executehostmonthlyGet123.call(this);
        case 'hostmonthlyget124':
            return executehostmonthlyGet124.call(this);
        case 'hostmonthlyget125':
            return executehostmonthlyGet125.call(this);
        case 'hostmonthlyget126':
            return executehostmonthlyGet126.call(this);
        case 'hostmonthlyget127':
            return executehostmonthlyGet127.call(this);
        case 'hostmonthlyget128':
            return executehostmonthlyGet128.call(this);
        case 'hostmonthlyget129':
            return executehostmonthlyGet129.call(this);
        case 'hostmonthlyget13':
            return executehostmonthlyGet13.call(this);
        case 'hostmonthlyget130':
            return executehostmonthlyGet130.call(this);
        case 'hostmonthlyget14':
            return executehostmonthlyGet14.call(this);
        case 'hostmonthlyget15':
            return executehostmonthlyGet15.call(this);
        case 'hostmonthlyget16':
            return executehostmonthlyGet16.call(this);
        case 'hostmonthlyget17':
            return executehostmonthlyGet17.call(this);
        case 'hostmonthlyget18':
            return executehostmonthlyGet18.call(this);
        case 'hostmonthlyget19':
            return executehostmonthlyGet19.call(this);
        case 'hostmonthlyget2':
            return executehostmonthlyGet2.call(this);
        case 'hostmonthlyget20':
            return executehostmonthlyGet20.call(this);
        case 'hostmonthlyget21':
            return executehostmonthlyGet21.call(this);
        case 'hostmonthlyget22':
            return executehostmonthlyGet22.call(this);
        case 'hostmonthlyget23':
            return executehostmonthlyGet23.call(this);
        case 'hostmonthlyget24':
            return executehostmonthlyGet24.call(this);
        case 'hostmonthlyget25':
            return executehostmonthlyGet25.call(this);
        case 'hostmonthlyget26':
            return executehostmonthlyGet26.call(this);
        case 'hostmonthlyget27':
            return executehostmonthlyGet27.call(this);
        case 'hostmonthlyget28':
            return executehostmonthlyGet28.call(this);
        case 'hostmonthlyget29':
            return executehostmonthlyGet29.call(this);
        case 'hostmonthlyget3':
            return executehostmonthlyGet3.call(this);
        case 'hostmonthlyget30':
            return executehostmonthlyGet30.call(this);
        case 'hostmonthlyget31':
            return executehostmonthlyGet31.call(this);
        case 'hostmonthlyget32':
            return executehostmonthlyGet32.call(this);
        case 'hostmonthlyget33':
            return executehostmonthlyGet33.call(this);
        case 'hostmonthlyget34':
            return executehostmonthlyGet34.call(this);
        case 'hostmonthlyget35':
            return executehostmonthlyGet35.call(this);
        case 'hostmonthlyget36':
            return executehostmonthlyGet36.call(this);
        case 'hostmonthlyget37':
            return executehostmonthlyGet37.call(this);
        case 'hostmonthlyget38':
            return executehostmonthlyGet38.call(this);
        case 'hostmonthlyget39':
            return executehostmonthlyGet39.call(this);
        case 'hostmonthlyget4':
            return executehostmonthlyGet4.call(this);
        case 'hostmonthlyget40':
            return executehostmonthlyGet40.call(this);
        case 'hostmonthlyget41':
            return executehostmonthlyGet41.call(this);
        case 'hostmonthlyget42':
            return executehostmonthlyGet42.call(this);
        case 'hostmonthlyget43':
            return executehostmonthlyGet43.call(this);
        case 'hostmonthlyget44':
            return executehostmonthlyGet44.call(this);
        case 'hostmonthlyget45':
            return executehostmonthlyGet45.call(this);
        case 'hostmonthlyget46':
            return executehostmonthlyGet46.call(this);
        case 'hostmonthlyget47':
            return executehostmonthlyGet47.call(this);
        case 'hostmonthlyget48':
            return executehostmonthlyGet48.call(this);
        case 'hostmonthlyget49':
            return executehostmonthlyGet49.call(this);
        case 'hostmonthlyget5':
            return executehostmonthlyGet5.call(this);
        case 'hostmonthlyget50':
            return executehostmonthlyGet50.call(this);
        case 'hostmonthlyget51':
            return executehostmonthlyGet51.call(this);
        case 'hostmonthlyget52':
            return executehostmonthlyGet52.call(this);
        case 'hostmonthlyget53':
            return executehostmonthlyGet53.call(this);
        case 'hostmonthlyget54':
            return executehostmonthlyGet54.call(this);
        case 'hostmonthlyget55':
            return executehostmonthlyGet55.call(this);
        case 'hostmonthlyget56':
            return executehostmonthlyGet56.call(this);
        case 'hostmonthlyget57':
            return executehostmonthlyGet57.call(this);
        case 'hostmonthlyget58':
            return executehostmonthlyGet58.call(this);
        case 'hostmonthlyget59':
            return executehostmonthlyGet59.call(this);
        case 'hostmonthlyget6':
            return executehostmonthlyGet6.call(this);
        case 'hostmonthlyget60':
            return executehostmonthlyGet60.call(this);
        case 'hostmonthlyget61':
            return executehostmonthlyGet61.call(this);
        case 'hostmonthlyget62':
            return executehostmonthlyGet62.call(this);
        case 'hostmonthlyget63':
            return executehostmonthlyGet63.call(this);
        case 'hostmonthlyget64':
            return executehostmonthlyGet64.call(this);
        case 'hostmonthlyget65':
            return executehostmonthlyGet65.call(this);
        case 'hostmonthlyget66':
            return executehostmonthlyGet66.call(this);
        case 'hostmonthlyget67':
            return executehostmonthlyGet67.call(this);
        case 'hostmonthlyget68':
            return executehostmonthlyGet68.call(this);
        case 'hostmonthlyget69':
            return executehostmonthlyGet69.call(this);
        case 'hostmonthlyget7':
            return executehostmonthlyGet7.call(this);
        case 'hostmonthlyget70':
            return executehostmonthlyGet70.call(this);
        case 'hostmonthlyget71':
            return executehostmonthlyGet71.call(this);
        case 'hostmonthlyget72':
            return executehostmonthlyGet72.call(this);
        case 'hostmonthlyget73':
            return executehostmonthlyGet73.call(this);
        case 'hostmonthlyget74':
            return executehostmonthlyGet74.call(this);
        case 'hostmonthlyget75':
            return executehostmonthlyGet75.call(this);
        case 'hostmonthlyget76':
            return executehostmonthlyGet76.call(this);
        case 'hostmonthlyget77':
            return executehostmonthlyGet77.call(this);
        case 'hostmonthlyget78':
            return executehostmonthlyGet78.call(this);
        case 'hostmonthlyget79':
            return executehostmonthlyGet79.call(this);
        case 'hostmonthlyget8':
            return executehostmonthlyGet8.call(this);
        case 'hostmonthlyget80':
            return executehostmonthlyGet80.call(this);
        case 'hostmonthlyget81':
            return executehostmonthlyGet81.call(this);
        case 'hostmonthlyget82':
            return executehostmonthlyGet82.call(this);
        case 'hostmonthlyget83':
            return executehostmonthlyGet83.call(this);
        case 'hostmonthlyget84':
            return executehostmonthlyGet84.call(this);
        case 'hostmonthlyget85':
            return executehostmonthlyGet85.call(this);
        case 'hostmonthlyget86':
            return executehostmonthlyGet86.call(this);
        case 'hostmonthlyget87':
            return executehostmonthlyGet87.call(this);
        case 'hostmonthlyget88':
            return executehostmonthlyGet88.call(this);
        case 'hostmonthlyget89':
            return executehostmonthlyGet89.call(this);
        case 'hostmonthlyget9':
            return executehostmonthlyGet9.call(this);
        case 'hostmonthlyget90':
            return executehostmonthlyGet90.call(this);
        case 'hostmonthlyget91':
            return executehostmonthlyGet91.call(this);
        case 'hostmonthlyget92':
            return executehostmonthlyGet92.call(this);
        case 'hostmonthlyget93':
            return executehostmonthlyGet93.call(this);
        case 'hostmonthlyget94':
            return executehostmonthlyGet94.call(this);
        case 'hostmonthlyget95':
            return executehostmonthlyGet95.call(this);
        case 'hostmonthlyget96':
            return executehostmonthlyGet96.call(this);
        case 'hostmonthlyget97':
            return executehostmonthlyGet97.call(this);
        case 'hostmonthlyget98':
            return executehostmonthlyGet98.call(this);
        case 'hostmonthlyget99':
            return executehostmonthlyGet99.call(this);
        case 'ipget':
            return executeipGet.call(this);
        case 'lowlatmodelget':
            return executelowlatmodelGet.call(this);
        case 'lowlatmodelget1':
            return executelowlatmodelGet1.call(this);
        case 'modelget':
            return executemodelGet.call(this);
        case 'officeget':
            return executeofficeGet.call(this);
        case 'optionget':
            return executeoptionGet.call(this);
        case 'optionsinstallationget':
            return executeoptionsinstallationGet.call(this);
        case 'optionsipv4get':
            return executeoptionsipv4Get.call(this);
        case 'optionslineget':
            return executeoptionslineGet.call(this);
        case 'overtheboxofferget':
            return executeovertheboxofferGet.call(this);
        case 'privatedatabaseget':
            return executeprivatedatabaseGet.call(this);
        case 'ssdmodelget':
            return executessdmodelGet.call(this);
        case 'ssdmodelget1':
            return executessdmodelGet1.call(this);
        case 'ssdmodelget2':
            return executessdmodelGet2.call(this);
        case 'ssdmodelget3':
            return executessdmodelGet3.call(this);
        case 'ssdmodelget4':
            return executessdmodelGet4.call(this);
        case 'ssdmodelget5':
            return executessdmodelGet5.call(this);
        case 'ssdoptionget':
            return executessdoptionGet.call(this);
        case 'ssdoptionget1':
            return executessdoptionGet1.call(this);
        case 'ssdoptionget2':
            return executessdoptionGet2.call(this);
        case 'ssdoptionget3':
            return executessdoptionGet3.call(this);
        case 'ssdoptionget4':
            return executessdoptionGet4.call(this);
        case 'ssdoptionget5':
            return executessdoptionGet5.call(this);
        case 'webcdnget':
            return executewebcdnGet.call(this);
        case 'webextrasqlpersoget':
            return executewebextrasqlpersoGet.call(this);
        case 'websslget':
            return executewebsslGet.call(this);
        case 'xdslinstallationget':
            return executexdslinstallationGet.call(this);
        case 'xdsloffersget':
            return executexdsloffersGet.call(this);
        case 'zoneoptionget':
            return executezoneoptionGet.call(this);
    }

    throw new Error(`Unsupported operation "${operation}" for resource "price"`);
}
