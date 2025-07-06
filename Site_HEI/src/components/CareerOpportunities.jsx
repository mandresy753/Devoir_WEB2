import student from './../assets/photo/IMG-02-e1720543344824-987x1024-1.webp'
export const CareerOpportunities = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl text-[#424d71] mb-6">
            Quelques débouchés
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation
             (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur...
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, 
            pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité...
          </p>
        </div>
        <div>
          <img  src={student} alt="Student with tech icons" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  </section>
)