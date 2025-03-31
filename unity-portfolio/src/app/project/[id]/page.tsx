import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

export default function ProjectDetailPage({ params }: any) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <main className="bg-black text-white px-4 pt-24 pb-32 max-w-4xl mx-auto">
      <div className="w-full mb-6 aspect-video rounded-lg overflow-hidden shadow-md">
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{project.date}</p>
      <div className="space-y-4 text-base leading-relaxed">
        {project.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </main>
  );
}
