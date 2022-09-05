import styles from './Post.module.css'

//HOOKS
import { useParams } from 'react-router-dom'
import { useFetchDocumentIndividual } from '../../hooks/useFetchDocumentIndividual';

export const Post = () => {

    const { id } = useParams();
    const { document: post, loading } = useFetchDocumentIndividual("posts", id);

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>{tag}
                            </p>
                        ))}
                    </div>

                </>
            )}
        </div>
    )
}

export default Post