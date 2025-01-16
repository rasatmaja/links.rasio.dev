CREATE TABLE links (
    id INTEGER primary key,
    name TEXT,
    description TEXT,
    link TEXT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)