import ReactFlow, {
  BaseEdge,
  Controls,
  Handle,
  MarkerType,
  Position,
  getBezierPath,
  useNodesState,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { OrnamentalSectionTitle } from '../ui';
import { transitionKnowledgeGraph } from '../../data/transitionKnowledgeGraph';

type GraphColor = 'blue' | 'pink' | 'orange' | 'red' | 'green' | 'purple';

type ChildItem = {
  label: string;
  children?: readonly string[];
};

type GroupNodeData = {
  label: string;
  color: GraphColor;
  quote?: string;
  children: readonly ChildItem[];
  width: number;
};

type StateNodeData = {
  label: string;
  subtitle: string;
  description: string;
  tone: 'old' | 'new';
  width: number;
};

type BridgeNodeData = {
  label: string;
  subtitle: string;
  description: string;
  width: number;
};

const colorStyles: Record<GraphColor, { header: string; border: string; tint: string; chip: string }> = {
  blue: {
    header: '#214E78',
    border: '#45779F',
    tint: 'rgba(69, 119, 159, 0.14)',
    chip: 'rgba(69, 119, 159, 0.2)',
  },
  pink: {
    header: '#8A3F61',
    border: '#B66585',
    tint: 'rgba(182, 101, 133, 0.14)',
    chip: 'rgba(182, 101, 133, 0.22)',
  },
  orange: {
    header: '#8C4F20',
    border: '#B67332',
    tint: 'rgba(182, 115, 50, 0.16)',
    chip: 'rgba(182, 115, 50, 0.24)',
  },
  red: {
    header: '#7A1B16',
    border: '#A93B31',
    tint: 'rgba(169, 59, 49, 0.14)',
    chip: 'rgba(169, 59, 49, 0.22)',
  },
  green: {
    header: '#1F3B2E',
    border: '#3E6F55',
    tint: 'rgba(62, 111, 85, 0.14)',
    chip: 'rgba(62, 111, 85, 0.22)',
  },
  purple: {
    header: '#563E78',
    border: '#7860A4',
    tint: 'rgba(120, 96, 164, 0.14)',
    chip: 'rgba(120, 96, 164, 0.22)',
  },
};

const handleClass = '!w-2 !h-2 !bg-gold-antique !border !border-border-brown !opacity-0';

function FlowHandles() {
  return (
    <>
      <Handle id="s-top" type="source" position={Position.Top} className={handleClass} />
      <Handle id="t-top" type="target" position={Position.Top} className={handleClass} />
      <Handle id="s-right" type="source" position={Position.Right} className={handleClass} />
      <Handle id="t-right" type="target" position={Position.Right} className={handleClass} />
      <Handle id="s-bottom" type="source" position={Position.Bottom} className={handleClass} />
      <Handle id="t-bottom" type="target" position={Position.Bottom} className={handleClass} />
      <Handle id="s-left" type="source" position={Position.Left} className={handleClass} />
      <Handle id="t-left" type="target" position={Position.Left} className={handleClass} />
    </>
  );
}

function StateNode({ data }: NodeProps<StateNodeData>) {
  const isNew = data.tone === 'new';

  return (
    <div
      className="relative cursor-grab select-none bg-paper-light px-5 py-4 text-center active:cursor-grabbing"
      style={{
        width: data.width,
        border: `3px solid ${isNew ? '#1F3B2E' : '#51341D'}`,
        boxShadow: 'inset 0 0 0 2px #C9A35A, 0 8px 20px rgba(72, 45, 20, 0.24)',
      }}
    >
      <FlowHandles />
      <div className="font-display text-lg font-bold text-burgundy">{data.label}</div>
      <div className="mt-1 border-y border-gold-antique/70 py-1 font-body text-xs font-bold uppercase text-ink-brown">
        {data.subtitle}
      </div>
      <p className="mt-3 font-body text-xs leading-relaxed text-ink-dark">{data.description}</p>
    </div>
  );
}

function BridgeNode({ data }: NodeProps<BridgeNodeData>) {
  return (
    <div
      className="relative cursor-grab select-none overflow-hidden bg-burgundy px-7 py-6 text-center text-gold-light active:cursor-grabbing"
      style={{
        width: data.width,
        border: '4px solid #C9A35A',
        boxShadow: 'inset 0 0 0 3px #3E0808, 0 12px 28px rgba(72, 45, 20, 0.38)',
      }}
    >
      <FlowHandles />
      <div className="absolute inset-x-8 bottom-3 h-9 rounded-t-full border-x-4 border-t-4 border-gold-antique/55" />
      <div className="absolute bottom-3 left-1/2 h-9 w-1 -translate-x-1/2 bg-gold-antique/45" />
      <div className="relative z-10">
        <div className="font-display text-2xl font-bold tracking-wide">{data.label}</div>
        <div className="mx-auto mt-2 max-w-[270px] bg-gold-antique px-3 py-1 font-body text-sm font-bold text-burgundy-deep">
          {data.subtitle}
        </div>
        <p className="mx-auto mt-4 max-w-[320px] font-body text-xs leading-relaxed text-gold-light/95">
          {data.description}
        </p>
      </div>
    </div>
  );
}

function GroupNode({ data }: NodeProps<GroupNodeData>) {
  const colors = colorStyles[data.color];

  return (
    <div
      className="relative cursor-grab select-none bg-paper-light p-3 active:cursor-grabbing"
      style={{
        width: data.width,
        border: `3px solid ${colors.border}`,
        boxShadow: 'inset 0 0 0 2px #C9A35A, 0 7px 18px rgba(72, 45, 20, 0.2)',
      }}
    >
      <FlowHandles />
      <div className="px-4 py-2 text-center font-display text-base font-bold text-gold-light" style={{ background: colors.header }}>
        {data.label}
      </div>
      {data.quote && (
        <div className="mt-3 border-l-4 px-3 py-2 font-body text-xs italic text-ink-brown" style={{ borderColor: colors.border, background: colors.tint }}>
          {data.quote}
        </div>
      )}
      <div className="mt-3 space-y-2">
        {data.children.map((child) => (
          <div key={child.label} className="border border-gold-antique bg-paper-muted/45 px-3 py-2">
            <div className="font-display text-sm font-bold text-ink-dark">{child.label}</div>
            {child.children && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {child.children.map((item) => (
                  <span key={item} className="border border-border-brown/20 px-2 py-1 font-body text-[10px] leading-tight text-ink-brown" style={{ background: colors.chip }}>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AntiqueEdge(props: EdgeProps) {
  const [edgePath] = getBezierPath(props);

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={props.markerEnd}
      style={{
        stroke: String(props.data?.color ?? '#8C6737'),
        strokeWidth: Number(props.data?.width ?? 2.5),
        strokeDasharray: props.data?.dashed ? '7 7' : undefined,
        filter: 'drop-shadow(0 1px 0 rgba(251, 232, 194, 0.8))',
      }}
    />
  );
}

const nodeTypes = {
  state: StateNode,
  bridge: BridgeNode,
  group: GroupNode,
};

const edgeTypes = {
  antique: AntiqueEdge,
};

const graphPositions = {
  'objective-necessity': { x: 60, y: 40, width: 360 },
  'formation-conditions': { x: 690, y: 35, width: 450 },
  essence: { x: 70, y: 445, width: 350 },
  'destination-socialism': { x: 80, y: 835, width: 360 },
  'four-fields': { x: 665, y: 805, width: 520 },
  'why-long': { x: 1395, y: 830, width: 380 },
  'intermediate-steps': { x: 1425, y: 380, width: 350 },
} as const;

const centerId = transitionKnowledgeGraph.center.id;

const initialNodes: Node[] = [
  {
    id: transitionKnowledgeGraph.mainFlow.from.id,
    type: 'state',
    position: { x: 520, y: 475 },
    data: { ...transitionKnowledgeGraph.mainFlow.from, tone: 'old', width: 230 },
  },
  {
    id: centerId,
    type: 'bridge',
    position: { x: 805, y: 430 },
    data: { ...transitionKnowledgeGraph.center, width: 410 },
  },
  {
    id: transitionKnowledgeGraph.mainFlow.to.id,
    type: 'state',
    position: { x: 1270, y: 475 },
    data: { ...transitionKnowledgeGraph.mainFlow.to, tone: 'new', width: 240 },
  },
  ...transitionKnowledgeGraph.groups.map((group) => {
    const placement = graphPositions[group.id as keyof typeof graphPositions];

    return {
      id: group.id,
      type: 'group',
      position: { x: placement.x, y: placement.y },
      data: { ...group, width: placement.width },
    } satisfies Node;
  }),
];

const markerEnd = {
  type: MarkerType.ArrowClosed,
  color: '#8C6737',
  width: 18,
  height: 18,
};

const groupHandles: Record<string, { source: string; target: string }> = {
  'objective-necessity': { source: 's-left', target: 't-bottom' },
  'formation-conditions': { source: 's-top', target: 't-bottom' },
  essence: { source: 's-left', target: 't-right' },
  'destination-socialism': { source: 's-bottom', target: 't-top' },
  'four-fields': { source: 's-bottom', target: 't-top' },
  'why-long': { source: 's-right', target: 't-top' },
  'intermediate-steps': { source: 's-right', target: 't-left' },
};

const edges: Edge[] = [
  {
    id: 'old-to-transition',
    source: transitionKnowledgeGraph.mainFlow.from.id,
    sourceHandle: 's-right',
    target: centerId,
    targetHandle: 't-left',
    type: 'antique',
    markerEnd,
    data: { color: '#5B0F0F', width: 4 },
  },
  {
    id: 'transition-to-new',
    source: centerId,
    sourceHandle: 's-right',
    target: transitionKnowledgeGraph.mainFlow.to.id,
    targetHandle: 't-left',
    type: 'antique',
    markerEnd,
    data: { color: '#1F3B2E', width: 4 },
  },
  ...transitionKnowledgeGraph.groups.map((group) => ({
    id: `${centerId}-${group.id}`,
    source: centerId,
    sourceHandle: groupHandles[group.id].source,
    target: group.id,
    targetHandle: groupHandles[group.id].target,
    type: 'antique',
    markerEnd,
    data: { color: colorStyles[group.color].border, width: 2.4, dashed: true },
  })),
];

export function SoDoSection() {
  const [graphNodes, , onNodesChange] = useNodesState(initialNodes);

  return (
    <section
      className="relative border-t-4 border-b-4 border-border-brown px-4 py-16 md:py-24"
      style={{
        background: 'linear-gradient(180deg, #DEBA8A 0%, #F0D7AB 50%, #FBE8C2 100%)',
      }}
      id="so-do"
    >
      <div className="container mx-auto max-w-7xl">
        <OrnamentalSectionTitle label="KNOWLEDGE MAP" title={transitionKnowledgeGraph.title} />
        <p className="mx-auto mb-8 max-w-4xl text-center font-display text-lg font-bold uppercase text-burgundy md:text-xl">
          {transitionKnowledgeGraph.subtitle}
        </p>

        <motion.div
          className="vintage-border relative h-[780px] overflow-hidden bg-paper-light md:h-[980px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute inset-0 bg-paper-texture opacity-80" />
          <ReactFlow
            nodes={graphNodes}
            edges={edges}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            fitViewOptions={{ padding: 0.12 }}
            minZoom={0.28}
            maxZoom={1.4}
            nodesDraggable
            nodesConnectable={false}
            elementsSelectable
            panOnDrag={[1, 2]}
            selectionOnDrag={false}
            proOptions={{ hideAttribution: true }}
          >
            <Controls
              showInteractive={false}
              className="!border !border-border-brown !bg-paper-light !shadow-vintage [&_button]:!border-gold-antique [&_button]:!bg-paper-light [&_button_svg]:!fill-burgundy"
            />
          </ReactFlow>
        </motion.div>
      </div>
    </section>
  );
}
