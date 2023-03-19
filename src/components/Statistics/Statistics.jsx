import css from "./Statistics.module.css"

export const Statistics = ({title, stats}) => {
    const { id, label, percentage } = stats;
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                {stats.map(item => (
                    <li className="item"
                        key={item.id}
                    >
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}