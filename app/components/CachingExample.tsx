

export const dynamic = "force-static";

export default function  CachingExample() {
  return (
    <div>
      <h1>Cache Example </h1>
        <p>Esta ruta esta configurada como estatica con el siguiente codigo</p>
        <pre className="bg-gray-200 text-black p-4 rounded">
            <code>
                { `export  const dynamic = "force-static"`}
            </code>

        </pre>
    </div>
  );
}
