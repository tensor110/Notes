import React from 'react'
import { Button } from '@mui/material'

function Filter({ onFilter, onClearFilter, selectedDifficulty }) {
  return (
    
    <div style={{margin: '10px 20px', display: 'flex', gap: '20px' }}>
        <Button onClick={onClearFilter} variant={selectedDifficulty===null ? 'contained' : 'outlined'} color="primary">
          All
        </Button>
        <Button onClick={() => onFilter("easy")} variant={selectedDifficulty==='easy' ? 'contained' : 'outlined'} color="primary">
          Easy
        </Button>
        <Button onClick={() => onFilter("medium")} variant={selectedDifficulty==='medium' ? 'contained' : 'outlined'} color="primary">
          Medium
        </Button>
        <Button onClick={() => onFilter("hard")} variant={selectedDifficulty==='hard' ? 'contained' : 'outlined'} color="primary">
          Hard
        </Button>
      </div>
  )
}

export default Filter
