
export default function CardHeader({ user }) {
  return (
    <div className="card-header">
      <a href={`tel:${user.phone}`} className="ms-2 me-auto">
        {user.phone}
      </a>
    </div>
  );
}
