import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Badge} from 'reactstrap';

const InfoSerie = ({match}) => {
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [mode, setMode] = useState('INFO');
    const [genres, setGenres] = useState([]);

    const [data,setData] = useState({})
    useEffect(() => {
        axios.get('/api/series/' + match.params.id)
        .then(res => {
            setData(res.data)
            setForm(res.data)
        })

        axios.get('/api/genres/')
        .then(res => {            
            setGenres(res.data.data)
        })
    }, []);

    const masterHeader = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url('${data.background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    const save = ()  => {
        axios.put('/api/series' + match.params.id, {
            name: form.name
        }).then(res =>{
            console.log(res);
            setSuccess(true);
        })
    };

    const onChange = field => evt => {
        // console.log(evt.target.value);
        // setName(evt.target.value);

        setForm({
            ...form,
            [field]: evt.target.value
        })
    }

     if(success){
        return <Redirect to='/series' />
    }

    return (

        <div>

        <header style={masterHeader }>
            <div className='h-100' style={{background: 'rgba(0,0,0,0.7)'}}>
                <div className='h-100 container'>
                <div className='row h-100 align-items-center'>
                <div className='col-3'>
                    <img alt={data.name} className='img-fluid img-thumbnail' src={data.background} />
                </div>

                <div className='col-8'>
                    <h1 className='font-weight-light text-white'>{data.name}</h1>
                     <div className='lead text-white'>
                         <Badge color='success'>Assistido</Badge>
                         <Badge color='warning'>Para Assistir</Badge>
                         Gêneros: {data.genre}
                     </div>
                </div>
                </div>
                </div>
            </div>
        </header>
        <div>
            <button className='btn btn-primary' onClick={() => setMode('EDIT')}>Editar</button>
        </div>
        
        {/* //Maneira de mostrar condicionalmente um conteúdo */}
        {
            mode === 'EDIT' &&
        <div className='container'>
            <h1>Nova Série</h1>
            <pre>{JSON.stringify(data)}</pre>
            <button className='btn btn-primary' onClick={() => setMode('INFO')}>Cancelar Edição</button>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={form.name} onChange={onChange('name')} className='form-control' id='name' placeholder='Nome da Série' />
                </div>

                <div className='form-group'>
                    <label htmlFor='comments'>Comentários</label>
                    <input type='text' value={form.comments} onChange={onChange('comments')} className='form-control' id='comments' placeholder='Comentários' />
                </div>

                <div className='form-group'>
                    <label htmlFor='genre'>Gênero</label>
                    <select className="form-control" onChange={onChange('genre_id')}>
                        { genres.map(genre => <option key={ genre.id } value={ genre.id} select={genre.id === form.genre}>{genre.name}</option>) }
                    </select>
                </div>
       

                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
        }   

        </div>

    )
}

export default InfoSerie